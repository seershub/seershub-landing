import { execSync } from 'child_process';
import { ethers } from 'hardhat';

async function main() {
  console.log('🧪 Running SeershubScoring comprehensive tests...\n');

  try {
    // Compile contracts first
    console.log('📦 Compiling contracts...');
    execSync('npx hardhat compile', { stdio: 'inherit' });

    // Run the specific test file
    console.log('\n🚀 Running SeershubScoring tests...');
    execSync('npx hardhat test test/SeershubScoring.test.ts --reporter spec', { stdio: 'inherit' });

    console.log('\n✅ All tests completed successfully!');
    
    // Run with coverage if available
    try {
      console.log('\n📊 Running tests with coverage...');
      execSync('npx hardhat coverage --testfiles test/SeershubScoring.test.ts', { stdio: 'inherit' });
    } catch (error) {
      console.log('ℹ️  Coverage not available, skipping...');
    }

  } catch (error) {
    console.error('❌ Tests failed:', error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Test runner failed:', error);
    process.exit(1);
  });
