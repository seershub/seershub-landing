'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Users, Trophy } from 'lucide-react';
import Image from 'next/image';

const matches = [
  {
    id: 1,
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeLogo: '/logos/arsenal.png',
    awayLogo: '/logos/liverpool.png',
    league: 'Premier League',
    time: '20:00',
    date: 'Today',
    pool: '$12,500',
    players: 342,
  },
  {
    id: 2,
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeLogo: '/logos/real-madrid.png',
    awayLogo: '/logos/barcelona.png',
    league: 'La Liga',
    time: '21:00',
    date: 'Tomorrow',
    pool: '$18,200',
    players: 256,
  },
];

export default function LiveMatchesDemo() {
  return (
    <section className="section-gap bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#88FF2A]/10 rounded-full blur-[150px]" />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-neon mb-6 inline-flex">
            <span className="live-dot" />
            LIVE MATCHES
          </div>
          <h2 className="font-display text-section text-white mb-4">
            Upcoming <span className="text-[#88FF2A]">Predictions</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Join the action. Pick your match and prove your skills.
          </p>
        </motion.div>

        {/* Match Cards - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="badge-neon text-xs py-1 px-3">
                    <span className="live-dot" />
                    Open
                  </div>
                  <span className="text-xs text-white/40">{match.league}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Clock className="w-3 h-3" />
                  {match.date} • {match.time}
                </div>
              </div>

              {/* Teams */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  {/* Home */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                      <Image
                        src={match.homeLogo}
                        alt={match.homeTeam}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        onError={(e: any) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white">{match.homeTeam}</span>
                  </div>

                  {/* VS */}
                  <div className="flex flex-col items-center px-4">
                    <span className="text-2xl font-black text-white/20">VS</span>
                  </div>

                  {/* Away */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                      <Image
                        src={match.awayLogo}
                        alt={match.awayTeam}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        onError={(e: any) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white">{match.awayTeam}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <Trophy className="w-4 h-4 text-[#88FF2A] mx-auto mb-1" />
                    <span className="block text-lg font-bold text-white">{match.pool}</span>
                    <span className="text-xs text-white/40">Prize Pool</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <Users className="w-4 h-4 text-[#88FF2A] mx-auto mb-1" />
                    <span className="block text-lg font-bold text-white">{match.players}</span>
                    <span className="text-xs text-white/40">Players</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full btn-neon py-4">
                  Predict Now
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
