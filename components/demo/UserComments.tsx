'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ThumbsUp, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const MOCK_COMMENTS = [
  {
    id: 1,
    user: 'alice.base',
    avatar: '/avatar/0a16668c89dfc9920789891b2c13891c.png',
    match: 'Man City vs Arsenal',
    comment: "Man City's home record is unbeatable. Arsenal missing key defenders. Easy home win! 🔵",
    likes: 24,
    prediction: 'Home Win',
    accuracy: 87,
    time: '12m ago'
  },
  {
    id: 2,
    user: 'bob.base',
    avatar: '/avatar/31cc024c00da0d1d8d0337120142b52d.png',
    match: 'Real Madrid vs Barcelona',
    comment: "El Clásico always unpredictable, but Barça's current form is insane. Expecting 2-1 away win! ⚽",
    likes: 18,
    prediction: 'Away Win',
    accuracy: 92,
    time: '25m ago'
  },
  {
    id: 3,
    user: 'carol.base',
    avatar: '/avatar/79e0ce7f58179293cc2dc4f061e4444a.png',
    match: 'Bayern vs Dortmund',
    comment: "Der Klassiker! Bayern at Allianz Arena = 90% win rate. Stats don't lie 📊",
    likes: 31,
    prediction: 'Home Win',
    accuracy: 94,
    time: '1h ago'
  },
  {
    id: 4,
    user: 'dave.base',
    avatar: '/avatar/b35e3ae275ce74427ca3e8690d55b945.png',
    match: 'PSG vs Marseille',
    comment: 'Le Classique always delivers drama. Both teams scoring, calling it 2-2 draw 🎯',
    likes: 12,
    prediction: 'Draw',
    accuracy: 78,
    time: '2h ago'
  },
  {
    id: 5,
    user: 'eve.base',
    avatar: '/avatar/ca7158ba2cf3398875dd67933e6da3f8.png',
    match: 'Galatasaray vs Fenerbahçe',
    comment: "Turkish derby! Galatasaray's home fortress, crowd advantage is HUGE 🦁🔥",
    likes: 27,
    prediction: 'Home Win',
    accuracy: 81,
    time: '3h ago'
  },
];

export default function UserComments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[#00D4FF]" />
          <h3 className="text-lg sm:text-xl font-bold">Community Insights</h3>
        </div>
        <div className="px-2 py-1 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/30">
          <span className="text-xs text-[#00D4FF] font-semibold">Live</span>
        </div>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-hide">
        {MOCK_COMMENTS.map((comment, i) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all group"
          >
            {/* User Header */}
            <div className="flex items-start gap-3 mb-2">
              <div className="relative shrink-0">
                <Image
                  src={comment.avatar}
                  alt={comment.user}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full ring-2 ring-[#0052FF]/30"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#000814] rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-green-500">{comment.accuracy}</span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{comment.user}</span>
                    <span className="text-xs text-white/40">•</span>
                    <span className="text-xs text-white/40">{comment.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60 hover:text-[#00D4FF] transition cursor-pointer">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">{comment.likes}</span>
                  </div>
                </div>
                
                {/* Match Badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0052FF]/10 border border-[#0052FF]/20 mb-2">
                  <span className="text-[10px] text-[#00D4FF] font-medium">{comment.match}</span>
                  <span className="text-[10px] text-white/40">→</span>
                  <span className="text-[10px] text-green-500 font-semibold">{comment.prediction}</span>
                </div>
                
                {/* Comment */}
                <p className="text-sm text-white/80 leading-relaxed mb-2">
                  {comment.comment}
                </p>
                
                {/* Accuracy Badge */}
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-white/50">
                    <strong className="text-green-500">{comment.accuracy}%</strong> accuracy
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

