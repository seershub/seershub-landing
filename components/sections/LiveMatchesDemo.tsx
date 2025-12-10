'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, Zap, Flame } from 'lucide-react';
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
  const [timeLeft, setTimeLeft] = useState<string>('1h 5m');

  // Single Featured Match - El Clasico
  const featuredMatch: Match = {
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
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const hours = Math.floor(featuredMatch.startTime / 60);
      const minutes = featuredMatch.startTime % 60;
      setTimeLeft(hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [featuredMatch.startTime]);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent" />
      
      {/* Decorative glow */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={shouldReduceAnimations ? {} : {
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 border border-accent-cyan/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={shouldReduceAnimations ? {} : { duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-accent-cyan" />
            </motion.div>
            <span className="text-sm font-medium text-accent-cyan">Featured Match</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Live
            </span>
            {' '}Prediction Pool
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto">
            Join the action. Make your picks, compete with others, win USDC rewards.
          </p>
        </motion.div>

        {/* Featured Match Card - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden 
                     border border-white/10 hover:border-primary-500/30
                     hover:glass-glow transition-all duration-500
                     max-w-3xl mx-auto"
        >
          {/* Match Header */}
          <div className="glass px-4 sm:px-6 py-4 border-b border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* League & Time */}
              <div className="flex items-center gap-3">
                <LeagueLogo league={featuredMatch.leagueId} size={28} />
                <div>
                  <span className="text-sm font-semibold text-white">
                    {featuredMatch.league}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <Clock className="w-3 h-3" />
                    <span>Starts in {timeLeft}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-subtle">
                  <Users className="w-3.5 h-3.5 text-accent-purple" />
                  <span className="text-xs font-medium text-white">{featuredMatch.participants.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-subtle border border-accent-green/20">
                  <DollarSign className="w-3.5 h-3.5 text-accent-green" />
                  <span className="text-xs font-bold text-accent-green">{featuredMatch.entryFee} USDC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Match Content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8">
              {/* Home Team */}
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <TeamLogo team={featuredMatch.homeTeamId} size={80} />
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                  {featuredMatch.homeTeam}
                </h3>
                <span className="text-xs text-white/40 uppercase tracking-wider">Home</span>
              </div>

              {/* VS Divider */}
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={shouldReduceAnimations ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass-strong border border-primary-500/30 
                                flex items-center justify-center relative overflow-hidden">
                    <span className="text-sm sm:text-base font-black text-primary-500">VS</span>
                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={shouldReduceAnimations ? {} : {
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Prize Pool */}
                <div className="glass px-4 py-2 rounded-xl border border-accent-green/20">
                  <div className="text-xs text-white/40 mb-0.5 text-center">Prize Pool</div>
                  <div className="text-lg sm:text-xl font-bold text-accent-green flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{featuredMatch.prizePool.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <TeamLogo team={featuredMatch.awayTeamId} size={80} />
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                  {featuredMatch.awayTeam}
                </h3>
                <span className="text-xs text-white/40 uppercase tracking-wider">Away</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6 sm:mt-8">
              <ModernPredictButton entryFee={featuredMatch.entryFee} />
            </div>
          </div>

          {/* Footer Info */}
          <div className="glass px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>Powered by Base Network</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-accent-amber" />
                <span className="text-white/40">Instant settlement</span>
              </div>
              <div className="px-2 py-0.5 rounded-full glass-subtle border border-white/10">
                <span className="text-white/30 text-xs">Sample Market</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-white/40 text-sm mb-3">
            🎯 Join thousands of predictors competing for USDC rewards
          </p>
          <motion.a
            href="/waitlist"
            className="inline-flex items-center gap-2 glass hover:glass-strong 
                     px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 
                     border border-white/10 hover:border-primary-500/30"
            whileHover={{ scale: 1.05 }}
          >
            Get Early Access
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={shouldReduceAnimations ? {} : { duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
