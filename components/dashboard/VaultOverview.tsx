'use client';

import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Lock, ArrowUpRight, Shield, Clock } from 'lucide-react';

const vaultData = {
  totalValue: '$45,230',
  prizePool: '$36,184',
  treasury: '$6,784',
  operations: '$2,262',
  nextDistribution: '2d 14h',
  securityLevel: 'Maximum',
};

export default function VaultOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      id="vault"
      className="glass-card p-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: "url('/vault.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.9)',
        }}
      />
      {/* Demo Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="badge badge-info text-xs">Example</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-[var(--accent-primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Community Vault</h3>
            <p className="text-sm text-[var(--text-muted)]">Total Value Locked</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
        </motion.button>
      </div>

      {/* Total Value */}
      <div className="mb-6 relative z-10">
        <p className="text-4xl font-bold text-[var(--accent-primary)]">{vaultData.totalValue}</p>
        <div className="flex items-center gap-2 mt-1">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-500">+12.5% this week</span>
        </div>
      </div>

      {/* Distribution Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
        <div className="bg-[var(--glass-bg)] rounded-xl p-4 border border-[var(--glass-border)] min-w-0">
          <p className="text-xs text-[var(--text-muted)] mb-1">Prize Pool</p>
          <p className="text-lg font-semibold">{vaultData.prizePool}</p>
          <p className="text-xs text-[var(--accent-primary)]">80%</p>
        </div>
        <div className="bg-[var(--glass-bg)] rounded-xl p-4 border border-[var(--glass-border)] min-w-0">
          <p className="text-xs text-[var(--text-muted)] mb-1">Treasury</p>
          <p className="text-lg font-semibold">{vaultData.treasury}</p>
          <p className="text-xs text-[var(--accent-secondary)]">15%</p>
        </div>
        <div className="bg-[var(--glass-bg)] rounded-xl p-4 border border-[var(--glass-border)] min-w-0">
          <p className="text-xs text-[var(--text-muted)] mb-1">Operations</p>
          <p className="text-lg font-semibold">{vaultData.operations}</p>
          <p className="text-xs text-[var(--accent-tertiary)]">5%</p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)] relative z-10 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[var(--text-muted)]" />
          <span className="text-sm text-[var(--text-muted)]">Next Distribution:</span>
          <span className="text-sm font-semibold">{vaultData.nextDistribution}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-500">{vaultData.securityLevel}</span>
        </div>
      </div>
    </motion.div>
  );
}
