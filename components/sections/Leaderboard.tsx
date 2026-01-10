'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, TrendingUp, Award, Star, Flame } from 'lucide-react';

export default function Leaderboard() {
  // Top 5 leaders only
  const leaders = [
    {
      rank: 1,
      username: "CryptoKing",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoKing&backgroundColor=0052FF",
      predictions: 248,
      winRate: 87.5,
      earnings: 12450,
      badges: ['🏆', '🔥'],
      tier: 'Legendary'
    },
    {
      rank: 2,
      username: "SportsMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster&backgroundColor=06B6D4",
      predictions: 195,
      winRate: 84.2,
      earnings: 9830,
      badges: ['🥈', '⚡'],
      tier: 'Master'
    },
    {
      rank: 3,
      username: "BasedBettor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BasedBettor&backgroundColor=8B5CF6",
      predictions: 167,
      winRate: 81.8,
      earnings: 7620,
      badges: ['🥉', '🎯'],
      tier: 'Master'
    },
    {
      rank: 4,
      username: "Web3Prophet",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Prophet&backgroundColor=10B981",
      predictions: 142,
      winRate: 79.5,
      earnings: 5940,
      badges: ['🌟'],
      tier: 'Expert'
    },
    {
      rank: 5,
      username: "ChainGuru",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChainGuru&backgroundColor=F59E0B",
      predictions: 128,
      winRate: 76.3,
      earnings: 4820,
      badges: ['⚡'],
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

  const getRankDisplay = (rank: number) => {
    switch(rank) {
      case 1: return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30"><Trophy className="w-4 h-4 text-white" /></div>;
      case 2: return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center"><Award className="w-4 h-4 text-white" /></div>;
      case 3: return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center"><Award className="w-4 h-4 text-white" /></div>;
      default: return <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-sm font-bold text-white/60">{rank}</div>;
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="container-responsive max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full 
                         border border-accent-amber/30 mb-4">
            <Flame className="w-4 h-4 text-accent-amber" />
            <span className="text-sm font-semibold text-accent-amber">Top Performers</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
            <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Global
            </span>
            {' '}Leaderboard
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto">
            See who's dominating the prediction game.
          </p>
        </motion.div>

        {/* Leaderboard Table - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Table header - Desktop only */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 text-xs text-white/40 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Player</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-center">Predictions</div>
            <div className="col-span-2 text-center">Earnings</div>
            <div className="col-span-1 text-center">Tier</div>
          </div>

          {/* Entries */}
          <div className="divide-y divide-white/5">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-center gap-3 mb-3">
                    {getRankDisplay(leader.rank)}
                    
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`p-[2px] rounded-xl bg-gradient-to-br ${getTierColor(leader.tier)}`}>
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-900">
                          <Image 
                            src={leader.avatar}
                            alt={leader.username}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{leader.username}</div>
                        <div className="flex items-center gap-1">
                          {leader.badges.map((badge, i) => (
                            <span key={i} className="text-sm">{badge}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-primary-500 text-sm">${leader.earnings.toLocaleString()}</div>
                      <div className="text-xs text-accent-green">{leader.winRate}%</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 flex items-center justify-center">
                    {getRankDisplay(leader.rank)}
                  </div>

                  <div className="col-span-4 flex items-center gap-3">
                    <div className={`p-[2px] rounded-xl bg-gradient-to-br ${getTierColor(leader.tier)}`}>
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-900">
                        <Image 
                          src={leader.avatar}
                          alt={leader.username}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{leader.username}</div>
                      <div className="flex items-center gap-1">
                        {leader.badges.map((badge, i) => (
                          <span key={i} className="text-sm">{badge}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="font-semibold text-accent-green">{leader.winRate}%</span>
                  </div>

                  <div className="col-span-2 text-center text-white/60">
                    {leader.predictions}
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="font-bold text-primary-500">${leader.earnings.toLocaleString()}</span>
                  </div>

                  <div className="col-span-1 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
                                   bg-gradient-to-r ${getTierColor(leader.tier)} text-white`}>
                      {leader.tier[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-4 glass border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm text-white">Ready to compete?</div>
                <div className="text-xs text-white/50">Join thousands earning on Base</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-cyan
                         text-white text-sm font-semibold
                         hover:shadow-[0_0_25px_rgba(0,82,255,0.3)]
                         transition-all"
              >
                Start Predicting
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
          {[
            { label: 'Total Predictions', value: '10,000+' },
            { label: 'Avg Win Rate', value: '82.3%', color: 'text-accent-green' },
            { label: 'Total Paid Out', value: '$45K+', color: 'text-primary-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className={`text-xl sm:text-2xl font-bold mb-1 ${stat.color || 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
