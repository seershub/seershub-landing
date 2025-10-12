'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TreasuryHeader() {
  return (
    <div className="text-center mb-16">
      {/* Live status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
                   bg-gradient-to-r from-green-500/10 to-emerald-500/10 
                   border border-green-500/30 backdrop-blur-sm mb-8
                   hover:border-green-500/50 transition-all duration-300"
      >
        {/* Animated pulse dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
        
        <span className="text-sm font-semibold text-green-400 tracking-wide">
          LIVE TREASURY
        </span>
        
        <span className="text-xs text-green-400/60">
          Updated 2s ago
        </span>
      </motion.div>
      
      {/* Main title with USDC logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
      >
        {/* USDC Logo */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-conic from-primary-500/30 via-transparent to-primary-500/30 blur-xl"
          />
          <img
            src="/pngtree-usd-coin-usdc-digital-stablecoin-icon-technology-pay-web-vector-png-image_37843734.png"
            width={72}
            height={72}
            alt="USDC"
            className="relative z-10 drop-shadow-2xl"
          />
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Community Prize Pool
          </span>
        </h2>
      </motion.div>
      
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto px-4"
      >
        100% transparent. Distributed automatically via smart contracts.
        <br />
        <span className="text-white/30 text-xs sm:text-sm">
          Verified on Base • Contract: 0x1234...5678
        </span>
      </motion.p>
    </div>
  );
}

