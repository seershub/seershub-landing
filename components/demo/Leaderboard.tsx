'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target } from 'lucide-react';

const MOCK_LEADERS = [
  { rank: 1, name: 'alice.base', accuracy: 94, predictions: 127, earnings: 450 },
  { rank: 2, name: 'bob.base', accuracy: 91, predictions: 89, earnings: 380 },
  { rank: 3, name: 'carol.base', accuracy: 87, predictions: 156, earnings: 290 },
  { rank: 4, name: 'dave.base', accuracy: 85, predictions: 78, earnings: 240 },
  { rank: 5, name: 'eve.base', accuracy: 82, predictions: 134, earnings: 215 },
  { rank: 6, name: 'frank.base', accuracy: 80, predictions: 92, earnings: 180 },
  { rank: 7, name: 'grace.base', accuracy: 78, predictions: 67, earnings: 145 },
  { rank: 8, name: 'henry.base', accuracy: 76, predictions: 103, earnings: 120 },
  { rank: 9, name: 'iris.base', accuracy: 74, predictions: 54, earnings: 95 },
  { rank: 10, name: 'jack.base', accuracy: 73, predictions: 81, earnings: 80 },
];

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
            {MOCK_LEADERS.map((user, i) => (
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
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0052FF] to-[#00D4FF]" />
                    <span className="font-semibold">{user.name}</span>
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

