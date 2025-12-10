'use client';

import { motion } from 'framer-motion';
import { Trophy, ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const topSeers = [
  {
    id: 1,
    name: 'CryptoKing',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoKing&backgroundColor=f59e0b',
    winRate: '87.5%',
    earnings: '$12,450',
    rank: 1,
  },
  {
    id: 2,
    name: 'SportsMaster',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster&backgroundColor=d97706',
    winRate: '84.2%',
    earnings: '$9,830',
    rank: 2,
  },
  {
    id: 3,
    name: 'BasedBettor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BasedBettor&backgroundColor=b45309',
    winRate: '81.8%',
    earnings: '$7,620',
    rank: 3,
  },
  {
    id: 4,
    name: 'Web3Prophet',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Prophet&backgroundColor=92400e',
    winRate: '79.5%',
    earnings: '$5,940',
    rank: 4,
  },
];

export default function TopSeers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      id="leaderboard"
      className="glass-card p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-[var(--accent-primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Top Seers</h3>
            <p className="text-sm text-[var(--text-muted)]">Best performers</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
        </motion.button>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2">
        {topSeers.map((seer, index) => (
          <motion.div
            key={seer.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--glass-bg-hover)] transition-colors cursor-pointer group"
          >
            {/* Rank */}
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold
                          ${seer.rank === 1 ? 'bg-[var(--accent-primary)] text-black' : 
                            seer.rank === 2 ? 'bg-gray-400 text-black' : 
                            seer.rank === 3 ? 'bg-orange-700 text-white' : 
                            'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)]'}`}
            >
              {seer.rank}
            </div>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[var(--glass-border)]">
              <Image
                src={seer.avatar}
                alt={seer.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{seer.name}</p>
              <p className="text-xs text-[var(--text-muted)]">Win Rate: {seer.winRate}</p>
            </div>

            {/* Earnings */}
            <div className="text-right">
              <p className="text-sm font-semibold text-[var(--accent-primary)]">{seer.earnings}</p>
              <p className="text-xs text-[var(--text-muted)]">Earnings</p>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-4 h-4 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full mt-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--glass-bg-hover)] hover:border-[var(--accent-primary)] transition-all"
      >
        View Full Leaderboard
      </motion.button>
    </motion.div>
  );
}

