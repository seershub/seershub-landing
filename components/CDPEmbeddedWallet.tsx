'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AuthButton } from '@coinbase/cdp-react/components/AuthButton';
import { useIsSignedIn, useAddress } from '@coinbase/cdp-hooks';
import { Mail, Smartphone, Loader2, CheckCircle2, AlertCircle, Wallet } from 'lucide-react';

export default function CDPEmbeddedWallet() {
  const { isSignedIn } = useIsSignedIn();
  const { address } = useAddress();
  const [showAuth, setShowAuth] = useState(false);

  if (isSignedIn && address) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
      >
        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🎉</div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 px-4">Wallet Connected!</h2>
        <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base px-4">
          Your embedded wallet is ready to use
        </p>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-500/20">
                <Wallet className="w-5 h-5 text-primary-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white">Address</p>
                <p className="text-xs text-white/60 font-mono">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-xs text-white/50">
            <CheckCircle2 className="w-3 h-3" />
            <span>Secured by Coinbase • Self-custody enabled</span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!showAuth) {
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
            </div>
          </motion.div>

          {/* Embedded Wallet Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 group cursor-pointer"
            onClick={() => setShowAuth(true)}
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
            </div>
          </motion.div>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/50 mt-6">
            <CheckCircle2 className="w-3 h-3" />
            <span>Both options are secure and work with Base Sepolia</span>
          </div>
        </div>

        {/* Hidden RainbowKit Connect Button */}
        <div className="hidden">
          <AuthButton />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-card p-8 rounded-2xl border border-white/10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500">Embedded Wallet</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Create Your Wallet
          </h3>
          <p className="text-white/60 text-sm">
            No seed phrases needed. Secured by Coinbase.
          </p>
        </div>

        {/* CDP Auth Button */}
        <div className="space-y-4">
          <AuthButton 
            className="w-full bg-gradient-to-r from-primary-500 to-accent-cyan text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-accent-cyan/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,82,255,0.4)] flex items-center justify-center gap-2"
          />
          
          <button
            onClick={() => setShowAuth(false)}
            className="w-full text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to options
          </button>
        </div>

        {/* Security Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-white/50 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Secured by Coinbase • No seed phrases required
          </p>
        </div>
      </div>
    </motion.div>
  );
}
