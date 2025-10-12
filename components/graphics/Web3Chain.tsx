'use client';

import { motion } from 'framer-motion';

export default function Web3Chain() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Chain links */}
      {[0, 1, 2].map((index) => {
        const y = 40 + index * 50;
        return (
          <motion.g key={index}>
            {/* Link */}
            <motion.ellipse
              cx="100"
              cy={y}
              rx="35"
              ry="20"
              stroke="url(#chainGradient)"
              strokeWidth="4"
              fill="none"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            
            {/* Glow effect */}
            <motion.ellipse
              cx="100"
              cy={y}
              rx="35"
              ry="20"
              stroke="rgba(0, 82, 255, 0.3)"
              strokeWidth="2"
              fill="none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.g>
        );
      })}

      {/* Connecting lines */}
      <motion.line
        x1="100"
        y1="60"
        x2="100"
        y2="80"
        stroke="url(#chainGradient)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      <motion.line
        x1="100"
        y1="110"
        x2="100"
        y2="130"
        stroke="url(#chainGradient)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Data flow particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#00D4FF"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [0, 160]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear"
          }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            begin={`${i}s`}
            path="M 100,40 L 100,140"
          />
        </motion.circle>
      ))}

      <defs>
        <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

