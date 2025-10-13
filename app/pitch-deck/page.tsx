'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Target, TrendingUp, Shield, Zap, Users, Globe, Rocket, CheckCircle2, XCircle, Code, DollarSign, Trophy, Lock, Sparkles, Award, TrendingDown } from 'lucide-react';

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header with back button */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-neutral-950/90"
      >
        <div className="container-responsive h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <Link href="/#waitlist" className="btn-primary px-5 py-2.5 text-sm">
            Join Waitlist
          </Link>
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
                    Decentralized Sports Prediction Platform
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
              Web3 Sports Prediction Competition Platform
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              <strong className="text-accent-green">Not Betting. Not Gambling.</strong>
              <br />
              Pure Skill-Based Competition on Base Network.
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
                💎 Non-Custodial
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
                <h2 className="text-3xl md:text-4xl font-bold">What is Seershub?</h2>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Seershub is a <strong className="text-white">decentralized sports prediction competition platform</strong> where 
                users compete based on their sports knowledge and analytical skills. <strong className="text-accent-green">This is not a betting platform</strong>—there 
                are no odds, no house edge, and no gambling mechanics.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Users pay a small entry fee to submit their predictions on-chain, compete in weekly skill-based competitions, 
                and earn rewards from a transparent community prize pool.
              </p>

              <div className="p-6 rounded-2xl bg-accent-green/10 border border-accent-green/20">
                <h3 className="text-xl font-bold mb-3 text-accent-green flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Legal Status
                </h3>
                <p className="text-white/70">
                  Seershub operates as a <strong className="text-white">skill-based competition platform</strong>, similar to fantasy sports leagues. 
                  No gambling license required. Compliant with regulations in most jurisdictions as we don't offer betting, odds, or house-backed wagering.
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
                      <h3 className="text-xl font-bold mb-2">No Ownership</h3>
                      <p className="text-white/60">
                        Users create valuable prediction data and insights but receive no ownership or long-term value from their participation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Solution Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
              </div>
              
              <p className="text-white/80 text-lg mb-8">
                Seershub leverages blockchain technology to create a transparent, verifiable, and community-owned prediction competition platform:
              </p>

              <div className="grid gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-accent-green/5 border border-accent-green/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">100% Transparency</h3>
                      <p className="text-white/60">
                        All predictions and results recorded on Base blockchain. Immutable, timestamped, and verifiable by anyone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Instant Payouts</h3>
                      <p className="text-white/60">
                        Rewards distributed automatically via smart contracts within ~2 seconds after match conclusion. No delays, no manual processing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary-500/5 border border-primary-500/20">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ultra-Low Fees</h3>
                      <p className="text-white/60">
                        Base Network enables transaction fees under $0.01 per prediction. More money goes to prizes, not gas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-accent-purple/5 border border-accent-purple/20">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-accent-purple mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Non-Custodial</h3>
                      <p className="text-white/60">
                        Users remain in control of their funds at all times. Platform cannot access or freeze user assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-center">
                  <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">~2s</div>
                  <div className="text-sm text-white/60">Payout Time</div>
                </div>
                <div className="p-5 rounded-xl bg-accent-green/10 border border-accent-green/20 text-center">
                  <TrendingDown className="w-8 h-8 text-accent-green mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">&lt;$0.01</div>
                  <div className="text-sm text-white/60">Transaction Fee</div>
                </div>
                <div className="p-5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-center">
                  <Shield className="w-8 h-8 text-accent-cyan mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/60">Transparent</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Base Network */}
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
                <h2 className="text-3xl md:text-4xl font-bold">Why Base Network?</h2>
              </div>
              
              <p className="text-white/70 text-lg mb-8">
                Base provides the ideal infrastructure for mainstream Web3 adoption with proven metrics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-white/5">
                  <h3 className="text-xl font-bold mb-4">Network Performance</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>$3+ billion Total Value Locked (TVL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>Transaction fees under $0.01 per prediction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>Sub-second transaction finality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500">✓</span>
                      <span>1,280% user growth over past year</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5">
                  <h3 className="text-xl font-bold mb-4">Coinbase Integration</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>Direct access to 120 million Coinbase users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>Seamless fiat on-ramp (credit card to USDC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>Smart Wallet support (no seed phrases needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan">✓</span>
                      <span>Built-in compliance framework</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/20">
                <h3 className="text-xl font-bold mb-3">BASE Token Integration (Post-Launch)</h3>
                <p className="text-white/70 mb-4">
                  Once BASE token launches, Seershub will introduce complementary BASE rewards alongside the core USDC prize pool:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span><strong className="text-white">Weekly BASE Bonus Pool:</strong> Additional rewards for top performers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span><strong className="text-white">Separate from Main Prizes:</strong> USDC competition remains fair; BASE bonuses are extra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span><strong className="text-white">Ecosystem Support:</strong> Platform-level commitment to Base network growth</span>
                  </li>
                </ul>
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

          {/* Roadmap */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">🚀 What's Next</h2>
              <p className="text-white/60 text-lg">Building the future of skill-based sports competition</p>
            </div>

            <div className="space-y-6">
              {/* Immediate (This Week) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl border-2 border-primary-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500 text-primary-500 font-bold">
                    NOW
                  </div>
                  <h3 className="text-2xl font-bold">Immediate (This Week)</h3>
                </div>
                <ul className="space-y-2 text-white/70 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">✓</span>
                    <span>Smart contract deployed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">✓</span>
                    <span>Landing page live</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Demo app (wallet connect + predictions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Base Builder grant application</span>
                  </li>
                </ul>
              </motion.div>

              {/* Q2 2026 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 rounded-full bg-accent-cyan/20 border border-accent-cyan text-accent-cyan font-bold">
                    Q2 2026
                  </div>
                  <h3 className="text-2xl font-bold">Mainnet Launch</h3>
                </div>
                <ul className="space-y-2 text-white/70 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Complete contract suite (Treasury, Oracle, Premium)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Security audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Base Mainnet deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Public beta (500 users)</span>
                  </li>
                </ul>
              </motion.div>

              {/* Q3 2026 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 rounded-full bg-accent-green/20 border border-accent-green text-accent-green font-bold">
                    Q3 2026
                  </div>
                  <h3 className="text-2xl font-bold">Growth & Expansion</h3>
                </div>
                <ul className="space-y-2 text-white/70 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Multi-sport expansion (basketball, cricket)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>10K+ active users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span><strong className="text-white">BASE token integration</strong></span>
                  </li>
                </ul>
              </motion.div>

              {/* 2026 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 rounded-full bg-accent-purple/20 border border-accent-purple text-accent-purple font-bold">
                    2026
                  </div>
                  <h3 className="text-2xl font-bold">Ecosystem & Governance</h3>
                </div>
                <ul className="space-y-2 text-white/70 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span><strong className="text-white">DAO governance (SEER token)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span><strong className="text-white">Achievement NFTs on Base</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">○</span>
                    <span>Cross-chain expansion</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Investment Opportunity */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-accent-amber/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent-amber/20">
                  <DollarSign className="w-6 h-6 text-accent-amber" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Investment Opportunity</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Current Status</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Brand identity and social presence (@seershub)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Landing page live at seershub.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Hybrid smart contract architecture designed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Base ecosystem relationships initiated</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">We're Seeking</h3>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-amber/10 to-accent-green/10 border border-accent-amber/30">
                    <div className="text-5xl font-bold mb-3 text-gradient bg-gradient-to-r from-accent-amber to-accent-green bg-clip-text text-transparent">
                      $500K
                    </div>
                    <p className="text-white/70 mb-4">Seed Funding</p>
                    <ul className="space-y-2 text-sm text-white/60">
                      <li className="flex items-center gap-2">
                        <span className="text-accent-amber">•</span>
                        <span>Smart contract audit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent-amber">•</span>
                        <span>Base Mainnet beta launch</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent-amber">•</span>
                        <span>User acquisition scaling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent-amber">•</span>
                        <span>Team expansion (2-3 developers)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="text-xl font-bold mb-3">Unit Economics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold mb-1 text-primary-500">$10-15</div>
                    <p className="text-sm text-white/60">Target CAC per user</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1 text-accent-green">$100-300</div>
                    <p className="text-sm text-white/60">Target LTV per user</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1 text-accent-cyan">15,000</div>
                    <p className="text-sm text-white/60">Break-even users (Q4 2026)</p>
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

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border-2 border-primary-500/20">
              <Rocket className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Join the Future of Sports Competition
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Be part of the transparent, skill-based sports prediction revolution on Base Network. 
                Early adopters receive founding member benefits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/#waitlist" className="btn-primary inline-flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Join Waitlist
                </Link>
                <a href="mailto:info@seershub.com" className="btn-secondary inline-flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Contact for Investment
                </a>
              </div>

              <div className="text-sm text-white/50">
                <p>📧 info@seershub.com • 🐦 @seershub</p>
                <p className="mt-2">Built on Base Network • Committed to Ecosystem Success</p>
              </div>
            </div>
          </motion.section>

          {/* Legal Disclaimer */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold mb-2 text-white/70">Legal Disclaimer</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Seershub is a skill-based competition platform, not a gambling or betting service. We do not offer odds, house-backed wagering, 
                or games of chance. Participation is based on sports knowledge and analytical skill. Users compete against each other in transparent, 
                verifiable competitions with community-funded prize pools. All predictions and results are recorded on-chain for verification. 
                No gambling license required in most jurisdictions where skill-based competitions are legal.
              </p>
              <p className="text-xs text-white/40 mt-4">
                Last Updated: January 2025 • Status: Pre-launch, seeking funding • Version: 4.0
              </p>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
