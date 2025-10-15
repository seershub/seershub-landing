# SeershubScoring Contract

## Overview

The SeershubScoring contract implements a comprehensive scoring system for the Seershub prediction platform. It features gas-optimized data structures, streak multipliers, decay mechanisms, and transparent event logging.

## Key Features

### 🎯 **Scoring Mechanism**
- **Base Points**: +100 for correct predictions
- **Penalty Points**: -50 for incorrect predictions
- **Streak Multipliers**: Up to 2.5x for consecutive correct predictions
- **Decay System**: 5% score decay every 7 days of inactivity

### ⚡ **Gas Optimization**
- **44-byte User Struct**: Optimized for minimal storage costs
- **Packed Data**: Efficient use of storage slots
- **Batch Operations**: Process multiple users in single transaction

### 🔒 **Security & Access Control**
- **Owner-only Updates**: Only contract owner can record match results
- **Input Validation**: Comprehensive checks for all parameters
- **Emergency Functions**: Owner can reset scores if needed

## Contract Structure

### UserScore Struct (44 bytes)
```solidity
struct UserScore {
    uint256 totalScore;    // 32 bytes - Current total score
    uint32 streak;         // 4 bytes  - Current streak count
    uint32 lastUpdate;     // 4 bytes  - Last update timestamp
    bool isActive;         // 1 byte   - Active status
    uint24 reserved;       // 3 bytes  - Reserved for future use
}
```

### MatchResult Struct
```solidity
struct MatchResult {
    uint256 matchId;       // Match identifier
    uint8 outcome;         // 0: HOME, 1: DRAW, 2: AWAY
    uint32 timestamp;      // When result was recorded
    bool isProcessed;      // Processing status
}
```

## Core Functions

### `recordMatchResult()`
Records match results and updates all predictor scores in a single transaction.

**Parameters:**
- `matchId`: Unique match identifier
- `outcome`: Actual match outcome (0-2)
- `predictors`: Array of user addresses
- `predictions`: Array of their predictions

**Gas Cost:** ~50,000 + (2,000 × number of predictors)

### `getUserScore()`
Retrieves current user score information.

**Returns:**
- `totalScore`: Current total score
- `streak`: Current streak count
- `lastUpdate`: Last update timestamp
- `isActive`: Active status

### `getUserScoreWithDecay()`
Simulates score with decay applied (view function).

**Returns:**
- `currentScore`: Score with decay applied
- `streak`: Current streak
- `nextDecayTime`: When next decay occurs

## Scoring Algorithm

### 1. **Base Scoring**
```
Correct Prediction: +100 points
Incorrect Prediction: -50 points
```

### 2. **Streak Multipliers**
```
Streak 0: 1.0x (100 points)
Streak 1: 1.15x (115 points)
Streak 2: 1.30x (130 points)
...
Streak 10+: 2.5x (250 points)
```

### 3. **Decay System**
```
- Decay Period: 7 days
- Decay Rate: 5% per period
- Minimum Score: 10 points
- Decay stops at minimum threshold
```

## Events

### `ScoreUpdated`
Emitted when a user's score is updated.
```solidity
event ScoreUpdated(
    address indexed user,
    uint256 newTotalScore,
    uint32 newStreak,
    uint256 pointsEarned,
    uint256 timestamp
);
```

### `MatchResultRecorded`
Emitted when a match result is recorded.
```solidity
event MatchResultRecorded(
    uint256 indexed matchId,
    uint8 outcome,
    uint32 timestamp
);
```

### `ScoresDecayed`
Emitted when scores are manually decayed.
```solidity
event ScoresDecayed(
    address[] users,
    uint256[] decayAmounts,
    uint32 timestamp
);
```

## Integration with SeershubPredictions

The scoring contract is designed to work alongside the existing `SeershubPredictions` contract:

1. **Prediction Submission**: Users submit predictions via `SeershubPredictions`
2. **Match Resolution**: Owner records results via `SeershubScoring`
3. **Score Updates**: Contract automatically updates all predictor scores
4. **Leaderboard**: Frontend queries scores for ranking display

## Deployment

### Prerequisites
- Hardhat environment set up
- Network configuration (Base Sepolia recommended)
- Sufficient ETH for deployment

### Deploy Script
```bash
npx hardhat run scripts/deploy-scoring.ts --network base-sepolia
```

### Verification
```bash
npx hardhat verify --network base-sepolia <CONTRACT_ADDRESS>
```

## Testing

### Run Tests
```bash
npx hardhat run scripts/test-scoring.ts --network localhost
```

### Test Scenarios
1. **Basic Scoring**: Correct vs incorrect predictions
2. **Streak Building**: Multiple consecutive correct predictions
3. **Decay Simulation**: Score decay over time
4. **Batch Processing**: Multiple users in single transaction
5. **Edge Cases**: Minimum scores, maximum streaks

## Gas Optimization Details

### Storage Layout
- **UserScore**: 44 bytes (fits in 2 storage slots)
- **MatchResult**: 72 bytes (fits in 3 storage slots)
- **Packed Booleans**: Efficient boolean storage

### Function Optimization
- **Batch Processing**: Single transaction for multiple users
- **Minimal SSTOREs**: Only update changed values
- **Efficient Loops**: Optimized iteration patterns

## Security Considerations

### Access Control
- **Owner Role**: Only owner can record match results
- **Input Validation**: All parameters validated
- **Reentrancy Protection**: No external calls in state changes

### Data Integrity
- **Immutable Results**: Match results cannot be changed
- **Score Consistency**: Atomic updates prevent inconsistencies
- **Event Logging**: Full transparency through events

## Future Enhancements

### Planned Features
1. **Seasonal Resets**: Periodic score resets
2. **Category Scoring**: Different sports/leagues
3. **Achievement System**: Badges and milestones
4. **Governance Integration**: Community-controlled parameters

### Upgrade Path
- **Proxy Pattern**: Upgradeable implementation
- **Migration Scripts**: Data migration tools
- **Backward Compatibility**: Maintain existing interfaces

## API Reference

### View Functions
- `getUserScore(address)`: Get user score info
- `getUserScoreWithDecay(address)`: Get score with decay
- `getMatchResult(uint256)`: Get match result
- `getStreakMultiplier(uint32)`: Get streak multiplier
- `getStats()`: Get contract statistics

### Admin Functions
- `recordMatchResult(...)`: Record match and update scores
- `applyDecayToUsers(address[])`: Manual decay application
- `resetUserScore(address)`: Emergency score reset
- `transferOwnership(address)`: Transfer ownership

## Support

For technical support or questions:
- **GitHub Issues**: Create an issue in the repository
- **Documentation**: Check this README and code comments
- **Community**: Join our Discord for discussions

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**License**: MIT
