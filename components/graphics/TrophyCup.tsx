'use client';

import { motion } from 'framer-motion';

export default function TrophyCup() {
  return (
    <motion.svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Trophy base */}
      <motion.rect
        x="40"
        y="110"
        width="40"
        height="25"
        rx="4"
        fill="url(#trophyGradient)"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Trophy stem */}
      <motion.rect
        x="52"
        y="90"
        width="16"
        height="20"
        fill="url(#trophyGradient)"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Trophy cup */}
      <motion.path
        d="M 30,40 L 25,80 Q 25,95 60,95 Q 95,95 95,80 L 90,40 Z"
        fill="url(#cupGradient)"
        stroke="#00D4FF"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
      
      {/* Left handle */}
      <motion.path
        d="M 30,50 Q 15,50 15,65 Q 15,75 25,75"
        stroke="url(#trophyGradient)"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Right handle */}
      <motion.path
        d="M 90,50 Q 105,50 105,65 Q 105,75 95,75"
        stroke="url(#trophyGradient)"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Shine effect */}
      <motion.ellipse
        cx="55"
        cy="55"
        rx="15"
        ry="20"
        fill="rgba(255, 255, 255, 0.3)"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Stars */}
      {[0, 1, 2].map((i) => {
        const x = 35 + i * 25;
        return (
          <motion.g key={i}>
            <motion.path
              d={`M ${x},25 L ${x+3},30 L ${x+8},30 L ${x+4},34 L ${x+6},39 L ${x},35 L ${x-6},39 L ${x-4},34 L ${x-8},30 L ${x-3},30 Z`}
              fill="#F59E0B"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 1,
                delay: 0.6 + i * 0.1,
              }}
            />
          </motion.g>
        );
      })}

      <defs>
        <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        
        <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
          <stop offset="50%" stopColor="rgba(245, 158, 11, 0.2)" />
          <stop offset="100%" stopColor="rgba(239, 68, 68, 0.3)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

