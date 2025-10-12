'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, TrendingUp, Award, Star, Flame } from 'lucide-react';

export default function Leaderboard() {
  // Mock leaderboard data with NFT avatars
  const leaders = [
    {
      rank: 1,
      username: "CryptoKing",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoKing&backgroundColor=0052FF",
      predictions: 248,
      winRate: 87.5,
      earnings: 12450,
      badges: ['🏆', '🔥', '⭐'],
      tier: 'Legendary'
    },
    {
      rank: 2,
      username: "SportsMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster&backgroundColor=06B6D4",
      predictions: 195,
      winRate: 84.2,
      earnings: 9830,
      badges: ['🥈', '⚡', '💎'],
      tier: 'Master'
    },
    {
      rank: 3,
      username: "BasedBettor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BasedBettor&backgroundColor=8B5CF6",
      predictions: 167,
      winRate: 81.8,
      earnings: 7620,
      badges: ['🥉', '🎯', '✨'],
      tier: 'Master'
    },
    {
      rank: 4,
      username: "Web3Prophet",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Prophet&backgroundColor=10B981",
      predictions: 142,
      winRate: 79.5,
      earnings: 5940,
      badges: ['🌟', '💫'],
      tier: 'Expert'
    },
    {
      rank: 5,
      username: "ChainGuru",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChainGuru&backgroundColor=F59E0B",
      predictions: 128,
      winRate: 76.3,
      earnings: 4820,
      badges: ['⚡', '🎖️'],
      tier: 'Expert'
    }
  ];

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Legendary': return 'from-amber-500 to-orange-500';
      case 'Master': return 'from-purple-500 to-pink-500';
      case 'Expert': return 'from-cyan-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="w-6 h-6 text-amber-500" />;
      case 2: return <Award className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-600" />;
      default: return <Star className="w-5 h-5 text-white/40" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 relative">
      {/* DEMO Badge - Top Right - Hidden on Mobile */}
      <div className="hidden md:block absolute top-8 right-8 z-20">
        <div className="px-6 py-3 rounded-full bg-accent-purple/20 border-2 border-accent-purple backdrop-blur-sm">
          <span className="text-accent-purple font-bold text-sm uppercase tracking-wider">📊 Demo Data</span>
        </div>
      </div>

      <div className="container-responsive">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-accent-amber/10 border border-accent-amber/30 mb-6"
          >
            <Flame className="w-4 h-4 text-accent-amber" />
            <span className="text-sm font-semibold text-accent-amber">Top Performers</span>
          </motion.div>
          
          <h2 className="text-section-title mb-4 text-white">
            <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Global</strong>
            Leaderboard
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            See who's dominating the prediction game. Earn your place among the legends.
          </p>
        </div>

        {/* Leaderboard table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 border-b border-white/10 text-sm text-white/50">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Player</div>
            <div className="col-span-2 text-center">Predictions</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-center">Earnings</div>
            <div className="col-span-1 text-center">Badges</div>
          </div>

          {/* Leaderboard entries - Responsive */}
          <div className="divide-y divide-white/5">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                className="px-3 sm:px-4 md:px-8 py-4 md:py-6"
              >
                {/* Mobile Layout - Card Style */}
                <div className="md:hidden">
                  {/* Top Row: Rank + Player */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0">
                      {getRankIcon(leader.rank)}
                    </div>
                    
                    {/* Player info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className={`p-[2px] rounded-xl bg-gradient-to-br ${getTierColor(leader.tier)}`}>
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-900">
                            <Image 
                              src={leader.avatar}
                              alt={leader.username}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {leader.rank === 1 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                            <Trophy className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm truncate">{leader.username}</div>
                        <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
                                       bg-gradient-to-r ${getTierColor(leader.tier)} text-white`}>
                          {leader.tier}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid - 3 Columns */}
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-white/50 mb-1">Predictions</div>
                      <div className="font-semibold text-sm">{leader.predictions}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-white/50 mb-1">Win Rate</div>
                      <div className="font-semibold text-sm text-accent-green">{leader.winRate}%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-white/50 mb-1">Earnings</div>
                      <div className="font-bold text-sm text-primary-500">${leader.earnings.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Badges Row */}
                  {leader.badges.length > 0 && (
                    <div className="flex gap-1.5 justify-center">
                      {leader.badges.map((badge, i) => (
                        <span key={i} className="text-lg">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Desktop Layout - Grid */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1 flex items-center justify-center">
                    {getRankIcon(leader.rank)}
                  </div>

                  {/* Player info */}
                  <div className="col-span-4 flex items-center gap-4">
                    {/* NFT Avatar */}
                    <div className="relative">
                      <div className={`p-[2px] rounded-2xl bg-gradient-to-br ${getTierColor(leader.tier)}`}>
                        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-neutral-900">
                          <Image 
                            src={leader.avatar}
                            alt={leader.username}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {leader.rank === 1 && (
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute -top-1 -right-1"
                        >
                          <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                            <Trophy className="w-4 h-4 text-white" />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <div className="font-semibold text-white mb-1">{leader.username}</div>
                      <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
                                     bg-gradient-to-r ${getTierColor(leader.tier)} text-white`}>
                        {leader.tier}
                      </div>
                    </div>
                  </div>

                  {/* Predictions */}
                  <div className="col-span-2 text-center">
                    <span className="font-semibold">{leader.predictions}</span>
                  </div>

                  {/* Win Rate */}
                  <div className="col-span-2 text-center">
                    <span className="font-semibold text-accent-green">{leader.winRate}%</span>
                  </div>

                  {/* Earnings */}
                  <div className="col-span-2 text-center">
                    <span className="font-bold text-primary-500">${leader.earnings.toLocaleString()}</span>
                  </div>

                  {/* Badges */}
                  <div className="col-span-1 flex gap-1 justify-center">
                    {leader.badges.map((badge, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        className="text-xl cursor-pointer"
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-8 py-6 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold mb-1">Ready to compete?</div>
                <div className="text-sm text-white/60">Join thousands of players earning on Base</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start Predicting
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-sm text-white/60">Total Predictions Made</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold mb-2 text-accent-green">82.3%</div>
            <div className="text-sm text-white/60">Average Win Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold mb-2 text-primary-500">$45K+</div>
            <div className="text-sm text-white/60">Total Paid Out</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

