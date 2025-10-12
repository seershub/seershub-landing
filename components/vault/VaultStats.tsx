'use client';

import { motion } from 'framer-motion';
import { Coins, Calendar, Trophy } from 'lucide-react';
import { ReactNode } from 'react';

interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function VaultStats() {
  const stats: Stat[] = [
    { label: 'Entry Range', value: '3-10 USDC', icon: <Coins className="w-4 h-4 md:w-5 md:h-5" /> },
    { label: 'Active Week', value: 'Week 42', icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
    { label: 'Total Winners', value: '156', icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" /> },
  ];
  
  return (
    <div className="space-y-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-3 md:p-4
                     hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/30
                              flex items-center justify-center text-blue-400">
                {stat.icon}
              </div>
              <div>
                <div className="text-xs text-white/40">{stat.label}</div>
                <div className="font-semibold text-white/90 text-sm md:text-base">{stat.value}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

