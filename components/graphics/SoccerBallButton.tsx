'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign } from 'lucide-react';

interface SoccerBallButtonProps {
  entryFee: number;
  onClick?: () => void;
}

export default function SoccerBallButton({ entryFee, onClick }: SoccerBallButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-full py-5 rounded-2xl font-bold text-lg overflow-hidden group shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Real soccer ball hexagon pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/patterns/soccer-hexagon.png)',
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-base-blue/30 via-accent-cyan/30 to-base-blue/30"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Border with glow - rounded for Web3 feel */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/25 group-hover:border-accent-cyan/60 transition-all duration-300 shadow-lg" />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-base-blue/0 via-accent-cyan/20 to-base-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          filter: 'blur(8px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <TrendingUp className="w-5 h-5 text-white group-hover:text-accent-cyan transition-colors" />
        </motion.div>
        
        <span className="text-white font-bold tracking-wide">
          Make Prediction
        </span>
        
        <motion.div
          className="flex items-center gap-1 bg-accent-green/20 px-3 py-1.5 rounded-full border border-accent-green/30"
          whileHover={{ scale: 1.05 }}
        >
          <DollarSign className="w-4 h-4 text-accent-green" />
          <span className="text-sm font-bold text-white">{entryFee} USDC</span>
        </motion.div>
      </div>

      {/* Soccer ball icon decoration */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          <path d="M 16,4 L 20,10 L 18,16 L 14,16 L 12,10 Z" fill="white" opacity="0.6"/>
          <path d="M 12,10 L 6,12 L 8,18 L 14,16 Z" fill="white" opacity="0.4"/>
          <path d="M 20,10 L 26,12 L 24,18 L 18,16 Z" fill="white" opacity="0.4"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          <path d="M 16,4 L 20,10 L 18,16 L 14,16 L 12,10 Z" fill="white" opacity="0.6"/>
          <path d="M 12,10 L 6,12 L 8,18 L 14,16 Z" fill="white" opacity="0.4"/>
          <path d="M 20,10 L 26,12 L 24,18 L 18,16 Z" fill="white" opacity="0.4"/>
        </svg>
      </motion.div>
    </motion.button>
  );
}

