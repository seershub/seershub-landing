'use client';

import { motion } from 'framer-motion';

interface DayData {
  day: string;
  amount: number;
}

export default function WeeklyGrowthChart() {
  const weekData: DayData[] = [
    { day: 'Mon', amount: 12000 },
    { day: 'Tue', amount: 24500 },
    { day: 'Wed', amount: 38200 },
    { day: 'Thu', amount: 53400 },
    { day: 'Fri', amount: 68900 },
    { day: 'Sat', amount: 82100 },
    { day: 'Sun', amount: 87650 },
  ];
  
  const maxAmount = Math.max(...weekData.map(d => d.amount));
  
  return (
    <div className="mt-12 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40
                    backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Vault Growth This Week</h3>
          <p className="text-sm text-white/40">Tracking daily deposits</p>
        </div>
        <div className="text-left md:text-right">
          <div className="text-sm text-white/40 mb-1">Current Total</div>
          <div className="text-2xl md:text-3xl font-bold text-green-400">
            +${(87650 - 12000).toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex items-end justify-between gap-2 md:gap-4 h-48 md:h-64">
        {weekData.map((data, i) => {
          const heightPercent = (data.amount / maxAmount) * 100;
          
          return (
            <div key={data.day} className="flex-1 flex flex-col items-center gap-2 md:gap-3">
              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="w-full relative group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-t from-amber-500 via-yellow-400 to-amber-300
                                rounded-t-xl relative overflow-hidden
                                hover:from-amber-400 hover:via-yellow-300 hover:to-amber-200
                                transition-all duration-300">
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow */}
                  <div className="absolute inset-0 shadow-[0_0_30px_rgba(251,191,36,0.6)]
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                pointer-events-none z-10">
                  <div className="bg-neutral-900 border border-amber-500/30 rounded-lg px-3 py-2
                                  shadow-xl whitespace-nowrap">
                    <div className="text-xs text-white/40 mb-1">{data.day}</div>
                    <div className="font-bold text-amber-400 text-sm">
                      ${data.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Label */}
              <div className="text-xs md:text-sm font-semibold text-white/60">
                {data.day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

