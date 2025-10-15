# Seershub Contracts Deployment Guide

## Overview

This guide covers deploying the Seershub smart contracts to Base Sepolia testnet and Base mainnet.

## Contracts

- **SeershubPredictions**: Handles user predictions for sports matches
- **SeershubScoring**: Manages scoring system with streaks and decay

## Prerequisites

### 1. Environment Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### 2. Required Environment Variables
```bash
# .env file
PRIVATE_KEY=your_private_key_here
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASESCAN_API_KEY=your_basescan_api_key
```

### 3. Get Base Sepolia ETH
- Visit [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)
- Request test ETH for deployment

## Deployment Commands

### Deploy Individual Contracts

#### Deploy SeershubPredictions Only
```bash
npm run deploy:predictions
```

#### Deploy SeershubScoring Only
```bash
npm run deploy:scoring
```

### Deploy All Contracts Together
```bash
npm run deploy:all
```

### Manual Deployment
```bash
# Deploy predictions contract
npx hardhat run scripts/deploy.ts --network baseSepolia

# Deploy scoring contract
npx hardhat run scripts/deploy-scoring.js --network baseSepolia

# Deploy both contracts
npx hardhat run scripts/deploy-all.js --network baseSepolia
```

## Deployment Process

### 1. Pre-deployment Checks
- ✅ Account balance check (minimum 0.01 ETH per contract)
- ✅ Network connectivity verification
- ✅ Contract compilation

### 2. Deployment Steps
1. **Compile Contracts**: Verify all contracts compile successfully
2. **Deploy Contract**: Send deployment transaction
3. **Wait for Confirmation**: Wait for block confirmations
4. **Verify on BaseScan**: Automatic contract verification
5. **Save Deployment Info**: Store addresses and metadata

### 3. Post-deployment
- ✅ Contract verification on BaseScan
- ✅ Deployment info saved to JSON files
- ✅ Environment template created
- ✅ Next steps provided

## Deployment Output

### Files Created
```
deployments/
├── deployments.json                 # Main deployment registry
├── seershub-predictions-base-sepolia.json
└── seershub-scoring-base-sepolia.json
```

### Environment Template
```bash
# .env.example
SEERSHUB_PREDICTIONS_ADDRESS=0x...
SEERSHUB_SCORING_ADDRESS=0x...
NETWORK=baseSepolia
DEPLOYER_ADDRESS=0x...
```

## Gas Costs

### Estimated Gas Usage
- **SeershubPredictions**: ~800,000 gas
- **SeershubScoring**: ~1,200,000 gas
- **Total**: ~2,000,000 gas

### Gas Price
- Base Sepolia: ~0.1 gwei
- Estimated cost: ~0.0002 ETH per contract

## Verification

### Automatic Verification
Contracts are automatically verified during deployment.

### Manual Verification
```bash
# Verify predictions contract
npx hardhat verify --network baseSepolia <CONTRACT_ADDRESS>

# Verify scoring contract
npx hardhat verify --network baseSepolia <CONTRACT_ADDRESS>
```

### Verification Requirements
- BaseScan API key in environment
- Contract source code available
- Constructor arguments (if any)

## Testing

### Run Tests Before Deployment
```bash
# Test predictions contract
npm run test:predictions

# Test scoring contract
npm run test:scoring

# Test all contracts
npm run test:all
```

### Test Coverage
- ✅ Unit tests for all functions
- ✅ Integration tests
- ✅ Gas usage validation
- ✅ Edge case handling

## Network Configuration

### Base Sepolia (Testnet)
```javascript
// hardhat.config.js
baseSepolia: {
  url: process.env.BASE_SEPOLIA_RPC_URL,
  accounts: [process.env.PRIVATE_KEY],
  chainId: 84532,
  gasPrice: 100000000, // 0.1 gwei
}
```

### Base Mainnet (Production)
```javascript
// hardhat.config.js
base: {
  url: process.env.BASE_RPC_URL,
  accounts: [process.env.PRIVATE_KEY],
  chainId: 8453,
  gasPrice: 1000000000, // 1 gwei
}
```

## Troubleshooting

### Common Issues

#### 1. Insufficient Balance
```
❌ Insufficient balance for deployment. Need at least 0.01 ETH
```
**Solution**: Get more test ETH from faucet

#### 2. Verification Failed
```
⚠️ Verification failed: Contract source code not found
```
**Solution**: Check BaseScan API key and try manual verification

#### 3. Network Connection
```
❌ Network connection failed
```
**Solution**: Check RPC URL and network configuration

#### 4. Gas Estimation Failed
```
❌ Gas estimation failed
```
**Solution**: Increase gas limit or check contract code

### Debug Commands
```bash
# Check network connection
npx hardhat console --network baseSepolia

# Check account balance
npx hardhat run scripts/check-balance.js --network baseSepolia

# Compile contracts
npx hardhat compile

# Clean build artifacts
npx hardhat clean
```

## Production Deployment

### Mainnet Deployment Checklist
- [ ] All tests passing
- [ ] Security audit completed
- [ ] Gas optimization verified
- [ ] Documentation updated
- [ ] Environment variables set
- [ ] Backup deployment plan ready

### Mainnet Commands
```bash
# Deploy to Base mainnet
npx hardhat run scripts/deploy-all.js --network base

# Verify on BaseScan
npx hardhat verify --network base <CONTRACT_ADDRESS>
```

## Security Considerations

### Private Key Security
- ✅ Use hardware wallet for mainnet
- ✅ Never commit private keys to git
- ✅ Use environment variables
- ✅ Consider multi-sig for production

### Contract Security
- ✅ Owner access controls
- ✅ Input validation
- ✅ Reentrancy protection
- ✅ Gas limit considerations

## Monitoring

### Post-deployment Monitoring
- Monitor contract interactions
- Track gas usage patterns
- Watch for unusual activity
- Set up alerts for critical functions

### Tools
- BaseScan for transaction monitoring
- Custom dashboard for metrics
- Event logging for transparency

## Support

### Getting Help
- Check this documentation
- Review contract comments
- Test on testnet first
- Join community Discord

### Useful Links
- [Base Documentation](https://docs.base.org/)
- [BaseScan Explorer](https://sepolia.basescan.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)

---

**Last Updated**: 2024  
**Version**: 1.0.0
