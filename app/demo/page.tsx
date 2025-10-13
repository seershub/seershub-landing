'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import UserProfile from '@/components/demo/UserProfile';
import MatchCard, { Match } from '@/components/demo/MatchCard';
import PredictionModal from '@/components/demo/PredictionModal';
import Leaderboard from '@/components/demo/Leaderboard';
import PlatformStats from '@/components/demo/PlatformStats';
import ActivityFeed from '@/components/demo/ActivityFeed';
import Achievements from '@/components/demo/Achievements';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const MOCK_MATCHES: Match[] = [
  {
    id: 1,
    league: 'Premier League',
    round: 'Round 15',
    homeTeam: 'Man City',
    awayTeam: 'Arsenal',
    homeFlag: '🔵',
    awayFlag: '🔴',
    time: 'in 2 hours',
    homePct: 45,
    drawPct: 25,
    awayPct: 30,
    aiSuggestion: 0,
  },
  {
    id: 2,
    league: 'La Liga',
    round: 'Round 12',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeFlag: '⚪',
    awayFlag: '🔵',
    time: 'tomorrow',
    homePct: 40,
    drawPct: 20,
    awayPct: 40,
    aiSuggestion: 2,
  },
  {
    id: 3,
    league: 'Bundesliga',
    round: 'Round 10',
    homeTeam: 'Bayern',
    awayTeam: 'Dortmund',
    homeFlag: '🔴',
    awayFlag: '🟡',
    time: 'in 5 hours',
    homePct: 55,
    drawPct: 20,
    awayPct: 25,
  },
  {
    id: 4,
    league: 'Serie A',
    round: 'Round 14',
    homeTeam: 'Inter',
    awayTeam: 'Juventus',
    homeFlag: '🔵',
    awayFlag: '⚫',
    time: 'tomorrow',
    homePct: 38,
    drawPct: 30,
    awayPct: 32,
  },
  {
    id: 5,
    league: 'Ligue 1',
    round: 'Round 11',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeFlag: '🔴',
    awayFlag: '⚪',
    time: 'in 8 hours',
    homePct: 60,
    drawPct: 22,
    awayPct: 18,
  },
  {
    id: 6,
    league: 'Süper Lig',
    round: 'Round 13',
    homeTeam: 'Galatasaray',
    awayTeam: 'Fenerbahçe',
    homeFlag: '🟡',
    awayFlag: '🟡',
    time: 'in 12 hours',
    homePct: 42,
    drawPct: 28,
    awayPct: 30,
    aiSuggestion: 1,
  },
];

export default function DemoPage() {
  const { isConnected } = useAccount();
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-[#000814]/70">
        <div className="mx-auto max-w-[1400px] px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/70 hover:text-white transition flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-semibold">Demo</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2 py-1 rounded-full bg-base-blue/10 border border-base-blue/30 text-base-blue">Base Sepolia</span>
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">vDemo</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-4 py-8 space-y-10">
        {/* Hero */}
        <section className="grid gap-6 md:grid-cols-3 items-stretch">
          {/* Left: Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-2 p-6 rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#0052FF] to-[#00D4FF] bg-clip-text text-transparent">Seershub</span>
              <br />Base Builder Demo
            </h1>
            <p className="text-white/70 mt-3">Video submission–ready demo showcasing on-chain predictions, leaderboard, activity feed, and beautiful UI built for Base.</p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Badge>Glass Morphism</Badge>
              <Badge>Framer Motion</Badge>
              <Badge>Wagmi + Viem</Badge>
              <Badge>RainbowKit</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <UserProfile />
          </motion.div>
        </section>

        {!isConnected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <div className="text-6xl mb-4">🔐</div>
            <h2 className="text-2xl font-bold mb-3">Connect Your Wallet</h2>
            <p className="text-white/60 mb-6">Connect to Base Sepolia to start making predictions</p>
            <div className="text-sm text-white/40">
              Click "Connect Wallet" in the top right corner
            </div>
          </motion.div>
        )}

        {isConnected && (
          <>
            <SectionHeader title="🔥 Live Matches" subtitle="Predict upcoming games on Base" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_MATCHES.map((match) => (
                <MatchCard key={match.id} match={match} onPredict={setSelectedMatch} />
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <SectionHeader title="🏆 Top Predictors" subtitle="Leaderboard rankings" />
                <div className="mt-4">
                  <Leaderboard />
                </div>
              </div>

              <div>
                <SectionHeader title="📊 Platform Stats" subtitle="Global metrics from the contract" />
                <div className="mt-4">
                  <PlatformStats />
                </div>
              </div>
            </div>

            <ActivityFeed />

            <Achievements />
          </>
        )}
      </main>

      {/* Prediction Modal */}
      <PredictionModal match={selectedMatch} onClose={() => setSelectedMatch(null)} />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 inline-flex items-center gap-2">
      {children}
    </span>
  );
}


function SectionHeader({ title, subtitle }: { title: string; subtitle?: string; }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle ? <p className="text-white/60 mt-1">{subtitle}</p> : null}
      </div>
      <Link href="#" className="text-white/60 hover:text-white text-sm inline-flex items-center gap-1">
        Learn more <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
