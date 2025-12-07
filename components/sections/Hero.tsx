'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Trophy, Zap, Shield, Clock, ArrowRight, Star } from 'lucide-react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

export default function Hero() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Rich Gradient Background */}
      <div className="absolute inset-0 bg-[#09090B]" />
      <div className="absolute inset-0 gradient-hero" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-72 h-72 bg-violet-500/20 rounded-full blur-[120px]"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-emerald-500/15 rounded-full blur-[150px]"
        animate={shouldReduceAnimations ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-[30%] w-48 h-48 bg-orange-500/10 rounded-full blur-[100px]"
        animate={shouldReduceAnimations ? {} : {
          y: [0, -30, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Hero Header */}
        <div className="text-center mb-16 sm:mb-20">

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                       card-glow-violet mb-8 cursor-default"
          >
            <motion.div
              animate={shouldReduceAnimations ? {} : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-600
                         flex items-center justify-center"
            >
              <Star className="w-3 h-3 text-white" />
            </motion.div>
            <span className="text-sm font-medium text-violet-300">Built on Base Network</span>
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          </motion.div>

          {/* Main Headline - Bold & Impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero mb-8"
          >
            <span className="block text-white mb-2">Predict Sports.</span>
            <span className="block text-gradient-multi animate-gradient">
              Win On-Chain.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Skill-based sports prediction competitions on{' '}
            <span className="text-violet-400 font-medium">Base</span>.
            <br className="hidden sm:block" />
            Transparent, verifiable, and <span className="text-emerald-400 font-medium">rewarding</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-emerald-500 to-violet-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity animate-gradient" />
              <div className="relative btn-emerald text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2">
                <span>Launch SeersLeague</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
            <a href="#waitlist" className="btn-secondary px-8 py-4 rounded-xl">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Card 1 - Live Now */}
          <motion.a
            href="https://farcaster.xyz/miniapps/-FFJ1DnvO00L/seersleague"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group card-glow-emerald rounded-2xl p-6 cursor-pointer
                       hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-2 badge-emerald mb-4 w-fit">
              <span className="live-dot" />
              <span className="text-xs font-bold uppercase tracking-wider">Live Now</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-xl" />
                <img
                  src="https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png"
                  alt="Seers League"
                  loading="lazy"
                  className="relative w-16 h-16 rounded-xl ring-2 ring-emerald-500/40"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Seers League</h3>
                <p className="text-sm text-zinc-400">Play on Base & Farcaster</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { icon: Trophy, text: 'Weekly competitions' },
                { icon: Zap, text: 'Instant USDC rewards' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                  <item.icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.a>

          {/* Card 2 - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group card-glow-orange rounded-2xl p-6"
          >
            <div className="badge-orange mb-4 w-fit">
              <Clock className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-xl" />
                <img
                  src="/seershub-logo.png"
                  alt="Seershub"
                  loading="lazy"
                  className="relative w-16 h-16 rounded-xl opacity-60 grayscale"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-300">Seershub Platform</h3>
                <p className="text-sm text-zinc-500">Full-featured web app</p>
              </div>
            </div>

            <div className="space-y-2">
              {['Advanced analytics', 'Private leagues', 'NFT rewards'].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-500">
                  <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 - Why Seershub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="group card-glow-violet rounded-2xl p-6"
          >
            <div className="badge-violet mb-4 w-fit">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">100% On-Chain</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Why Seershub?</h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Transparent, skill-based competitions. No gambling, no house edge —
              pure prediction skills with verifiable on-chain results.
            </p>

            <div className="flex items-center gap-2 text-sm text-violet-400 font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '$50K+', label: 'Prize Pool Distributed' },
            { value: '10K+', label: 'Predictions Made' },
            { value: '2K+', label: 'Active Players' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-violet">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-violet-500/30 rounded-full flex justify-center">
          <motion.div
            animate={shouldReduceAnimations ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
