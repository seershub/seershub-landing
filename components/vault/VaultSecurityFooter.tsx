'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, FileCheck } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  text: string;
  description: string;
}

export default function VaultSecurityFooter() {
  const features: Feature[] = [
    {
      icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />,
      text: 'Audited Smart Contracts',
      description: 'Verified by CertiK'
    },
    {
      icon: <Lock className="w-4 h-4 md:w-5 md:h-5" />,
      text: 'Time-Locked Until Sunday',
      description: 'Automated distribution'
    },
    {
      icon: <Database className="w-4 h-4 md:w-5 md:h-5" />,
      text: 'Non-Custodial',
      description: 'You control your funds'
    },
    {
      icon: <FileCheck className="w-4 h-4 md:w-5 md:h-5" />,
      text: 'Transparent On-Chain',
      description: 'View contract on Basescan'
    },
  ];
  
  return (
    <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-4
                     hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300
                     group"
        >
          <div className="flex items-start gap-3">
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <div className="font-semibold text-xs md:text-sm text-white/90 mb-1">
                {feature.text}
              </div>
              <div className="text-xs text-white/40">
                {feature.description}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

