'use client';

import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, Zap, ArrowUpRight } from 'lucide-react';
import TeamLogo from '@/components/graphics/TeamLogo';
import LeagueLogo from '@/components/graphics/LeagueLogo';

export default function FeaturedMatch() {
  const match = {
    homeTeam: 'FC Barcelona',
    awayTeam: 'Real Madrid',
    homeTeamId: 'barcelona' as const,
    awayTeamId: 'realmadrid' as const,
    league: 'La Liga',
    leagueId: 'laliga' as const,
    time: '1h 5m',
    participants: 1243,
    prizePool: 6215,
    entryFee: 5,
    homeScore: null as number | null,
    awayScore: null as number | null,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="glass-card overflow-hidden relative"
    >
      {/* Demo Badge */}
      {/* Demo Badge Ribbon */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[20px] right-[-30px] w-32 bg-[var(--accent-primary)] text-black text-[10px] font-bold py-1 text-center transform rotate-45 shadow-lg border-b border-black/20">
          /DEMO
        </div>
      </div>

      {/* Header */}
      <div className="p-4 border-b border-[var(--glass-border)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LeagueLogo league={match.leagueId} size={28} />
          <div>
            <h3 className="font-semibold">{match.league}</h3>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Clock className="w-3 h-3" />
              <span>Starts in {match.time}</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-9 h-9 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors"
          aria-label="Open market"
        >
          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
        </motion.button>
      </div>

      {/* Match Content - Scoreboard Style */}
      <div className="p-6">
        {/* Scoreboard Layout */}
        <div className="space-y-4">
          {/* Teams Row */}
          <div className="flex items-center justify-between">
            {/* Home Team */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-16 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-2 flex items-center justify-center">
                <TeamLogo team={match.homeTeamId} size={56} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{match.homeTeam}</h4>
                <p className="text-xs text-[var(--text-muted)]">Home</p>
              </div>
            </div>

            {/* Score Display (if live) */}
            <div className="px-6">
              {match.homeScore !== null && match.awayScore !== null ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">{match.homeScore}</span>
                  <span className="text-xl text-[var(--text-muted)]">-</span>
                  <span className="text-3xl font-bold">{match.awayScore}</span>
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-[var(--glass-bg)] border-2 border-[var(--accent-primary)]/30 
                              flex items-center justify-center
                              shadow-[0_0_30px_var(--accent-glow)]">
                  <span className="text-sm font-bold text-[var(--accent-primary)]">VS</span>
                </div>
              )}
            </div>

            {/* Away Team */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <div>
                <h4 className="font-bold text-lg text-right">{match.awayTeam}</h4>
                <p className="text-xs text-[var(--text-muted)] text-right">Away</p>
              </div>
              <div className="w-16 h-16 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-2 flex items-center justify-center">
                <TeamLogo team={match.awayTeamId} size={56} />
              </div>
            </div>
          </div>

          {/* Prize Pool Bar */}
          <div className="bg-[var(--glass-bg)] rounded-xl p-4 border border-[var(--glass-border)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[var(--text-muted)]">Prize Pool</span>
              <span className="text-lg font-bold text-[var(--accent-primary)]">
                ${match.prizePool.toLocaleString()}
              </span>
            </div>
            <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              />
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[var(--glass-border)]">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <Users className="w-4 h-4" />
              <span>{match.participants.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-medium">{match.entryFee} USDC</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary"
          >
            <Zap className="w-4 h-4" />
            Predict Now
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-[var(--glass-bg)] border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span>Powered by Base Network</span>
        </div>
        <span className="badge badge-primary">Sample Market</span>
      </div>
    </motion.div>
  );
}
