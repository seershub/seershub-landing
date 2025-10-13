import { ethers } from "hardhat";

async function main() {
  // BURAYA CONTRACT ADRESİNİ YAPIŞTIRIN
  const CONTRACT_ADDRESS = "0xaC949453Aaa56f21b816EDBc96Ae4606E861C79E";
  
  console.log("🎯 Submitting test predictions to Seershub...\n");

  const [signer] = await ethers.getSigners();
  const contract = await ethers.getContractAt("SeershubPredictions", CONTRACT_ADDRESS);

  // Test matches - farklı ligler
  const testMatches = [
    { id: 1001, pred: 0, name: "Real Madrid vs Barcelona" },
    { id: 1002, pred: 1, name: "Bayern Munich vs Dortmund" },
    { id: 1003, pred: 2, name: "Man City vs Arsenal" },
    { id: 1004, pred: 0, name: "Liverpool vs Man United" },
    { id: 1005, pred: 1, name: "PSG vs Marseille" },
    { id: 1006, pred: 2, name: "Inter Milan vs AC Milan" },
    { id: 1007, pred: 0, name: "Atletico vs Sevilla" },
    { id: 1008, pred: 1, name: "Napoli vs Juventus" },
    { id: 1009, pred: 2, name: "Galatasaray vs Fenerbahce" },
    { id: 1010, pred: 0, name: "Benfica vs Porto" },
  ];

  const outcomes = ["Home Win", "Draw", "Away Win"];

  for (let i = 0; i < testMatches.length; i++) {
    const match = testMatches[i];
    
    console.log(`[${i + 1}/10] 📊 ${match.name}`);
    console.log(`        🎲 Prediction: ${outcomes[match.pred]}`);
    
    try {
      const tx = await contract.submitPrediction(match.id, match.pred);
      console.log(`        ⏳ TX: ${tx.hash.substring(0, 10)}...`);
      await tx.wait();
      console.log(`        ✅ Confirmed!\n`);
    } catch (error: any) {
      if (error.message.includes("Already predicted")) {
        console.log(`        ⚠️  Already predicted (skipping)\n`);
      } else {
        console.log(`        ❌ Error: ${error.message}\n`);
      }
    }
    
    // Rate limiting - 2 saniye bekle
    if (i < testMatches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Final stats
  const [totalPredictions, uniqueUsers] = await contract.getStats();
  
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📈 PLATFORM STATISTICS");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Total Predictions: ${totalPredictions}`);
  console.log(`Unique Users: ${uniqueUsers}`);
  console.log(`Your Predictions: ${await contract.userPredictionCount(signer.address)}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  
  console.log(`🔗 View contract on BaseScan:`);
  console.log(`https://sepolia.basescan.org/address/${CONTRACT_ADDRESS}\n`);
  
  console.log(`🔗 View your transactions:`);
  console.log(`https://sepolia.basescan.org/address/${signer.address}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});