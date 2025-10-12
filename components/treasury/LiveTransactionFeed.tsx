'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Activity, User, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Transaction {
  user: string;
  amount: number;
  action: string;
  time: string;
  id: number;
}

export default function LiveTransactionFeed() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, user: '0x7a2f...8b3c', amount: 250, action: 'won', time: '2s ago' },
    { id: 2, user: '0x9d4e...1a7f', amount: 500, action: 'won', time: '5s ago' },
    { id: 3, user: '0x3c8b...6e2a', amount: 150, action: 'won', time: '12s ago' },
  ]);
  
  // Simulate new transactions
  useEffect(() => {
    const interval = setInterval(() => {
      const newTx: Transaction = {
        id: Date.now(),
        user: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
        amount: Math.floor(Math.random() * 500) + 100,
        action: 'won',
        time: 'just now'
      };
      
      setTransactions(prev => [newTx, ...prev.slice(0, 4)]);
    }, 10000); // Add new transaction every 10s
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 
                 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-green-400" />
          <h3 className="text-xl font-semibold">Live Payouts</h3>
          <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 
                         text-xs text-green-400 font-semibold">
            LIVE
          </span>
        </div>
        <button className="text-sm text-white/50 hover:text-white/70 transition-colors">
          View all →
        </button>
      </div>
      
      {/* Transaction list */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {transactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.05 }}
              layout
              className="flex items-center justify-between p-4 rounded-xl 
                         bg-white/[0.02] border border-white/5 
                         hover:bg-white/[0.04] hover:border-white/10 
                         transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Avatar */}
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 
                                flex items-center justify-center border border-green-500/30">
                  <User className="w-5 h-5 text-green-400" />
                </div>
                
                {/* Info */}
                <div className="min-w-0">
                  <div className="font-mono text-sm text-white/70 truncate">{tx.user}</div>
                  <div className="text-xs text-white/40">{tx.time}</div>
                </div>
              </div>
              
              {/* Amount */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-green-400 font-semibold text-lg whitespace-nowrap">
                    +${tx.amount}
                  </div>
                  <div className="text-xs text-white/30">USDC</div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

