'use client';

import { motion } from 'framer-motion';

export default function SportsBall() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute"
    >
      {/* Soccer ball */}
      <motion.circle
        cx="40"
        cy="40"
        r="35"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Pentagon pattern */}
      <motion.path
        d="M40 10 L55 22 L50 40 L30 40 L25 22 Z"
        stroke="url(#gradient)"
        strokeWidth="1.5"
        fill="rgba(0, 82, 255, 0.1)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      
      <motion.path
        d="M25 22 L15 35 L20 50 L30 40 Z"
        stroke="url(#gradient)"
        strokeWidth="1.5"
        fill="rgba(0, 212, 255, 0.1)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
      
      <motion.path
        d="M55 22 L65 35 L60 50 L50 40 Z"
        stroke="url(#gradient)"
        strokeWidth="1.5"
        fill="rgba(139, 92, 246, 0.1)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      />

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

