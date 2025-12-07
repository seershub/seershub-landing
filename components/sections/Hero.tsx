'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Trophy, Zap, Shield, Clock, ArrowRight, Star, Flame, Target } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background with Nova Gradient */}
      <div className="absolute inset-0 bg-[#0A0A0F]" />
      <div className="absolute inset-0 bg-nova-gradient opacity-80" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Orbs - Warm Colors */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-96 h-96 bg-primary-500/20 rounded-full blur-[140px]"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[5%] w-[30rem] h-[30rem] bg-secondary-500/15 rounded-full blur-[160px]"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-accent-gold/10 rounded-full blur-[120px]"
        animate={shouldReduceAnimations ? {} : {
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Hero Header */}
        <div className="text-center mb-20 sm:mb-24">

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full
                       glass-card hover:bg-white/5 border border-white/10 mb-8 cursor-default transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="live-dot" />
              <span className="text-sm font-semibold text-white/90">Live on Base</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5 text-sm font-medium text-accent-gold">
              <Star className="w-3.5 h-3.5 fill-accent-gold" />
              <span>Skill-Based Gaming</span>
            </div>
          </motion.div>

          {/* Main Headline - Nova Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero mb-8 tracking-tight"
          >
            <span className="block text-white mb-2 filter drop-shadow-lg">
              Predict Sports.
            </span>
            <span className="block text-gradient-nova animate-gradient pb-2">
              Win On-Chain.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            The first provably fair skills ecosystem on <span className="text-white font-semibold">Base</span>.
            <br className="hidden sm:block" />
            Compete in leagues, predict matches, and earn <span className="text-primary-400 font-semibold">USDC</span> rewards.
          </motion.p>

          {/* CTA Buttons - Nova Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nova group min-w-[200px]"
            >
              <span>Launch App</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#waitlist" className="btn-secondary min-w-[200px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Feature Cards Grid - Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-2">

          {/* Card 1 - Seers League (Live) */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group glass-card-glow p-8 relative overflow-hidden"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary-500/30 transition-colors">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                      alt="Seers League"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="badge-success">
                  <span className="live-dot mr-1.5" />
                  LIVE
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">Seers League</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Weekly prediction leagues on Farcaster. Compete for major prize pools.
              </p>

              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-1.5 text-primary-400">
                  <Trophy className="w-4 h-4" />
                  <span>Win USDC</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent-gold">
                  <Zap className="w-4 h-4" />
                  <span>Instant Pay</span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Card 2 - Platform (Coming Soon) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group glass-card p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-transparent">
                    <Target className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <div className="badge-gold">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  SOON
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white/90 mb-2">Seers Platform</h3>
              <p className="text-white/50 mb-6 leading-relaxed">
                Advanced web/mobile app with detailed analytics, private leagues, and social features.
              </p>

              <ul className="space-y-2">
                {['Detailed Stats', 'Social Feed', 'Custom Avatars'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3 - Why Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="group glass-card p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Shield className="w-6 h-6 text-accent-cyan" />
                </div>
                <div className="badge-cyan">
                  SAFE
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Fair Play</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                We're building the anti-casino. No hidden odds, no house edge. Just pure skill.
              </p>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-sm text-accent-cyan/90 font-medium">
                  <span>Transparent & Verified</span>
                  <Shield className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Bar - Redesigned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 border-t border-white/5 pt-12"
        >
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
            {[
              { value: '$50K+', label: 'Rewards Pool', icon: Trophy, color: 'text-accent-gold' },
              { value: '10K+', label: 'Predictions', icon: Flame, color: 'text-primary-400' },
              { value: '2.5K+', label: 'Players', icon: Users, color: 'text-secondary-400' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color} font-display`}>
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-white/40 uppercase tracking-wider">
                  {/* <stat.icon className="w-4 h-4 opacity-50" /> */}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
