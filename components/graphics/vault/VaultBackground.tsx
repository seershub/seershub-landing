'use client';

import { motion } from 'framer-motion';

export default function VaultBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dramatic gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full 
                   bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent 
                   blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full 
                   bg-gradient-radial from-indigo-500/20 via-blue-500/10 to-transparent 
                   blur-3xl"
      />
      
      {/* Metallic texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            )
          `,
        }}
      />
    </div>
  );
}

