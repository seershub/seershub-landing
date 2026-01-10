'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Target,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Rocket,
  CheckCircle2,
  XCircle,
  Trophy,
  Sparkles,
  Gift,
  Gauge,
  BarChart3,
  Activity,
  Clock,
} from 'lucide-react';

export default function PitchDeckPage() {
  const tabs = [
    { label: 'Home', href: '/' },
    { label: 'Pitch Deck', href: '/pitch-deck', active: true },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '/waitlist' },
  ];

  return (
    <DashboardLayout title="Pitch Deck" tabs={tabs}>
      <div className="max-w-5xl mx-auto space-y-16">
        <Hero />
        <WhatIs />
        <Problem />
        <Pillars />
        <Traction />
        <WhyBase />
        <Market />
        <Advantages />
        <CTA />
        <Legal />
      </div>
    </DashboardLayout>
  );
}

/* ---------------- Sections ---------------- */
function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">


      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 mb-6">
        <Rocket className="w-4 h-4 text-[var(--accent-primary)]" />
        <span className="text-sm font-semibold text-[var(--accent-primary)]">Pitch Deck</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-light)] bg-clip-text text-transparent">
        Seershub
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">The On-Chain Ecosystem for Sports Fandom</h2>
      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6">
        <strong className="text-[var(--accent-primary)]">Not Betting. Not Gambling.</strong>
        <br />
        A provably fair, skill-based ecosystem on Base.
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <Badge label="🏆 Skill-Based Competition" />
        <Badge label="🔒 100% Transparent" />
        <Badge label="⚡ Built on Base" />
        <Badge label="🚀 2 Live Mini Apps" />
      </div>
    </motion.div>
  );
}

function WhatIs() {
  return (
    <SectionCard>
      <SectionHeader icon={<Sparkles className="w-6 h-6 text-[var(--accent-primary)]" />} title="What is Seershub?" badge="Platform Basics" />
      <p className="text-white/80 text-lg leading-relaxed mb-6">
        Seershub is a <strong>3-pillar ecosystem</strong> built on Base to onboard millions of mainstream sports fans. We solve the $200B+ prediction
        market's core problem—opacity and "house advantages"—by creating a provably fair, skill-based economy.
      </p>
      <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
        <h3 className="text-xl font-bold mb-3 text-[var(--accent-primary)] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          Legal Status
        </h3>
        <p className="text-white/70">
          We are a <strong>skill-based competition platform</strong>, not a gambling service. No odds, no house-backed wagering. Compliant in most
          jurisdictions, similar to fantasy sports.
        </p>
      </div>
    </SectionCard>
  );
}

function Problem() {
  return (
    <SectionCard>
      <SectionHeader icon={<Target className="w-6 h-6 text-red-500" />} title="The Problem" badge="Market Pain" />
      <p className="text-white/70 text-lg mb-6">Traditional sports prediction platforms suffer from three critical issues:</p>
      <div className="space-y-4">
        <ProblemItem title="Lack of Transparency" description="Centralized platforms control everything—odds, outcomes, rewards. Users have no visibility into how winners are determined or how prizes are distributed." />
        <ProblemItem title="Trust Issues" description="No verifiable proof of fair play. Results can be manipulated, and users must blindly trust the platform operator." />
        <ProblemItem title="Passive Experience" description="Fans are passive viewers. Their knowledge creates immense value for platforms, but they get no long-term ownership or value back." />
      </div>
    </SectionCard>
  );
}

function Pillars() {
  return (
    <SectionCard>
      <SectionHeader icon={<Shield className="w-6 h-6 text-accent-green" />} title="Our 3-Pillar Ecosystem" badge="Live on Base" />
      <p className="text-white/80 text-lg mb-8">We are building the complete on-chain journey for sports fans. Our ecosystem is live on Base Mainnet.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PillarCard
          title="1. Pulseers"
          badge="LIVE (Free Funnel)"
          icon={<Gauge className="w-6 h-6 text-cyan-400" />}
          desc="Free, gasless social pulse mini app. 1-signature votes to boost favorite teams."
          job="Acquire millions of users (Top-of-Funnel)."
          badgeColor="cyan"
        />
        <PillarCard
          title="2. SeersLeague"
          badge="LIVE (Paid Skill League)"
          icon={<Trophy className="w-6 h-6 text-green-400" />}
          desc="Skill-based mini app (5 free picks, then 0.5 USDC). Weekly USDC prize pools."
          job='Convert, retain, and identify the top "Seers".'
          badgeColor="green"
        />
        <PillarCard
          title="3. Seershub"
          badge="Vision (Pro Market)"
          icon={<BarChart3 className="w-6 h-6 text-amber-400" />}
          desc="High-stakes pro platform where top Seers turn verified on-chain skill into a tradable data asset."
          job="Capture the high-value market."
          badgeColor="amber"
        />
      </div>
    </SectionCard>
  );
}

