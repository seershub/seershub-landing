'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function VaultHeader() {
  return (
    <div className="text-center">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-8
                   bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10
                   border border-blue-500/30 backdrop-blur-xl"
      >
        <Lock className="w-5 h-5 text-blue-400" />
        <span className="text-blue-400 font-semibold tracking-wide">
          VAULT ACCUMULATING
        </span>
        <span className="px-2 py-1 rounded-lg bg-blue-500/20 text-xs text-blue-300">
          Until Sunday 23:59
        </span>
      </motion.div>
      
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
      >
        <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 
                       bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,82,255,0.5)]">
          Community Vault
        </span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto px-4"
      >
        Every prediction adds to the vault. Winners share the pool when the vault opens.
        <br />
        <span className="text-sm text-white/40">
          Current Epoch: Week 42 • Distribution: Sunday 23:59 UTC
        </span>
      </motion.p>
    </div>
  );
}

