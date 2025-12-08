'use client';

import { motion } from 'framer-motion';
import { Timer, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const matches = [
  {
    id: 1,
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeLogo: '/logos/arsenal.png',
    awayLogo: '/logos/liverpool.png',
    league: 'Premier League',
    startTime: '2025-01-15T20:00:00',
    poolSize: '$12,500',
    entryFee: '$25',
    players: 342,
    status: 'Open',
  },
  {
    id: 2,
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeLogo: '/logos/real-madrid.png',
    awayLogo: '/logos/barcelona.png',
    league: 'La Liga',
    startTime: '2025-01-16T21:00:00',
    poolSize: '$18,200',
    entryFee: '$50',
    players: 256,
    status: 'Closing Soon',
  },
];

function MatchCard({ match, index }: { match: typeof matches[0], index: number }) {
  const isClosingSoon = match.status === 'Closing Soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="match-card group"
    >
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          {isClosingSoon ? (
            <span className="badge-nova text-xs">
              <Timer className="w-3 h-3" />
              Closing Soon
            </span>
          ) : (
            <span className="badge-neon text-xs">
              <span className="live-dot" />
              Open
            </span>
          )}
        </div>
        <span className="text-xs font-medium text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
          {match.league}
        </span>
      </div>

      {/* Teams */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          {/* Home Team */}
          <div className="flex flex-col items-center gap-3 flex-1 group-hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 relative">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={match.homeLogo}
                alt={match.homeTeam}
                className="w-full h-full object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            <span className="text-sm font-bold text-white text-center">
              {match.homeTeam}
            </span>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center px-4">
            <span className="text-xl md:text-2xl font-black text-white/20 italic font-display">
              VS
            </span>
            <span className="text-xs text-white/40 mt-1">
              {new Date(match.startTime).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center gap-3 flex-1 group-hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 relative">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={match.awayLogo}
                alt={match.awayTeam}
                className="w-full h-full object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            <span className="text-sm font-bold text-white text-center">
              {match.awayTeam}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/5">
            <TrendingUp className="w-4 h-4 text-primary mx-auto mb-1" />
            <span className="block text-xs text-white/40 mb-0.5">Pool</span>
            <span className="text-sm font-bold text-white">{match.poolSize}</span>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/5">
            <Users className="w-4 h-4 text-neon mx-auto mb-1" />
            <span className="block text-xs text-white/40 mb-0.5">Players</span>
            <span className="text-sm font-bold text-white">{match.players}</span>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/5">
            <span className="block text-xs text-white/40 mb-0.5">Entry</span>
            <span className="text-sm font-bold text-white">{match.entryFee}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full btn-nova py-3 text-sm">
          Predict Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function LiveMatchesDemo() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neon-gradient opacity-50" />

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-nova mb-4 inline-flex">
            <span className="live-dot" />
            Live Matches
          </span>
          <h2 className="text-section-title text-white mb-4">
            Upcoming Predictions
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Join the action. Predict match outcomes and compete for prize pools.
          </p>
        </motion.div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {matches.map((match, index) => (
            <MatchCard key={match.id} match={match} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/demo"
            className="btn-glass inline-flex items-center gap-2"
          >
            View All Matches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
