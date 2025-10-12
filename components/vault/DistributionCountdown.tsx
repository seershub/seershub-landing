'use client';

import { motion } from 'framer-motion';
import { Clock, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DistributionCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 2,
    hours: 14,
    minutes: 37,
    seconds: 22
  });
  
  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 6; // Reset to 6 days for next week
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10
                    backdrop-blur-xl rounded-3xl border border-blue-500/30 p-4">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
        <div>
          <h3 className="font-semibold text-white/90 text-sm md:text-base">Vault Opens In</h3>
          <p className="text-xs text-white/40">Sunday 23:59 UTC</p>
        </div>
      </div>
      
      {/* Countdown timer */}
      <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="bg-neutral-900/60 rounded-xl p-3 md:p-4 text-center
                                          border border-amber-500/20">
            <motion.div
              key={unit.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-blue-400 mb-1"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
            <div className="text-xs text-white/40 uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Distribution info */}
      <div className="bg-blue-500/5 rounded-xl p-3 border border-blue-500/20">
        <div className="flex items-start gap-3">
          <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-white/60 leading-relaxed">
            Winners will receive their share automatically when the vault opens. 
            No action required.
          </div>
        </div>
      </div>
    </div>
  );
}

