'use client';

import { motion } from 'framer-motion';

interface FlowStepsProps {
  step: number;
}

export default function FlowSteps({ step }: FlowStepsProps) {
  const colors = [
    { from: '#0052FF', to: '#00D4FF' }, // Step 1: Blue to Cyan
    { from: '#10B981', to: '#00D4FF' }, // Step 2: Green to Cyan
    { from: '#8B5CF6', to: '#F59E0B' }, // Step 3: Purple to Orange
  ];

  const color = colors[step - 1] || colors[0];

  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: step * 0.1 }}
    >
      {/* Outer circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke={`url(#stepGradient${step})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="283"
        initial={{ strokeDashoffset: 283 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: step * 0.1 }}
      />

      {/* Inner circle with pulse */}
      <motion.circle
        cx="50"
        cy="50"
        r="35"
        fill={`url(#fillGradient${step})`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Step number */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="32"
        fontWeight="700"
        fill="white"
      >
        {step}
      </text>

      <defs>
        <linearGradient id={`stepGradient${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.from} />
          <stop offset="100%" stopColor={color.to} />
        </linearGradient>
        
        <linearGradient id={`fillGradient${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`${color.from}20`} />
          <stop offset="100%" stopColor={`${color.to}15`} />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

