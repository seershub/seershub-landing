'use client';

import { useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { cdpConfig } from '@/lib/cdp-config';

interface EmbeddedWalletData {
  address: string;
  method: 'email' | 'sms';
  walletId?: string;
}

export function useEmbeddedWallet() {
  const [wallet, setWallet] = useState<any>(null);
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize wallet from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('embedded_wallet');
      if (stored) {
        const walletData: EmbeddedWalletData = JSON.parse(stored);
        setAddress(walletData.address);
        setIsInitialized(true);
      }
    } catch (err) {
      console.warn('Failed to load embedded wallet from localStorage:', err);
    }
  }, []);

  const createWallet = useCallback(async (
    method: 'email' | 'sms',
    identifier: string
  ) => {
    setLoading(true);
    setError('');
    
    try {
      // Call your API endpoint to create wallet
      const response = await fetch('/api/wallet/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, identifier }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create wallet');
      }

      setWallet(data.wallet);
      setAddress(data.address);
      
      // Store in localStorage for session persistence
      const walletData: EmbeddedWalletData = {
        address: data.address,
        method,
        walletId: data.wallet?.id,
      };
      
      localStorage.setItem('embedded_wallet', JSON.stringify(walletData));

      return data;
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create embedded wallet';
      setError(errorMessage);
      console.error('Embedded wallet creation error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSigner = useCallback(() => {
    if (!wallet || !address) {
      console.warn('No embedded wallet available');
      return null;
    }
    
    try {
      const provider = new ethers.JsonRpcProvider(cdpConfig.rpcUrl);
      
      // For embedded wallets, we'll need to implement signing through the CDP SDK
      // This is a placeholder - actual implementation depends on CDP SDK methods
      return {
        provider,
        address,
        signMessage: async (message: string) => {
          // This would call the CDP SDK to sign the message
          throw new Error('Message signing not yet implemented for embedded wallets');
        },
        signTransaction: async (transaction: any) => {
          // This would call the CDP SDK to sign the transaction
          throw new Error('Transaction signing not yet implemented for embedded wallets');
        },
      };
    } catch (err) {
      console.error('Failed to create signer:', err);
      return null;
    }
  }, [wallet, address]);

  const disconnect = useCallback(() => {
    setWallet(null);
    setAddress('');
    setError('');
    localStorage.removeItem('embedded_wallet');
  }, []);

  const clearError = useCallback(() => {
    setError('');
  }, []);

  return {
    wallet,
    address,
    loading,
    error,
    isConnected: !!address,
    isInitialized,
    createWallet,
    getSigner,
    disconnect,
    clearError,
  };
}
