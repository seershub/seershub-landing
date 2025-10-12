'use client';

import { motion } from 'framer-motion';

export default function BaseNetwork() {
  return (
    <motion.svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Central Base logo representation */}
      <motion.circle
        cx="75"
        cy="75"
        r="40"
        fill="url(#baseGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Orbiting nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => {
        const radian = (angle * Math.PI) / 180;
        const x = 75 + 60 * Math.cos(radian);
        const y = 75 + 60 * Math.sin(radian);
        
        return (
          <motion.g key={index}>
            {/* Connection line */}
            <motion.line
              x1="75"
              y1="75"
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
            
            {/* Node */}
            <motion.circle
              cx={x}
              cy={y}
              r="6"
              fill="url(#nodeGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
            
            {/* Pulsing effect */}
            <motion.circle
              cx={x}
              cy={y}
              r="6"
              fill="none"
              stroke="#00D4FF"
              strokeWidth="2"
              animate={{
                r: [6, 12, 6],
                opacity: [0.8, 0, 0.8],
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

      {/* Data flow particles */}
      <motion.circle
        r="3"
        fill="#00D4FF"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 75,75 L 135,75"
        />
      </motion.circle>

      <defs>
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,82,255,0.2)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.4)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

