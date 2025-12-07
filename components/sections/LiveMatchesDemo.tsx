'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, Zap, Trophy, ChevronRight } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';
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
  startTime: number;
  entryFee: number;
  participants: number;
  prizePool: number;
}

export default function LiveMatchesDemo() {
  const { shouldReduceAnimations } = usePerformanceMode();
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
  }, [matches]);

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-primary mb-6"
          >
            <motion.div
              animate={shouldReduceAnimations ? {} : { rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-semibold">Live Competitions</span>
          </motion.div>

          <h2 className="text-section-title mb-4 text-white">
            <span className="inline-block px-4 py-1 bg-primary-500 text-white rounded-lg mr-3">Today</span>
            Matches
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Join live prediction competitions. Make your picks, compete with others, win USDC rewards instantly.
          </p>
        </motion.div>

        {/* Matches Grid */}
        <div className="grid gap-5 sm:gap-6 max-w-4xl mx-auto">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stadium-card group hover:border-primary-500/30 transition-all duration-500"
            >
              {/* Stadium Arc Header */}
              <div className="stadium-arc" />

              {/* Match Header */}
              <div className="relative bg-gradient-to-r from-primary-500/5 via-transparent to-accent-cyan/5 
                              px-4 sm:px-6 py-4 border-b border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* League Info */}
                  <div className="flex items-center gap-3">
                    <LeagueLogo league={match.leagueId} size={28} />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                        {match.league}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-white/40 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>Starts in {timeLeft[match.id]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Users className="w-4 h-4 text-accent-purple" />
                      <span className="font-semibold text-white">{match.participants.toLocaleString()}</span>
                    </div>
                    <div className="glass-effect px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-accent-green/20">
                      <DollarSign className="w-4 h-4 text-accent-green" />
                      <span className="text-sm font-bold text-white">{match.entryFee} USDC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Content */}
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8">

                  {/* Home Team */}
                  <div className="flex flex-col items-center text-center group/team">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 flex items-center justify-center relative"
                    >
                      <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl opacity-0 group-hover/team:opacity-100 transition-opacity" />
                      <TeamLogo team={match.homeTeamId} size={72} />
                    </motion.div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                      {match.homeTeam}
                    </h3>
                    <span className="text-xs text-white/40 uppercase tracking-wider">Home</span>
                  </div>

                  {/* VS Divider */}
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      className="relative"
                      animate={shouldReduceAnimations ? {} : { rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass-card-premium 
                                      flex items-center justify-center relative">
                        <span className="text-sm sm:text-base font-black text-gradient-primary">VS</span>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border border-primary-500/30" />
                        <div className="absolute -inset-1 rounded-full border border-accent-cyan/20" />
                      </div>
                    </motion.div>

                    {/* Prize Pool */}
                    <motion.div
                      className="glass-effect px-4 py-2 rounded-xl border border-accent-green/20
                                 bg-gradient-to-r from-accent-green/5 to-accent-emerald/5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-xs text-white/50 mb-0.5 text-center">Prize Pool</div>
                      <div className="text-base sm:text-lg font-bold text-accent-green flex items-center gap-1 justify-center">
                        <Trophy className="w-4 h-4" />
                        <span>${match.prizePool.toLocaleString()}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center text-center group/team">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 flex items-center justify-center relative"
                    >
                      <div className="absolute inset-0 bg-accent-cyan/10 rounded-full blur-xl opacity-0 group-hover/team:opacity-100 transition-opacity" />
                      <TeamLogo team={match.awayTeamId} size={72} />
                    </motion.div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                      {match.awayTeam}
                    </h3>
                    <span className="text-xs text-white/40 uppercase tracking-wider">Away</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8">
                  <ModernPredictButton entryFee={match.entryFee} />
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-primary-500/5 to-transparent px-4 sm:px-6 py-3 
                              flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span className="live-dot" style={{ width: '6px', height: '6px' }} />
                  <span>Powered by Base Network</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <Zap className="w-3.5 h-3.5 text-accent-amber" />
                  <span>Instant settlement</span>
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
          className="mt-14 text-center"
        >
          <p className="text-white/50 text-sm mb-5 flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 text-accent-amber" />
            Join thousands of predictors competing for USDC rewards
          </p>
          <motion.a
            href="#waitlist"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            <span>Get Early Access</span>
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
