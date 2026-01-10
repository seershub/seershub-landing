'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface SubStat {
  label: string;
  value: string | number;
}

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subStats?: SubStat[];
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
  isLive?: boolean;
  backgroundImage?: string;
}

export default function StatsCard({
  icon: Icon,
  label,
  value,
  subStats,
  trend = 'neutral',
  delay = 0,
  isLive = false,
  backgroundImage,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="stats-card group relative overflow-hidden"
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-left opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Live Badge with Animation */}
      {isLive && (
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/30 rounded-full blur-md animate-pulse" />
            <span className="relative badge badge-success text-xs">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-1"
              />
              Live
            </span>
          </motion.div>
        </div>
      )}

      {/* Top Row: Icon + Arrow */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="icon-wrapper bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
        </div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] 
                     flex items-center justify-center cursor-pointer
                     group-hover:border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/10
                     transition-all"
        >
          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
        </motion.div>
      </div>

      {/* Label */}
      <p className="text-sm text-[var(--text-muted)] mb-1 relative z-10">{label}</p>

      {/* Value */}
      <p className="value relative z-10">{value}</p>

      {/* Sub Stats */}
      {subStats && subStats.length > 0 && (
        <div className="sub-stats relative z-10">
          {subStats.map((stat, index) => (
            <div key={index} className="sub-stat">
              <span className="sub-stat-value">{stat.value}</span>
              <span className="sub-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
