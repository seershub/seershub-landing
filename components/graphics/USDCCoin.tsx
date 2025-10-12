'use client';

import { motion } from 'framer-motion';

export default function USDCCoin() {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute"
    >
      {/* Coin */}
      <motion.circle
        cx="30"
        cy="30"
        r="28"
        fill="url(#coinGradient)"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 212, 255, 0.3)',
            '0 0 40px rgba(0, 212, 255, 0.5)',
            '0 0 20px rgba(0, 212, 255, 0.3)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Dollar sign */}
      <text
        x="30"
        y="40"
        textAnchor="middle"
        fontSize="32"
        fontWeight="700"
        fill="white"
      >
        $
      </text>

      <defs>
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

