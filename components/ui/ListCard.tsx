'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ListItem {
  id: string | number;
  avatar?: string;
  avatarFallback?: string;
  title: string;
  subtitle?: string;
  value?: string | number;
  valueLabel?: string;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'danger' | 'info';
}

interface ListCardProps {
  title: string;
  items: ListItem[];
  delay?: number;
  showArrow?: boolean;
  onItemClick?: (item: ListItem) => void;
}

export default function ListCard({ title, items, delay = 0, showArrow = true, onItemClick }: ListCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="chart-card"
    >
      {/* Header */}
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        <button className="chart-action-btn">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* List */}
      <div className="space-y-1">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.05 }}
            className="list-item group cursor-pointer"
            onClick={() => onItemClick?.(item)}
          >
            <div className="list-item-left">
              {/* Avatar */}
              {item.avatar ? (
                <div className="list-item-avatar overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="list-item-avatar">
                  {item.avatarFallback || item.title.charAt(0)}
                </div>
              )}
              
              {/* Info */}
              <div className="list-item-info">
                <h4>{item.title}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            </div>

            <div className="list-item-right flex items-center gap-3">
              {/* Value */}
              {item.value !== undefined && (
                <div>
                  {item.valueLabel && <p className="list-item-label">{item.valueLabel}</p>}
                  <p className="list-item-value">{item.value}</p>
                </div>
              )}
              
              {/* Badge */}
              {item.badge && (
                <span className={`badge badge-${item.badgeColor || 'primary'}`}>
                  {item.badge}
                </span>
              )}

              {/* Arrow */}
              {showArrow && (
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

