'use client';

import { motion } from 'framer-motion';

export default function FootballField() {
  return (
    <motion.svg
      width="600"
      height="400"
      viewBox="0 0 600 400"
      fill="none"
      className="absolute opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      {/* Field background */}
      <rect width="600" height="400" fill="url(#fieldGradient)" />
      
      {/* Center line */}
      <motion.line
        x1="300"
        y1="50"
        x2="300"
        y2="350"
        stroke="rgba(0, 212, 255, 0.3)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Center circle */}
      <motion.circle
        cx="300"
        cy="200"
        r="60"
        stroke="rgba(0, 212, 255, 0.3)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Left goal area */}
      <motion.rect
        x="20"
        y="140"
        width="80"
        height="120"
        stroke="rgba(0, 212, 255, 0.3)"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      
      {/* Right goal area */}
      <motion.rect
        x="500"
        y="140"
        width="80"
        height="120"
        stroke="rgba(0, 212, 255, 0.3)"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Animated ball path */}
      <motion.circle
        r="8"
        fill="url(#ballGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M 100,200 Q 300,100 500,200"
        />
      </motion.circle>

      <defs>
        <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 82, 255, 0.05)" />
          <stop offset="100%" stopColor="rgba(0, 212, 255, 0.05)" />
        </linearGradient>
        
        <radialGradient id="ballGradient">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

