'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
      <div className="glass-card border-2 border-[var(--glass-border)] p-6 relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-primary)]/10 opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="text-sm text-white/60">Welcome to</div>
          <div className="relative overflow-hidden max-h-40">
            <img
              src="/seershub-logo.png"
              alt="Seershub"
              className="h-44 w-auto"
              style={{
                filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
                transform: 'translateY(-6%)',
              }}
            />
          </div>
          <p className="text-xs text-white/40">The On-Chain Fandom Ecosystem</p>
        </div>
      </div>

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
        <div className="flex flex-col sm:flex-row gap-4 justify_center mb-8">
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
      <div className="flex items_center gap-2 mb-4">
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
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
      <div className="glass-card border-2 border-[var(--glass-border)] p-6 relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-primary)]/10 opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="text-sm text-white/60">Welcome to</div>
          <div className="relative overflow-hidden max-h-40">
            <img
              src="/seershub-logo.png"
              alt="Seershub"
              className="h-44 w-auto"
              style={{
                filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
                transform: 'translateY(-6%)',
              }}
            />
          </div>
          <p className="text-xs text-white/40">The On-Chain Fandom Ecosystem</p>
        </div>
      </div>

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
=======
import { ArrowLeft, Users, Zap, Shield, Trophy, LayoutDashboard, Rocket, CheckCircle2 } from 'lucide-react';


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
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4
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
