'use client';

import { motion } from 'framer-motion';
import { Trophy, Target } from 'lucide-react';
import { MOCK_LEADERBOARD } from '@/lib/mockData';
import Image from 'next/image';

export default function Leaderboard() {
  return (
    <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-white/60 text-sm border-b border-white/10">
              <th className="pb-3">Rank</th>
              <th className="pb-3">User</th>
              <th className="pb-3 text-right">Accuracy</th>
              <th className="pb-3 text-right">Predictions</th>
              <th className="pb-3 text-right">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_LEADERBOARD.map((user, i) => (
              <motion.tr
                key={user.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {user.rank <= 3 && (
                      <Trophy className={`w-4 h-4 ${user.rank === 1 ? 'text-yellow-500' : user.rank === 2 ? 'text-gray-400' : 'text-orange-600'}`} />
                    )}
                    <span className="font-mono text-white/80">#{user.rank}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image
                        src={user.avatar}
                        alt={user.baseName || user.address}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{user.baseName || `${user.address.slice(0, 6)}...${user.address.slice(-4)}`}</div>
                      {user.badges.length > 0 && (
                        <div className="flex gap-0.5 mt-0.5">
                          {user.badges.map((badge, idx) => (
                            <span key={idx} className="text-xs">{badge}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <span
                    className={`font-bold ${
                      user.accuracy >= 85 ? 'text-green-500' : user.accuracy >= 75 ? 'text-yellow-500' : 'text-white'
                    }`}
                  >
                    {user.accuracy}%
                  </span>
                </td>
                <td className="py-4 text-right text-white/70">{user.predictions}</td>
                <td className="py-4 text-right text-white/70">${user.earnings}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-[#00D4FF]" />
          <span className="text-sm">Your Rank: <strong>#127</strong></span>
        </div>
        <div className="text-sm text-white/60">73% accuracy</div>
      </div>
    </div>
  );
}

