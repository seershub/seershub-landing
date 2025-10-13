'use client';

import { motion } from 'framer-motion';
import { useAccount, useEnsName, useEnsAvatar, useBalance } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import Image from 'next/image';
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import { MOCK_USER_PREDICTIONS, MOCK_USER_INSIGHTS } from '@/lib/mockData';

export default function ProfileView() {
  const { address } = useAccount();
  
  const { data: ensName } = useEnsName({
    address,
    chainId: 8453,
  });
  
  const { data: avatar } = useEnsAvatar({
    name: ensName || undefined,
    chainId: 8453,
  });

  const displayName = ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '—');
  const avatarUrl = avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${address}`;

  const formatDate = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-[#0052FF]">
              <Image
                src={avatarUrl}
                alt={displayName}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-3 sm:border-4 border-[#000814]">
              73
            </div>
          </div>
          
          {/* Info */}
          <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{displayName}</h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <span className="text-white/60">Rank:</span>
                <span className="text-[#00D4FF] font-bold">#127</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <span className="text-white/60">Level:</span>
                <span className="text-yellow-500 font-bold">Pro ⭐⭐</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <span className="text-white/60">Streak:</span>
                <span className="text-orange-500 font-bold">🔥 3</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-white/60">
              Member since: January 2025 • Base Sepolia
            </div>
          </div>
          
          {/* Total Earnings */}
          <div className="text-center sm:text-right shrink-0 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <div className="text-xs sm:text-sm text-white/60 mb-1">Total Earnings</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-500 flex items-center justify-center sm:justify-end gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl">💵</span>
              <span>450</span>
            </div>
            <div className="text-xs text-white/60 mt-1">From 12 wins</div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Predictions', value: '127', change: '↑ 12 this week', color: 'text-[#00D4FF]', positive: true },
          { label: 'Accuracy Rate', value: '73%', change: '↑ 5% from last week', color: 'text-green-500', positive: true },
          { label: 'Competitions Won', value: '12', change: 'Top 10% finishes', color: 'text-yellow-500', positive: null },
          { label: 'Badges Earned', value: '5', change: '2 more to unlock', color: 'text-purple-500', positive: null },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:scale-105 hover:bg-white/[0.06] transition-all"
          >
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-sm text-white/60 mb-2">{stat.label}</div>
            <div className={`text-xs flex items-center justify-center gap-1 ${
              stat.positive === true ? 'text-green-500' : 
              stat.positive === false ? 'text-red-500' : 'text-white/50'
            }`}>
              {stat.positive !== null && (stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />)}
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prediction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-bold">📊 Recent Predictions</h3>
          <button className="text-xs sm:text-sm text-[#00D4FF] hover:underline">
            View All →
          </button>
        </div>
        
        <div className="space-y-3">
          {MOCK_USER_PREDICTIONS.map((pred) => (
            <div
              key={pred.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl transition-colors border border-white/5"
            >
              {/* Match Info */}
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="text-xl sm:text-2xl">{pred.homeTeam.flag}</span>
                  <span className="text-xs sm:text-sm text-white/40">vs</span>
                  <span className="text-xl sm:text-2xl">{pred.awayTeam.flag}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-semibold truncate">
                    {pred.homeTeam.name} vs {pred.awayTeam.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/50">
                    {pred.league} • {formatDate(pred.timestamp)}
                  </div>
                </div>
              </div>
              
              {/* Prediction & Result */}
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                <div className="text-left sm:text-right">
                  <div className="text-[10px] sm:text-xs text-white/60">Your Prediction</div>
                  <div className="text-xs sm:text-sm font-bold">{pred.outcome}</div>
                </div>
                
                {/* Result */}
                {pred.correct !== null ? (
                  <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap ${
                    pred.correct 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {pred.correct ? '✓ Correct' : '✗ Incorrect'}
                  </div>
                ) : (
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-yellow-500/20 text-yellow-500 font-semibold text-xs sm:text-sm whitespace-nowrap">
                    ⏳ Pending
                  </div>
                )}
                
                {/* TX Link */}
                <button
                  onClick={() => window.open(`https://sepolia.basescan.org/tx/${pred.txHash}`, '_blank')}
                  className="p-1.5 sm:p-2 hover:bg-[#00D4FF]/20 rounded-lg transition-colors shrink-0"
                  title="View on BaseScan"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-bold">💬 Your Insights</h3>
          <div className="text-xs sm:text-sm text-white/60">
            {MOCK_USER_INSIGHTS.length} saved
          </div>
        </div>
        
        <div className="space-y-3">
          {MOCK_USER_INSIGHTS.map((insight) => (
            <div key={insight.id} className="p-4 bg-white/[0.02] rounded-xl border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{insight.match}</span>
                  <span className="text-xs text-white/40">• {insight.date}</span>
                </div>
                {insight.correct !== null && (
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    insight.correct ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                  }`}>
                    {insight.correct ? '✓ Right' : '✗ Wrong'}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/70 mb-2">{insight.reasoning}</p>
              {insight.correct && (
                <div className="text-xs text-green-500">
                  💡 Great analysis! You earned +10 accuracy points
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
      >
        <h3 className="text-lg sm:text-xl font-bold mb-4">⚙️ Settings</h3>
        
        <div className="space-y-4">
          {/* Notification Preferences */}
          <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5">
            <div>
              <div className="font-semibold text-sm">Match Start Notifications</div>
              <div className="text-xs text-white/50">Get notified 1 hour before matches</div>
            </div>
            <button className="w-12 h-6 bg-[#0052FF] rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-all" />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5">
            <div>
              <div className="font-semibold text-sm">Results Notifications</div>
              <div className="text-xs text-white/50">Get notified when results are verified</div>
            </div>
            <button className="w-12 h-6 bg-white/20 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition-all" />
            </button>
          </div>
          
          {/* Display Preferences */}
          <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
            <div className="font-semibold text-sm mb-3">Default Entry Amount</div>
            <div className="flex gap-2">
              {[1, 3, 5].map((amount) => (
                <button
                  key={amount}
                  className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                    amount === 3
                      ? 'border-[#0052FF] bg-[#0052FF]/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {amount} USDC
                </button>
              ))}
            </div>
          </div>
          
          {/* Account Actions */}
          <div className="pt-4 border-t border-white/10">
            <button className="w-full py-3 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors font-semibold">
              Disconnect Wallet
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

