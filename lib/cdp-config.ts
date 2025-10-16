// Client-side configuration for CDP React
export const cdpConfig = {
  projectId: process.env.NEXT_PUBLIC_CDP_PROJECT_ID!,
  ethereum: { 
    createOnLogin: "eoa" as const 
  },
  solana: { 
    createOnLogin: true 
  },
  appName: "Seershub"
};

// Validation function to check if all required environment variables are set
export function validateCDPConfig() {
  const required = [
    'NEXT_PUBLIC_CDP_PROJECT_ID'
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
    chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 84532,
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.base.org',
    name: 'Base Sepolia',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrl: 'https://sepolia.basescan.org',
  };
}
