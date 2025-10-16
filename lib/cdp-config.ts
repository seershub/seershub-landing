// Client-side configuration only
export const cdpConfig = {
  projectId: process.env.NEXT_PUBLIC_CDP_PROJECT_ID!,
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!,
};

// Validation function to check if all required environment variables are set
export function validateCDPConfig() {
  const required = [
    'CDP_API_KEY_NAME',
    'CDP_PRIVATE_KEY',
    'NEXT_PUBLIC_CDP_PROJECT_ID',
    'NEXT_PUBLIC_CHAIN_ID',
    'NEXT_PUBLIC_RPC_URL'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return true;
}

// Helper function to get network configuration
export function getNetworkConfig() {
  return {
    chainId: cdpConfig.chainId,
    rpcUrl: cdpConfig.rpcUrl,
    name: 'Base Sepolia',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrl: 'https://sepolia.basescan.org',
  };
}
