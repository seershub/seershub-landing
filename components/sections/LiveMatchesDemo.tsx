'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, Zap } from 'lucide-react';
import LeagueLogo from '@/components/graphics/LeagueLogo';
import TeamLogo from '@/components/graphics/TeamLogo';
import ModernPredictButton from '@/components/graphics/ModernPredictButton';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamId: 'barcelona' | 'realmadrid' | 'manutd' | 'liverpool' | 'bayern' | 'dortmund';
  awayTeamId: 'barcelona' | 'realmadrid' | 'manutd' | 'liverpool' | 'bayern' | 'dortmund';
  league: string;
  leagueId: 'laliga' | 'premier' | 'bundesliga';
  startTime: number; // minutes from now
  entryFee: number;
  participants: number;
  prizePool: number;
}

export default function LiveMatchesDemo() {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  const matches: Match[] = [
    {
      id: 1,
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      homeTeamId: "barcelona",
      awayTeamId: "realmadrid",
      league: "La Liga",
      leagueId: "laliga",
      startTime: 65,
      entryFee: 5,
      participants: 1243,
      prizePool: 6215
    },
    {
      id: 2,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool FC",
      homeTeamId: "manutd",
      awayTeamId: "liverpool",
      league: "Premier League",
      leagueId: "premier",
      startTime: 125,
      entryFee: 10,
      participants: 2891,
      prizePool: 28910
    },
    {
      id: 3,
      homeTeam: "Bayern München",
      awayTeam: "Borussia Dortmund",
      homeTeamId: "bayern",
      awayTeamId: "dortmund",
      league: "Bundesliga",
      leagueId: "bundesliga",
      startTime: 45,
      entryFee: 5,
      participants: 987,
      prizePool: 4935
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft: { [key: number]: string } = {};
      matches.forEach(match => {
        const hours = Math.floor(match.startTime / 60);
        const minutes = match.startTime % 60;
        newTimeLeft[match.id] = hours > 0 
          ? `${hours}h ${minutes}m` 
          : `${minutes}m`;
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* DEMO Badge - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="px-6 py-3 rounded-full bg-accent-amber/20 border-2 border-accent-amber backdrop-blur-sm">
          <span className="text-accent-amber font-bold text-sm uppercase tracking-wider">📺 Demo Preview</span>
        </div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-base-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6 border border-accent-cyan/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-accent-cyan" />
            </motion.div>
            <span className="text-sm font-medium text-accent-cyan">Live Competitions</span>
          </motion.div>

          <h2 className="text-section-title mb-4 text-white">
            <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Today</strong>
            Matches
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Join live prediction competitions. Make your picks, compete with others, win USDC rewards instantly.
          </p>
        </motion.div>

        {/* Matches Grid */}
        <div className="grid gap-6">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect-strong rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group border border-white/5"
            >
              {/* Match Header */}
              <div className="bg-gradient-to-r from-base-blue/10 to-accent-cyan/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <LeagueLogo league={match.leagueId} size={28} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    {match.league}
                  </span>
                  <span className="text-xs text-muted">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-muted" />
                    <span className="text-xs text-muted">Starts in {timeLeft[match.id]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-accent-purple" />
                    <span className="text-xs font-medium text-white">{match.participants}</span>
                  </div>
                  <div className="glass-effect px-3 py-1 rounded-full flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-accent-green" />
                    <span className="text-xs font-bold text-white">{match.entryFee} USDC</span>
                  </div>
                </div>
              </div>

              {/* Match Content */}
              <div className="p-8">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                  {/* Home Team */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 mb-4 flex items-center justify-center">
                      <TeamLogo team={match.homeTeamId} size={96} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      {match.homeTeam}
                    </h3>
                    <span className="text-xs text-muted uppercase tracking-wider">Home</span>
                  </div>

                  {/* VS Divider */}
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      className="relative"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-16 h-16 rounded-full glass-effect border-2 border-accent-cyan/30 flex items-center justify-center">
                        <span className="text-sm font-black text-accent-cyan">VS</span>
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent-cyan/20 blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Prize Pool */}
                    <div className="glass-effect px-4 py-2 rounded-lg border border-accent-green/20">
                      <div className="text-xs text-muted mb-0.5 text-center">Prize Pool</div>
                      <div className="text-lg font-bold text-accent-green flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {match.prizePool.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 mb-4 flex items-center justify-center">
                      <TeamLogo team={match.awayTeamId} size={96} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      {match.awayTeam}
                    </h3>
                    <span className="text-xs text-muted uppercase tracking-wider">Away</span>
                  </div>
                </div>

                {/* Action Button - Modern Predict Button */}
                <div className="mt-8">
                  <ModernPredictButton entryFee={match.entryFee} />
                </div>
              </div>

              {/* Footer Info */}
              <div className="bg-gradient-to-r from-base-blue/5 to-transparent px-6 py-3 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span>Powered by Base Network</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Zap className="w-3.5 h-3.5 text-accent-orange" />
                  <span className="text-muted">Instant settlement</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-subtle text-sm mb-4">
            🎯 Join thousands of predictors competing for USDC rewards
          </p>
          <motion.a
            href="#waitlist"
            className="inline-flex items-center gap-2 glass-effect hover:glass-effect-strong px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            Get Early Access
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

