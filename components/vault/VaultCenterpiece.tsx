'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Coins, Lock, ArrowUpRight, TrendingUp, Shield } from 'lucide-react';

export default function VaultCenterpiece() {
  const [vaultAmount, setVaultAmount] = useState(54250);

  // Simulate live deposits
  useEffect(() => {
    const interval = setInterval(() => {
      setVaultAmount(prev => prev + Math.floor(Math.random() * 50));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/9] flex items-center justify-center">

      {/* Background Glows (Warm) */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent opacity-50 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px]" />

      {/* Main Vault Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Outer Ring */}
        <div className="relative aspect-square rounded-full border border-primary-500/20 bg-black/40 backdrop-blur-md p-10 shadow-2xl shadow-primary-500/10">

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-dashed border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-dotted border-primary-500/20"
          />

          {/* Central Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 bg-gradient-to-b from-primary-900/50 to-black rounded-full border border-primary-500/30 flex flex-col items-center justify-center shadow-inner shadow-primary-500/20">

              <Lock className="w-8 h-8 text-primary-400 mb-2" />

              <div className="text-center">
                <span className="text-sm text-white/40 font-medium">TVL</span>
                <motion.div
                  key={vaultAmount}
                  initial={{ scale: 1.1, color: '#FFB800' }}
                  animate={{ scale: 1, color: '#FFFFFF' }}
                  className="text-3xl font-bold font-display tracking-tight"
                >
                  ${vaultAmount.toLocaleString()}
                </motion.div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/20">
                <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-success uppercase tracking-wider">Secure</span>
              </div>
            </div>
          </div>

          {/* Floating Coins Orbiting */}
          <FloatingCoin delay={0} radius={140} duration={8} />
          <FloatingCoin delay={2} radius={140} duration={8} />
          <FloatingCoin delay={4} radius={140} duration={8} />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-card border border-white/10 px-4 py-1 rounded-full text-xs text-white/50 shadow-xl">
            Protocol Treasury
          </div>

        </div>
      </motion.div>

      {/* Floating Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 p-4 glass-card bg-black/40 border-primary-500/20"
      >
        <div className="p-2 bg-primary-500/10 rounded-lg">
          <TrendingUp className="w-5 h-5 text-primary-400" />
        </div>
        <div>
          <div className="text-xs text-white/40">APY Yield</div>
          <div className="text-lg font-bold text-white">4.8%</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 p-4 glass-card bg-black/40 border-accent-gold/20"
      >
        <div className="p-2 bg-accent-gold/10 rounded-lg">
          <Shield className="w-5 h-5 text-accent-gold" />
        </div>
        <div>
          <div className="text-xs text-white/40">Audited By</div>
          <div className="text-lg font-bold text-white">CertiK</div>
        </div>
      </motion.div>

    </div>
  );
}

function FloatingCoin({ delay, radius, duration }: { delay: number, radius: number, duration: number }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay }}
      style={{ width: radius * 2, height: radius * 2, x: '-50%', y: '-50%' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 shadow-lg shadow-primary-500/30 flex items-center justify-center border border-white/20">
          <Coins className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
