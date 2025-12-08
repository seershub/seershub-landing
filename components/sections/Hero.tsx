'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Trophy, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Trophy,
    title: 'Seers League',
    description: 'Free weekly competitions with real prizes',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Seers Platform',
    description: 'Premium prediction marketplace on Base',
    color: 'from-primary to-secondary',
  },
  {
    icon: Shield,
    title: 'Fair Play',
    description: 'Transparent odds, no house edge manipulation',
    color: 'from-emerald-400 to-teal-500',
  },
];

const marqueeItems = [
  'PREDICT SPORTS',
  'WIN ON-CHAIN',
  'SKILL-BASED',
  'BUILT ON BASE',
  'TRANSPARENT ODDS',
  'FAIR PLAY',
  'SEERSHUB',
  'PULSEERS',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-nova-gradient" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[10%] w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 left-[5%] w-48 h-48 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 container-responsive">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="badge-neon">
              <span className="live-dot" />
              Live on Base
            </span>
          </motion.div>

          {/* Rotating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="relative w-24 h-24 md:w-32 md:h-32"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl" />
              <img
                src="/seershub-logo.png"
                alt="SeersHub"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero mb-6"
          >
            <span className="block text-white mb-2">
              Predict Sports.
            </span>
            <span className="block text-gradient-nova animate-gradient">
              Win On-Chain.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The first skill-based sports prediction platform on Base.
            No chance-based gambling — just your knowledge against others.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#waitlist" className="btn-nova text-base px-8 py-4">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pitch-deck" className="btn-glass text-base px-8 py-4">
              View Pitch Deck
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card p-6 text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
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
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/5 bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-4 px-8 text-sm font-semibold text-white/40 uppercase tracking-widest"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
