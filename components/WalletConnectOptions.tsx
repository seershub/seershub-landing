'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import EmbeddedWalletAuth from './EmbeddedWalletAuth';
import { Wallet, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WalletConnectOptions() {
  const { isConnected } = useAccount();
  const [showEmbeddedWallet, setShowEmbeddedWallet] = useState(false);
  const [embeddedWalletConnected, setEmbeddedWalletConnected] = useState(false);

  const handleEmbeddedWalletSuccess = () => {
    setEmbeddedWalletConnected(true);
    setShowEmbeddedWallet(false);
  };

  const handleEmbeddedWalletError = (error: string) => {
    console.error('Embedded wallet error:', error);
  };

  if (isConnected || embeddedWalletConnected) {
    return null; // Don't show connect options if already connected
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
    >
      <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔐</div>
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 px-4">Connect Your Wallet</h2>
      <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base px-4">
        Choose how you'd like to connect to Base Sepolia
      </p>

      {!showEmbeddedWallet ? (
        <div className="space-y-4 max-w-md mx-auto">
          {/* Traditional Wallet Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group cursor-pointer"
            onClick={() => {
              // Trigger RainbowKit connect modal
              const connectButton = document.querySelector('[data-testid="connect-button"]') as HTMLElement;
              connectButton?.click();
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                  <Wallet className="w-6 h-6 text-primary-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-1">Traditional Wallet</h3>
                  <p className="text-sm text-white/60">MetaMask, Coinbase Wallet, etc.</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-primary-500 transition-colors" />
            </div>
          </motion.div>

          {/* Embedded Wallet Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 group cursor-pointer"
            onClick={() => setShowEmbeddedWallet(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-cyan/20 group-hover:bg-accent-cyan/30 transition-colors">
                  <Smartphone className="w-6 h-6 text-accent-cyan" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-1">Email/SMS Wallet</h3>
                  <p className="text-sm text-white/60">No seed phrases needed</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent-cyan transition-colors" />
            </div>
          </motion.div>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/50 mt-6">
            <CheckCircle2 className="w-3 h-3" />
            <span>Both options are secure and work with Base Sepolia</span>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <button
              onClick={() => setShowEmbeddedWallet(false)}
              className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to options
            </button>
          </div>
          <EmbeddedWalletAuth 
            onSuccess={handleEmbeddedWalletSuccess}
            onError={handleEmbeddedWalletError}
          />
        </div>
      )}

      {/* Hidden RainbowKit Connect Button */}
      <div className="hidden">
        <ConnectButton />
      </div>
    </motion.div>
  );
}
