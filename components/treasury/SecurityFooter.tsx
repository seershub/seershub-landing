'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Lock, FileCheck } from 'lucide-react';
import { ReactNode } from 'react';

interface Badge {
  icon: ReactNode;
  text: string;
  color: string;
}

export default function SecurityFooter() {
  const badges: Badge[] = [
    { icon: <Shield className="w-5 h-5" />, text: 'Secured on Base', color: 'text-blue-400' },
    { icon: <Zap className="w-5 h-5" />, text: 'Instant Settlement', color: 'text-cyan-400' },
    { icon: <Lock className="w-5 h-5" />, text: 'Non-Custodial', color: 'text-green-400' },
    { icon: <FileCheck className="w-5 h-5" />, text: 'Audited Contracts', color: 'text-purple-400' },
  ];
  
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 text-white/50 hover:text-white/70 transition-colors cursor-default"
          >
            <div className={badge.color}>
              {badge.icon}
            </div>
            <span className="text-sm font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

