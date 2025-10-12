'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Deposit {
  id: number;
  user: string;
  amount: number;
  prediction: string;
  time: string;
}

export default function LiveDepositStream() {
  // NFT avatars from public/avatar
  const avatars = [
    '/avatar/0a16668c89dfc9920789891b2c13891c.png',
    '/avatar/31cc024c00da0d1d8d0337120142b52d.png',
    '/avatar/79e0ce7f58179293cc2dc4f061e4444a.png',
    '/avatar/b35e3ae275ce74427ca3e8690d55b945.png',
    '/avatar/ca7158ba2cf3398875dd67933e6da3f8.png',
  ];
  
  const [deposits, setDeposits] = useState<Deposit[]>([
    { id: 1, user: 'CryptoKing', amount: 10, prediction: 'Liverpool Win', time: 'Just now' },
    { id: 2, user: 'SportsFan42', amount: 5, prediction: 'Barcelona Win', time: '12s ago' },
    { id: 3, user: 'PredictorPro', amount: 3, prediction: 'Draw', time: '28s ago' },
    { id: 4, user: 'BlockchainFan', amount: 5, prediction: 'Chelsea Win', time: '45s ago' },
  ]);
  
  // Simulate new deposits
  useEffect(() => {
    const names = ['CryptoWhale', 'PredictMaster', 'Web3Pro', 'ChainKing', 'USDCLover'];
    const predictions = ['Liverpool Win', 'Barcelona Win', 'Draw', 'Real Madrid Win', 'Bayern Win'];
    const amounts = [3, 5, 10];
    
    let idCounter = 5; // Start from 5 since we have 4 initial deposits
    const interval = setInterval(() => {
      const newDeposit: Deposit = {
        id: idCounter++,
        user: names[Math.floor(Math.random() * names.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        prediction: predictions[Math.floor(Math.random() * predictions.length)],
        time: 'Just now'
      };
      
      setDeposits(prev => [newDeposit, ...prev.slice(0, 3)]); // Keep only 4 items max
    }, 8000); // New deposit every 8s
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 
                    backdrop-blur-xl rounded-3xl border border-white/10 p-4 md:p-6 
                    flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-green-400/30 rounded-full blur-md"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Live Deposits</h3>
        </div>
        <span className="text-xs text-white/40">Real-time</span>
      </div>
      
      {/* Deposit stream */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {deposits.map((deposit) => (
            <motion.div
              key={deposit.id}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              layout
              className="relative group"
            >
              {/* Arrow indicating flow into vault */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:block"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </motion.div>
              
              {/* Deposit card */}
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 
                              p-3 md:p-4 hover:bg-white/[0.06] hover:border-blue-500/30 
                              transition-all duration-300">
                
                <div className="flex items-start gap-3">
                  {/* NFT Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border-2 border-blue-500/30
                                    shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                      <img
                        src={avatars[(deposit.id - 1) % avatars.length]}
                        alt={deposit.user}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online indicator */}
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full 
                                   border-2 border-neutral-900" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs md:text-sm text-white/90 truncate">
                        {deposit.user}
                      </span>
                      <span className="text-xs text-white/30 flex-shrink-0 ml-2">
                        {deposit.time}
                      </span>
                    </div>
                    
                    <div className="text-xs text-white/50 mb-2 truncate">
                      {deposit.prediction}
                    </div>
                    
                    {/* Amount badge */}
                    <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg
                                    bg-gradient-to-r from-blue-500/20 to-cyan-500/20
                                    border border-blue-500/40">
                      <img
                        src="/usdc-logo.png"
                        width={14}
                        height={14}
                        alt="USDC"
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                      />
                      <span className="font-bold text-blue-400 text-xs md:text-sm">
                        {deposit.amount} USDC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Stream summary */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/40 text-xs md:text-sm">Last 24h deposits</span>
          <span className="font-semibold text-green-400 text-xs md:text-sm">+$12,430</span>
        </div>
      </div>
    </div>
  );
}

