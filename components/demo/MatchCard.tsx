'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users } from 'lucide-react';

export interface Match {
  id: number;
  league: string;
  round: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  time: string;
  homePct: number;
  drawPct: number;
  awayPct: number;
  aiSuggestion?: 0 | 1 | 2;
}

export default function MatchCard({ match, onPredict }: { match: Match; onPredict: (match: Match) => void; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 82, 255, 0.2)' }}
      className="group relative p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur hover:bg-white/[0.06] hover:border-[#0052FF]/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white/60">{match.league} · {match.round}</div>
        <div className="flex items-center gap-1.5 text-xs text-white/60">
          <Clock className="w-3.5 h-3.5" />
          {match.time}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 mb-5">
        <div className="flex-1 text-center">
          <div className="text-4xl mb-2">{match.homeFlag}</div>
          <div className="font-semibold">{match.homeTeam}</div>
        </div>

        <div className="text-white/40 font-bold">VS</div>

        <div className="flex-1 text-center">
          <div className="text-4xl mb-2">{match.awayFlag}</div>
          <div className="font-semibold">{match.awayTeam}</div>
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
          <div style={{ width: `${match.homePct}%` }} className="bg-green-500" />
          <div style={{ width: `${match.drawPct}%` }} className="bg-yellow-500" />
          <div style={{ width: `${match.awayPct}%` }} className="bg-blue-500" />
        </div>
        <div className="flex justify-between text-xs text-white/50 mt-1">
          <span>{match.homePct}% Home</span>
          <span>{match.drawPct}% Draw</span>
          <span>{match.awayPct}% Away</span>
        </div>
      </div>

      {match.aiSuggestion !== undefined && (
        <div className="flex items-center gap-1.5 text-xs text-[#00D4FF] mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          AI suggests: {['Home Win', 'Draw', 'Away Win'][match.aiSuggestion]}
        </div>
      )}

      <button
        onClick={() => onPredict(match)}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D4FF] hover:from-[#00D4FF] hover:to-[#0052FF] font-semibold transition-all duration-300 hover:scale-[1.02]"
      >
        Predict Outcome
      </button>
    </motion.div>
  );
}

