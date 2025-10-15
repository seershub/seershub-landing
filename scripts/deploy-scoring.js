const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Deploying SeershubScoring contract to Base Sepolia...\n");

  try {
    // Get the deployer account
    const [deployer] = await ethers.getSigners();
    console.log("👤 Deploying with account:", deployer.address);
    
    // Check balance
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("💰 Account balance:", ethers.formatEther(balance), "ETH");

    if (balance < ethers.parseEther("0.01")) {
      throw new Error("❌ Insufficient balance for deployment. Need at least 0.01 ETH");
    }

    // Get the contract factory
    console.log("📦 Getting contract factory...");
    const SeershubScoring = await ethers.getContractFactory("SeershubScoring");

    // Deploy the contract
    console.log("🔨 Deploying contract...");
    const scoring = await SeershubScoring.deploy();
    await scoring.waitForDeployment();

    const contractAddress = await scoring.getAddress();
    console.log("✅ SeershubScoring deployed successfully!");
    console.log("📍 Contract Address:", contractAddress);

    // Get deployment transaction details
    const deploymentTx = scoring.deploymentTransaction();
    const receipt = await deploymentTx.wait();
    
    console.log("⛽ Gas Used:", receipt.gasUsed.toString());
    console.log("🔗 Transaction Hash:", deploymentTx.hash);
    console.log("📊 Block Number:", receipt.blockNumber);

    // Wait for block confirmations before verification
    console.log("⏳ Waiting for block confirmations...");
    await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds

    // Verify contract on BaseScan
    console.log("🔍 Verifying contract on BaseScan...");
    try {
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
        network: "baseSepolia"
      });
      console.log("✅ Contract verified on BaseScan!");
    } catch (verificationError) {
      console.log("⚠️  Verification failed:", verificationError.message);
      console.log("🔧 Manual verification command:");
      console.log(`npx hardhat verify --network baseSepolia ${contractAddress}`);
    }

    // Prepare deployment info
    const deploymentInfo = {
      contractName: "SeershubScoring",
      address: contractAddress,
      network: "baseSepolia",
      deployer: deployer.address,
      deploymentTx: deploymentTx.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString(),
      timestamp: new Date().toISOString(),
      constructorArgs: [],
      verified: true
    };

    // Save deployment info to JSON file
    const deploymentsDir = path.join(__dirname, "..", "deployments");
    if (!fs.existsSync(deploymentsDir)) {
      fs.mkdirSync(deploymentsDir, { recursive: true });
    }

    const deploymentFile = path.join(deploymentsDir, "seershub-scoring-base-sepolia.json");
    fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
    console.log("💾 Deployment info saved to:", deploymentFile);

    // Update main deployments file
    const mainDeploymentFile = path.join(deploymentsDir, "deployments.json");
    let allDeployments = {};
    
    if (fs.existsSync(mainDeploymentFile)) {
      allDeployments = JSON.parse(fs.readFileSync(mainDeploymentFile, "utf8"));
    }
    
    allDeployments["baseSepolia"] = allDeployments["baseSepolia"] || {};
    allDeployments["baseSepolia"]["SeershubScoring"] = deploymentInfo;
    
    fs.writeFileSync(mainDeploymentFile, JSON.stringify(allDeployments, null, 2));
    console.log("📋 Updated main deployments file");

    // Display summary
    console.log("\n🎉 Deployment Summary:");
    console.log("=" * 50);
    console.log("Contract: SeershubScoring");
    console.log("Network: Base Sepolia");
    console.log("Address:", contractAddress);
    console.log("Deployer:", deployer.address);
    console.log("Gas Used:", receipt.gasUsed.toString());
    console.log("Block:", receipt.blockNumber);
    console.log("Verified:", true);
    console.log("=" * 50);

    // Next steps
    console.log("\n🎯 Next Steps:");
    console.log("1. Update your frontend with the new contract address");
    console.log("2. Set up the owner role for score updates");
    console.log("3. Test the scoring mechanism with sample data");
    console.log("4. Integrate with your existing SeershubPredictions contract");
    console.log("5. Run tests: npx hardhat test test/SeershubScoring.test.ts");

    return deploymentInfo;

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
    console.log("\n✅ Deployment completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Deployment failed:", error);
    process.exit(1);
  });
