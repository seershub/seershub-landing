'use client';

import { motion } from 'framer-motion';
import { Maximize2, Minimize2, BarChart3, Search, ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  actions?: boolean;
  dropdown?: string;
  delay?: number;
}

export default function ChartCard({ title, children, actions = true, dropdown, delay = 0 }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="chart-card min-w-0"
    >
      {/* Header */}
      <div className="chart-header flex-wrap gap-3">
        <h3 className="chart-title truncate">{title}</h3>
        
        <div className="chart-actions">
          {actions && (
            <>
              <button className="chart-action-btn">
                <Maximize2 className="w-4 h-4" />
              </button>
              <button className="chart-action-btn">
                <BarChart3 className="w-4 h-4" />
              </button>
              <button className="chart-action-btn">
                <Search className="w-4 h-4" />
              </button>
            </>
          )}
          
          {dropdown && (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm text-[var(--text-secondary)] hover:bg-[var(--glass-bg-hover)] transition-colors">
              {dropdown}
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="chart-content overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

