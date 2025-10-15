const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Deploying all Seershub contracts to Base Sepolia...\n");

  try {
    // Get the deployer account
    const [deployer] = await ethers.getSigners();
    console.log("👤 Deploying with account:", deployer.address);
    
    // Check balance
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("💰 Account balance:", ethers.formatEther(balance), "ETH");

    if (balance < ethers.parseEther("0.02")) {
      throw new Error("❌ Insufficient balance for deployment. Need at least 0.02 ETH for both contracts");
    }

    const deployments = {};

    // Deploy SeershubPredictions contract
    console.log("\n📦 Deploying SeershubPredictions contract...");
    console.log("=" * 50);
    
    const SeershubPredictions = await ethers.getContractFactory("SeershubPredictions");
    const predictions = await SeershubPredictions.deploy();
    await predictions.waitForDeployment();

    const predictionsAddress = await predictions.getAddress();
    const predictionsTx = predictions.deploymentTransaction();
    const predictionsReceipt = await predictionsTx.wait();

    console.log("✅ SeershubPredictions deployed!");
    console.log("📍 Address:", predictionsAddress);
    console.log("⛽ Gas Used:", predictionsReceipt.gasUsed.toString());

    deployments.SeershubPredictions = {
      contractName: "SeershubPredictions",
      address: predictionsAddress,
      network: "baseSepolia",
      deployer: deployer.address,
      deploymentTx: predictionsTx.hash,
      blockNumber: predictionsReceipt.blockNumber,
      gasUsed: predictionsReceipt.gasUsed.toString(),
      timestamp: new Date().toISOString(),
      constructorArgs: [],
      verified: false
    };

    // Wait between deployments
    console.log("⏳ Waiting 10 seconds before next deployment...");
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Deploy SeershubScoring contract
    console.log("\n📦 Deploying SeershubScoring contract...");
    console.log("=" * 50);
    
    const SeershubScoring = await ethers.getContractFactory("SeershubScoring");
    const scoring = await SeershubScoring.deploy();
    await scoring.waitForDeployment();

    const scoringAddress = await scoring.getAddress();
    const scoringTx = scoring.deploymentTransaction();
    const scoringReceipt = await scoringTx.wait();

    console.log("✅ SeershubScoring deployed!");
    console.log("📍 Address:", scoringAddress);
    console.log("⛽ Gas Used:", scoringReceipt.gasUsed.toString());

    deployments.SeershubScoring = {
      contractName: "SeershubScoring",
      address: scoringAddress,
      network: "baseSepolia",
      deployer: deployer.address,
      deploymentTx: scoringTx.hash,
      blockNumber: scoringReceipt.blockNumber,
      gasUsed: scoringReceipt.gasUsed.toString(),
      timestamp: new Date().toISOString(),
      constructorArgs: [],
      verified: false
    };

    // Wait for block confirmations before verification
    console.log("\n⏳ Waiting for block confirmations before verification...");
    await new Promise(resolve => setTimeout(resolve, 30000));

    // Verify contracts on BaseScan
    console.log("\n🔍 Verifying contracts on BaseScan...");
    console.log("=" * 50);

    // Verify SeershubPredictions
    try {
      console.log("🔍 Verifying SeershubPredictions...");
      await hre.run("verify:verify", {
        address: predictionsAddress,
        constructorArguments: [],
        network: "baseSepolia"
      });
      console.log("✅ SeershubPredictions verified!");
      deployments.SeershubPredictions.verified = true;
    } catch (verificationError) {
      console.log("⚠️  SeershubPredictions verification failed:", verificationError.message);
      console.log("🔧 Manual verification command:");
      console.log(`npx hardhat verify --network baseSepolia ${predictionsAddress}`);
    }

    // Wait between verifications
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Verify SeershubScoring
    try {
      console.log("🔍 Verifying SeershubScoring...");
      await hre.run("verify:verify", {
        address: scoringAddress,
        constructorArguments: [],
        network: "baseSepolia"
      });
      console.log("✅ SeershubScoring verified!");
      deployments.SeershubScoring.verified = true;
    } catch (verificationError) {
      console.log("⚠️  SeershubScoring verification failed:", verificationError.message);
      console.log("🔧 Manual verification command:");
      console.log(`npx hardhat verify --network baseSepolia ${scoringAddress}`);
    }

    // Save deployment info
    const deploymentsDir = path.join(__dirname, "..", "deployments");
    if (!fs.existsSync(deploymentsDir)) {
      fs.mkdirSync(deploymentsDir, { recursive: true });
    }

    // Save individual deployment files
    const predictionsFile = path.join(deploymentsDir, "seershub-predictions-base-sepolia.json");
    const scoringFile = path.join(deploymentsDir, "seershub-scoring-base-sepolia.json");
    
    fs.writeFileSync(predictionsFile, JSON.stringify(deployments.SeershubPredictions, null, 2));
    fs.writeFileSync(scoringFile, JSON.stringify(deployments.SeershubScoring, null, 2));

    // Update main deployments file
    const mainDeploymentFile = path.join(deploymentsDir, "deployments.json");
    let allDeployments = {};
    
    if (fs.existsSync(mainDeploymentFile)) {
      allDeployments = JSON.parse(fs.readFileSync(mainDeploymentFile, "utf8"));
    }
    
    allDeployments["baseSepolia"] = allDeployments["baseSepolia"] || {};
    allDeployments["baseSepolia"]["SeershubPredictions"] = deployments.SeershubPredictions;
    allDeployments["baseSepolia"]["SeershubScoring"] = deployments.SeershubScoring;
    
    fs.writeFileSync(mainDeploymentFile, JSON.stringify(allDeployments, null, 2));

    console.log("\n💾 Deployment files saved:");
    console.log("📄", predictionsFile);
    console.log("📄", scoringFile);
    console.log("📄", mainDeploymentFile);

    // Display final summary
    console.log("\n🎉 All Deployments Completed Successfully!");
    console.log("=" * 60);
    console.log("Network: Base Sepolia");
    console.log("Deployer:", deployer.address);
    console.log("");
    console.log("📋 Contract Addresses:");
    console.log("SeershubPredictions:", predictionsAddress);
    console.log("SeershubScoring:    ", scoringAddress);
    console.log("");
    console.log("⛽ Total Gas Used:", (BigInt(predictionsReceipt.gasUsed) + BigInt(scoringReceipt.gasUsed)).toString());
    console.log("=" * 60);

    // Next steps
    console.log("\n🎯 Next Steps:");
    console.log("1. Update your frontend with both contract addresses");
    console.log("2. Set up the scoring contract owner role");
    console.log("3. Test both contracts:");
    console.log("   - npx hardhat test test/SeershubPredictions.test.ts");
    console.log("   - npx hardhat test test/SeershubScoring.test.ts");
    console.log("4. Integrate scoring with predictions in your app");
    console.log("5. Deploy to mainnet when ready");

    // Create environment file template
    const envTemplate = `# Seershub Contracts - Base Sepolia
SEERSHUB_PREDICTIONS_ADDRESS=${predictionsAddress}
SEERSHUB_SCORING_ADDRESS=${scoringAddress}
NETWORK=baseSepolia
DEPLOYER_ADDRESS=${deployer.address}
`;

    const envFile = path.join(__dirname, "..", ".env.example");
    fs.writeFileSync(envFile, envTemplate);
    console.log("📄 Environment template created:", envFile);

    return deployments;

  } catch (error) {
    console.error("❌ Deployment failed:", error.message);
    
    // Log error details for debugging
    if (error.transaction) {
      console.error("Transaction details:", error.transaction);
    }
    if (error.receipt) {
      console.error("Receipt details:", error.receipt);
    }
    
    throw error;
  }
}

// Execute the deployment
main()
  .then(() => {
    console.log("\n✅ All deployments completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Deployment failed:", error);
    process.exit(1);
  });
