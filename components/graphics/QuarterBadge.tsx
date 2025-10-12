'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface QuarterBadgeProps {
  quarter: string;
  title: string;
  icon: LucideIcon;
  status: 'completed' | 'current' | 'upcoming';
  index: number;
}

export default function QuarterBadge({ quarter, title, icon: Icon, status, index }: QuarterBadgeProps) {
  const statusColors = {
    completed: { bg: 'from-accent-green/20 to-accent-cyan/20', border: 'border-accent-green', icon: 'text-accent-green' },
    current: { bg: 'from-base-blue/20 to-accent-cyan/20', border: 'border-base-blue', icon: 'text-base-blue' },
    upcoming: { bg: 'from-accent-purple/20 to-accent-cyan/20', border: 'border-accent-purple', icon: 'text-accent-purple' }
  };

  const colors = statusColors[status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        duration: 0.8,
        delay: index * 0.1
      }}
      className="relative"
    >
      <div className={`glass-effect-strong p-6 rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
        {/* Quarter badge */}
        <div className="flex items-center justify-between mb-4">
          <motion.span 
            className={`text-xs font-bold uppercase tracking-wider ${colors.icon}`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {quarter}
          </motion.span>
          
          {status === 'current' && (
            <motion.span
              className="glass-effect px-3 py-1 rounded-full text-xs text-base-blue border border-base-blue/30"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(0, 82, 255, 0.3)',
                  '0 0 20px rgba(0, 82, 255, 0.5)',
                  '0 0 10px rgba(0, 82, 255, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LIVE
            </motion.span>
          )}
        </div>

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 mb-4 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center relative`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={`w-8 h-8 ${colors.icon}`} />
          
          {/* Pulsing ring */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${colors.border.replace('border-', 'bg-')}/20`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </motion.div>

        {/* Title */}
        <h4 className="text-xl font-semibold">{title}</h4>

        {/* Status indicator dot */}
        <motion.div
          className={`absolute top-4 right-4 w-3 h-3 rounded-full ${colors.icon.replace('text-', 'bg-')}`}
          animate={status === 'current' ? {
            scale: [1, 1.3, 1],
            opacity: [1, 0.5, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}

