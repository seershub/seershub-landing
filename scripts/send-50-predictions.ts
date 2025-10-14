import hre from "hardhat";
const { ethers } = hre;

async function main() {
  const CONTRACT_ADDRESS = "0x718430F546A7e7b74b1BA4a13e0C391e36108D8b";
  
  console.log("🎯 Sending 50 unique predictions to Seershub contract...\n");
  console.log(`Contract: ${CONTRACT_ADDRESS}`);
  console.log(`Network: Base Sepolia\n`);

  const [signer] = await ethers.getSigners();
  console.log(`Wallet: ${signer.address}\n`);

  const contract = await ethers.getContractAt("SeershubPredictions", CONTRACT_ADDRESS);

  // 50 unique match IDs with varied outcomes
  const predictions = [
    // Premier League Matches (IDs 1000-1010)
    { matchId: 1000, outcome: 0, match: "Man City vs Arsenal" },
    { matchId: 1001, outcome: 2, match: "Liverpool vs Chelsea" },
    { matchId: 1002, outcome: 1, match: "Man United vs Tottenham" },
    { matchId: 1003, outcome: 0, match: "Newcastle vs Brighton" },
    { matchId: 1004, outcome: 2, match: "Aston Villa vs West Ham" },
    { matchId: 1005, outcome: 0, match: "Brentford vs Fulham" },
    { matchId: 1006, outcome: 1, match: "Crystal Palace vs Everton" },
    { matchId: 1007, outcome: 2, match: "Nottingham vs Wolves" },
    { matchId: 1008, outcome: 0, match: "Bournemouth vs Luton" },
    { matchId: 1009, outcome: 1, match: "Sheffield vs Burnley" },
    { matchId: 1010, outcome: 2, match: "Leicester vs Leeds" },

    // La Liga Matches (IDs 2000-2010)
    { matchId: 2000, outcome: 0, match: "Real Madrid vs Barcelona" },
    { matchId: 2001, outcome: 2, match: "Atletico vs Sevilla" },
    { matchId: 2002, outcome: 1, match: "Valencia vs Athletic Bilbao" },
    { matchId: 2003, outcome: 0, match: "Real Sociedad vs Villarreal" },
    { matchId: 2004, outcome: 2, match: "Betis vs Girona" },
    { matchId: 2005, outcome: 0, match: "Getafe vs Osasuna" },
    { matchId: 2006, outcome: 1, match: "Celta Vigo vs Mallorca" },
    { matchId: 2007, outcome: 2, match: "Almeria vs Cadiz" },
    { matchId: 2008, outcome: 0, match: "Granada vs Rayo Vallecano" },
    { matchId: 2009, outcome: 1, match: "Las Palmas vs Alaves" },

    // Bundesliga Matches (IDs 3000-3010)
    { matchId: 3000, outcome: 0, match: "Bayern vs Dortmund" },
    { matchId: 3001, outcome: 2, match: "Leverkusen vs RB Leipzig" },
    { matchId: 3002, outcome: 1, match: "Frankfurt vs Union Berlin" },
    { matchId: 3003, outcome: 0, match: "Freiburg vs Stuttgart" },
    { matchId: 3004, outcome: 2, match: "Wolfsburg vs Hoffenheim" },
    { matchId: 3005, outcome: 0, match: "Gladbach vs Augsburg" },
    { matchId: 3006, outcome: 1, match: "Bochum vs Mainz" },
    { matchId: 3007, outcome: 2, match: "Heidenheim vs Darmstadt" },
    { matchId: 3008, outcome: 0, match: "Werder Bremen vs Koln" },
    { matchId: 3009, outcome: 1, match: "St. Pauli vs Hamburg" },

    // Serie A Matches (IDs 4000-4010)
    { matchId: 4000, outcome: 0, match: "Inter vs Juventus" },
    { matchId: 4001, outcome: 2, match: "AC Milan vs Napoli" },
    { matchId: 4002, outcome: 1, match: "Roma vs Lazio" },
    { matchId: 4003, outcome: 0, match: "Atalanta vs Fiorentina" },
    { matchId: 4004, outcome: 2, match: "Bologna vs Torino" },
    { matchId: 4005, outcome: 0, match: "Monza vs Udinese" },
    { matchId: 4006, outcome: 1, match: "Sassuolo vs Genoa" },
    { matchId: 4007, outcome: 2, match: "Lecce vs Cagliari" },
    { matchId: 4008, outcome: 0, match: "Empoli vs Frosinone" },
    { matchId: 4009, outcome: 1, match: "Verona vs Salernitana" },

    // Ligue 1 Matches (IDs 5000-5009)
    { matchId: 5000, outcome: 0, match: "PSG vs Marseille" },
    { matchId: 5001, outcome: 2, match: "Monaco vs Lyon" },
    { matchId: 5002, outcome: 1, match: "Lille vs Nice" },
    { matchId: 5003, outcome: 0, match: "Lens vs Rennes" },
    { matchId: 5004, outcome: 2, match: "Reims vs Toulouse" },
    { matchId: 5005, outcome: 0, match: "Strasbourg vs Montpellier" },
    { matchId: 5006, outcome: 1, match: "Brest vs Nantes" },
    { matchId: 5007, outcome: 2, match: "Le Havre vs Lorient" },
    { matchId: 5008, outcome: 0, match: "Clermont vs Metz" },
  ];

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < predictions.length; i++) {
    const pred = predictions[i];
    
    try {
      console.log(`\n[${i + 1}/50] 📝 Predicting: ${pred.match}`);
      console.log(`    Match ID: ${pred.matchId}`);
      console.log(`    Outcome: ${pred.outcome === 0 ? 'Home Win' : pred.outcome === 1 ? 'Draw' : 'Away Win'}`);
      
      const tx = await contract.submitPrediction(pred.matchId, pred.outcome);
      console.log(`    TX: ${tx.hash}`);
      
      const receipt = await tx.wait();
      console.log(`    ✅ Confirmed in block ${receipt.blockNumber}`);
      console.log(`    Gas used: ${receipt.gasUsed.toString()}`);
      
      successCount++;

      // Random delay between 2-5 seconds to spread transactions
      const delay = Math.floor(Math.random() * 3000) + 2000;
      console.log(`    ⏳ Waiting ${delay/1000}s before next transaction...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      
    } catch (error: any) {
      console.log(`    ❌ Failed: ${error.message.slice(0, 100)}`);
      failCount++;
      
      // Continue even if one fails
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 SUMMARY");
  console.log("=".repeat(60));
  console.log(`✅ Successful predictions: ${successCount}`);
  console.log(`❌ Failed predictions: ${failCount}`);
  console.log(`📈 Total attempts: ${predictions.length}`);
  
  // Get final stats from contract
  try {
    const [totalPredictions, uniqueUsers] = await contract.getStats();
    console.log("\n📊 Contract Stats:");
    console.log(`   Total Predictions: ${totalPredictions.toString()}`);
    console.log(`   Unique Users: ${uniqueUsers.toString()}`);
  } catch (error) {
    console.log("\n⚠️  Could not fetch contract stats");
  }

  console.log("\n🎉 Prediction batch complete!");
  console.log(`🔗 View on BaseScan: https://sepolia.basescan.org/address/${CONTRACT_ADDRESS}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Error:", error);
    process.exit(1);
  });

