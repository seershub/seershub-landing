'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamLogoProps {
  team: 'barcelona' | 'realmadrid' | 'manutd' | 'liverpool' | 'bayern' | 'dortmund';
  size?: number;
}

export default function TeamLogo({ team, size = 80 }: TeamLogoProps) {
  const logoFiles = {
    barcelona: '/logos/barcelona.png',
    realmadrid: '/logos/real-madrid.png',
    manutd: '/logos/man-united.png',
    liverpool: '/logos/liverpool.png',
    bayern: '/logos/bayern.png',
    dortmund: '/logos/dortmund.png',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        duration: 0.6,
        bounce: 0.4
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      className="inline-flex items-center justify-center"
    >
      <Image
        src={logoFiles[team]}
        alt={`${team} logo`}
        width={size}
        height={size}
        className="object-contain"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))'
        }}
      />
    </motion.div>
  );
}

