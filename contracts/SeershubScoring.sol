// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SeershubScoring
 * @dev Gas-optimized scoring system for Seershub predictions
 * @notice Implements base points, streak multipliers, penalties, and decay system
 * @author Seershub Team
 */
contract SeershubScoring {
    
    // ============ STRUCTS ============
    
    /**
     * @dev Gas-optimized user score struct (44 bytes total)
     * @param totalScore Current total score (32 bytes)
     * @param streak Current streak count (4 bytes)
     * @param lastUpdate Timestamp of last score update (4 bytes)
     * @param isActive Whether user is actively scoring (1 byte)
     * @param reserved Reserved for future use (3 bytes)
     */
    struct UserScore {
        uint256 totalScore;    // 32 bytes
        uint32 streak;         // 4 bytes
        uint32 lastUpdate;     // 4 bytes
        bool isActive;         // 1 byte
        uint24 reserved;       // 3 bytes (padding to 44 bytes)
    }
    
    /**
     * @dev Match result struct for score calculations
     */
    struct MatchResult {
        uint256 matchId;
        uint8 outcome; // 0: HOME, 1: DRAW, 2: AWAY
        uint32 timestamp;
        bool isProcessed;
    }
    
    // ============ STATE VARIABLES ============
    
    /// @dev Mapping of user addresses to their scores
    mapping(address => UserScore) public userScores;
    
    /// @dev Mapping of match IDs to their results
    mapping(uint256 => MatchResult) public matchResults;
    
    /// @dev Owner address for administrative functions
    address public owner;
    
    /// @dev Total number of users with scores
    uint256 public totalScoredUsers;
    
    /// @dev Total number of processed matches
    uint256 public totalProcessedMatches;
    
    // ============ CONSTANTS ============
    
    /// @dev Base points for correct prediction
    uint256 public constant BASE_POINTS = 100;
    
    /// @dev Penalty points for incorrect prediction
    uint256 public constant PENALTY_POINTS = 50;
    
    /// @dev Maximum streak multiplier (2.5x)
    uint256 public constant MAX_STREAK_MULTIPLIER = 250; // 2.5x in basis points
    
    /// @dev Streak threshold for maximum multiplier
    uint32 public constant MAX_STREAK_THRESHOLD = 10;
    
    /// @dev Decay period in seconds (7 days)
    uint32 public constant DECAY_PERIOD = 7 days;
    
    /// @dev Decay rate per period (5%)
    uint256 public constant DECAY_RATE = 5; // 5% in basis points
    
    /// @dev Minimum score before decay stops
    uint256 public constant MIN_SCORE_THRESHOLD = 10;
    
    // ============ EVENTS ============
    
    /**
     * @dev Emitted when a user's score is updated
     */
    event ScoreUpdated(
        address indexed user,
        uint256 newTotalScore,
        uint32 newStreak,
        uint256 pointsEarned,
        uint256 timestamp
    );
    
    /**
     * @dev Emitted when a match result is recorded
     */
    event MatchResultRecorded(
        uint256 indexed matchId,
        uint8 outcome,
        uint32 timestamp
    );
    
    /**
     * @dev Emitted when scores are decayed
     */
    event ScoresDecayed(
        address[] users,
        uint256[] decayAmounts,
        uint32 timestamp
    );
    
    /**
     * @dev Emitted when ownership is transferred
     */
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    
    // ============ MODIFIERS ============
    
    modifier onlyOwner() {
        require(msg.sender == owner, "SeershubScoring: caller is not the owner");
        _;
    }
    
    modifier validOutcome(uint8 outcome) {
        require(outcome <= 2, "SeershubScoring: invalid outcome");
        _;
    }
    
    // ============ CONSTRUCTOR ============
    
    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }
    
    // ============ CORE FUNCTIONS ============
    
    /**
     * @dev Record match result and update scores for all predictors
     * @param matchId The ID of the match
     * @param outcome The actual outcome (0: HOME, 1: DRAW, 2: AWAY)
     * @param predictors Array of user addresses who predicted this match
     * @param predictions Array of their predictions (same order as predictors)
     */
    function recordMatchResult(
        uint256 matchId,
        uint8 outcome,
        address[] calldata predictors,
        uint8[] calldata predictions
    ) external onlyOwner validOutcome(outcome) {
        require(!matchResults[matchId].isProcessed, "SeershubScoring: match already processed");
        require(predictors.length == predictions.length, "SeershubScoring: array length mismatch");
        
        // Record match result
        matchResults[matchId] = MatchResult({
            matchId: matchId,
            outcome: outcome,
            timestamp: uint32(block.timestamp),
            isProcessed: true
        });
        
        totalProcessedMatches++;
        emit MatchResultRecorded(matchId, outcome, uint32(block.timestamp));
        
        // Update scores for all predictors
        for (uint256 i = 0; i < predictors.length; i++) {
            _updateUserScore(predictors[i], outcome, predictions[i]);
        }
    }
    
    /**
     * @dev Update a single user's score based on prediction accuracy
     * @param user The user's address
     * @param actualOutcome The actual match outcome
     * @param predictedOutcome The user's prediction
     */
    function _updateUserScore(
        address user,
        uint8 actualOutcome,
        uint8 predictedOutcome
    ) internal validOutcome(predictedOutcome) {
        UserScore storage score = userScores[user];
        
        // Apply decay if needed
        _applyDecay(user, score);
        
        // Calculate points based on prediction accuracy
        uint256 pointsEarned;
        bool isCorrect = (actualOutcome == predictedOutcome);
        
        if (isCorrect) {
            // Correct prediction: base points + streak multiplier
            uint256 multiplier = _calculateStreakMultiplier(score.streak);
            pointsEarned = (BASE_POINTS * multiplier) / 100;
            score.streak++;
        } else {
            // Incorrect prediction: penalty + reset streak
            pointsEarned = PENALTY_POINTS;
            score.streak = 0;
        }
        
        // Update total score
        if (pointsEarned > PENALTY_POINTS) {
            score.totalScore += pointsEarned;
        } else {
            // Apply penalty (subtract if possible, minimum 0)
            if (score.totalScore >= PENALTY_POINTS) {
                score.totalScore -= PENALTY_POINTS;
            } else {
                score.totalScore = 0;
            }
        }
        
        // Update metadata
        score.lastUpdate = uint32(block.timestamp);
        score.isActive = true;
        
        // Track new users
        if (score.totalScore > 0 && !_wasActiveBefore(score)) {
            totalScoredUsers++;
        }
        
        emit ScoreUpdated(user, score.totalScore, score.streak, pointsEarned, block.timestamp);
    }
    
    /**
     * @dev Apply decay to user's score if enough time has passed
     * @param user The user's address
     * @param score The user's score struct
     */
    function _applyDecay(address user, UserScore storage score) internal {
        if (score.totalScore <= MIN_SCORE_THRESHOLD) return;
        
        uint32 timeSinceUpdate = uint32(block.timestamp) - score.lastUpdate;
        if (timeSinceUpdate < DECAY_PERIOD) return;
        
        uint32 periodsPassed = timeSinceUpdate / DECAY_PERIOD;
        uint256 decayAmount = 0;
        
        for (uint32 i = 0; i < periodsPassed; i++) {
            uint256 currentScore = score.totalScore - decayAmount;
            if (currentScore <= MIN_SCORE_THRESHOLD) break;
            
            uint256 periodDecay = (currentScore * DECAY_RATE) / 100;
            decayAmount += periodDecay;
        }
        
        if (decayAmount > 0) {
            score.totalScore -= decayAmount;
            if (score.totalScore < MIN_SCORE_THRESHOLD) {
                score.totalScore = 0;
            }
        }
    }
    
    /**
     * @dev Calculate streak multiplier based on current streak
     * @param streak Current streak count
     * @return multiplier Multiplier in basis points (100 = 1x, 250 = 2.5x)
     */
    function _calculateStreakMultiplier(uint32 streak) internal pure returns (uint256 multiplier) {
        if (streak == 0) return 100; // 1x for first correct prediction
        
        // Linear increase up to max multiplier
        uint256 bonus = (streak * (MAX_STREAK_MULTIPLIER - 100)) / MAX_STREAK_THRESHOLD;
        multiplier = 100 + bonus;
        
        // Cap at maximum
        if (multiplier > MAX_STREAK_MULTIPLIER) {
            multiplier = MAX_STREAK_MULTIPLIER;
        }
    }
    
    /**
     * @dev Check if user was active before this update
     * @param score The user's score struct
     * @return wasActive True if user had a score > 0 before
     */
    function _wasActiveBefore(UserScore memory score) internal pure returns (bool wasActive) {
        // This is a simplified check - in practice, you might want to track this separately
        return score.totalScore > 0;
    }
    
    // ============ VIEW FUNCTIONS ============
    
    /**
     * @dev Get user's current score information
     * @param user The user's address
     * @return totalScore Current total score
     * @return streak Current streak count
     * @return lastUpdate Timestamp of last update
     * @return isActive Whether user is actively scoring
     */
    function getUserScore(address user) external view returns (
        uint256 totalScore,
        uint32 streak,
        uint32 lastUpdate,
        bool isActive
    ) {
        UserScore memory score = userScores[user];
        return (score.totalScore, score.streak, score.lastUpdate, score.isActive);
    }
    
    /**
     * @dev Get user's score with decay applied (simulation)
     * @param user The user's address
     * @return currentScore Score with decay applied
     * @return streak Current streak
     * @return nextDecayTime When next decay will occur
     */
    function getUserScoreWithDecay(address user) external view returns (
        uint256 currentScore,
        uint32 streak,
        uint32 nextDecayTime
    ) {
        UserScore memory score = userScores[user];
        currentScore = score.totalScore;
        
        // Simulate decay
        if (currentScore > MIN_SCORE_THRESHOLD) {
            uint32 timeSinceUpdate = uint32(block.timestamp) - score.lastUpdate;
            if (timeSinceUpdate >= DECAY_PERIOD) {
                uint32 periodsPassed = timeSinceUpdate / DECAY_PERIOD;
                uint256 decayAmount = 0;
                
                for (uint32 i = 0; i < periodsPassed; i++) {
                    uint256 tempScore = currentScore - decayAmount;
                    if (tempScore <= MIN_SCORE_THRESHOLD) break;
                    
                    uint256 periodDecay = (tempScore * DECAY_RATE) / 100;
                    decayAmount += periodDecay;
                }
                
                if (decayAmount > 0) {
                    currentScore -= decayAmount;
                    if (currentScore < MIN_SCORE_THRESHOLD) {
                        currentScore = 0;
                    }
                }
            }
        }
        
        streak = score.streak;
        nextDecayTime = score.lastUpdate + DECAY_PERIOD;
    }
    
    /**
     * @dev Get match result information
     * @param matchId The match ID
     * @return outcome The match outcome
     * @return timestamp When the result was recorded
     * @return isProcessed Whether the match has been processed
     */
    function getMatchResult(uint256 matchId) external view returns (
        uint8 outcome,
        uint32 timestamp,
        bool isProcessed
    ) {
        MatchResult memory result = matchResults[matchId];
        return (result.outcome, result.timestamp, result.isProcessed);
    }
    
    /**
     * @dev Get current streak multiplier for a given streak
     * @param streak The streak count
     * @return multiplier Multiplier in basis points
     */
    function getStreakMultiplier(uint32 streak) external pure returns (uint256 multiplier) {
        return _calculateStreakMultiplier(streak);
    }
    
    /**
     * @dev Get contract statistics
     * @return totalUsers Total number of scored users
     * @return totalMatches Total number of processed matches
     * @return currentTime Current block timestamp
     */
    function getStats() external view returns (
        uint256 totalUsers,
        uint256 totalMatches,
        uint32 currentTime
    ) {
        return (totalScoredUsers, totalProcessedMatches, uint32(block.timestamp));
    }
    
    // ============ ADMIN FUNCTIONS ============
    
    /**
     * @dev Manually apply decay to multiple users
     * @param users Array of user addresses
     */
    function applyDecayToUsers(address[] calldata users) external onlyOwner {
        address[] memory decayedUsers = new address[](users.length);
        uint256[] memory decayAmounts = new uint256[](users.length);
        uint256 decayedCount = 0;
        
        for (uint256 i = 0; i < users.length; i++) {
            UserScore storage score = userScores[users[i]];
            uint256 originalScore = score.totalScore;
            
            _applyDecay(users[i], score);
            
            if (originalScore != score.totalScore) {
                decayedUsers[decayedCount] = users[i];
                decayAmounts[decayedCount] = originalScore - score.totalScore;
                decayedCount++;
            }
        }
        
        // Emit event with actual decayed users
        if (decayedCount > 0) {
            address[] memory finalUsers = new address[](decayedCount);
            uint256[] memory finalAmounts = new uint256[](decayedCount);
            
            for (uint256 i = 0; i < decayedCount; i++) {
                finalUsers[i] = decayedUsers[i];
                finalAmounts[i] = decayAmounts[i];
            }
            
            emit ScoresDecayed(finalUsers, finalAmounts, uint32(block.timestamp));
        }
    }
    
    /**
     * @dev Transfer ownership of the contract
     * @param newOwner Address of the new owner
     */
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "SeershubScoring: new owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
    
    /**
     * @dev Emergency function to reset a user's score (use with caution)
     * @param user The user's address
     */
    function resetUserScore(address user) external onlyOwner {
        UserScore storage score = userScores[user];
        bool wasActive = score.isActive && score.totalScore > 0;
        
        score.totalScore = 0;
        score.streak = 0;
        score.lastUpdate = uint32(block.timestamp);
        score.isActive = false;
        
        if (wasActive) {
            totalScoredUsers--;
        }
        
        emit ScoreUpdated(user, 0, 0, 0, block.timestamp);
    }
}
