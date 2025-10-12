// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SeershubPredictions {
    enum Outcome { HOME, DRAW, AWAY }
    
    struct Prediction {
        address user;
        uint256 matchId;
        Outcome prediction;
        uint256 timestamp;
        bool exists;
    }
    
    mapping(uint256 => mapping(address => Prediction)) public predictions;
    
    uint256 public totalPredictions;
    uint256 public uniqueUsers;
    mapping(address => bool) public hasSubmitted;
    mapping(address => uint256) public userPredictionCount;
    
    event PredictionSubmitted(
        address indexed user,
        uint256 indexed matchId,
        Outcome prediction,
        uint256 timestamp
    );
    
    function submitPrediction(uint256 matchId, Outcome prediction) external {
        require(!predictions[matchId][msg.sender].exists, "Already predicted");
        
        if (!hasSubmitted[msg.sender]) {
            hasSubmitted[msg.sender] = true;
            uniqueUsers++;
        }
        
        predictions[matchId][msg.sender] = Prediction({
            user: msg.sender,
            matchId: matchId,
            prediction: prediction,
            timestamp: block.timestamp,
            exists: true
        });
        
        totalPredictions++;
        userPredictionCount[msg.sender]++;
        
        emit PredictionSubmitted(msg.sender, matchId, prediction, block.timestamp);
    }
    
    function getPrediction(uint256 matchId, address user) 
        external 
        view 
        returns (bool exists, Outcome prediction, uint256 timestamp) 
    {
        Prediction memory pred = predictions[matchId][user];
        return (pred.exists, pred.prediction, pred.timestamp);
    }
    
    function getStats() external view returns (uint256, uint256) {
        return (totalPredictions, uniqueUsers);
    }
}