'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import UserProfile from '@/components/demo/UserProfile';
import MatchCard from '@/components/demo/MatchCard';
import PredictionModal from '@/components/demo/PredictionModal';
import Leaderboard from '@/components/demo/Leaderboard';
import PlatformStats from '@/components/demo/PlatformStats';
import ActivityFeed from '@/components/demo/ActivityFeed';
import Achievements from '@/components/demo/Achievements';
import PrizeVault from '@/components/demo/PrizeVault';
import ProfileView from '@/components/demo/ProfileView';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { MOCK_MATCHES, MatchData } from '@/lib/mockData';

interface PredictionData {
  matchId: number;
  outcome: 0 | 1 | 2;
  txHash: string;
  timestamp: number;
}

type TabType = 'matches' | 'profile' | 'leaderboard';

export default function DemoPage() {
  const { isConnected } = useAccount();
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);
  const [userPredictions, setUserPredictions] = useState<Map<number, PredictionData>>(new Map());
  const [activeTab, setActiveTab] = useState<TabType>('matches');

  const handlePredictionSuccess = (matchId: number, txHash: string, outcome: 0 | 1 | 2) => {
    const predictionData: PredictionData = {
      matchId,
      outcome,
      txHash,
      timestamp: Date.now()
    };
    setUserPredictions(prev => new Map(prev).set(matchId, predictionData));
  };

  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-[#000814]/70">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="text-white/70 hover:text-white transition flex items-center gap-1.5 sm:gap-2">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back</span>
            </Link>
            <span className="text-white/40 hidden sm:inline">/</span>
            <span className="font-semibold text-sm sm:text-base hidden sm:inline">Demo</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <span className="px-1.5 py-1 sm:px-2 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#00D4FF] text-[10px] sm:text-xs">
              <span className="hidden sm:inline">Base Sepolia</span>
              <span className="sm:hidden">Sepolia</span>
            </span>
            <span className="px-1.5 py-1 sm:px-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs">vDemo</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-8 sm:space-y-10">
        {/* Hero */}
        <section className="grid gap-4 sm:gap-6 md:grid-cols-3 items-stretch">
          {/* Left: Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#0052FF] to-[#00D4FF] bg-clip-text text-transparent">Seershub</span>
              <br />Base Builder Demo
            </h1>
            <p className="text-white/70 mt-2 sm:mt-3 text-sm sm:text-base">Video submission–ready demo showcasing on-chain predictions, leaderboard, activity feed, and beautiful UI built for Base.</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
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
            className="text-center p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔐</div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 px-4">Connect Your Wallet</h2>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base px-4">Connect to Base Sepolia to start making predictions</p>
            <div className="text-xs sm:text-sm text-white/40 px-4">
              Click "Connect Wallet" in the top right corner
            </div>
          </motion.div>
        )}

        {isConnected && (
          <>
            {/* Tab Navigation */}
            <div className="mb-6 sm:mb-8 -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {[
                  { id: 'matches' as TabType, label: '🏟️ Live Matches', shortLabel: 'Matches', count: MOCK_MATCHES.length },
                  { id: 'profile' as TabType, label: '👤 My Profile', shortLabel: 'Profile', count: null },
                  { id: 'leaderboard' as TabType, label: '🏆 Leaderboard', shortLabel: 'Leaders', count: null }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all whitespace-nowrap text-sm sm:text-base ${
                      activeTab === tab.id
                        ? 'bg-[#0052FF] text-white shadow-lg shadow-[#0052FF]/30'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    {tab.count && (
                      <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'matches' && (
              <>
                <SectionHeader title="🔥 Live Matches" subtitle="Predict upcoming games on Base" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {MOCK_MATCHES.map((match) => (
                    <MatchCard 
                      key={match.id} 
                      match={match} 
                      onPredict={setSelectedMatch}
                      isPredicted={userPredictions.has(match.id)}
                      predictionData={userPredictions.get(match.id)}
                    />
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2">
                    <SectionHeader title="🏆 Top Predictors" subtitle="Leaderboard rankings" />
                    <div className="mt-4">
                      <Leaderboard />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <SectionHeader title="💰 Prize Vault" subtitle="USDC rewards" />
                      <div className="mt-4">
                        <PrizeVault />
                      </div>
                    </div>
                    
                    <div>
                      <SectionHeader title="📊 Platform Stats" subtitle="On-chain metrics" />
                      <div className="mt-4">
                        <PlatformStats />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <ActivityFeed />
                </div>

                <Achievements />
              </>
            )}

            {activeTab === 'profile' && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ProfileView />
                </div>
                <div className="space-y-6">
                  <Achievements />
                  <PlatformStats />
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Leaderboard />
                </div>
                <div className="space-y-6">
                  <PlatformStats />
                  <ActivityFeed />
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Prediction Modal */}
      <PredictionModal 
        match={selectedMatch} 
        onClose={() => setSelectedMatch(null)}
        onSuccess={handlePredictionSuccess}
      />
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
