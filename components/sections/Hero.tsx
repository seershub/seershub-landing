'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, CheckCircle2, Clock, Zap, Trophy, Shield } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Spotlight */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary-500/20 via-primary-500/5 to-transparent blur-3xl" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-2 h-2 rounded-full bg-accent-cyan"
        animate={shouldReduceAnimations ? {} : {
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[15%] w-3 h-3 rounded-full bg-primary-500"
        animate={shouldReduceAnimations ? {} : {
          y: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Hero Header */}
        <div className="text-center mb-16 sm:mb-20">

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                       glass-card-premium mb-8 cursor-default"
          >
            <div className="relative flex-shrink-0">
              <motion.div
                animate={shouldReduceAnimations ? {} : { scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan
                           flex items-center justify-center shadow-glow-blue"
              >
                <span className="text-white text-xs font-bold">B</span>
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/90">Built on</span>
              <img
                src="/Base_Logo_1.png"
                alt="Base"
                className="h-4 w-auto object-contain"
                style={{ filter: 'brightness(1.2) drop-shadow(0 2px 8px rgba(0, 82, 255, 0.4))' }}
              />
              <span className="text-sm font-medium text-white/90">Network</span>
            </div>

            <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero mb-6"
          >
            <span className="text-white">Predict Sports.</span>
            <br />
            <span className="text-gradient-primary">Win On-Chain.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Skill-based sports prediction competitions on Base.
            <br className="hidden sm:block" />
            <span className="text-white/80">Transparent, verifiable, and rewarding.</span>
          </motion.p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 max-w-7xl mx-auto">

          {/* Main Featured Card - SeersLeague (8 cols) */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 group relative stadium-card stadium-card-green
                       hover:border-accent-green/40 transition-all duration-500 cursor-pointer"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-accent-emerald/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            {/* Stadium Arc Decoration */}
            <div className="stadium-arc" style={{ borderColor: 'transparent transparent rgba(34, 197, 94, 0.3) transparent' }} />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">

              {/* Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div>
                  {/* Live Badge */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                                  badge-success mb-4">
                    <span className="live-dot" />
                    <span className="text-sm font-bold uppercase tracking-wider">Live Now</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    Seers League
                  </h2>
                  <p className="text-base sm:text-lg text-white/50 max-w-xl">
                    Play sports prediction competitions right now on Base Mainnet.
                    Available on Base App and Farcaster.
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8">

                {/* App Icon & Platform Badges */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-accent-green/30 rounded-2xl blur-2xl" />
                    <img
                      src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                      alt="Seers League"
                      loading="lazy"
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-contain
                                 ring-2 ring-accent-green/40 shadow-2xl"
                    />
                  </div>

                  {/* Platform Badges */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass-effect border border-white/5">
                      <img
                        src="https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw"
                        alt="Base App"
                        loading="lazy"
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-xs text-white/60 font-medium">Base App</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass-effect border border-white/5">
                      <img
                        src="https://docs.farcaster.xyz/og-image.png"
                        alt="Farcaster"
                        loading="lazy"
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-xs text-white/60 font-medium">Farcaster</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                    What's Inside
                  </h3>
                  {[
                    { icon: Trophy, title: 'Live Competitions', desc: 'Join active prediction pools' },
                    { icon: Zap, title: 'On-Chain Rewards', desc: 'Win crypto prizes instantly' },
                    { icon: Shield, title: 'Real-time Scoring', desc: 'Track your performance live' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 font-medium text-sm">{feature.title}</p>
                        <p className="text-white/40 text-xs">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="group/btn relative flex-1 sm:flex-initial">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-accent-emerald rounded-xl blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                  btn-glow-green text-white font-bold text-base
                                  transform group-hover:scale-[1.02] transition-all duration-200">
                    <span>Launch App</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Right Column - Stacked Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative glass-card rounded-2xl overflow-hidden
                         hover:border-accent-amber/30 transition-all duration-500"
            >
              <div className="relative z-10 p-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                badge-warning mb-5">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-5">
                  <img
                    src="/seershub-logo.png"
                    alt="Seershub Platform"
                    loading="lazy"
                    className="w-20 h-20 rounded-xl object-contain opacity-40 grayscale"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white/70 mb-2 text-center">
                  Seershub Platform
                </h3>
                <p className="text-xs text-white/40 text-center mb-5 leading-relaxed">
                  Full-featured web platform with advanced analytics and private leagues
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {['Advanced Statistics', 'Private Leagues', 'NFT Rewards'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/30">
                      <div className="w-1 h-1 bg-accent-amber/50 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Waitlist Button */}
                <a
                  href="#waitlist"
                  className="block w-full px-5 py-2.5 rounded-xl text-center
                             glass-effect border border-accent-amber/30
                             text-accent-amber/80 font-semibold text-sm
                             hover:bg-accent-amber/10 hover:border-accent-amber/50
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
              className="relative glass-card-premium rounded-2xl overflow-hidden p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary-500/20">
                  <Sparkles className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Why Seershub?
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    100% transparent on-chain competitions. No gambling, pure skill-based
                    predictions with verifiable results.
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
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center">
          <motion.div
            animate={shouldReduceAnimations ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
