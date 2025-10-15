import hre from "hardhat";
const { ethers } = hre;

async function main() {
  console.log("🚀 Deploying SeershubScoring contract...");

  // Get the contract factory
  const SeershubScoring = await ethers.getContractFactory("SeershubScoring");

  // Deploy the contract
  const scoring = await SeershubScoring.deploy();
  await scoring.waitForDeployment();

  const contractAddress = await scoring.getAddress();
  
  console.log("✅ SeershubScoring deployed successfully!");
  console.log("📍 Contract Address:", contractAddress);
  console.log("🔗 Network:", hre.network.name);
  console.log("👤 Deployer:", await scoring.runner?.getAddress());

  // Verify contract on Etherscan (if not localhost)
  if (hre.network.name !== "localhost" && hre.network.name !== "hardhat") {
    console.log("⏳ Waiting for block confirmations...");
    await scoring.deploymentTransaction()?.wait(6);
    
    console.log("🔍 Verifying contract on Etherscan...");
    try {
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
      });
      console.log("✅ Contract verified on Etherscan!");
    } catch (error) {
      console.log("❌ Verification failed:", error);
    }
  }

  // Save contract info
  const contractInfo = {
    address: contractAddress,
    network: hre.network.name,
    deployer: await scoring.runner?.getAddress(),
    timestamp: new Date().toISOString(),
    blockNumber: await hre.ethers.provider.getBlockNumber(),
  };

  console.log("\n📋 Contract Information:");
  console.log(JSON.stringify(contractInfo, null, 2));

  console.log("\n🎯 Next Steps:");
  console.log("1. Update your frontend with the new contract address");
  console.log("2. Set up the owner role for score updates");
  console.log("3. Test the scoring mechanism with sample data");
  console.log("4. Integrate with your existing SeershubPredictions contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
