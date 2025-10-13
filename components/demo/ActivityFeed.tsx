'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, DollarSign, Users } from 'lucide-react';

const MOCK_ACTIVITIES = [
  { id: 1, type: 'prediction', text: 'alice.base predicted Barcelona Win', time: '2m ago', icon: TrendingUp },
  { id: 2, type: 'match', text: 'Match 1042 starts in 30 minutes', time: '5m ago', icon: Clock },
  { id: 3, type: 'reward', text: 'bob.base earned $45 prize!', time: '12m ago', icon: DollarSign },
  { id: 4, type: 'stat', text: '10 new predictions in last hour', time: '20m ago', icon: Users },
  { id: 5, type: 'prediction', text: 'carol.base predicted Draw', time: '25m ago', icon: TrendingUp },
  { id: 6, type: 'reward', text: 'dave.base earned $30 prize!', time: '32m ago', icon: DollarSign },
  { id: 7, type: 'prediction', text: 'eve.base predicted Home Win', time: '38m ago', icon: TrendingUp },
  { id: 8, type: 'match', text: 'Match 1041 concluded', time: '45m ago', icon: Clock },
  { id: 9, type: 'prediction', text: 'frank.base predicted Away Win', time: '50m ago', icon: TrendingUp },
  { id: 10, type: 'stat', text: '50+ active users right now', time: '1h ago', icon: Users },
];

export default function ActivityFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll || isPaused) return;

    const scrollStep = () => {
      if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight) {
        scroll.scrollTop = 0;
      } else {
        scroll.scrollTop += 1;
      }
    };

    const interval = setInterval(scrollStep, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <h3 className="text-2xl font-bold mb-4">Live Activity</h3>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        {[...MOCK_ACTIVITIES, ...MOCK_ACTIVITIES].map((activity, i) => (
          <motion.div
            key={`${activity.id}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (i % 10) * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <div className="p-2 rounded-lg bg-[#0052FF]/20">
              <activity.icon className="w-4 h-4 text-[#00D4FF]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{activity.text}</p>
            </div>
            <div className="text-xs text-white/40 whitespace-nowrap">{activity.time}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

