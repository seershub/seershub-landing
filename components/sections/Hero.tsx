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

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
            Predict Sports.
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
            Win On-Chain.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          Experience our ecosystem: Play our <span className="text-green-400 font-semibold">live Mini App</span> on Base today,
          or join the waitlist for the <span className="text-primary-400 font-semibold">full platform</span> coming soon.
        </motion.p>

        {/* Application Status Cards - Professional & Eye-Catching */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-4">

          {/* Mini App - Published & Active - PREMIUM CARD */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group relative bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-primary-500/5
                       backdrop-blur-xl rounded-3xl overflow-hidden
                       hover:scale-[1.02] transition-all duration-500 cursor-pointer"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/40 via-emerald-400/40 to-green-500/40 p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-full rounded-3xl bg-neutral-950/95 backdrop-blur-xl" />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all duration-500" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10">

              {/* Status Badge - Premium */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 backdrop-blur-sm">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                  />
                  <span className="text-sm font-bold text-green-300 uppercase tracking-wide">Live Now</span>
                </div>
                <Sparkles className="w-5 h-5 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Platform Logos - Enhanced */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary-500/30 rounded-2xl blur-xl" />
                  <img
                    src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                    alt="Base App"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-2"
                  />
                </motion.div>

                <div className="text-white/40 text-xl font-bold">+</div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl" />
                  <img
                    src="https://docs.farcaster.xyz/og-image.png"
                    alt="Farcaster"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-2"
                  />
                </motion.div>
              </div>

              {/* Mini App Logo - Hero */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-primary-500/40 rounded-3xl blur-2xl" />
                  <img
                    src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                    alt="Seers League Mini App"
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-contain shadow-2xl ring-2 ring-green-500/30"
                  />
                </motion.div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Seers League
              </h3>
              <p className="text-sm sm:text-base text-white/60 text-center mb-6 leading-relaxed">
                Full-featured mini app on <span className="text-primary-400 font-semibold">Base Mainnet</span>
                <br />
                <span className="text-green-400 font-medium">Play competitions now!</span>
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span>Live Competitions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span>On-Chain Rewards</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span>Real-time Scoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span>Social Integration</span>
                </div>
              </div>

              {/* Launch Button - Premium */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg">
                    <span>Launch App</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.a>

          {/* Main App - Building - PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/20 to-neutral-800/20
                       backdrop-blur-xl rounded-3xl overflow-hidden"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30 p-[2px] opacity-40 group-hover:opacity-60 transition-opacity duration-300">
              <div className="w-full h-full rounded-3xl bg-neutral-950/95 backdrop-blur-xl" />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all duration-500" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/15 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10">

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 backdrop-blur-sm">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                  />
                  <span className="text-sm font-bold text-amber-300 uppercase tracking-wide">Coming Soon</span>
                </div>
                <Rocket className="w-5 h-5 text-amber-400 opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Platform Icon */}
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20
                           border border-amber-500/30 backdrop-blur-sm
                           flex items-center justify-center text-3xl sm:text-4xl"
                >
                  🌐
                </motion.div>
              </div>

              {/* Main Logo - Styled */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-neutral-700/20 rounded-3xl blur-xl" />
                  <img
                    src="/seershub-logo.png"
                    alt="Seershub Platform"
                    className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-3xl object-contain opacity-40 grayscale-[50%] ring-2 ring-neutral-700/30"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white/60 mb-3 text-center">
                Seershub Platform
              </h3>
              <p className="text-sm sm:text-base text-white/40 text-center mb-6 leading-relaxed">
                Advanced prediction platform with
                <br />
                <span className="text-amber-400/80 font-medium">enhanced features & analytics</span>
              </p>

              {/* Coming Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <div className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
                  <span>Advanced Stats</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <div className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
                  <span>Private Leagues</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <div className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
                  <span>NFT Rewards</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <div className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
                  <span>Web Dashboard</span>
                </div>
              </div>

              {/* Building Status */}
              <div className="flex justify-center">
                <div className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                             bg-gradient-to-r from-amber-500/10 to-orange-500/10
                             border border-amber-500/30 text-amber-400/80 font-semibold text-sm sm:text-base">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    🔨
                  </motion.span>
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
