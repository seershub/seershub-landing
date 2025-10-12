'use client';

import { motion } from 'framer-motion';

export default function WalletIcon() {
  return (
    <motion.svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{
        filter: 'drop-shadow(0 10px 40px rgba(0, 82, 255, 0.4))'
      }}
    >
      {/* Background hexagon glow */}
      <motion.path
        d="M 70,10 L 100,30 L 100,60 L 70,80 L 40,60 L 40,30 Z"
        fill="url(#hexGlow)"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Blockchain network nodes */}
      {[
        { x: 30, y: 30 },
        { x: 110, y: 30 },
        { x: 30, y: 110 },
        { x: 110, y: 110 }
      ].map((pos, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill="#00D4FF"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))'
            }}
          />
          {/* Connection lines */}
          {i < 3 && (
            <motion.line
              x1={pos.x}
              y1={pos.y}
              x2={i === 0 ? 110 : i === 1 ? 30 : 110}
              y2={i === 0 ? 30 : i === 1 ? 110 : 110}
              stroke="#00D4FF"
              strokeWidth="1"
              strokeDasharray="2,2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
            />
          )}
        </motion.g>
      ))}

      {/* Main wallet container - modern hexagon */}
      <motion.path
        d="M 70,35 L 95,50 L 95,80 L 70,95 L 45,80 L 45,50 Z"
        fill="url(#walletGradient)"
        stroke="#0052FF"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      />

      {/* Inner hexagon detail */}
      <motion.path
        d="M 70,45 L 85,55 L 85,75 L 70,85 L 55,75 L 55,55 Z"
        stroke="#00D4FF"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* Web3 wallet icon */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Lock symbol */}
        <motion.rect
          x="60"
          y="70"
          width="20"
          height="12"
          rx="2"
          fill="#00D4FF"
          animate={{
            fill: ['#00D4FF', '#10B981', '#00D4FF'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.path
          d="M 65,70 L 65,63 Q 65,58 70,58 Q 75,58 75,63 L 75,70"
          stroke="#00D4FF"
          strokeWidth="2.5"
          fill="none"
          animate={{
            stroke: ['#00D4FF', '#10B981', '#00D4FF'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.g>

      {/* USDC coin - 3D effect */}
      <motion.g
        initial={{ scale: 0, x: -30, y: -30 }}
        whileInView={{ scale: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          delay: 1,
          duration: 1
        }}
      >
        {/* Coin shadow */}
        <motion.ellipse
          cx="100"
          cy="55"
          rx="16"
          ry="4"
          fill="rgba(0, 0, 0, 0.3)"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        
        {/* Coin body */}
        <motion.circle
          cx="100"
          cy="50"
          r="14"
          fill="url(#coinGradient)"
          stroke="#10B981"
          strokeWidth="3"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            filter: 'drop-shadow(0 5px 15px rgba(16, 185, 129, 0.6))'
          }}
        />
        
        {/* USDC text */}
        <text
          x="100"
          y="55"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="white"
        >
          $
        </text>
      </motion.g>

      {/* Particles */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const radius = 50;
        const x = 70 + Math.cos(angle) * radius;
        const y = 65 + Math.sin(angle) * radius;
        
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="1.5"
            fill="#00D4FF"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.05 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            style={{
              filter: 'blur(0.5px)'
            }}
          />
        );
      })}

      {/* Shine overlay */}
      <motion.path
        d="M 50,40 L 60,40 L 55,70 L 45,70 Z"
        fill="rgba(255, 255, 255, 0.15)"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <defs>
        <linearGradient id="walletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 82, 255, 0.4)" />
          <stop offset="50%" stopColor="rgba(0, 212, 255, 0.2)" />
          <stop offset="100%" stopColor="rgba(0, 82, 255, 0.3)" />
        </linearGradient>
        
        <radialGradient id="hexGlow">
          <stop offset="0%" stopColor="rgba(0, 82, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
        </radialGradient>
        
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