function Traction() {
  return (
    <SectionCard>
      <SectionHeader icon={<Activity className="w-6 h-6 text-accent-green" />} title="Traction: We Are Live & Shipping Fast" badge="Execution" />
      <p className="text-white/80 text-lg mb-8">We are not an idea. We are a <strong>solo-founded</strong> team proving our execution velocity on Base Mainnet.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StatCard value="2" label="Live Mini Apps on Mainnet" note="Pulseers (Free) & SeersLeague (Paid)" />
          <StatCard value="200+" label="On-Chain Transactions" note="Real, organic activity on SeersLeague" />
        </div>
        <div className="space-y-6">
          <KeyFeat
            icon={<Clock className="w-6 h-6 text-accent-green" />}
            title="EIP-5792 in 48 Hours"
            desc="Turned 2-signature flow into 1-signature batch transaction after user feedback."
          />
          <KeyFeat
            icon={<Gift className="w-6 h-6 text-accent-cyan" />}
            title="Paymaster (Gasless)"
            desc="Pulseers is 100% free by sponsoring transactions; frictionless onboarding."
          />
        </div>
      </div>
    </SectionCard>
  );
}

function WhyBase() {
  return (
    <SectionCard>
      <SectionHeader icon={<Globe className="w-6 h-6 text-[var(--accent-primary)]" />} title="Why We Are 100% Base-Native" badge="Base-Only Strategy" />
      <p className="text-white/70 text-lg mb-8">Our entire ecosystem is built only on Base. Not a multi-chain hedge—Base is the only stack to build this vision.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ListCardItem
          title="Network Performance"
          items={[
            '**Ultra-Low Fees:** 0.5 USDC league + gasless funnel are viable.',
            '**EIP-5792 Support:** Critical for 1-signature UX and adoption.',
          ]}
        />
        <ListCardItem
          title="Ecosystem & Onboarding"
          items={[
            '**Farcaster Mini Apps:** Seamless discovery and engagement layer.',
            '**Coinbase Integration:** Direct access to millions of crypto-curious sports fans.',
          ]}
        />
      </div>
    </SectionCard>
  );
}

function Market() {
  return (
    <SectionCard>
      <SectionHeader icon={<TrendingUp className="w-6 h-6 text-[var(--accent-primary)]" />} title="Market Opportunity" badge="Growth" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="text-6xl font-bold mb-3 text-gradient bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-light)] bg-clip-text text-transparent">
            $200B+
          </div>
          <p className="text-white/70 text-lg mb-6">Global sports prediction market size</p>

          <div className="text-5xl font-bold mb-3 text-gradient bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">
            60M+
          </div>
          <p className="text-white/70 text-lg">Fantasy sports users in US alone</p>
        </div>

        <div className="space-y-4">
          <MiniStat value="+24%" label="Annual market growth (CAGR)" color="text-accent-green" />
          <MiniStat value="120M+" label="Coinbase users (potential reach)" color="text-[var(--accent-primary)]" />
          <MiniStat value="$580M+" label="Base daily transaction volume" color="text-accent-cyan" />
        </div>
      </div>
    </SectionCard>
  );
}

