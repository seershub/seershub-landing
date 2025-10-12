'use client';

import { motion } from 'framer-motion';

export default function FloatingCoins() {
  const coins = [
    { x: '10%', y: '20%', delay: 0, duration: 15 },
    { x: '85%', y: '30%', delay: 2, duration: 18 },
    { x: '20%', y: '70%', delay: 4, duration: 20 },
    { x: '90%', y: '80%', delay: 1, duration: 16 },
  ];
  
  return (
    <>
      {coins.map((coin, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: coin.duration,
            repeat: Infinity,
            delay: coin.delay,
            ease: "easeInOut"
          }}
          className="absolute text-6xl pointer-events-none"
          style={{ left: coin.x, top: coin.y }}
        >
          💰
        </motion.div>
      ))}
    </>
  );
}

