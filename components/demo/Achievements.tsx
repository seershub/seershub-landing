'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Trophy, Star, Flame, Lock, Zap, Award, Shield } from 'lucide-react';

const BADGES = [
  { 
    id: 1, 
    name: 'First Prediction', 
    icon: Target, 
    unlocked: true, 
    color: 'from-emerald-400 via-green-500 to-teal-600',
    rarity: 'Common',
    rarityColor: 'text-green-400',
    unlockedDate: 'Jan 15, 2025'
  },
  { 
    id: 2, 
    name: 'Hat Trick', 
    description: '3 correct predictions', 
    icon: Award, 
    unlocked: true, 
    color: 'from-blue-400 via-cyan-500 to-sky-600',
    rarity: 'Rare',
    rarityColor: 'text-blue-400',
    unlockedDate: 'Jan 18, 2025'
  },
  { 
    id: 3, 
    name: 'League Expert', 
    description: 'Master of the game', 
    icon: Trophy, 
    unlocked: true, 
    color: 'from-yellow-400 via-amber-500 to-orange-600',
    rarity: 'Epic',
    rarityColor: 'text-yellow-400',
    unlockedDate: 'Jan 20, 2025'
  },
  { 
    id: 4, 
    name: 'Early Adopter', 
    description: 'Base pioneer', 
    icon: Star, 
    unlocked: false, 
    color: 'from-purple-400 via-violet-500 to-fuchsia-600',
    rarity: 'Legendary',
    rarityColor: 'text-purple-400',
    requirement: 'Join before Q2 2026'
  },
  { 
    id: 5, 
    name: 'Hot Streak', 
    description: '5 wins in a row', 
    icon: Flame, 
    unlocked: false, 
    color: 'from-red-400 via-orange-500 to-pink-600',
    rarity: 'Epic',
    rarityColor: 'text-orange-400',
    requirement: 'Win 5 consecutive'
  },
  { 
    id: 6, 
    name: 'Lightning Fast', 
    description: 'Predict in 10 seconds', 
    icon: Zap, 
    unlocked: false, 
    color: 'from-indigo-400 via-purple-500 to-pink-600',
    rarity: 'Rare',
    rarityColor: 'text-indigo-400',
    requirement: 'Submit prediction <10s'
  },
  { 
    id: 7, 
    name: 'Diamond Hands', 
    description: 'USDC mastery', 
    icon: Shield, 
    unlocked: false, 
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
    rarity: 'Legendary',
    rarityColor: 'text-cyan-400',
    requirement: 'Win 100+ USDC'
  },
];

export default function Achievements() {
  return (
    <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold">🏅 Achievements & Badges</h3>
        <div className="text-sm text-white/60">
          <strong className="text-[#00D4FF]">3</strong> / {BADGES.length} unlocked
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
        {BADGES.map((badge, i) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: i * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ scale: badge.unlocked ? 1.05 : 1.02, y: -5 }}
              className={`group relative p-4 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${
                badge.unlocked
                  ? `bg-gradient-to-br ${badge.color} border-white/30 shadow-lg hover:shadow-2xl`
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Shimmer Effect for Unlocked */}
              {badge.unlocked && (
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: i * 0.2,
                    ease: 'linear'
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ width: '50%' }}
                />
              )}

              {/* Badge Content */}
              <div className="relative flex flex-col items-center gap-2">
                {/* Icon with Glow */}
                <div className={`relative ${badge.unlocked ? '' : 'opacity-30 grayscale'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    badge.unlocked 
                      ? 'bg-white/20 backdrop-blur shadow-lg' 
                      : 'bg-white/5'
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  {badge.unlocked && (
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl -z-10" />
                  )}
                </div>

                {/* Badge Info */}
                <div className="text-center w-full">
                  <div className={`text-xs font-bold mb-0.5 ${badge.unlocked ? 'text-white' : 'text-white/30'}`}>
                    {badge.name}
                  </div>
                  {badge.description && (
                    <div className={`text-[10px] leading-tight ${badge.unlocked ? 'text-white/70' : 'text-white/20'}`}>
                      {badge.description}
                    </div>
                  )}
                  
                  {/* Rarity Badge */}
                  <div className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    badge.unlocked 
                      ? `${badge.rarityColor} bg-white/20 border border-white/30` 
                      : 'text-white/20 bg-white/5 border border-white/5'
                  }`}>
                    {badge.rarity}
                  </div>
                </div>
              </div>

              {/* Unlocked Checkmark */}
              {badge.unlocked && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', delay: i * 0.1 + 0.3 }}
                  className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center ring-4 ring-[#000814] shadow-lg shadow-green-500/50"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}

              {/* Locked Icon */}
              {!badge.unlocked && (
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center ring-4 ring-[#000814]">
                  <Lock className="w-3.5 h-3.5 text-white/50" />
                </div>
              )}

              {/* Hover Tooltip */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity p-3 ${
                badge.unlocked ? 'backdrop-blur' : ''
              }`}>
                {badge.unlocked ? (
                  <>
                    <div className={`text-2xl mb-2`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs font-bold text-white mb-1">{badge.name}</div>
                    <div className="text-[10px] text-white/70 text-center mb-2">
                      {badge.description}
                    </div>
                    <div className="text-[9px] text-green-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlocked {badge.unlockedDate}
                    </div>
                  </>
                ) : (
                  <>
                    <Lock className="w-6 h-6 text-white/60 mb-2" />
                    <div className="text-xs font-bold text-white/80 mb-1">Locked</div>
                    <div className="text-[10px] text-white/60 text-center leading-tight">
                      {badge.requirement}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

