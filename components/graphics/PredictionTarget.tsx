'use client';

import { motion } from 'framer-motion';

export default function PredictionTarget() {
  return (
    <motion.svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{
        filter: 'drop-shadow(0 10px 40px rgba(0, 212, 255, 0.4))'
      }}
    >
      {/* Blockchain blocks connected - background */}
      <motion.g>
        {[0, 1, 2].map((i) => (
          <motion.g key={i}>
            {/* Block */}
            <motion.rect
              x={20 + i * 40}
              y={20}
              width="30"
              height="30"
              rx="4"
              fill={i === 1 ? "url(#blockGradientActive)" : "url(#blockGradient)"}
              stroke={i === 1 ? "#00D4FF" : "#0052FF"}
              strokeWidth="2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              animate={i === 1 ? {
                scale: [1, 1.05, 1],
              } : {}}
            />
            
            {/* Block content lines */}
            {[0, 1, 2].map((j) => (
              <motion.line
                key={j}
                x1={23 + i * 40}
                y1={27 + j * 7}
                x2={47 + i * 40}
                y2={27 + j * 7}
                stroke={i === 1 ? "#00D4FF" : "#0052FF"}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15 + j * 0.05 }}
              />
            ))}
            
            {/* Connection chain */}
            {i < 2 && (
              <motion.line
                x1={50 + i * 40}
                y1={35}
                x2={60 + i * 40}
                y2={35}
                stroke="#00D4FF"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15 }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
              />
            )}
          </motion.g>
        ))}
      </motion.g>

      {/* Smart Contract center - main focus */}
      <motion.g
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring", duration: 1 }}
      >
        {/* Contract document */}
        <motion.path
          d="M 45,65 L 45,110 Q 45,115 50,115 L 90,115 Q 95,115 95,110 L 95,75 L 85,65 Z"
          fill="url(#contractGradient)"
          stroke="#0052FF"
          strokeWidth="2"
          animate={{
            fill: ['url(#contractGradient)', 'url(#contractGradientActive)', 'url(#contractGradient)'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        {/* Folded corner */}
        <motion.path
          d="M 85,65 L 85,75 L 95,75 Z"
          fill="rgba(0, 82, 255, 0.3)"
          stroke="#0052FF"
          strokeWidth="2"
        />
        
        {/* Contract lines */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1="52"
            y1={78 + i * 8}
            x2="88"
            y2={78 + i * 8}
            stroke="#00D4FF"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.1 }}
          />
        ))}
        
        {/* Smart contract badge */}
        <motion.circle
          cx="70"
          cy="97"
          r="8"
          fill="#10B981"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, type: "spring" }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.8))'
          }}
        />
        
        {/* Checkmark */}
        <motion.path
          d="M 66,97 L 69,100 L 74,94"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7 }}
        />
      </motion.g>

      {/* Target crosshair overlay */}
      <motion.g>
        {/* Outer ring */}
        <motion.circle
          cx="70"
          cy="70"
          r="60"
          stroke="url(#ringGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0, rotate: 0 }}
          whileInView={{ pathLength: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ 
            pathLength: { duration: 2 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        
        {/* Scanner lines */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.line
            key={angle}
            x1="70"
            y1="70"
            x2={70 + Math.cos(angle * Math.PI / 180) * 45}
            y2={70 + Math.sin(angle * Math.PI / 180) * 45}
            stroke="#00D4FF"
            strokeWidth="1"
            strokeDasharray="2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 + i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Data nodes */}
      {[
        { x: 25, y: 70, color: '#0052FF' },
        { x: 115, y: 70, color: '#00D4FF' },
        { x: 70, y: 25, color: '#10B981' },
      ].map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill={node.color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 + i * 0.1 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            style={{
              filter: `drop-shadow(0 0 8px ${node.color})`
            }}
          />
          {/* Pulse rings */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="6"
            stroke={node.color}
            strokeWidth="2"
            fill="none"
            animate={{
              r: [6, 15, 6],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        </motion.g>
      ))}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const radius = 55;
        const x = 70 + Math.cos(angle) * radius;
        const y = 70 + Math.sin(angle) * radius;
        
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
            transition={{ delay: 2.2 + i * 0.03 }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            style={{
              filter: 'blur(0.5px)'
            }}
          />
        );
      })}

      <defs>
        <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 82, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(0, 82, 255, 0.1)" />
        </linearGradient>
        
        <linearGradient id="blockGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 212, 255, 0.2)" />
        </linearGradient>
        
        <linearGradient id="contractGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 82, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 212, 255, 0.2)" />
        </linearGradient>
        
        <linearGradient id="contractGradientActive" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 212, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
        </linearGradient>
        
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
