'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users } from 'lucide-react';

export default function LiveMatches() {
  const matches = [
    {
      league: "Premier League",
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      homeOdds: "2.45",
      drawOdds: "3.20",
      awayOdds: "2.90",
      pool: "45,230",
      participants: "1,234",
      timeLeft: "2h 15m"
    },
    {
      league: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeOdds: "2.10",
      drawOdds: "3.40",
      awayOdds: "3.20",
      pool: "67,890",
      participants: "2,456",
      timeLeft: "5h 30m"
    },
    {
      league: "Serie A",
      homeTeam: "AC Milan",
      awayTeam: "Inter Milan",
      homeOdds: "2.65",
      drawOdds: "3.10",
      awayOdds: "2.75",
      pool: "32,450",
      participants: "987",
      timeLeft: "1d 3h"
    },
  ];

  return (
    <section className="py-32 px-6 relative bg-navy-light/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Today</strong>
            <span className="text-gradient">Matches</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of users predicting outcomes on major sports events worldwide.
          </p>
        </motion.div>

        <div className="space-y-6">
          {matches.map((match, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Match Info */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-400 font-medium">{match.league}</span>
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {match.timeLeft}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    <div className="text-right">
                      <div className="text-xl font-bold">{match.homeTeam}</div>
                    </div>
                    <div className="text-center text-2xl font-bold text-gray-500">VS</div>
                    <div className="text-left">
                      <div className="text-xl font-bold">{match.awayTeam}</div>
                    </div>
                  </div>
                </div>

                {/* Odds */}
                <div className="flex gap-3 w-full lg:w-auto">
                  <button className="flex-1 lg:flex-none glass-effect hover:bg-base-blue/20 px-6 py-4 rounded-xl transition-all duration-300 border border-transparent hover:border-base-blue">
                    <div className="text-xs text-gray-400 mb-1">Home</div>
                    <div className="text-2xl font-bold text-base-blue">{match.homeOdds}</div>
                  </button>
                  <button className="flex-1 lg:flex-none glass-effect hover:bg-base-blue/20 px-6 py-4 rounded-xl transition-all duration-300 border border-transparent hover:border-base-blue">
                    <div className="text-xs text-gray-400 mb-1">Draw</div>
                    <div className="text-2xl font-bold text-base-blue">{match.drawOdds}</div>
                  </button>
                  <button className="flex-1 lg:flex-none glass-effect hover:bg-base-blue/20 px-6 py-4 rounded-xl transition-all duration-300 border border-transparent hover:border-base-blue">
                    <div className="text-xs text-gray-400 mb-1">Away</div>
                    <div className="text-2xl font-bold text-base-blue">{match.awayOdds}</div>
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-6 w-full lg:w-auto justify-center">
                  <div className="text-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">Pool</span>
                    </div>
                    <div className="text-lg font-bold">${match.pool}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Users</span>
                    </div>
                    <div className="text-lg font-bold">{match.participants}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="glass-effect hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300">
            View All Matches →
          </button>
        </motion.div>
      </div>
    </section>
  );
}


