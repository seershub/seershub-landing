'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Zap, Shield, Trophy, LayoutDashboard, Rocket, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function PitchDeck() {
  return (
    <div className="min-h-screen bg-bg-base text-foreground font-body">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-base/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">Back to Home</span>
          </Link>
          <div className="text-sm font-bold text-white">
            SEERSHUB <span className="text-primary-400">PITCH DECK</span>
          </div>
          <div className="w-[100px]" /> {/* Spacer */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">

        {/* --- SLIDE 1: HERO / TITLE --- */}
        <section className="mb-24 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-wider mb-6"
          >
            Spring 2025
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-display tracking-tight mb-6"
          >
            The Future of <br />
            <span className="text-gradient-nova">Skill-Based Gaming</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Seershub is the first decentralized prediction market designed for mass adoption, powered by Base.
          </motion.p>
        </section>

        {/* --- SLIDE 2: THE PROBLEM --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold font-display text-white">The Problem</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProblemCard
              title="Legacy Betting is Broken"
              desc="DraftKings & FanDuel take 10-15% vig (fees). Users are banned for winning. The house always wins."
            />
            <ProblemCard
              title="Web3 UX is Terrible"
              desc="Existing prediction markets like Polymarket are complex, lack social features, and feel like financial trading tools."
            />
          </div>
        </section>

        {/* --- SLIDE 3: THE SOLUTION (3 PILLARS) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold font-display text-white">The Solution</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <SolutionCard
              icon={Trophy}
              title="Seers League"
              desc="Weekly free-to-play prediction tournaments on Farcaster. Viral growth engine."
              color="text-secondary-400"
            />
            <SolutionCard
              icon={LayoutDashboard}
              title="Seershub Platform"
              desc="Pro-trading interface, detailed analytics, social feeds, and private leagues."
              color="text-primary-400"
            />
            <SolutionCard
              icon={Rocket}
              title="Pulseers (Meme)"
              desc="$SEER token integration, community incentives, and viral marketing campaigns."
              color="text-accent-gold"
            />
          </div>
        </section>

        {/* --- SLIDE 4: TRACTION & METRICS --- */}
        <section className="mb-24">
          <div className="glass-card-premium p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatBox value="10k+" label="Predictions" />
              <StatBox value="$50k+" label="Volume" />
              <StatBox value="2.5k+" label="Users" />
              <StatBox value="#1" label="On Base" />
            </div>
          </div>
        </section>

        {/* --- SLIDE 5: WHY BASE? --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold font-display text-white">Why Base Network?</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="glass-card p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {['Zero gas fees for users', 'Coinbase smart wallet integration', 'Instant finality', 'USDC native liquidity'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- SLIDE 6: TEAM & ASK --- */}
        <section className="text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-6">Join The Revolution</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We are raising our pre-seed round to scale specific verticals and launch the V1 platform.
          </p>
          <a href="mailto:invest@seershub.com" className="btn-nova px-12 py-4 text-lg">
            Contact Founder
          </a>
        </section>

      </main>
    </div>
  );
}

function ProblemCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="glass-card p-8 border-l-4 border-l-secondary-500 bg-gradient-to-br from-secondary-500/5 to-transparent">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  return (
    <div className="glass-card p-8 hover:bg-white/5 transition-colors group">
      <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function StatBox({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display">{value}</div>
      <div className="text-sm font-bold text-primary-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}
