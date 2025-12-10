'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import DashboardLayout from '@/components/layout/DashboardLayout';
import UserProfile from '@/components/demo/UserProfile';
import MatchCard from '@/components/demo/MatchCard';
import PredictionModal from '@/components/demo/PredictionModal';
import Leaderboard from '@/components/demo/Leaderboard';
import PlatformStats from '@/components/demo/PlatformStats';
import ActivityFeed from '@/components/demo/ActivityFeed';
import Achievements from '@/components/demo/Achievements';
import PrizeVault from '@/components/demo/PrizeVault';
import ProfileView from '@/components/demo/ProfileView';
import UserComments from '@/components/demo/UserComments';
import WalletConnectOptions from '@/components/WalletConnectOptions';
import { ChevronRight, Zap, Trophy, BarChart3, User } from 'lucide-react';
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

  const tabs = [
    { label: 'Home', href: '/' },
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '/waitlist' },
  ];

  const demoTabs = [
    { id: 'matches' as TabType, label: 'Live Matches', icon: Zap, count: MOCK_MATCHES.length },
    { id: 'profile' as TabType, label: 'My Profile', icon: User },
    { id: 'leaderboard' as TabType, label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <DashboardLayout title="Platform Demo" tabs={tabs}>
      {/* Testnet Badge */}
      <div className="mb-4 flex justify-center">
        <span className="badge badge-info">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse mr-1" />
          Base Sepolia Testnet
        </span>
      </div>
      {/* Demo Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 mb-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">
                <span className="text-gradient">Seershub</span> Demo
              </h1>
              <span className="px-2 py-1 rounded-lg text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Base Sepolia
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm max-w-xl">
              Test on-chain predictions, leaderboard, and activity feed. This demo runs on Base Sepolia testnet.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--glass-bg)] border border-[var(--glass-border)]">
              Glass Morphism
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--glass-bg)] border border-[var(--glass-border)]">
              Wagmi + Viem
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--glass-bg)] border border-[var(--glass-border)]">
              RainbowKit
            </span>
          </div>
        </div>
      </motion.div>

      {/* User Profile Card */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <UserProfile />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <PlatformStats />
        </motion.div>
      </div>

      {!isConnected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <WalletConnectOptions />
        </motion.div>
      )}

      {isConnected && (
        <>
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide"
          >
            {demoTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap text-sm ${
                  activeTab === tab.id
                    ? 'bg-[var(--accent-primary)] text-black'
                    : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg-hover)]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.count && (
                  <span className={`px-1.5 py-0.5 rounded-md text-xs ${
                    activeTab === tab.id ? 'bg-black/20 text-white' : 'bg-white/10'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          {activeTab === 'matches' && (
            <>
              {/* Matches Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {MOCK_MATCHES.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                  >
                    <MatchCard 
                      match={match} 
                      onPredict={setSelectedMatch}
                      isPredicted={userPredictions.has(match.id)}
                      predictionData={userPredictions.get(match.id)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 space-y-6">
                  <Leaderboard />
                  <UserComments />
                </div>
                <div className="space-y-6">
                  <PrizeVault />
                  <Achievements />
                </div>
              </div>

              <ActivityFeed />
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

      {/* Prediction Modal */}
      <PredictionModal 
        match={selectedMatch} 
        onClose={() => setSelectedMatch(null)}
        onSuccess={handlePredictionSuccess}
      />
    </DashboardLayout>
  );
}