function Advantages() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Competitive Advantages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdvCard
          title="vs. Traditional Platforms"
          items={[
            'Full blockchain transparency',
            'Community-owned prize pools',
            'No manipulation risk',
            'User data ownership',
          ]}
          icon={<Trophy className="w-5 h-5 text-[var(--accent-primary)]" />}
        />
        <AdvCard
          title="vs. Betting Sites"
          items={[
            'Legal in more jurisdictions',
            'No gambling license needed',
            'No house edge',
            'Wider audience access',
          ]}
          icon={<Shield className="w-5 h-5 text-accent-green" />}
        />
        <AdvCard
          title="vs. Web3 Platforms"
          items={[
            'Base Network advantages',
            'Hybrid efficient architecture',
            'Sports-first UX focus',
            'Coinbase Smart Wallet',
          ]}
          icon={<Zap className="w-5 h-5 text-accent-cyan" />}
        />
      </div>
    </SectionCard>
  );
}

function CTA() {
  return (
    <SectionCard>
      <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-accent-cyan/10 border-2 border-[var(--accent-primary)]/20 text-center">
        <Rocket className="w-16 h-16 text-[var(--accent-primary)] mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-4">Join the Future of Sports Fandom</h2>
        <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
          Our ecosystem is live. We are building the transparent, skill-based sports economy on Base.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="https://pulseers.seershub.com" target="_blank" className="btn-secondary inline-flex items-center gap-2">
            <Gauge className="w-5 h-5" />
            Launch Pulseers (Free)
          </Link>
          <Link href="https://league.seershub.com" target="_blank" className="btn-primary inline-flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Launch SeersLeague
          </Link>
        </div>
        <div className="text-sm text-white/50">
          <p>📧 info@seershub.com • 🐦 @seershub</p>
          <p className="mt-2">Built on Base Network • Committed to Ecosystem Success</p>
        </div>
      </div>
    </SectionCard>
  );
}

function Legal() {
  return (
    <SectionCard>
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
        <h3 className="text-sm font-bold mb-2 text-white/70">Legal Disclaimer</h3>
        <p className="text-xs text-white/50 leading-relaxed">
          Seershub and its products (SeersLeague, Pulseers) are skill-based competition platforms, not gambling or betting services. We do not offer odds, house-backed wagering, or games of chance. Participation is based on sports knowledge and skill.
        </p>
        <p className="text-xs text-white/40 mt-4">Last Updated: November 2025 • Status: Live on Mainnet</p>
      </div>
    </SectionCard>
  );
}

/* ---------------- Reusable UI ---------------- */
function Badge({ label }: { label: string }) {
  return <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">{label}</div>;
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-10 rounded-3xl border border-[var(--glass-border)]">
      {children}
    </motion.section>
  );
}

function SectionHeader({ icon, title, badge }: { icon: React.ReactNode; title: string; badge?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
        {icon}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {badge && (
          <div className="inline-flex px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-semibold mt-2 border border-[var(--accent-primary)]/20">
            {badge}
          </div>
        )}
      </div>
    </div>
  );
}

function ProblemItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
      <div className="flex items-start gap-3">
        <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/60">{description}</p>
        </div>
      </div>
    </div>
  );
}

function PillarCard({ title, badge, icon, desc, job, badgeColor }: { title: string; badge: string; icon: React.ReactNode; desc: string; job: string; badgeColor: 'cyan' | 'green' | 'amber' }) {
  const colorClass =
    badgeColor === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
      badgeColor === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
        'bg-amber-500/10 text-amber-400 border-amber-500/30';

  return (
    <div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] h-full">
      <div className="p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] w-min mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3 ${colorClass}`}>
        {badge}
      </div>
      <p className="text-white/70 mb-3">{desc}</p>
      <p className="font-bold text-[var(--accent-primary)]">{job}</p>
    </div>
  );
}

function StatCard({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5">
      <div className="text-5xl font-bold text-gradient bg-gradient-to-r from-[var(--accent-primary)] to-accent-cyan bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="text-xl font-semibold text-white/90">{label}</p>
      {note && <p className="text-white/60">{note}</p>}
    </div>
  );
}

function KeyFeat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-xl font-semibold text-white/90">{title}</h3>
      </div>
      <p className="text-white/60">{desc}</p>
    </div>
  );
}

function ListCardItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 h-full">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-white/70">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[var(--accent-primary)]">✓</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AdvCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="glass-card p-6 rounded-2xl h-full">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2 text-white/70 text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[var(--accent-primary)]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniStat({ value, label, color }: { value: string; label: string; color?: string }) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
      <div className={`text-3xl font-bold ${color ?? 'text-[var(--accent-primary)]'}`}>{value}</div>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}
