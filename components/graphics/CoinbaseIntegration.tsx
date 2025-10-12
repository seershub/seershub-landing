'use client';

import { motion } from 'framer-motion';

export default function CoinbaseIntegration() {
  return (
    <motion.svg
      width="150"
      height="100"
      viewBox="0 0 150 100"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Coinbase circle */}
      <motion.circle
        cx="35"
        cy="50"
        r="25"
        fill="url(#coinbaseGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Coinbase "C" */}
      <motion.path
        d="M 35,32 Q 48,32 48,50 Q 48,68 35,68"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Connection line */}
      <motion.line
        x1="60"
        y1="50"
        x2="90"
        y2="50"
        stroke="url(#connectionGradient)"
        strokeWidth="3"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      {/* Data flow particles */}
      {[0, 0.5, 1].map((delay, i) => (
        <motion.circle
          key={i}
          r="2"
          fill="#00D4FF"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: [60, 90],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
          cy="50"
        />
      ))}

      {/* Base circle */}
      <motion.circle
        cx="115"
        cy="50"
        r="25"
        fill="url(#baseGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      
      {/* Base "B" simplified */}
      <motion.text
        x="115"
        y="60"
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        B
      </motion.text>

      {/* Integration badge */}
      <motion.rect
        x="45"
        y="5"
        width="60"
        height="20"
        rx="10"
        fill="rgba(0, 82, 255, 0.2)"
        stroke="#00D4FF"
        strokeWidth="1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      />
      
      <motion.text
        x="75"
        y="18"
        textAnchor="middle"
        fontSize="10"
        fill="#00D4FF"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        INTEGRATED
      </motion.text>

      <defs>
        <linearGradient id="coinbaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0052FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

