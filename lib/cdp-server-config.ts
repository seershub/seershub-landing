// import { Coinbase } from "@coinbase/coinbase-sdk";

// Server-side only configuration - Temporarily disabled until correct API is found
// export const coinbaseSDK = Coinbase.configureFromJson({
//   apiKeyName: process.env.CDP_API_KEY_NAME!,
//   privateKey: process.env.CDP_PRIVATE_KEY!,
// });

// Mock coinbaseSDK for now
export const coinbaseSDK = {
  // Mock implementation - will be replaced with actual CDP SDK once correct API is found
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
