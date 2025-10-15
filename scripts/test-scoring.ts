import hre from "hardhat";
const { ethers } = hre;

async function main() {
  console.log("🧪 Testing SeershubScoring contract...");

  // Get the deployed contract (replace with actual address)
  const CONTRACT_ADDRESS = "0x..."; // Replace with deployed address
  const scoring = await ethers.getContractAt("SeershubScoring", CONTRACT_ADDRESS);

  // Get test accounts
  const [owner, user1, user2, user3] = await ethers.getSigners();

  console.log("👤 Owner:", await owner.getAddress());
  console.log("👤 User1:", await user1.getAddress());
  console.log("👤 User2:", await user2.getAddress());
  console.log("👤 User3:", await user3.getAddress());

  // Test 1: Record a match result with mixed predictions
  console.log("\n🎯 Test 1: Recording match result...");
  
  const matchId = 1;
  const actualOutcome = 0; // HOME wins
  const predictors = [await user1.getAddress(), await user2.getAddress(), await user3.getAddress()];
  const predictions = [0, 1, 2]; // user1: HOME, user2: DRAW, user3: AWAY

  const tx1 = await scoring.connect(owner).recordMatchResult(
    matchId,
    actualOutcome,
    predictors,
    predictions
  );
  await tx1.wait();

  console.log("✅ Match result recorded!");

  // Test 2: Check user scores
  console.log("\n📊 Test 2: Checking user scores...");
  
  const [score1, streak1, lastUpdate1, isActive1] = await scoring.getUserScore(await user1.getAddress());
  const [score2, streak2, lastUpdate2, isActive2] = await scoring.getUserScore(await user2.getAddress());
  const [score3, streak3, lastUpdate3, isActive3] = await scoring.getUserScore(await user3.getAddress());

  console.log("👤 User1 (HOME - Correct):", {
    score: score1.toString(),
    streak: streak1.toString(),
    isActive: isActive1
  });

  console.log("👤 User2 (DRAW - Wrong):", {
    score: score2.toString(),
    streak: streak2.toString(),
    isActive: isActive2
  });

  console.log("👤 User3 (AWAY - Wrong):", {
    score: score3.toString(),
    streak: streak3.toString(),
    isActive: isActive3
  });

  // Test 3: Test streak multiplier
  console.log("\n🔥 Test 3: Testing streak multipliers...");
  
  for (let streak = 0; streak <= 12; streak++) {
    const multiplier = await scoring.getStreakMultiplier(streak);
    console.log(`Streak ${streak}: ${multiplier/100}x multiplier`);
  }

  // Test 4: Simulate multiple correct predictions for streak
  console.log("\n🎯 Test 4: Building streak for user1...");
  
  for (let i = 2; i <= 5; i++) {
    const tx = await scoring.connect(owner).recordMatchResult(
      i,
      0, // HOME wins again
      [await user1.getAddress()],
      [0] // User1 predicts HOME again
    );
    await tx.wait();
    
    const [score, streak] = await scoring.getUserScore(await user1.getAddress());
    console.log(`Match ${i}: Score = ${score}, Streak = ${streak}`);
  }

  // Test 5: Check final stats
  console.log("\n📈 Test 5: Contract statistics...");
  
  const [totalUsers, totalMatches, currentTime] = await scoring.getStats();
  console.log("Total Users:", totalUsers.toString());
  console.log("Total Matches:", totalMatches.toString());
  console.log("Current Time:", new Date(Number(currentTime) * 1000).toISOString());

  // Test 6: Test decay simulation
  console.log("\n⏰ Test 6: Testing decay simulation...");
  
  const [currentScore, streak, nextDecayTime] = await scoring.getUserScoreWithDecay(await user1.getAddress());
  console.log("User1 Score with Decay:", {
    currentScore: currentScore.toString(),
    streak: streak.toString(),
    nextDecayTime: new Date(Number(nextDecayTime) * 1000).toISOString()
  });

  console.log("\n✅ All tests completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Test failed:", error);
    process.exit(1);
  });
