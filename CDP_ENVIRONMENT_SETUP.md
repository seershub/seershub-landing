# CDP Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Coinbase Developer Platform (CDP) Configuration
NEXT_PUBLIC_CDP_PROJECT_ID=ffa14445-e6a9-4c09-aa56-13743a78f329
CDP_API_KEY_NAME=your_api_key_name_here
CDP_PRIVATE_KEY=your_private_key_here

# Base Sepolia Network Configuration
NEXT_PUBLIC_CHAIN_ID=84532
NEXT_PUBLIC_RPC_URL=https://sepolia.base.org
```

## How to Get CDP Credentials

1. **Go to Coinbase Developer Platform**: https://portal.cdp.coinbase.com/
2. **Create/Select Project**: Use project ID `ffa14445-e6a9-4c09-aa56-13743a78f329`
3. **Generate API Key**: 
   - Go to API Keys section
   - Create new API key
   - Copy the API key name and private key
4. **Update Environment Variables**:
   - Replace `your_api_key_name_here` with your actual API key name
   - Replace `your_private_key_here` with your actual private key

## Security Notes

- ⚠️ **Never commit `.env.local` to git**
- 🔒 **Keep private keys secure**
- 🏠 **Use different keys for development/production**

## Verification

After setting up, verify your configuration by:
1. Starting the development server: `npm run dev`
2. Checking browser console for any CDP-related errors
3. Testing embedded wallet creation

## Troubleshooting

- **"Invalid API key"**: Check your CDP_API_KEY_NAME and CDP_PRIVATE_KEY
- **"Project not found"**: Verify NEXT_PUBLIC_CDP_PROJECT_ID
- **Network errors**: Check NEXT_PUBLIC_RPC_URL and NEXT_PUBLIC_CHAIN_ID
