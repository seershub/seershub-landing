'use client';

import { motion } from 'framer-motion';

export default function BlockchainNetwork() {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Network nodes */}
      <motion.circle
        cx="60"
        cy="20"
        r="8"
        fill="url(#nodeGradient1)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
      <motion.circle
        cx="20"
        cy="60"
        r="8"
        fill="url(#nodeGradient2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      <motion.circle
        cx="100"
        cy="60"
        r="8"
        fill="url(#nodeGradient3)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      <motion.circle
        cx="60"
        cy="100"
        r="8"
        fill="url(#nodeGradient4)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      <motion.circle
        cx="60"
        cy="60"
        r="12"
        fill="url(#centerGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Connecting lines */}
      <motion.line
        x1="60"
        y1="28"
        x2="60"
        y2="48"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      <motion.line
        x1="28"
        y1="60"
        x2="48"
        y2="60"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      
      <motion.line
        x1="72"
        y1="60"
        x2="92"
        y2="60"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      
      <motion.line
        x1="60"
        y1="72"
        x2="60"
        y2="92"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      {/* Animated data flow */}
      <motion.circle
        r="3"
        fill="#00D4FF"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ 
          offsetDistance: "100%",
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 60 28 L 60 48"
        />
      </motion.circle>

      <defs>
        <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        
        <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        
        <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#0052FF" />
        </linearGradient>
        
        <linearGradient id="nodeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,82,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.5)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

