'use client';

import { motion } from 'framer-motion';

export default function BaseLogo() {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Base logo circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="url(#baseLogoGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* "B" letter stylized */}
      <motion.path
        d="M 35,30 L 35,70 L 55,70 Q 65,70 65,60 Q 65,55 60,52.5 Q 65,50 65,45 Q 65,35 55,35 Z M 42,42 L 52,42 Q 58,42 58,47 Q 58,52 52,52 L 42,52 Z M 42,58 L 54,58 Q 60,58 60,63 Q 60,68 54,68 L 42,68 Z"
        fill="white"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Orbital ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#ringGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="283"
        initial={{ strokeDashoffset: 283 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Rotating particles */}
      {[0, 120, 240].map((angle, i) => {
        const radian = (angle * Math.PI) / 180;
        return (
          <motion.circle
            key={i}
            r="3"
            fill="#00D4FF"
            animate={{
              cx: [
                50 + 45 * Math.cos(radian),
                50 + 45 * Math.cos(radian + Math.PI * 2)
              ],
              cy: [
                50 + 45 * Math.sin(radian),
                50 + 45 * Math.sin(radian + Math.PI * 2)
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
          />
        );
      })}

      {/* Glow effect */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="rgba(0, 82, 255, 0.3)"
        strokeWidth="4"
        animate={{
          r: [40, 48, 40],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <defs>
        <linearGradient id="baseLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

