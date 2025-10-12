'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';

interface ModernPredictButtonProps {
  entryFee: number;
  onClick?: () => void;
}

export default function ModernPredictButton({ entryFee, onClick }: ModernPredictButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full group"
    >
      {/* Main button container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-accent-cyan p-[1px]">
        
        {/* Inner button */}
        <div className="relative bg-neutral-900 rounded-2xl px-6 py-4 flex items-center justify-between
                        group-hover:bg-transparent transition-all duration-300">
          
          {/* Left side - Icon + Text */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 
                         flex items-center justify-center border border-primary-500/30"
            >
              <TrendingUp className="w-5 h-5 text-primary-500" />
            </motion.div>
            
            <div className="text-left">
              <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                Make Prediction
              </div>
              <div className="text-xs text-white/50">
                Join the competition
              </div>
            </div>
          </div>
          
          {/* Right side - Entry fee */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-green/20 to-primary-500/20 
                            border border-accent-green/30">
              <span className="text-sm font-bold text-white">
                {entryFee} <span className="text-accent-green">USDC</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
          style={{ transform: 'skewX(-20deg)' }}
        />
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary-500/50 to-accent-cyan/50 
                   blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.button>
  );
}

