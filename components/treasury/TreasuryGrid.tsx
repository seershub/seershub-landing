'use client';

import { motion } from 'framer-motion';
import { Users, Coins, Zap, Shield } from 'lucide-react';
import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtitle: string;
  color: string;
  gradient: string;
  borderColor: string;
  delay: number;
}

function StatCard({ icon, label, value, subtitle, color, gradient, borderColor, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      {/* Glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Card */}
      <div 
        className={`relative bg-gradient-to-br ${gradient} backdrop-blur-sm 
                    rounded-2xl border p-6
                    hover:border-opacity-50 
                    transition-all duration-300`}
        style={{ borderColor: `rgba(${color === 'blue' ? '59, 130, 246' : color === 'amber' ? '251, 191, 36' : color === 'cyan' ? '6, 182, 212' : '16, 185, 129'}, 0.3)` }}
      >
        {/* Icon */}
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
          style={{ 
            background: `rgba(${color === 'blue' ? '59, 130, 246' : color === 'amber' ? '251, 191, 36' : color === 'cyan' ? '6, 182, 212' : '16, 185, 129'}, 0.1)`,
            border: `1px solid rgba(${color === 'blue' ? '59, 130, 246' : color === 'amber' ? '251, 191, 36' : color === 'cyan' ? '6, 182, 212' : '16, 185, 129'}, 0.3)`
          }}
        >
          <div style={{ color: `rgb(${color === 'blue' ? '96, 165, 250' : color === 'amber' ? '252, 211, 77' : color === 'cyan' ? '34, 211, 238' : '52, 211, 153'})` }}>
            {icon}
          </div>
        </div>
        
        {/* Label */}
        <div className="text-sm text-white/40 uppercase tracking-wider font-semibold mb-2">
          {label}
        </div>
        
        {/* Value */}
        <div 
          className="text-4xl font-bold mb-1"
          style={{ color: `rgb(${color === 'blue' ? '96, 165, 250' : color === 'amber' ? '252, 211, 77' : color === 'cyan' ? '34, 211, 238' : '52, 211, 153'})` }}
        >
          {value}
        </div>
        
        {/* Subtitle */}
        <div className="text-xs text-white/30">
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
}

export default function TreasuryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <StatCard
        icon={<Users className="w-6 h-6" />}
        label="Active Players"
        value="4,892"
        subtitle="Across 124 contests"
        color="blue"
        gradient="from-blue-500/10 to-purple-500/10"
        borderColor="blue-500/30"
        delay={0}
      />
      
      <StatCard
        icon={<Coins className="w-6 h-6" />}
        label="Entry Range"
        value="$5-50"
        subtitle="Flexible for all budgets"
        color="amber"
        gradient="from-amber-500/10 to-orange-500/10"
        borderColor="amber-500/30"
        delay={0.1}
      />
      
      <StatCard
        icon={<Zap className="w-6 h-6" />}
        label="Payout Time"
        value="~2s"
        subtitle="Instant settlement"
        color="cyan"
        gradient="from-cyan-500/10 to-blue-500/10"
        borderColor="cyan-500/30"
        delay={0.2}
      />
      
      <StatCard
        icon={<Shield className="w-6 h-6" />}
        label="Transparent"
        value="100%"
        subtitle="All on-chain"
        color="green"
        gradient="from-green-500/10 to-emerald-500/10"
        borderColor="green-500/30"
        delay={0.3}
      />
    </div>
  );
}

