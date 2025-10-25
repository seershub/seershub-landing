'use client';

import { motion } from 'framer-motion';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 py-16 sm:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-subtle" />

      {/* Content */}
      <div className="relative z-10 container-responsive py-20 sm:py-24 md:py-32 text-center">

        {/* Badge - Balanced & Modern - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full
                     bg-gradient-to-r from-primary-500/10 to-accent-cyan/10
                     border border-primary-500/30 backdrop-blur-md mb-12 sm:mb-16
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

        {/* Application Status Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">

          {/* Mini App - Published & Active */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative bg-gradient-to-br from-green-500/10 via-primary-500/10 to-accent-cyan/10
                       border border-green-500/30 rounded-2xl p-8
                       hover:border-green-500/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
                       transition-all duration-300 cursor-pointer"
          >
            {/* Status Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Published</span>
              </div>
            </div>

            {/* Platform Logos */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                alt="Base App"
                className="w-12 h-12 rounded-xl object-contain"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 82, 255, 0.3))' }}
              />
              <div className="text-white/30 text-2xl">+</div>
              <img
                src="https://docs.farcaster.xyz/og-image.png"
                alt="Farcaster"
                className="w-12 h-12 rounded-xl object-contain"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(138, 99, 210, 0.3))' }}
              />
            </div>

            {/* Mini App Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                alt="Seers League Mini App"
                className="w-24 h-24 rounded-2xl object-contain shadow-lg"
                style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 82, 255, 0.4))' }}
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white mb-2 text-center">Seers League</h3>
            <p className="text-sm text-white/60 text-center mb-4">
              Mini App on Base Mainnet
            </p>

            {/* Launch Button */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20
                            border border-green-500/30 text-green-400 text-sm font-medium
                            group-hover:bg-green-500/30 group-hover:border-green-500/50
                            transition-all duration-300">
                <span>Launch App</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary-500/5
                          rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.a>

          {/* Main App - Building */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/40 to-neutral-800/40
                       border border-neutral-700/30 rounded-2xl p-8
                       hover:border-neutral-600/40 hover:shadow-[0_0_40px_rgba(163,163,163,0.1)]
                       transition-all duration-300"
          >
            {/* Status Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40">
                <div className="w-2 h-2 bg-amber-500 rounded-full">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping absolute" />
                </div>
                <span className="text-sm font-semibold text-amber-400">In Development</span>
              </div>
            </div>

            {/* Placeholder for platform logos */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/50 border border-neutral-700/30
                            flex items-center justify-center text-neutral-600">
                <span className="text-2xl">🌐</span>
              </div>
            </div>

            {/* Main Logo - Greyed Out */}
            <div className="flex justify-center mb-4">
              <img
                src="/seershub-logo.png"
                alt="Seershub Main App"
                className="w-32 h-32 rounded-2xl object-contain opacity-30 grayscale"
                style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))' }}
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white/50 mb-2 text-center">Seershub Platform</h3>
            <p className="text-sm text-white/40 text-center mb-4">
              Full-featured prediction platform
            </p>

            {/* Building Status */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20
                            border border-amber-500/30 text-amber-400 text-sm font-medium">
                <span>Building...</span>
                <span className="animate-pulse">🔨</span>
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
