'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  Rocket,
  CheckCircle2,
  XCircle,
  DollarSign,
  Trophy,
  Lock,
  Sparkles,
  TrendingDown,
  Gift, // For SeersLeague
  Gauge, // For Pulseers
  BarChart3, // For Seershub
  Activity, // For Traction
  Clock, // For 48h fix
} from 'lucide-react';

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header with back button */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-neutral-950/90"
      >
        <div className="container-responsive h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          {/* UPDATED: Changed "Join Waitlist" to "Launch Apps" */}
          <div className="flex items-center gap-3">
            <Link
              href="https://pulseers.seershub.com"
              target="_blank"
              className="btn-secondary px-4 py-2 text-sm"
            >
              Launch Pulseers (Free)
            </Link>
            <Link
              href="https://league.seershub.com"
              target="_blank"
              className="btn-primary px-4 py-2 text-sm"
            >
              Launch SeersLeague
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="pt-32 pb-20 px-4">
        <div className="container-responsive max-w-5xl">
          
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            {/* Logo - Minimal & Elegant Showcase */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="mb-10 relative"
            >
              {/* Minimal Card - Theme Matching with Animated Border */}
              <div className="relative rounded-2xl overflow-hidden py-6 px-6">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(0,82,255,0.3), rgba(6,182,212,0.3), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-[1px] rounded-2xl bg-white/[0.02] backdrop-blur-sm" />
                </motion.div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.02] to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Welcome Message - Smaller */}
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-base md:text-lg font-light text-white/60 tracking-wide mb-1"
                  >
                    Welcome to
                  </motion.div>
                  
                  {/* Logo - HUGE & PROMINENT - Cropped */}
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative -my-3 overflow-hidden max-h-32 md:max-h-40 lg:max-h-48"
                  >
                    <img 
                      src="/seershub-logo.png" 
                      alt="Seershub" 
                      className="h-48 md:h-60 lg:h-72 w-auto"
                      style={{
                        filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.2))',
                        transform: 'translateY(-10%)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Decorative Divider - Wide & Elegant */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-center justify-center w-full max-w-md -mt-4"
                  >
                    <motion.span
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="text-2xl opacity-35"
                      style={{
                        filter: 'drop-shadow(0 2px 8px rgba(0, 82, 255, 0.2))'
                      }}
                    >
                      ⚽
                    </motion.span>
                    
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4" />
                    
                    <motion.span
                      animate={{ 
                        rotate: [360, 0]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="text-2xl opacity-35"
                      style={{
                        filter: 'drop-shadow(0 2px 8px rgba(6, 182, 212, 0.2))'
                      }}
                    >
                      ⚽
                    </motion.span>
                  </motion.div>
                  
                  {/* Tagline - Below Divider */}
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-xs md:text-sm text-white/40 font-light tracking-wide text-center mt-2"
                  >
                    The On-Chain Fandom Ecosystem
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-primary-500/10 border border-primary-500/30 mb-6">
              <Rocket className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-500">Pitch Deck</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Seershub
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              The On-Chain Ecosystem for Sports Fandom
            </h2>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              <strong className="text-accent-green">
                Not Betting. Not Gambling.
              </strong>
              <br />
              A provably fair, skill-based ecosystem on Base.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                🏆 Skill-Based Competition
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                🔒 100% Transparent
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                ⚡ Built on Base
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                🚀 2 Live Mini Apps
              </div>
            </div>
          </motion.div>

          {/* What is Seershub */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-primary-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary-500/20">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  What is Seershub?
                </h2>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Seershub is a **3-pillar ecosystem** built on Base to onboard
                millions of mainstream sports fans. We solve the $200B+
                prediction market's core problem—opacity and "house advantages"—by
                creating a provably fair, skill-based economy.
              </p>

              <div className="p-6 rounded-2xl bg-accent-green/10 border border-accent-green/20">
                <h3 className="text-xl font-bold mb-3 text-accent-green flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Legal Status
                </h3>
                <p className="text-white/70">
                  We are a **skill-based competition platform**, not a gambling
                  service. We do not offer odds or house-backed wagering. This
                  model is compliant in most jurisdictions, similar to fantasy
                  sports.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-red-500/20">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">The Problem</h2>
              </div>
              
              <p className="text-white/70 text-lg mb-6">
                Traditional sports prediction platforms suffer from three critical issues:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Lack of Transparency</h3>
                      <p className="text-white/60">
                        Centralized platforms control everything—odds, outcomes, rewards. Users have no visibility into how 
                        winners are determined or how prizes are distributed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Trust Issues</h3>
                      <p className="text-white/60">
                        No verifiable proof of fair play. Results can be manipulated, and users must blindly trust the platform operator.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Passive Experience
                      </h3>
                      <p className="text-white/60">
                        Fans are passive viewers. Their knowledge creates
                        immense value for platforms, but they get no long-term
                        ownership or value back.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* NEW: Our 3-Pillar Ecosystem (Replaces "Our Solution") */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-accent-green/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent-green/20">
                  <Shield className="w-6 h-6 text-accent-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our 3-Pillar Ecosystem
                </h2>
              </div>
              <p className="text-white/80 text-lg mb-8">
                We are building the complete on-chain journey for sports fans.
                Our ecosystem is not an idea—**it is live on Base Mainnet.**
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pillar 1: Pulseers */}
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <div className="p-3 rounded-xl bg-accent-cyan/20 w-min mb-4">
                    <Gauge className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">1. Pulseers</h3>
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-3">
                    LIVE (Free Funnel)
                  </div>
                  <p className="text-white/70">
                    A 100% **FREE**, **Gasless (Paymaster)** "Social Pulse"
                    Mini App. Fans use a 1-signature vote to "boost" their
                    favorite teams.
                  </p>
                  <p className="font-bold text-accent-cyan mt-3">
                    Job: Acquire millions of users (Top-of-Funnel).
                  </p>
                </div>

                {/* Pillar 2: SeersLeague */}
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <div className="p-3 rounded-xl bg-accent-green/20 w-min mb-4">
                    <Trophy className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">2. SeersLeague</h3>
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-3">
                    LIVE (Paid Skill League)
                  </div>
                  <p className="text-white/70">
                    Our flagship **Skill-Based** Mini App (5 free picks, then
                    0.5 USDC). Users compete for weekly USDC prize pools.
                  </p>
                  <p className="font-bold text-accent-green mt-3">
                    Job: Convert, retain, and identify the top "Seers".
                  </p>
                </div>

                {/* Pillar 3: Seershub */}
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <div className="p-3 rounded-xl bg-accent-amber/20 w-min mb-4">
                    <BarChart3 className="w-6 h-6 text-accent-amber" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">3. Seershub</h3>
                  <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white/50 text-sm font-medium mb-3">
                    Vision (Pro Market)
                  </div>
                  <p className="text-white/70">
                    The high-stakes "Pro" platform where top Seers compete,
                    turning their verified on-chain skill into a **new, tradable
                    data asset.**
                  </p>
                  <p className="font-bold text-accent-amber mt-3">
                    Job: Capture the high-value market.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* NEW: Traction (Replaces Roadmap/Investment) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-accent-green/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent-green/20">
                  <Activity className="w-6 h-6 text-accent-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Traction: We Are Live & Shipping Fast
                </h2>
              </div>
              <p className="text-white/80 text-lg mb-8">
                We are not an idea. We are a **solo-founded** team proving our
                execution velocity on Base Mainnet.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stats */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5">
                    <div className="text-5xl font-bold text-gradient bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent mb-2">
                      2
                    </div>
                    <p className="text-xl font-semibold text-white/90">
                      Live Mini Apps on Mainnet
                    </p>
                    <p className="text-white/60">
                      (`Pulseers` - Free & `SeersLeague` - Paid)
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5">
                    <div className="text-5xl font-bold text-gradient bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent mb-2">
                      200+
                    </div>
                    <p className="text-xl font-semibold text-white/90">
                      On-Chain Transactions
                    </p>
                    <p className="text-white/60">
                      Real, organic user activity on `SeersLeague`.
                    </p>
                  </div>
                </div>
                {/* Key Feats */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-6 h-6 text-accent-green" />
                      <h3 className="text-xl font-semibold text-white/90">
                        EIP-5792 Shipped in 48 Hours
                      </h3>
                    </div>
                    <p className="text-white/60">
                      Listened to user feedback and turned the 2-signature
                      (Approve+Predict) flow into a 1-signature batch
                      transaction.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="w-6 h-6 text-accent-cyan" />
                      <h3 className="text-xl font-semibold text-white/90">
                        Paymaster (Gasless) Deployed
                      </h3>
                    </div>
                    <p className="text-white/60">
                      Made our `Pulseers` (free funnel) app 100% free by
                      sponsoring transactions, removing all friction for new
                      users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Base Network (Kept, but updated) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary-500/20">
                  <Globe className="w-6 h-6 text-primary-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why We Are 100% Base-Native
                </h2>
              </div>
              <p className="text-white/70 text-lg mb-8">
                Our entire ecosystem is built *only* on Base. This is not a
                multi-chain hedge. Base provides the only stack to build this
                vision:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-white/5">
                  <h3 className="text-xl font-bold mb-4">
                    Network Performance
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>
                        **Ultra-Low Fees:** Makes our 0.5 USDC league and
                        Paymaster (gasless) app economically viable.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>
                        **EIP-5792 Support:** Allowed us to build a 1-signature
                        UX, which is critical for adoption.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white/5">
                  <h3 className="text-xl font-bold mb-4">
                    Ecosystem & Onboarding
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>
                        **Farcaster Mini Apps:** The perfect, seamless discovery
                        and engagement layer.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>
                        **Coinbase Integration:** Direct access to millions of
                        "crypto-curious" sports fans for mainstream adoption.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Market Opportunity */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent-amber/20">
                  <TrendingUp className="w-6 h-6 text-accent-amber" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Market Opportunity</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-6xl font-bold mb-3 text-gradient bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    $200B+
                  </div>
                  <p className="text-white/70 text-lg mb-6">
                    Global sports prediction market size
                  </p>
                  
                  <div className="text-5xl font-bold mb-3 text-gradient bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">
                    60M+
                  </div>
                  <p className="text-white/70 text-lg">
                    Fantasy sports users in US alone
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold mb-2 text-accent-green">+24%</div>
                    <p className="text-sm text-white/60">Annual market growth rate (CAGR)</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold mb-2 text-primary-500">120M+</div>
                    <p className="text-sm text-white/60">Coinbase users (potential reach)</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold mb-2 text-accent-cyan">$580M+</div>
                    <p className="text-sm text-white/60">Base daily transaction volume</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>


          {/* Competitive Advantages */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Competitive Advantages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">vs. Traditional Platforms</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Full blockchain transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Community-owned prize pools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>No manipulation risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>User data ownership</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">vs. Betting Sites</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Legal in more jurisdictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>No gambling license needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>No house edge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Wider audience access</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">vs. Web3 Platforms</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>Base Network advantages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>Hybrid efficient architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>Sports-first UX focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>Coinbase Smart Wallet</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* CTA (Updated) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border-2 border-primary-500/20">
              <Rocket className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Join the Future of Sports Fandom
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Our ecosystem is live. We are building the transparent,
                skill-based sports economy on Base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="https://pulseers.seershub.com"
                  target="_blank"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Gauge className="w-5 h-5" />
                  Launch Pulseers (Free)
                </Link>
                <Link
                  href="https://league.seershub.com"
                  target="_blank"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Trophy className="w-5 h-5" />
                  Launch SeersLeague
                </Link>
              </div>
              <div className="text-sm text-white/50">
                <p>📧 info@seershub.com • 🐦 @seershub</p>
                <p className="mt-2">
                  Built on Base Network • Committed to Ecosystem Success
                </p>
              </div>
            </div>
          </motion.section>

          {/* Legal Disclaimer (Kept from original) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold mb-2 text-white/70">
                Legal Disclaimer
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Seershub and its products (SeersLeague, Pulseers) are
                skill-based competition platforms, not gambling or betting
                services. We do not offer odds, house-backed wagering, or games
                of chance. Participation is based on sports knowledge and skill.
              </p>
              <p className="text-xs text-white/40 mt-4">
                Last Updated: November 2025 • Status: Live on Mainnet
              </p>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
