'use client';

import { motion } from 'framer-motion';
import TreasuryHeader from '@/components/treasury/TreasuryHeader';
import MainPrizePoolCard from '@/components/treasury/MainPrizePoolCard';
import TreasuryGrid from '@/components/treasury/TreasuryGrid';
import LiveTransactionFeed from '@/components/treasury/LiveTransactionFeed';
import SecurityFooter from '@/components/treasury/SecurityFooter';
import FloatingCoins from '@/components/graphics/treasury/FloatingCoins';
import BlockchainNetworkGraphic from '@/components/graphics/treasury/BlockchainNetworkGraphic';

export default function TreasuryPanel() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background - Sophisticated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - subtle, professional */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full 
                     bg-gradient-radial from-primary-500/20 via-primary-500/10 to-transparent 
                     blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full 
                     bg-gradient-radial from-accent-green/20 via-accent-cyan/10 to-transparent 
                     blur-3xl"
        />
        
        {/* Floating USDC coins */}
        <FloatingCoins />
        
        {/* Grid pattern - very subtle */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <TreasuryHeader />
        
        {/* Main prize pool card */}
        <MainPrizePoolCard />
        
        {/* Stats grid */}
        <TreasuryGrid />
        
        {/* Live transaction feed */}
        <LiveTransactionFeed />
        
        {/* Security badges */}
        <SecurityFooter />
      </div>
      
      {/* Blockchain network visualization - right side */}
      <BlockchainNetworkGraphic />
    </section>
  );
}
