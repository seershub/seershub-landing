'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 gradient-radial" />

      {/* Decorative Soccer Ball */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none"
        animate={shouldReduceAnimations ? {} : {
          rotate: [0, 360],
          scale: [1, 1.08, 1]
        }}
        transition={shouldReduceAnimations ? {} : {
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="text-[20rem] md:text-[30rem] lg:text-[40rem] opacity-[0.06]" style={{
          filter: 'blur(3px) drop-shadow(0 0 80px rgba(0, 82, 255, 0.3))'
        }}>
          ⚽
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Hero Header */}
        <div className="text-center mb-16 sm:mb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3 rounded-full
                       bg-gradient-to-r from-primary-500/10 to-accent-cyan/10
                       border border-primary-500/30 backdrop-blur-md mb-8
                       hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(0,82,255,0.25)]
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(0,82,255,0.15)]"
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
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan
                           flex items-center justify-center shadow-[0_0_12px_rgba(0,82,255,0.5)]"
              >
                <span className="text-white text-sm font-bold">B</span>
              </motion.div>
              <motion.div
                animate={shouldReduceAnimations ? {} : {
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={shouldReduceAnimations ? {} : {
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute inset-0 rounded-full border-2 border-primary-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-medium text-white tracking-wide">
                Built on
              </span>
              <motion.div whileHover={{ scale: 1.05 }} className="relative flex items-center">
                <img
                  src="/Base_Logo_1.png"
                  alt="Base"
                  className="h-[14px] sm:h-[18px] w-auto object-contain"
                  style={{
                    filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 2px 8px rgba(0, 82, 255, 0.4))'
                  }}
                />
              </motion.div>
              <span className="text-sm sm:text-base font-medium text-white tracking-wide">
                Network
              </span>
            </div>

            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={shouldReduceAnimations ? {} : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-accent-cyan text-base flex-shrink-0"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
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
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Skill-based sports prediction competitions on Base.
            <br className="hidden sm:block" />
            Transparent, verifiable, and rewarding.
          </motion.p>
        </div>

        {/* Featured Section - Modern Bento-style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-7xl mx-auto">

          {/* LEFT: Featured Live App - Takes 8 columns on desktop */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 group relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80
                       backdrop-blur-2xl border border-green-500/30 rounded-3xl overflow-hidden
                       hover:border-green-500/50 hover:shadow-[0_0_80px_rgba(34,197,94,0.2)]
                       transition-all duration-500 cursor-pointer"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12">

              {/* Header with Status */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                                bg-green-500/10 border border-green-500/30 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <span className="text-sm font-bold text-green-400 uppercase tracking-wider">Live Now</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    Seers League
                  </h2>
                  <p className="text-base sm:text-lg text-white/60 max-w-xl">
                    Play sports prediction competitions right now on Base Mainnet. Available on Base App and Farcaster.
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid sm:grid-cols-2 gap-8 mb-10">

                {/* Logo Showcase */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-2xl" />
                    <img
                      src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                      alt="Seers League"
                      loading="lazy"
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-contain
                               ring-2 ring-green-500/30 shadow-2xl"
                    />
                  </div>

                  {/* Platform Badges */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                      <img
                        src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                        alt="Base App"
                        loading="lazy"
                        className="w-6 h-6 rounded-lg"
                      />
                      <span className="text-sm text-white/70 font-medium">Base App</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                      <img
                        src="https://docs.farcaster.xyz/og-image.png"
                        alt="Farcaster"
                        loading="lazy"
                        className="w-6 h-6 rounded-lg"
                      />
                      <span className="text-sm text-white/70 font-medium">Farcaster</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white/90 mb-4">What's Inside</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-medium">Live Competitions</p>
                        <p className="text-white/40 text-sm">Join active prediction pools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-medium">On-Chain Rewards</p>
                        <p className="text-white/40 text-sm">Win crypto prizes instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-medium">Real-time Scoring</p>
                        <p className="text-white/40 text-sm">Track your performance live</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-medium">Social Features</p>
                        <p className="text-white/40 text-sm">Compete with friends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="group/btn relative flex-1 sm:flex-initial">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                bg-gradient-to-r from-green-500 to-emerald-500
                                text-white font-bold text-base
                                shadow-xl hover:shadow-2xl
                                transform hover:scale-105 transition-all duration-200">
                    <span>Launch App</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* RIGHT: Stacked Cards - Takes 4 columns on desktop */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8">

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-950/80
                         backdrop-blur-2xl border border-amber-500/20 rounded-3xl overflow-hidden
                         hover:border-amber-500/30 hover:shadow-[0_0_60px_rgba(251,191,36,0.1)]
                         transition-all duration-500"
            >
              <div className="relative z-10 p-8">

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full
                               bg-amber-500/10 border border-amber-500/30 mb-6">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Coming Soon</span>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/seershub-logo.png"
                    alt="Seershub Platform"
                    loading="lazy"
                    className="w-24 h-24 rounded-2xl object-contain opacity-30 grayscale"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white/60 mb-2 text-center">
                  Seershub Platform
                </h3>
                <p className="text-sm text-white/40 text-center mb-6">
                  Full-featured web platform with advanced analytics and private leagues
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <div className="w-1 h-1 bg-amber-400/50 rounded-full" />
                    <span>Advanced Statistics</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <div className="w-1 h-1 bg-amber-400/50 rounded-full" />
                    <span>Private Leagues</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <div className="w-1 h-1 bg-amber-400/50 rounded-full" />
                    <span>NFT Rewards</span>
                  </div>
                </div>

                {/* Waitlist Button */}
                <a
                  href="#waitlist"
                  className="block w-full px-6 py-3 rounded-xl
                           bg-amber-500/10 border border-amber-500/30
                           text-amber-400/80 font-semibold text-sm text-center
                           hover:bg-amber-500/20 hover:border-amber-500/40
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
              className="relative bg-gradient-to-br from-primary-500/10 to-accent-cyan/10
                         backdrop-blur-2xl border border-primary-500/20 rounded-3xl overflow-hidden
                         p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Why Seershub?
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    100% transparent on-chain competitions. No gambling, pure skill-based predictions with verifiable results.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={shouldReduceAnimations ? {} : { y: [0, 12, 0] }}
            transition={shouldReduceAnimations ? {} : { duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
