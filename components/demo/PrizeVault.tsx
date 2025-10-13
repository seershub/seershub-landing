'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function PrizeVault() {
  const totalPool = 12450;
  const totalPredictions = 4150;
  const thisWeek = 3240;
  
  // Distribution: 75% to winners, 15% platform fee, 10% reserve
  const winnersPool = totalPool * 0.75;

  const distribution = [
    { place: '🥇 1st Place', percentage: 30, amount: (winnersPool * 0.30).toFixed(0), description: '30% of prize pool' },
    { place: '🥈 2nd Place', percentage: 20, amount: (winnersPool * 0.20).toFixed(0), description: '20% of prize pool' },
    { place: '🥉 3rd Place', percentage: 15, amount: (winnersPool * 0.15).toFixed(0), description: '15% of prize pool' },
    { place: '🏅 4th-10th', percentage: 35, amount: (winnersPool * 0.35).toFixed(0), description: '35% split among 4th-10th' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          🏆 This Week's Prize Pool
        </h3>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-500 font-semibold">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Total Pool */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-500/30 vault-glow"
        >
          <div className="text-sm text-white/60 mb-2">Total Prize Pool</div>
          <div className="text-4xl font-bold text-yellow-500 flex items-center gap-3 mb-2">
            <span className="text-5xl">💵</span>
            <span>{totalPool.toLocaleString()}</span>
            <span className="text-xl text-white/60">USDC</span>
          </div>
          <div className="text-xs text-white/50 mb-3">
            From {totalPredictions.toLocaleString()} predictions this week
          </div>
          <div className="p-2 rounded-lg bg-black/20 text-xs text-white/70">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3 h-3" />
              <strong>Top 10% win prizes</strong> (skill-based, not gambling)
            </div>
          </div>
        </motion.div>

        {/* Competition Timer */}
        <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm text-white/60">Competition Ends</span>
            </div>
            <span className="font-mono font-bold text-[#00D4FF]">2d 14h 23m</span>
          </div>
          <div className="text-xs text-white/50">
            Sunday midnight • Winners announced Monday
          </div>
        </div>

        {/* Prize Distribution */}
        <div>
          <div className="text-sm text-white/60 mb-3 font-semibold">Prize Distribution (Top 10%)</div>
          <div className="space-y-2">
            {distribution.map((item, i) => (
              <motion.div
                key={item.place}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.place.split(' ')[0]}</span>
                    <span className="text-sm font-medium">{item.place.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <span className="text-xs text-white/40 mt-0.5">{item.description}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition">
                    {item.amount} USDC
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30">
          <div className="text-xs text-white/60 space-y-1.5">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>All prizes paid in <strong className="text-[#00D4FF]">USDC</strong> to your wallet</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Skill-based competition, not gambling</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Transparent on-chain distribution</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .vault-glow {
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
          animation: pulse-gold 2s ease-in-out infinite;
        }
        @keyframes pulse-gold {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.4);
          }
        }
      `}</style>
    </motion.div>
  );
}

