import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SeershubPredictions contract...");

  // Get the contract factory
  const SeershubPredictions = await ethers.getContractFactory("SeershubPredictions");

  // Deploy the contract
  const contract = await SeershubPredictions.deploy();

  // Wait for deployment to finish
  await contract.waitForDeployment();

  const address = await contract.getAddress();

  console.log(`✅ SeershubPredictions deployed to: ${address}`);
  console.log(`\nVerify with:`);
  console.log(`npx hardhat verify --network baseSepolia ${address}`);
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

