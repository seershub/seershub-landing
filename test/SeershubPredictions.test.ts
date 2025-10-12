import { expect } from "chai";
import { ethers } from "hardhat";
import { SeershubPredictions } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("SeershubPredictions", function () {
  let seershubPredictions: SeershubPredictions;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async function () {
    // Get signers
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the contract
    const SeershubPredictions = await ethers.getContractFactory("SeershubPredictions");
    seershubPredictions = await SeershubPredictions.deploy();
    await seershubPredictions.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      const address = await seershubPredictions.getAddress();
      expect(address).to.properAddress;
    });

    it("Should initialize with zero predictions and users", async function () {
      const stats = await seershubPredictions.getStats();
      expect(stats[0]).to.equal(0); // totalPredictions
      expect(stats[1]).to.equal(0); // uniqueUsers
    });
  });

  describe("Prediction Submission", function () {
    const matchId = 1;
    const HOME = 0;
    const DRAW = 1;
    const AWAY = 2;

    it("Should allow users to submit predictions", async function () {
      await expect(
        seershubPredictions.connect(addr1).submitPrediction(matchId, HOME)
      ).to.not.be.reverted;
    });

    it("Should emit PredictionSubmitted event", async function () {
      const tx = await seershubPredictions.connect(addr1).submitPrediction(matchId, HOME);
      const receipt = await tx.wait();
      const block = await ethers.provider.getBlock(receipt!.blockNumber);
      
      await expect(tx)
        .to.emit(seershubPredictions, "PredictionSubmitted")
        .withArgs(addr1.address, matchId, HOME, block!.timestamp);
    });

    it("Should store prediction correctly", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(matchId, HOME);

      const prediction = await seershubPredictions.getPrediction(matchId, addr1.address);
      expect(prediction.exists).to.be.true;
      expect(prediction.prediction).to.equal(HOME);
    });

    it("Should not allow duplicate predictions for the same match", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(matchId, HOME);
      
      await expect(
        seershubPredictions.connect(addr1).submitPrediction(matchId, AWAY)
      ).to.be.revertedWith("Already predicted");
    });

    it("Should increment total predictions counter", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(matchId, HOME);
      await seershubPredictions.connect(addr2).submitPrediction(matchId, AWAY);

      const totalPredictions = await seershubPredictions.totalPredictions();
      expect(totalPredictions).to.equal(2);
    });

    it("Should track unique users correctly", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(1, HOME);
      await seershubPredictions.connect(addr1).submitPrediction(2, DRAW);
      await seershubPredictions.connect(addr2).submitPrediction(1, AWAY);

      const stats = await seershubPredictions.getStats();
      expect(stats[0]).to.equal(3); // totalPredictions
      expect(stats[1]).to.equal(2); // uniqueUsers
    });

    it("Should track user prediction count", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(1, HOME);
      await seershubPredictions.connect(addr1).submitPrediction(2, AWAY);
      await seershubPredictions.connect(addr1).submitPrediction(3, DRAW);

      const count = await seershubPredictions.userPredictionCount(addr1.address);
      expect(count).to.equal(3);
    });

    it("Should allow predictions for different matches", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(1, HOME);
      await seershubPredictions.connect(addr1).submitPrediction(2, AWAY);
      await seershubPredictions.connect(addr1).submitPrediction(3, DRAW);

      const pred1 = await seershubPredictions.getPrediction(1, addr1.address);
      const pred2 = await seershubPredictions.getPrediction(2, addr1.address);
      const pred3 = await seershubPredictions.getPrediction(3, addr1.address);

      expect(pred1.prediction).to.equal(HOME);
      expect(pred2.prediction).to.equal(AWAY);
      expect(pred3.prediction).to.equal(DRAW);
    });
  });

  describe("Statistics", function () {
    it("Should track multiple users and predictions", async function () {
      await seershubPredictions.connect(addr1).submitPrediction(1, 0);
      await seershubPredictions.connect(addr1).submitPrediction(2, 1);
      await seershubPredictions.connect(addr2).submitPrediction(1, 2);
      await seershubPredictions.connect(owner).submitPrediction(1, 0);

      const stats = await seershubPredictions.getStats();
      expect(stats[0]).to.equal(4); // totalPredictions
      expect(stats[1]).to.equal(3); // uniqueUsers
    });

    it("Should correctly identify users who have submitted", async function () {
      expect(await seershubPredictions.hasSubmitted(addr1.address)).to.be.false;
      
      await seershubPredictions.connect(addr1).submitPrediction(1, 0);
      
      expect(await seershubPredictions.hasSubmitted(addr1.address)).to.be.true;
    });
  });
});

