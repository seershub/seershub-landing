'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Trophy, Star, Flame, Lock } from 'lucide-react';

const BADGES = [
  { id: 1, name: 'First Prediction', icon: Target, unlocked: true, color: 'from-green-500 to-emerald-600', emoji: '🎯' },
  { id: 2, name: 'Hat Trick', description: '3 correct', icon: TrendingUp, unlocked: true, color: 'from-blue-500 to-cyan-500', emoji: '🎯' },
  { id: 3, name: 'League Expert', icon: Trophy, unlocked: true, color: 'from-yellow-500 to-orange-500', emoji: '🏆' },
  { id: 4, name: 'Early Adopter', icon: Star, unlocked: false, color: 'from-purple-500 to-pink-500', emoji: '⭐', requirement: 'Join before Q2 2026' },
  { id: 5, name: 'Hot Streak', description: '5 in a row', icon: Flame, unlocked: false, color: 'from-red-500 to-orange-600', emoji: '🔥', requirement: 'Win 5 consecutive' },
];

export default function Achievements() {
  return (
    <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <h3 className="text-2xl font-bold mb-6">Achievements & Badges</h3>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {BADGES.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              badge.unlocked
                ? `bg-gradient-to-br ${badge.color} border-white/30 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-white/20`
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
            style={badge.unlocked ? {} : { filter: 'grayscale(100%)' }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl">{badge.emoji}</div>
              <div className="text-center">
                <div className={`text-xs font-semibold ${badge.unlocked ? 'text-white' : 'text-white/40'}`}>
                  {badge.name}
                </div>
                {badge.description && (
                  <div className="text-[10px] text-white/60 mt-0.5">{badge.description}</div>
                )}
              </div>
            </div>

            {badge.unlocked && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: i * 0.1 + 0.3 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-[#000814]"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}

            {!badge.unlocked && (
              <>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center ring-2 ring-[#000814]">
                  <Lock className="w-3 h-3 text-white/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity p-2">
                  <Lock className="w-5 h-5 text-white/60 mb-1" />
                  <div className="text-[10px] text-white/80 text-center leading-tight">
                    {badge.requirement || 'Locked'}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

