'use client';

import { motion } from 'framer-motion';

interface TimelineConnectorProps {
  isLast: boolean;
}

export default function TimelineConnector({ isLast }: TimelineConnectorProps) {
  if (isLast) return null;

  return (
    <div className="flex justify-center my-8">
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Vertical line */}
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-base-blue via-accent-cyan to-base-blue"
          animate={{
            backgroundPosition: ['0% 0%', '0% 100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Arrow */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path
            d="M 10,5 L 10,15 M 10,15 L 6,11 M 10,15 L 14,11"
            stroke="url(#arrowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}

