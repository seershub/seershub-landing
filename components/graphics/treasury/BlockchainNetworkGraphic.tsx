'use client';

import { motion } from 'framer-motion';

export default function BlockchainNetworkGraphic() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none hidden xl:block">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Central node */}
        <motion.circle
          cx="200"
          cy="200"
          r="20"
          fill="#0052FF"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Top-right node */}
        <motion.circle
          cx="280"
          cy="150"
          r="15"
          fill="#10B981"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Bottom-right node */}
        <motion.circle
          cx="320"
          cy="250"
          r="15"
          fill="#06B6D4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Connection lines */}
        <motion.line
          x1="200" y1="200"
          x2="280" y2="150"
          stroke="#0052FF"
          strokeWidth="2"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.line
          x1="200" y1="200"
          x2="320" y2="250"
          stroke="#06B6D4"
          strokeWidth="2"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

