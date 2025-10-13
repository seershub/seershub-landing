'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function PrizeVault() {
  const totalPool = 12450;
  const thisWeek = 3240;
  const yourShare = 127;

  const distribution = [
    { place: '🥇 1st Place', percentage: 30, amount: (totalPool * 0.30).toFixed(0) },
    { place: '🥈 2nd Place', percentage: 20, amount: (totalPool * 0.20).toFixed(0) },
    { place: '🥉 3rd Place', percentage: 15, amount: (totalPool * 0.15).toFixed(0) },
    { place: '🏆 Top 10', percentage: 25, amount: (totalPool * 0.25).toFixed(0) },
    { place: '💎 Community', percentage: 10, amount: (totalPool * 0.10).toFixed(0) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          🏦 Prize Vault
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
          <div className="text-4xl font-bold text-yellow-500 flex items-center gap-3 mb-3">
            <span className="text-5xl animate-bounce-slow">💵</span>
            ${totalPool.toLocaleString()}
          </div>
          <div className="text-xs text-white/50 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            Distributed to winners after match completion
          </div>
        </motion.div>

        {/* This Week & Your Share */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#00D4FF]" />
              <div className="text-xs text-white/60">This Week</div>
            </div>
            <div className="text-2xl font-bold text-[#00D4FF]">
              ${thisWeek.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <div className="text-xs text-white/60">Your Share</div>
            </div>
            <div className="text-2xl font-bold text-green-500">
              ${yourShare}
            </div>
          </div>
        </div>

        {/* Prize Distribution */}
        <div>
          <div className="text-sm text-white/60 mb-3 font-semibold">Prize Distribution</div>
          <div className="space-y-2">
            {distribution.map((item, i) => (
              <motion.div
                key={item.place}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{item.place}</span>
                  <span className="text-xs text-white/40">({item.percentage}%)</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition">
                  ${item.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30">
          <div className="text-xs text-white/60 text-center">
            💡 All prizes paid in <strong className="text-[#00D4FF]">USDC</strong> directly to your wallet
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

