'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface LeagueLogoProps {
  league: 'laliga' | 'premier' | 'bundesliga';
  size?: number;
}

export default function LeagueLogo({ league, size = 32 }: LeagueLogoProps) {
  const logoFiles = {
    laliga: '/logos/laliga.png',
    premier: '/logos/premier-league.png',
    bundesliga: '/logos/bundesliga.png',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center justify-center"
    >
      <Image
        src={logoFiles[league]}
        alt={`${league} logo`}
        width={size}
        height={size}
        className="object-contain"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
        }}
      />
    </motion.div>
  );
}

