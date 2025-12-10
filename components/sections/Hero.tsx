'use client';

import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ExternalLink, Sparkles, CheckCircle2, Clock, Activity, Users, DollarSign, Zap } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';
=======
import { ArrowUpRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4

// Stats Row Component
const StatsRow = () => {
  const stats = [
    { label: 'Total Predictions', value: '200+', icon: Activity, color: 'text-accent-cyan' },
    { label: 'Active Seers', value: '53+', icon: Users, color: 'text-accent-purple' },
    { label: 'Total Payout', value: '$12,450', icon: DollarSign, color: 'text-accent-green' },
    { label: 'Live Apps', value: '2', icon: Zap, color: 'text-accent-amber' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-2xl p-4 sm:p-5 group hover:glass-glow transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg glass-subtle ${stat.color}`}>
              <stat.icon className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-white/50">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
<<<<<<< HEAD
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 gradient-radial" />

      {/* Decorative Soccer Ball - More subtle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none"
        animate={shouldReduceAnimations ? {} : {
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={shouldReduceAnimations ? {} : {
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="text-[15rem] sm:text-[20rem] md:text-[25rem] lg:text-[30rem] opacity-[0.03]" style={{
          filter: 'blur(2px) drop-shadow(0 0 60px rgba(0, 82, 255, 0.2))'
        }}>
          ⚽
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Stats Row - Dashboard Style */}
        <StatsRow />

        {/* Hero Header - More Compact */}
        <div className="text-center mb-10 sm:mb-14">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                       glass border border-primary-500/30 mb-6
                       hover:border-primary-500/50 hover:glass-glow
                       transition-all duration-300"
          >
            <div className="relative flex-shrink-0">
              <motion.div
                animate={shouldReduceAnimations ? {} : {
                  rotate: [0, 360],
                  scale: [1, 1.08, 1]
                }}
                transition={shouldReduceAnimations ? {} : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan
                           flex items-center justify-center shadow-[0_0_10px_rgba(0,82,255,0.5)]"
              >
                <span className="text-white text-xs font-bold">B</span>
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/80">
                Built on
              </span>
              <img
                src="/Base_Logo_1.png"
                alt="Base"
                className="h-[14px] w-auto object-contain"
                style={{
                  filter: 'brightness(1.1) drop-shadow(0 2px 6px rgba(0, 82, 255, 0.3))'
                }}
              />
              <span className="text-sm font-medium text-white/80">
                Network
              </span>
            </div>
          </motion.div>

          {/* Headline - Slightly Smaller */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          >
            Predict Sports.
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Win On-Chain.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Skill-based sports prediction competitions on Base.
            <span className="hidden sm:inline"> Transparent, verifiable, and rewarding.</span>
          </motion.p>
        </div>

        {/* Featured Section - Modern Bento-style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 max-w-7xl mx-auto">

          {/* LEFT: Featured Live App - Takes 8 columns on desktop */}
          <motion.a
            href="https://league.seershub.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 group relative glass-strong rounded-2xl sm:rounded-3xl overflow-hidden
                       border border-green-500/20 
                       hover:border-green-500/40 hover:glass-glow-strong
                       transition-all duration-500 cursor-pointer"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">

              {/* Header with Status */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                glass border border-green-500/30 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Live Now</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Seers League
                  </h2>
                  <p className="text-sm sm:text-base text-white/50 max-w-md">
                    Play sports prediction competitions right now on Base Mainnet.
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">

                {/* Logo Showcase */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl" />
                    <img
                      src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                      alt="Seers League"
                      loading="lazy"
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain
                               ring-2 ring-green-500/30 shadow-xl"
                    />
                  </div>

                  {/* Platform Badges */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-subtle border border-white/5">
                      <img
                        src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                        alt="Base App"
                        loading="lazy"
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-xs text-white/60">Base App</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-subtle border border-white/5">
                      <img
                        src="https://docs.farcaster.xyz/og-image.png"
                        alt="Farcaster"
                        loading="lazy"
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-xs text-white/60">Farcaster</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white/70 mb-3">What's Inside</h3>
                  {[
                    { title: 'Live Competitions', desc: 'Join active prediction pools' },
                    { title: 'On-Chain Rewards', desc: 'Win crypto prizes instantly' },
                    { title: 'Real-time Scoring', desc: 'Track your performance live' },
                    { title: 'Social Features', desc: 'Compete with friends' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 text-sm font-medium">{feature.title}</p>
                        <p className="text-white/40 text-xs">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="group/btn relative inline-flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity" />
                <div className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                              bg-gradient-to-r from-green-500 to-emerald-500
                              text-white font-bold text-sm
                              shadow-lg hover:shadow-xl
                              transform group-hover:scale-105 transition-all duration-200">
                  <span>Launch App</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>

          {/* RIGHT: Stacked Cards - Takes 4 columns on desktop */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative glass-strong rounded-2xl overflow-hidden
                         border border-amber-500/20 hover:border-amber-500/30
                         transition-all duration-500"
            >
              <div className="relative z-10 p-6">

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                               glass border border-amber-500/30 mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Coming Soon</span>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src="/seershub-logo.png"
                    alt="Seershub Platform"
                    loading="lazy"
                    className="w-20 h-20 rounded-xl object-contain opacity-30 grayscale"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white/60 mb-2 text-center">
                  Seershub Platform
                </h3>
                <p className="text-xs text-white/40 text-center mb-4">
                  Full-featured web platform with advanced analytics
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-4">
                  {['Advanced Statistics', 'Private Leagues', 'NFT Rewards'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/30">
                      <div className="w-1 h-1 bg-amber-400/50 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Waitlist Button */}
                <a
                  href="/waitlist"
                  className="block w-full px-4 py-2.5 rounded-xl
                           glass border border-amber-500/30
                           text-amber-400/80 font-semibold text-sm text-center
                           hover:glass-strong hover:border-amber-500/40
                           transition-all duration-200"
                >
                  Join Waitlist
                </a>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative glass rounded-2xl overflow-hidden
                         border border-primary-500/20 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg glass-subtle">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Why Seershub?
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    100% transparent on-chain competitions. No gambling, pure skill-based predictions with verifiable results.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

=======
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#88FF2A] rounded-full opacity-10 blur-[150px]" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#88FF2A] rounded-full opacity-5 blur-[120px]" />
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
<<<<<<< HEAD
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center glass-subtle">
          <motion.div
            animate={shouldReduceAnimations ? {} : { y: [0, 10, 0] }}
            transition={shouldReduceAnimations ? {} : { duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-white/50 rounded-full mt-2"
          />
        </div>
=======
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-24 h-24 md:w-32 md:h-32"
      >
        <div className="w-full h-full rounded-full border-2 border-[#88FF2A]/30" />
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 left-[10%] text-6xl"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 left-[5%] w-16 h-16 bg-[#88FF2A]/20 rounded-full blur-xl"
      />

      {/* Main Content */}
      <div className="container-main relative z-10 pt-24 md:pt-32 pb-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="badge-neon">
            <span className="live-dot" />
            LIVE ON BASE NETWORK
          </div>
        </motion.div>

        {/* Giant Typography - Edigitaal Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="font-display">
            <span className="block text-hero text-white mb-2">Predict</span>
            <span className="block text-hero text-outline mb-2">Sports.</span>
            <span className="block text-hero text-[#88FF2A]">Win On-Chain.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12"
        >
          The first skill-based sports prediction platform on Base.
          No chance-based gambling — your knowledge against others.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="#waitlist" className="btn-neon">
            Join Waitlist
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link href="/pitch-deck" className="btn-outline">
            <Play className="w-4 h-4" />
            Watch Demo
          </Link>
        </motion.div>

        {/* Bento Grid - Edigitaal Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Large Feature Card */}
          <div className="col-span-2 row-span-2 bento-card-neon p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center mb-6">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Seers League</h3>
              <p className="text-black/70">Free weekly competitions with real USDC prizes. Prove your skills.</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-sm font-semibold bg-black/10 px-4 py-2 rounded-full">Weekly Prizes</span>
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

          {/* Stats Card */}
          <div className="bento-card p-6 flex flex-col justify-center">
            <span className="stat-number">10K+</span>
            <span className="stat-label mt-2">Active Users</span>
          </div>

          {/* Stats Card 2 */}
          <div className="bento-card p-6 flex flex-col justify-center">
            <span className="stat-number">$50K</span>
            <span className="stat-label mt-2">Monthly Prizes</span>
          </div>

          {/* Image Card */}
          <div className="bento-card img-card aspect-square">
            <Image
              src="/hero-match.png"
              alt="Match Preview"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-semibold text-white">Live Matches</span>
            </div>
          </div>

          {/* Platform Card */}
          <div className="bento-card p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-[#88FF2A]/10 flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Pulseers</h4>
              <p className="text-sm text-white/50">Free entry. Predict & compete.</p>
            </div>
          </div>
        </motion.div>

        {/* Rotating Logo Section (Edigitaal welcome style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative flex justify-center mt-20"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            {/* Rotating Circle Text */}
            <svg
              className="absolute inset-0 w-full h-full circle-text"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text fill="rgba(255,255,255,0.3)" fontSize="12" fontWeight="600" letterSpacing="4">
                <textPath href="#circlePath">
                  SEERSHUB • PREDICT • WIN • BASE NETWORK • SKILL BASED •
                </textPath>
              </text>
            </svg>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#88FF2A] flex items-center justify-center shadow-[0_0_60px_rgba(136,255,42,0.5)]"
              >
                <span className="text-4xl md:text-5xl">⚡</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-[#88FF2A]">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {['PREDICT SPORTS', 'WIN USDC', 'SEERS LEAGUE', 'ON BASE', 'SKILL BASED', 'FAIR PLAY', 'TRANSPARENT'].map((text, j) => (
                  <span key={j} className="inline-flex items-center gap-6 px-8 text-sm font-bold text-black uppercase tracking-widest">
                    {text}
                    <span className="w-2 h-2 rounded-full bg-black/30" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
