'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#88FF2A] rounded-full opacity-10 blur-[150px]" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#88FF2A] rounded-full opacity-5 blur-[120px]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-24 h-24 md:w-32 md:h-32"
      >
        <div className="w-full h-full rounded-full border-2 border-[#88FF2A]/30" />
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
