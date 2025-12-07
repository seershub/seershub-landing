'use client';

import { motion } from 'framer-motion';
import { Trophy, Timer, ArrowRight, Wallet, Users, BarChart3, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function LiveMatchesDemo() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      homeTeam: 'Arsenal',
      awayTeam: 'Liverpool',
      league: 'Premier League',
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours from now
      poolSize: '5,000 USDC',
      participants: 1240,
      entryFee: '5 USDC',
      logo1: 'https://media.api-sports.io/football/teams/42.png',
      logo2: 'https://media.api-sports.io/football/teams/40.png',
      status: 'Open'
    },
    {
      id: 2,
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      league: 'La Liga',
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48 hours from now
      poolSize: '10,000 USDC',
      participants: 3500,
      entryFee: '10 USDC',
      logo1: 'https://media.api-sports.io/football/teams/541.png',
      logo2: 'https://media.api-sports.io/football/teams/529.png',
      status: 'Open'
    },
    {
      id: 3,
      homeTeam: 'Man City',
      awayTeam: 'Man United',
      league: 'Premier League',
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
      poolSize: '2,500 USDC',
      participants: 850,
      entryFee: 'Free',
      logo1: 'https://media.api-sports.io/football/teams/50.png',
      logo2: 'https://media.api-sports.io/football/teams/33.png',
      status: 'Closing Soon'
    }
  ]);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-4"
            >
              <Trophy className="w-4 h-4" />
              <span>Live Matches</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-display"
            >
              Predict <span className="text-gradient-fire">Upcoming Matches</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 max-w-xl"
            >
              Join thousands of players predicting outcomes on-chain. Win prizes based on your accuracy.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="btn-secondary group whitespace-nowrap"
          >
            <span>View All Matches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match, i) => (
            <MatchCard key={match.id} match={match} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function MatchCard({ match, index }: { match: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="stadium-card glass-card hover:bg-white/5 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <div className="flex items-center gap-2">
          {match.status === 'Closing Soon' ? (
            <div className="flex items-center gap-1.5 text-accent-gold text-xs font-bold uppercase tracking-wider animate-pulse">
              <Timer className="w-3.5 h-3.5" />
              Closing Soon
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-success text-xs font-bold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Open
            </div>
          )}
        </div>
        <div className="text-xs font-medium text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
          {match.league}
        </div>
      </div>

      {/* Teams */}
      <div className="p-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-6 relative">
          {/* Home */}
          <div className="flex flex-col items-center gap-3 w-1/3 group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={match.logo1} alt={match.homeTeam} className="w-full h-full object-contain relative z-10 drop-shadow-lg" />
            </div>
            <span className="text-sm font-bold text-white text-center leading-tight">{match.homeTeam}</span>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center justify-center w-1/3">
            <div className="text-2xl font-black text-white/20 italic font-display">VS</div>
            <div className="text-xs text-white/40 mt-1">{new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          </div>

          {/* Away */}
          <div className="flex flex-col items-center gap-3 w-1/3 group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={match.logo2} alt={match.awayTeam} className="w-full h-full object-contain relative z-10 drop-shadow-lg" />
            </div>
            <span className="text-sm font-bold text-white text-center leading-tight">{match.awayTeam}</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 w-full gap-3 mb-6">
          <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center border border-white/5">
            <span className="text-xs text-secondary-300 font-medium mb-1">Prize Pool</span>
            <span className="text-lg font-bold text-white flex items-center gap-1">
              {match.poolSize}
            </span>
          </div>
          <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center border border-white/5">
            <span className="text-xs text-white/40 font-medium mb-1">Entry</span>
            <span className="text-lg font-bold text-white">
              {match.entryFee}
            </span>
          </div>
        </div>

        {/* Action */}
        <button className="w-full btn-nova py-3 text-sm rounded-xl">
          Predict Now
        </button>
      </div>
    </motion.div>
  );
}
