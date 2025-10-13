'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, ExternalLink } from 'lucide-react';
import { MatchData } from '@/lib/mockData';
import Image from 'next/image';

interface PredictionData {
  matchId: number;
  outcome: 0 | 1 | 2;
  txHash: string;
  timestamp: number;
}

export default function MatchCard({ 
  match, 
  onPredict,
  isPredicted,
  predictionData
}: { 
  match: MatchData; 
  onPredict: (match: MatchData) => void;
  isPredicted?: boolean;
  predictionData?: PredictionData;
}) {
  const getOutcomeName = (outcome: 0 | 1 | 2) => {
    return ['Home Win', 'Draw', 'Away Win'][outcome];
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 82, 255, 0.2)' }}
      className="group relative p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur hover:bg-white/[0.06] hover:border-[#0052FF]/30 transition-all duration-300"
    >
      {/* League Badge */}
      <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-[#0052FF] text-xs font-semibold flex items-center gap-1">
        {match.leagueBadge} {match.league}
      </div>

      {/* Live Indicator */}
      {match.isLive && (
        <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/20 border border-red-500">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs text-red-500 font-semibold">LIVE</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white/60">{match.round}</div>
        <div className="flex items-center gap-1.5 text-xs text-white/60">
          <Clock className="w-3.5 h-3.5" />
          {match.startsIn}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 mb-5">
        <div className="flex-1 text-center">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src={match.homeTeam.logo}
              alt={match.homeTeam.name}
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="text-4xl flex items-center justify-center h-full">${match.homeTeam.flag}</div>`;
                }
              }}
            />
          </div>
          <div className="font-semibold text-sm">{match.homeTeam.name}</div>
        </div>

        <div className="text-white/40 font-bold text-sm">VS</div>

        <div className="flex-1 text-center">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src={match.awayTeam.logo}
              alt={match.awayTeam.name}
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="text-4xl flex items-center justify-center h-full">${match.awayTeam.flag}</div>`;
                }
              }}
            />
          </div>
          <div className="font-semibold text-sm">{match.awayTeam.name}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-white/60 mb-1.5">
          <span>Community Predictions</span>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>127</span>
          </div>
        </div>
        <div className="flex gap-1 h-2 rounded-full overflow-hidden">
          <div style={{ width: `${match.communityPrediction.home}%` }} className="bg-green-500" />
          <div style={{ width: `${match.communityPrediction.draw}%` }} className="bg-yellow-500" />
          <div style={{ width: `${match.communityPrediction.away}%` }} className="bg-blue-500" />
        </div>
        <div className="flex justify-between text-xs text-white/50 mt-1">
          <span>{match.communityPrediction.home}% Home</span>
          <span>{match.communityPrediction.draw}% Draw</span>
          <span>{match.communityPrediction.away}% Away</span>
        </div>
      </div>

      {match.aiSuggestion !== undefined && (
        <div className="flex items-center gap-1.5 text-xs text-[#00D4FF] mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          AI suggests: {['Home Win', 'Draw', 'Away Win'][match.aiSuggestion]}
        </div>
      )}

      {/* Entry Fee */}
      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
        <span className="text-xs text-white/60">Entry Fee</span>
        <div className="flex items-center gap-1">
          <span className="text-lg">💵</span>
          <span className="text-sm font-bold text-[#00D4FF]">3 USDC</span>
        </div>
      </div>

      {isPredicted && predictionData ? (
        <div className="space-y-2">
          <div className="w-full py-3 rounded-xl bg-green-500/20 border border-green-500 text-center">
            <div className="flex items-center justify-center gap-2 text-green-500 font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Predicted: {getOutcomeName(predictionData.outcome)}
            </div>
          </div>
          <button
            onClick={() => window.open(`https://sepolia.basescan.org/tx/${predictionData.txHash}`, '_blank')}
            className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Transaction
          </button>
        </div>
      ) : (
        <button
          onClick={() => onPredict(match)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D4FF] hover:from-[#00D4FF] hover:to-[#0052FF] font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          Predict Outcome
        </button>
      )}
    </motion.div>
  );
}

