'use client';

import { motion } from 'framer-motion';

export default function RewardTrophy() {
  return (
    <motion.svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      initial={{ scale: 0, rotate: -20 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        duration: 1
      }}
      style={{
        filter: 'drop-shadow(0 10px 40px rgba(245, 158, 11, 0.5))'
      }}
    >
      {/* Background blockchain network */}
      <motion.g>
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * Math.PI / 180;
          const x = 70 + Math.cos(angle) * 45;
          const y = 70 + Math.sin(angle) * 45;
          
          return (
            <motion.g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="3"
                fill="#F59E0B"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.8))'
                }}
              />
              {i < 5 && (
                <motion.line
                  x1={x}
                  y1={y}
                  x2={70 + Math.cos((i + 1) * 60 * Math.PI / 180) * 45}
                  y2={70 + Math.sin((i + 1) * 60 * Math.PI / 180) * 45}
                  stroke="#F59E0B"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              )}
            </motion.g>
          );
        })}
      </motion.g>

      {/* Main trophy with 3D effect */}
      <motion.g
        initial={{ scale: 0, y: 20 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", duration: 1 }}
      >
        {/* Trophy shadow */}
        <motion.ellipse
          cx="70"
          cy="115"
          rx="30"
          ry="6"
          fill="rgba(0, 0, 0, 0.3)"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            rx: [30, 33, 30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Trophy base - modern hexagon */}
        <motion.path
          d="M 70,100 L 85,107 L 85,114 L 70,121 L 55,114 L 55,107 Z"
          fill="url(#baseGradient)"
          stroke="#D97706"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />
        
        {/* Trophy stem */}
        <motion.rect
          x="62"
          y="80"
          width="16"
          height="20"
          rx="2"
          fill="url(#stemGradient)"
          stroke="#D97706"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        />
        
        {/* Main cup - 3D hexagon */}
        <motion.path
          d="M 70,25 L 90,37 L 90,65 L 70,77 L 50,65 L 50,37 Z"
          fill="url(#cupGradient)"
          stroke="#F59E0B"
          strokeWidth="3"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          animate={{
            scale: [1, 1.02, 1],
          }}
        />
        
        {/* Inner cup detail */}
        <motion.path
          d="M 70,32 L 83,40 L 83,62 L 70,70 L 57,62 L 57,40 Z"
          stroke="#FCD34D"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        
        {/* Left handle */}
        <motion.path
          d="M 50,45 Q 35,45 35,55 Q 35,65 47,68"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
        
        {/* Right handle */}
        <motion.path
          d="M 90,45 Q 105,45 105,55 Q 105,65 93,68"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
      </motion.g>

      {/* Floating USDC coins */}
      {[
        { x: 40, y: 35, delay: 1.5 },
        { x: 100, y: 35, delay: 1.6 },
        { x: 30, y: 60, delay: 1.7 },
        { x: 110, y: 60, delay: 1.8 }
      ].map((coin, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={coin.x}
            cy={coin.y}
            r="8"
            fill="url(#coinGradient)"
            stroke="#10B981"
            strokeWidth="2"
            initial={{ scale: 0, y: 20, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }
            }}
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.6))'
            }}
          />
          <text
            x={coin.x}
            y={coin.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="white"
          >
            $
          </text>
        </motion.g>
      ))}

      {/* Winner badge - blockchain verified */}
      <motion.g
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 1.4,
          type: "spring",
          duration: 1
        }}
      >
        {/* Star outer */}
        <motion.path
          d="M 70,15 L 73,25 L 83,25 L 75,32 L 78,42 L 70,36 L 62,42 L 65,32 L 57,25 L 67,25 Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="2"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            filter: 'drop-shadow(0 0 15px rgba(252, 211, 77, 0.8))'
          }}
        />
        
        {/* Inner star glow */}
        <motion.circle
          cx="70"
          cy="28"
          r="8"
          fill="rgba(252, 211, 77, 0.4)"
          animate={{
            r: [8, 12, 8],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.g>

      {/* Sparkles and particles */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5) * Math.PI / 180;
        const radius = 50 + (i % 2) * 10;
        const x = 70 + Math.cos(angle) * radius;
        const y = 70 + Math.sin(angle) * radius;
        
        return (
          <motion.g key={i}>
            <motion.circle
              cx={x}
              cy={y}
              r="2"
              fill={i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#FCD34D" : "#00D4FF"}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 + i * 0.03 }}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 1, 0.4],
              }}
              style={{
                filter: `blur(${i % 2 ? 0.5 : 1}px)`
              }}
            />
            {/* Sparkle lines */}
            {i % 4 === 0 && (
              <motion.g>
                <motion.line x1={x - 3} y1={y} x2={x + 3} y2={y} stroke="#FCD34D" strokeWidth="1" />
                <motion.line x1={x} y1={y - 3} x2={x} y2={y + 3} stroke="#FCD34D" strokeWidth="1" />
              </motion.g>
            )}
          </motion.g>
        );
      })}

      {/* Glow effect */}
      <motion.ellipse
        cx="70"
        cy="55"
        rx="40"
        ry="50"
        fill="rgba(245, 158, 11, 0.15)"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <defs>
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        
        <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        
        <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(252, 211, 77, 0.6)" />
          <stop offset="30%" stopColor="rgba(245, 158, 11, 0.5)" />
          <stop offset="70%" stopColor="rgba(245, 158, 11, 0.4)" />
          <stop offset="100%" stopColor="rgba(217, 119, 6, 0.5)" />
        </linearGradient>
        
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
