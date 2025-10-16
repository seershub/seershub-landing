'use client';

import { useState, useCallback } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useAccount } from 'wagmi';
import { useEmbeddedWallet } from './useEmbeddedWallet';
import { ethers } from 'ethers';
import { baseSepolia } from 'wagmi/chains';
import ABI from '@/public/contract-abi.json';
import { cdpConfig } from '@/lib/cdp-config';

const CONTRACT_ADDRESS = '0x718430F546A7e7b74b1BA4a13e0C391e36108D8b' as `0x${string}`;

export function useUnifiedContract() {
  const { address: wagmiAddress, isConnected: isWagmiConnected } = useAccount();
  const { address: embeddedAddress, isConnected: isEmbeddedConnected, getSigner } = useEmbeddedWallet();
  
  // Wagmi hooks for traditional wallet
  const { 
    data: hash, 
    writeContract, 
    isPending: isWriting, 
    error: writeError, 
    reset: resetWrite 
  } = useWriteContract();
  
  const { 
    isLoading: isConfirming, 
    isSuccess, 
    error: receiptError 
  } = useWaitForTransactionReceipt({ 
    hash: hash || undefined, 
    chainId: baseSepolia.id 
  });

  // State for embedded wallet transactions
  const [embeddedHash, setEmbeddedHash] = useState<string | null>(null);
  const [embeddedPending, setEmbeddedPending] = useState(false);
  const [embeddedError, setEmbeddedError] = useState<string | null>(null);

  // Determine which wallet is active
  const isConnected = isWagmiConnected || isEmbeddedConnected;
  const activeAddress = isWagmiConnected ? wagmiAddress : embeddedAddress;
  const isUsingEmbeddedWallet = isEmbeddedConnected && !isWagmiConnected;

  const submitPrediction = useCallback(async (matchId: number, outcome: 0 | 1 | 2) => {
    if (!isConnected || !activeAddress) {
      throw new Error('No wallet connected');
    }

    if (isUsingEmbeddedWallet) {
      // TODO: Implement embedded wallet transactions
      // For now, throw an error to prevent build issues
      throw new Error('Embedded wallet transactions not yet implemented');
    } else {
      // Handle traditional wallet transaction using Wagmi
      return new Promise((resolve, reject) => {
        writeContract({
          address: CONTRACT_ADDRESS,
          abi: ABI,
          functionName: 'submitPrediction',
          args: [matchId, outcome],
        }, {
          onSuccess: (txHash) => {
            resolve({ hash: txHash, success: true });
          },
          onError: (error) => {
            reject(error);
          }
        });
      });
    }
  }, [isConnected, activeAddress, isUsingEmbeddedWallet, getSigner, writeContract]);

  const resetTransactionState = useCallback(() => {
    resetWrite();
    setEmbeddedHash(null);
    setEmbeddedPending(false);
    setEmbeddedError(null);
  }, [resetWrite]);

  // Determine current transaction state
  const isPending = isWriting || embeddedPending;
  const currentHash = hash || embeddedHash;
  const currentError = writeError?.message || embeddedError;
  const isTransactionSuccess = isSuccess || (embeddedHash && !embeddedPending && !embeddedError);

  return {
    // Connection state
    isConnected,
    address: activeAddress,
    isUsingEmbeddedWallet,
    
    // Transaction state
    isPending,
    isConfirming,
    isSuccess: isTransactionSuccess,
    hash: currentHash,
    error: currentError,
    
    // Methods
    submitPrediction,
    resetTransactionState,
  };
}
