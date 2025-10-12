# Hardhat Setup Guide

## ✅ Installation Complete!

Hardhat has been successfully installed and configured for SeersHub smart contract development.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Base Sepolia Testnet RPC URL
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Base Mainnet RPC URL  
BASE_RPC_URL=https://mainnet.base.org

# Your wallet private key (NEVER commit this!)
PRIVATE_KEY=your_private_key_here

# Basescan API Key for contract verification
BASESCAN_API_KEY=your_basescan_api_key_here
```

**⚠️ IMPORTANT:** Never commit your `.env` file with real private keys!

## Available Commands

### Compile Contracts
```bash
npm run hardhat:compile
```

### Test Contracts
```bash
npm run hardhat:test
```

### Deploy Contract
```bash
npm run hardhat:deploy
```

### Deploy to Base Sepolia (Testnet)
```bash
npx hardhat run scripts/deploy.ts --network baseSepolia
```

### Deploy to Base Mainnet
```bash
npx hardhat run scripts/deploy.ts --network base
```

### Verify Contract on Basescan
```bash
npx hardhat verify --network baseSepolia <CONTRACT_ADDRESS>
```

## Project Structure

```
contracts/              # Solidity smart contracts
├── SeershubPredictions.sol
scripts/               # Deployment scripts
├── deploy.ts
test/                  # Contract tests
ignition/              # Hardhat Ignition modules
artifacts/             # Compiled contracts (auto-generated)
cache/                 # Hardhat cache (auto-generated)
typechain-types/       # TypeScript types (auto-generated)
```

## Network Configuration

### Base Sepolia (Testnet)
- **Chain ID:** 84532
- **RPC URL:** https://sepolia.base.org
- **Block Explorer:** https://sepolia.basescan.org

### Base Mainnet
- **Chain ID:** 8453
- **RPC URL:** https://mainnet.base.org
- **Block Explorer:** https://basescan.org

## Getting Testnet Funds

To deploy on Base Sepolia, you'll need testnet ETH:
1. Get Sepolia ETH from https://sepoliafaucet.com/
2. Bridge to Base Sepolia at https://bridge.base.org/

## OpenZeppelin Contracts

The project includes OpenZeppelin contracts for secure, audited implementations. You can import them in your contracts:

```solidity
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
```

## Troubleshooting

### Module Resolution Issues
This project uses a custom `tsconfig.hardhat.json` for Hardhat compatibility with Next.js. Always use the npm scripts (`npm run hardhat:compile`) instead of direct `npx hardhat` commands.

### Clean Build
If you encounter compilation issues:
```bash
npx hardhat clean
npm run hardhat:compile
```

## Next Steps

1. Create a `.env` file with your configuration
2. Write tests in the `test/` directory
3. Update deployment script if needed
4. Deploy to testnet first to verify everything works
5. After testing, deploy to mainnet

## Resources

- [Hardhat Documentation](https://hardhat.org/getting-started)
- [Base Documentation](https://docs.base.org)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [Basescan](https://basescan.org)

