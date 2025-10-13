'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, TrendingUp, DollarSign, Users, Award } from 'lucide-react';
import { generateRandomActivity } from '@/lib/mockData';

const getIconForType = (type: string) => {
  switch (type) {
    case 'prediction': return TrendingUp;
    case 'match': return Clock;
    case 'reward': return DollarSign;
    case 'achievement': return Award;
    default: return Users;
  }
};

export default function ActivityFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activities, setActivities] = useState(() => 
    Array.from({ length: 10 }, generateRandomActivity)
  );

  // Add new activity every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = generateRandomActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
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
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Live Activity</h3>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 border border-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-500 font-semibold">LIVE</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <AnimatePresence mode="popLayout">
          {activities.map((activity) => {
            const Icon = getIconForType(activity.type);
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <div className="p-2 rounded-lg bg-[#0052FF]/20">
                  <Icon className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{activity.text}</p>
                </div>
                <div className="text-xs text-white/40 whitespace-nowrap">{activity.time}</div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-3 text-xs text-white/40 text-center">
        Hover to pause auto-scroll
      </div>
    </div>
  );
}

