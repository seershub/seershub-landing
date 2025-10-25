'use client';

import { motion } from 'framer-motion';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';
import { ExternalLink, Sparkles, Rocket } from 'lucide-react';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 pt-24 pb-16">
      {/* Subtle gradient background */}
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

      {/* Decorative Soccer Ball - Behind Cards */}
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

      {/* Content */}
      <div className="relative z-10 container-responsive py-8 sm:py-12 text-center w-full max-w-7xl mx-auto">

        {/* Badge - Balanced & Modern - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full
                     bg-gradient-to-r from-primary-500/10 to-accent-cyan/10
                     border border-primary-500/30 backdrop-blur-md mb-8 sm:mb-10
                     hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(0,82,255,0.25)]
                     transition-all duration-300
                     shadow-[0_0_20px_rgba(0,82,255,0.15)]"
        >
          {/* Animated "B" Icon */}
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
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan
                         flex items-center justify-center shadow-[0_0_12px_rgba(0,82,255,0.5)]"
            >
              <span className="text-white text-xs sm:text-sm font-bold">B</span>
            </motion.div>
            {/* Pulse ring */}
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

          {/* Text + Logo Group - Aligned - Mobile Optimized */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-sm sm:text-base font-medium text-white tracking-wide">
              Built on
            </span>

            {/* Base Logo - Same Height as Text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center"
            >
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

          {/* Sparkle */}
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
            className="text-accent-cyan text-sm sm:text-base flex-shrink-0"
          >
            ✨
          </motion.div>
        </motion.div>

        {/* MASSIVE headline - With Original Animations */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
        >
          Predict Sports.
          <br />
          <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
            Win On-Chain.
          </span>
        </motion.h1>

        {/* Subheadline - Optimized */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12 px-4"
        >
          Experience our ecosystem: Play our <span className="text-green-400 font-semibold">live Mini App</span> on Base today,
          or join the waitlist for the <span className="text-primary-400 font-semibold">full platform</span> coming soon.
        </motion.p>

        {/* Application Status Cards - Ultra Professional */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6">

          {/* Mini App - Published & Active - ULTRA MODERN CARD */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50
                       backdrop-blur-2xl border border-green-500/20 rounded-3xl overflow-hidden
                       hover:border-green-500/40 hover:shadow-[0_0_60px_rgba(34,197,94,0.15)]
                       transition-all duration-500 cursor-pointer will-change-transform"
          >
            {/* Subtle Glow Effects - Optimized */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Content - Clean & Modern */}
            <div className="relative z-10 p-10 sm:p-12">

              {/* Status Badge - Minimal */}
              <div className="flex items-center justify-between mb-10">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                               bg-green-500/10 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* Platform Logos - Clean */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-800/30 border border-neutral-700/30">
                  <img
                    src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                    alt="Base App"
                    loading="lazy"
                    className="w-8 h-8 rounded-lg object-contain"
                  />
                  <span className="text-white/30 text-sm font-bold">×</span>
                  <img
                    src="https://docs.farcaster.xyz/og-image.png"
                    alt="Farcaster"
                    loading="lazy"
                    className="w-8 h-8 rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* Mini App Logo - Hero */}
              <div className="flex justify-center mb-8">
                <div className="relative group/logo">
                  <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                    alt="Seers League"
                    loading="lazy"
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-contain
                             ring-1 ring-green-500/20 shadow-2xl"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center tracking-tight">
                Seers League
              </h3>
              <p className="text-base text-white/50 text-center mb-8 leading-relaxed max-w-sm mx-auto">
                Full-featured prediction mini app on Base Mainnet
              </p>

              {/* Features - Minimal Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
                <div className="flex items-center gap-2.5 text-sm text-white/40">
                  <div className="w-1 h-1 bg-green-400/60 rounded-full" />
                  <span>Live Competitions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/40">
                  <div className="w-1 h-1 bg-green-400/60 rounded-full" />
                  <span>On-Chain Rewards</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/40">
                  <div className="w-1 h-1 bg-green-400/60 rounded-full" />
                  <span>Real-time Scoring</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/40">
                  <div className="w-1 h-1 bg-green-400/60 rounded-full" />
                  <span>Social Features</span>
                </div>
              </div>

              {/* Launch Button - Modern */}
              <div className="flex justify-center">
                <div className="group/btn relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover/btn:opacity-50 transition-opacity" />
                  <div className="relative flex items-center gap-2.5 px-8 py-4 rounded-xl
                                bg-gradient-to-r from-green-500 to-emerald-500
                                text-white font-semibold text-base
                                shadow-lg hover:shadow-xl
                                transform hover:scale-105 transition-all duration-200">
                    <span>Launch App</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Main App - Building - ULTRA MODERN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50
                       backdrop-blur-2xl border border-amber-500/10 rounded-3xl overflow-hidden
                       hover:border-amber-500/20 hover:shadow-[0_0_60px_rgba(251,191,36,0.08)]
                       transition-all duration-500 will-change-transform"
          >
            {/* Subtle Glow Effects - Optimized */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Content - Clean & Modern */}
            <div className="relative z-10 p-10 sm:p-12">

              {/* Status Badge - Minimal */}
              <div className="flex items-center justify-between mb-10">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                               bg-amber-500/10 border border-amber-500/20">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                  <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Coming Soon</span>
                </div>
              </div>

              {/* Platform Icon */}
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 rounded-2xl bg-neutral-800/30 border border-neutral-700/30
                             flex items-center justify-center text-4xl">
                  🌐
                </div>
              </div>

              {/* Main Logo - Styled */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src="/seershub-logo.png"
                    alt="Seershub Platform"
                    loading="lazy"
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl object-contain
                             opacity-30 grayscale ring-1 ring-neutral-700/20"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-3xl sm:text-4xl font-bold text-white/50 mb-4 text-center tracking-tight">
                Seershub Platform
              </h3>
              <p className="text-base text-white/30 text-center mb-8 leading-relaxed max-w-sm mx-auto">
                Advanced prediction platform with enhanced features
              </p>

              {/* Coming Features - Minimal Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
                <div className="flex items-center gap-2.5 text-sm text-white/25">
                  <div className="w-1 h-1 bg-amber-400/40 rounded-full" />
                  <span>Advanced Stats</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/25">
                  <div className="w-1 h-1 bg-amber-400/40 rounded-full" />
                  <span>Private Leagues</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/25">
                  <div className="w-1 h-1 bg-amber-400/40 rounded-full" />
                  <span>NFT Rewards</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/25">
                  <div className="w-1 h-1 bg-amber-400/40 rounded-full" />
                  <span>Web Dashboard</span>
                </div>
              </div>

              {/* Building Status */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                             bg-amber-500/5 border border-amber-500/20
                             text-amber-400/60 font-semibold text-base">
                  <span>🔨</span>
                  <span>In Development</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
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
