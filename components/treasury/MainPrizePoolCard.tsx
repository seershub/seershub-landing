'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import CoinStackGraphic from '@/components/graphics/treasury/CoinStackGraphic';

export default function MainPrizePoolCard() {
  const [amount, setAmount] = useState(128450);
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAmount(prev => prev + Math.floor(Math.random() * 50));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-green-500/20 
                      rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700" />
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-900/90 
                      backdrop-blur-2xl rounded-3xl border border-white/10 
                      p-8 md:p-12 overflow-hidden
                      hover:border-green-500/30 transition-all duration-500">
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-green-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl" />
        
        {/* Floating dollar signs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-20 text-6xl opacity-5 pointer-events-none hidden lg:block"
        >
          💰
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-20 text-5xl opacity-5 pointer-events-none hidden lg:block"
        >
          💵
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Label row */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                            border border-green-500/30 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-sm text-white/40 uppercase tracking-wider font-semibold">
                Total Prize Pool
              </div>
              <div className="text-xs text-white/30">
                Across all active competitions
              </div>
            </div>
          </div>
          
          {/* Main amount */}
          <motion.div
            key={amount}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 
                             bg-clip-text text-transparent
                             drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                ${amount.toLocaleString()}
              </span>
            </div>
            <div className="text-white/30 text-sm">
              ≈ {amount.toLocaleString()} USDC
            </div>
          </motion.div>
          
          {/* Stats row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 
                          pt-6 border-t border-white/10">
            
            {/* Growth indicator */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl 
                              bg-green-500/10 border border-green-500/30">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">+12.5%</span>
              </div>
              <span className="text-white/50 text-sm">vs. last week</span>
            </div>
            
            {/* Yesterday earned badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl 
                         bg-gradient-to-r from-green-500/15 to-emerald-500/15 
                         border border-green-500/30 backdrop-blur-sm
                         hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-xs text-green-400/70 uppercase tracking-wide font-semibold">
                  Yesterday Earned
                </span>
                <span className="text-2xl font-bold text-green-400">
                  $8,432
                </span>
              </div>
              <div className="text-3xl">💰</div>
            </motion.div>
          </div>
        </div>
        
        {/* 3D coin stack graphic */}
        <CoinStackGraphic />
      </div>
    </motion.div>
  );
}

