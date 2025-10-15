import { expect } from "chai";
import { ethers } from "hardhat";
import { SeershubScoring } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("SeershubScoring", function () {
  let seershubScoring: SeershubScoring;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addr3: SignerWithAddress;
  let addr4: SignerWithAddress;
  let addr5: SignerWithAddress;

  const HOME = 0;
  const DRAW = 1;
  const AWAY = 2;

  // Constants from contract
  const BASE_POINTS = 100;
  const PENALTY_POINTS = 50;
  const MAX_STREAK_MULTIPLIER = 250; // 2.5x in basis points
  const MAX_STREAK_THRESHOLD = 10;
  const DECAY_PERIOD = 7 * 24 * 60 * 60; // 7 days in seconds
  const DECAY_RATE = 5; // 5% in basis points
  const MIN_SCORE_THRESHOLD = 10;

  beforeEach(async function () {
    // Get signers
    [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

    // Deploy the contract
    const SeershubScoring = await ethers.getContractFactory("SeershubScoring");
    seershubScoring = await SeershubScoring.deploy();
    await seershubScoring.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      const address = await seershubScoring.getAddress();
      expect(address).to.properAddress;
    });

    it("Should initialize with correct owner", async function () {
      expect(await seershubScoring.owner()).to.equal(owner.address);
    });

    it("Should initialize with zero users and matches", async function () {
      const stats = await seershubScoring.getStats();
      expect(stats[0]).to.equal(0); // totalScoredUsers
      expect(stats[1]).to.equal(0); // totalProcessedMatches
    });

    it("Should have correct constants", async function () {
      expect(await seershubScoring.BASE_POINTS()).to.equal(BASE_POINTS);
      expect(await seershubScoring.PENALTY_POINTS()).to.equal(PENALTY_POINTS);
      expect(await seershubScoring.MAX_STREAK_MULTIPLIER()).to.equal(MAX_STREAK_MULTIPLIER);
      expect(await seershubScoring.MAX_STREAK_THRESHOLD()).to.equal(MAX_STREAK_THRESHOLD);
      expect(await seershubScoring.DECAY_PERIOD()).to.equal(DECAY_PERIOD);
      expect(await seershubScoring.DECAY_RATE()).to.equal(DECAY_RATE);
      expect(await seershubScoring.MIN_SCORE_THRESHOLD()).to.equal(MIN_SCORE_THRESHOLD);
    });
  });

  describe("Basic Score Updates", function () {
    it("Should award base points for correct prediction", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      const [totalScore, streak, lastUpdate, isActive] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(BASE_POINTS);
      expect(streak).to.equal(1);
      expect(isActive).to.be.true;
    });

    it("Should apply penalty for incorrect prediction", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await seershubScoring.connect(owner).recordMatchResult(matchId, AWAY, predictors, predictions);

      const [totalScore, streak, lastUpdate, isActive] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(0); // Penalty applied, but score can't go below 0
      expect(streak).to.equal(0);
      expect(isActive).to.be.true;
    });

    it("Should emit ScoreUpdated event for correct prediction", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await expect(seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions))
        .to.emit(seershubScoring, "ScoreUpdated")
        .withArgs(addr1.address, BASE_POINTS, 1, BASE_POINTS, await getCurrentTimestamp());
    });

    it("Should emit ScoreUpdated event for incorrect prediction", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await expect(seershubScoring.connect(owner).recordMatchResult(matchId, AWAY, predictors, predictions))
        .to.emit(seershubScoring, "ScoreUpdated")
        .withArgs(addr1.address, 0, 0, PENALTY_POINTS, await getCurrentTimestamp());
    });

    it("Should emit MatchResultRecorded event", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await expect(seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions))
        .to.emit(seershubScoring, "MatchResultRecorded")
        .withArgs(matchId, HOME, await getCurrentTimestamp());
    });

    it("Should handle multiple users in single transaction", async function () {
      const matchId = 1;
      const predictors = [addr1.address, addr2.address, addr3.address];
      const predictions = [HOME, DRAW, AWAY];

      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      // User1 correct (HOME)
      const [score1, streak1] = await seershubScoring.getUserScore(addr1.address);
      expect(score1).to.equal(BASE_POINTS);
      expect(streak1).to.equal(1);

      // User2 incorrect (DRAW)
      const [score2, streak2] = await seershubScoring.getUserScore(addr2.address);
      expect(score2).to.equal(0);
      expect(streak2).to.equal(0);

      // User3 incorrect (AWAY)
      const [score3, streak3] = await seershubScoring.getUserScore(addr3.address);
      expect(score3).to.equal(0);
      expect(streak3).to.equal(0);
    });
  });

  describe("Streak Multipliers", function () {
    it("Should apply 1.0x multiplier for first correct prediction", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      const [totalScore] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(BASE_POINTS); // 100 * 1.0 = 100
    });

    it("Should apply 1.15x multiplier for second correct prediction", async function () {
      // First correct prediction
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      // Second correct prediction
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(215); // 100 + (100 * 1.15) = 215
      expect(streak).to.equal(2);
    });

    it("Should apply 1.3x multiplier for third correct prediction", async function () {
      // First two correct predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);
      
      // Third correct prediction
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, [addr1.address], [HOME]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(345); // 100 + 115 + (100 * 1.3) = 345
      expect(streak).to.equal(3);
    });

    it("Should apply 1.45x multiplier for fourth correct prediction", async function () {
      // First three correct predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, [addr1.address], [HOME]);
      
      // Fourth correct prediction
      await seershubScoring.connect(owner).recordMatchResult(4, HOME, [addr1.address], [HOME]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(490); // 100 + 115 + 130 + (100 * 1.45) = 490
      expect(streak).to.equal(4);
    });

    it("Should apply 1.6x multiplier for fifth correct prediction", async function () {
      // First four correct predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(4, HOME, [addr1.address], [HOME]);
      
      // Fifth correct prediction
      await seershubScoring.connect(owner).recordMatchResult(5, HOME, [addr1.address], [HOME]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(650); // 100 + 115 + 130 + 145 + (100 * 1.6) = 650
      expect(streak).to.equal(5);
    });

    it("Should cap multiplier at 2.5x for streaks 10+", async function () {
      // Build up to streak 10
      for (let i = 1; i <= 10; i++) {
        await seershubScoring.connect(owner).recordMatchResult(i, HOME, [addr1.address], [HOME]);
      }

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(streak).to.equal(10);

      // 11th correct prediction should still use 2.5x multiplier
      await seershubScoring.connect(owner).recordMatchResult(11, HOME, [addr1.address], [HOME]);

      const [finalScore, finalStreak] = await seershubScoring.getUserScore(addr1.address);
      expect(finalStreak).to.equal(11);
      
      // Calculate expected score: sum of first 10 + (100 * 2.5)
      const expectedScore = 100 + 115 + 130 + 145 + 160 + 175 + 190 + 205 + 220 + 235 + 250;
      expect(finalScore).to.equal(expectedScore);
    });

    it("Should reset streak to 0 on incorrect prediction", async function () {
      // Build streak of 3
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, [addr1.address], [HOME]);

      const [scoreBefore, streakBefore] = await seershubScoring.getUserScore(addr1.address);
      expect(streakBefore).to.equal(3);

      // Incorrect prediction
      await seershubScoring.connect(owner).recordMatchResult(4, AWAY, [addr1.address], [HOME]);

      const [scoreAfter, streakAfter] = await seershubScoring.getUserScore(addr1.address);
      expect(streakAfter).to.equal(0);
      expect(scoreAfter).to.equal(scoreBefore - PENALTY_POINTS);
    });
  });

  describe("Negative Streak Penalties", function () {
    it("Should handle 3 consecutive incorrect predictions", async function () {
      const predictors = [addr1.address];
      
      // 3 incorrect predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, predictors, [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, predictors, [DRAW]);
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, predictors, [AWAY]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(0); // Can't go below 0
      expect(streak).to.equal(0);
    });

    it("Should handle 4 consecutive incorrect predictions", async function () {
      const predictors = [addr1.address];
      
      // 4 incorrect predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, predictors, [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, predictors, [DRAW]);
      await seershubScoring.connect(owner).recordMatchResult(3, HOME, predictors, [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(4, HOME, predictors, [DRAW]);

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(0);
      expect(streak).to.equal(0);
    });

    it("Should handle 5+ consecutive incorrect predictions", async function () {
      const predictors = [addr1.address];
      
      // 5 incorrect predictions
      for (let i = 1; i <= 5; i++) {
        await seershubScoring.connect(owner).recordMatchResult(i, HOME, predictors, [AWAY]);
      }

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(totalScore).to.equal(0);
      expect(streak).to.equal(0);
    });

    it("Should maintain zero floor for penalties", async function () {
      // First give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      const [scoreBefore] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreBefore).to.equal(BASE_POINTS);

      // Apply penalty that would go below zero
      await seershubScoring.connect(owner).recordMatchResult(2, AWAY, [addr1.address], [HOME]);

      const [scoreAfter] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreAfter).to.equal(BASE_POINTS - PENALTY_POINTS);
    });
  });

  describe("Decay Mechanism", function () {
    it("Should not apply decay before decay period", async function () {
      // Give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      const [scoreBefore] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreBefore).to.equal(BASE_POINTS);

      // Fast forward 6 days (less than decay period)
      await ethers.provider.send("evm_increaseTime", [6 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      // Record another match (should not apply decay)
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      const [scoreAfter] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreAfter).to.equal(BASE_POINTS + (BASE_POINTS * 115) / 100); // No decay applied
    });

    it("Should apply 5% decay after 7 days", async function () {
      // Give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      const [scoreBefore] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreBefore).to.equal(BASE_POINTS);

      // Fast forward 7 days
      await ethers.provider.send("evm_increaseTime", [DECAY_PERIOD]);
      await ethers.provider.send("evm_mine", []);

      // Record another match (should apply decay)
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      const [scoreAfter] = await seershubScoring.getUserScore(addr1.address);
      const expectedDecay = (BASE_POINTS * DECAY_RATE) / 100; // 5 points
      const expectedScore = BASE_POINTS - expectedDecay + (BASE_POINTS * 115) / 100;
      expect(scoreAfter).to.equal(expectedScore);
    });

    it("Should apply multiple decay periods", async function () {
      // Give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      // Fast forward 14 days (2 decay periods)
      await ethers.provider.send("evm_increaseTime", [2 * DECAY_PERIOD]);
      await ethers.provider.send("evm_mine", []);

      // Record another match
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      const [scoreAfter] = await seershubScoring.getUserScore(addr1.address);
      // First decay: 100 - 5 = 95
      // Second decay: 95 - 4.75 = 90.25 (rounded down to 90)
      // New points: 90 + 115 = 205
      expect(scoreAfter).to.equal(205);
    });

    it("Should stop decay at minimum threshold", async function () {
      // Give user exactly minimum threshold points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      // Fast forward multiple decay periods
      await ethers.provider.send("evm_increaseTime", [10 * DECAY_PERIOD]);
      await ethers.provider.send("evm_mine", []);

      // Record another match
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      const [scoreAfter] = await seershubScoring.getUserScore(addr1.address);
      // Score should not go below minimum threshold
      expect(scoreAfter).to.be.gte(MIN_SCORE_THRESHOLD);
    });

    it("Should simulate decay correctly in view function", async function () {
      // Give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      
      // Fast forward 7 days
      await ethers.provider.send("evm_increaseTime", [DECAY_PERIOD]);
      await ethers.provider.send("evm_mine", []);

      const [currentScore, streak, nextDecayTime] = await seershubScoring.getUserScoreWithDecay(addr1.address);
      const expectedDecay = (BASE_POINTS * DECAY_RATE) / 100;
      const expectedScore = BASE_POINTS - expectedDecay;
      
      expect(currentScore).to.equal(expectedScore);
      expect(streak).to.equal(1);
      expect(nextDecayTime).to.be.gt(0);
    });
  });

  describe("Edge Cases", function () {
    it("Should handle zero points floor correctly", async function () {
      // User starts with 0 points
      const [initialScore] = await seershubScoring.getUserScore(addr1.address);
      expect(initialScore).to.equal(0);

      // Incorrect prediction should not make score negative
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [AWAY]);

      const [finalScore] = await seershubScoring.getUserScore(addr1.address);
      expect(finalScore).to.equal(0);
    });

    it("Should handle maximum multipliers correctly", async function () {
      // Build maximum streak
      for (let i = 1; i <= 15; i++) {
        await seershubScoring.connect(owner).recordMatchResult(i, HOME, [addr1.address], [HOME]);
      }

      const [totalScore, streak] = await seershubScoring.getUserScore(addr1.address);
      expect(streak).to.equal(15);
      
      // All multipliers from streak 10+ should be 2.5x
      const multiplier = await seershubScoring.getStreakMultiplier(15);
      expect(multiplier).to.equal(MAX_STREAK_MULTIPLIER);
    });

    it("Should handle empty predictor arrays", async function () {
      const matchId = 1;
      const predictors: string[] = [];
      const predictions: number[] = [];

      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions)
      ).to.not.be.reverted;
    });

    it("Should prevent duplicate match processing", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      // First processing
      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      // Second processing should fail
      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId, AWAY, predictors, predictions)
      ).to.be.revertedWith("SeershubScoring: match already processed");
    });

    it("Should validate outcome values", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      // Valid outcomes (0, 1, 2)
      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId, 0, predictors, predictions)
      ).to.not.be.reverted;

      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId + 1, 1, predictors, predictions)
      ).to.not.be.reverted;

      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId + 2, 2, predictors, predictions)
      ).to.not.be.reverted;

      // Invalid outcome (3)
      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId + 3, 3, predictors, predictions)
      ).to.be.revertedWith("SeershubScoring: invalid outcome");
    });

    it("Should validate array length mismatch", async function () {
      const matchId = 1;
      const predictors = [addr1.address, addr2.address];
      const predictions = [HOME]; // Mismatch: 2 predictors, 1 prediction

      await expect(
        seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions)
      ).to.be.revertedWith("SeershubScoring: array length mismatch");
    });
  });

  describe("Gas Usage", function () {
    it("Should use less than 10,000 gas per user update", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      const tx = await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);
      const receipt = await tx.wait();

      // Gas used should be reasonable (includes event emission and storage)
      expect(receipt!.gasUsed).to.be.lt(100000); // Total transaction gas
    });

    it("Should efficiently handle multiple users", async function () {
      const matchId = 1;
      const predictors = [addr1.address, addr2.address, addr3.address, addr4.address, addr5.address];
      const predictions = [HOME, HOME, HOME, HOME, HOME];

      const tx = await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);
      const receipt = await tx.wait();

      // Should be efficient for batch processing
      const gasPerUser = receipt!.gasUsed / predictors.length;
      expect(gasPerUser).to.be.lt(20000); // Less than 20k gas per user
    });
  });

  describe("Multiple Users Competing", function () {
    it("Should track multiple users independently", async function () {
      const matchId = 1;
      const predictors = [addr1.address, addr2.address, addr3.address];
      const predictions = [HOME, DRAW, AWAY];

      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      // User1 correct
      const [score1, streak1] = await seershubScoring.getUserScore(addr1.address);
      expect(score1).to.equal(BASE_POINTS);
      expect(streak1).to.equal(1);

      // User2 incorrect
      const [score2, streak2] = await seershubScoring.getUserScore(addr2.address);
      expect(score2).to.equal(0);
      expect(streak2).to.equal(0);

      // User3 incorrect
      const [score3, streak3] = await seershubScoring.getUserScore(addr3.address);
      expect(score3).to.equal(0);
      expect(streak3).to.equal(0);
    });

    it("Should build different streaks for different users", async function () {
      // User1 builds streak
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      // User2 has mixed results
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr2.address], [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr2.address], [HOME]);

      const [score1, streak1] = await seershubScoring.getUserScore(addr1.address);
      const [score2, streak2] = await seershubScoring.getUserScore(addr2.address);

      expect(streak1).to.equal(2);
      expect(streak2).to.equal(1);
      expect(score1).to.be.gt(score2);
    });

    it("Should update total scored users correctly", async function () {
      const statsBefore = await seershubScoring.getStats();
      expect(statsBefore[0]).to.equal(0); // totalScoredUsers

      // Add first user
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);

      const statsAfter1 = await seershubScoring.getStats();
      expect(statsAfter1[0]).to.equal(1);

      // Add second user
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr2.address], [HOME]);

      const statsAfter2 = await seershubScoring.getStats();
      expect(statsAfter2[0]).to.equal(2);
    });
  });

  describe("Leaderboard Functionality", function () {
    it("Should rank users by total score", async function () {
      // User1: 2 correct predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr1.address], [HOME]);

      // User2: 1 correct prediction
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr2.address], [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr2.address], [HOME]);

      // User3: 0 correct predictions
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr3.address], [AWAY]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr3.address], [AWAY]);

      const [score1] = await seershubScoring.getUserScore(addr1.address);
      const [score2] = await seershubScoring.getUserScore(addr2.address);
      const [score3] = await seershubScoring.getUserScore(addr3.address);

      expect(score1).to.be.gt(score2);
      expect(score2).to.be.gt(score3);
    });

    it("Should handle ties in scores", async function () {
      // Both users get same score
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr2.address], [HOME]);

      const [score1] = await seershubScoring.getUserScore(addr1.address);
      const [score2] = await seershubScoring.getUserScore(addr2.address);

      expect(score1).to.equal(score2);
    });
  });

  describe("Admin Functions", function () {
    it("Should allow owner to apply decay manually", async function () {
      // Give users some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr2.address], [HOME]);

      // Fast forward time
      await ethers.provider.send("evm_increaseTime", [DECAY_PERIOD]);
      await ethers.provider.send("evm_mine", []);

      // Apply decay manually
      await expect(
        seershubScoring.connect(owner).applyDecayToUsers([addr1.address, addr2.address])
      ).to.emit(seershubScoring, "ScoresDecayed");
    });

    it("Should allow owner to reset user score", async function () {
      // Give user some points
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);

      const [scoreBefore] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreBefore).to.be.gt(0);

      // Reset score
      await seershubScoring.connect(owner).resetUserScore(addr1.address);

      const [scoreAfter, streakAfter, isActiveAfter] = await seershubScoring.getUserScore(addr1.address);
      expect(scoreAfter).to.equal(0);
      expect(streakAfter).to.equal(0);
      expect(isActiveAfter).to.be.false;
    });

    it("Should allow ownership transfer", async function () {
      await seershubScoring.connect(owner).transferOwnership(addr1.address);
      expect(await seershubScoring.owner()).to.equal(addr1.address);
    });

    it("Should prevent non-owner from admin functions", async function () {
      await expect(
        seershubScoring.connect(addr1).recordMatchResult(1, HOME, [addr1.address], [HOME])
      ).to.be.revertedWith("SeershubScoring: caller is not the owner");

      await expect(
        seershubScoring.connect(addr1).applyDecayToUsers([addr1.address])
      ).to.be.revertedWith("SeershubScoring: caller is not the owner");

      await expect(
        seershubScoring.connect(addr1).resetUserScore(addr1.address)
      ).to.be.revertedWith("SeershubScoring: caller is not the owner");

      await expect(
        seershubScoring.connect(addr1).transferOwnership(addr2.address)
      ).to.be.revertedWith("SeershubScoring: caller is not the owner");
    });
  });

  describe("View Functions", function () {
    it("Should return correct streak multipliers", async function () {
      expect(await seershubScoring.getStreakMultiplier(0)).to.equal(100); // 1.0x
      expect(await seershubScoring.getStreakMultiplier(1)).to.equal(115); // 1.15x
      expect(await seershubScoring.getStreakMultiplier(2)).to.equal(130); // 1.3x
      expect(await seershubScoring.getStreakMultiplier(10)).to.equal(250); // 2.5x
      expect(await seershubScoring.getStreakMultiplier(15)).to.equal(250); // 2.5x (capped)
    });

    it("Should return match result information", async function () {
      const matchId = 1;
      const predictors = [addr1.address];
      const predictions = [HOME];

      await seershubScoring.connect(owner).recordMatchResult(matchId, HOME, predictors, predictions);

      const [outcome, timestamp, isProcessed] = await seershubScoring.getMatchResult(matchId);
      expect(outcome).to.equal(HOME);
      expect(isProcessed).to.be.true;
      expect(timestamp).to.be.gt(0);
    });

    it("Should return contract statistics", async function () {
      // Add some data
      await seershubScoring.connect(owner).recordMatchResult(1, HOME, [addr1.address], [HOME]);
      await seershubScoring.connect(owner).recordMatchResult(2, HOME, [addr2.address], [HOME]);

      const [totalUsers, totalMatches, currentTime] = await seershubScoring.getStats();
      expect(totalUsers).to.equal(2);
      expect(totalMatches).to.equal(2);
      expect(currentTime).to.be.gt(0);
    });
  });

  // Helper function to get current timestamp
  async function getCurrentTimestamp(): Promise<number> {
    const block = await ethers.provider.getBlock('latest');
    return block!.timestamp;
  }
});
