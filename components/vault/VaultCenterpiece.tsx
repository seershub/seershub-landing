'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

// Floating USDC coins around vault
function FloatingUSDCCoins() {
  const { shouldReduceAnimations } = usePerformanceMode();
  const coins = Array.from({ length: 6 });
  
  return (
    <>
      {coins.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            scale: 0,
            opacity: 0 
          }}
          animate={shouldReduceAnimations ? {} : {
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 150, Math.cos(i * 60 * Math.PI / 180) * 150],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * 150, Math.sin(i * 60 * Math.PI / 180) * 150],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 360]
          }}
          transition={shouldReduceAnimations ? {} : {
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
          className="absolute pointer-events-none top-1/2 left-1/2 hidden lg:block"
        >
          <img
            src="/usdc-logo.png"
            width={40}
            height={40}
            alt="USDC"
            className="drop-shadow-[0_0_15px_rgba(39,117,202,0.8)]"
          />
        </motion.div>
      ))}
    </>
  );
}

export default function VaultCenterpiece() {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [vaultAmount, setVaultAmount] = useState(87650);
  const isLocked = true; // true until Sunday
  
  // Simulate deposits flowing in
  useEffect(() => {
    const interval = setInterval(() => {
      setVaultAmount(prev => prev + Math.floor(Math.random() * 20) + 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Outer glow */}
      <motion.div 
        animate={shouldReduceAnimations ? {} : { 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={shouldReduceAnimations ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-cyan-500/10 to-transparent 
                    blur-3xl"
      />
      
      {/* Main vault container */}
      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
                      rounded-2xl sm:rounded-3xl border-2 border-blue-500/30 p-4 sm:p-6 md:p-8 overflow-hidden
                      shadow-[0_0_80px_rgba(0,82,255,0.3)]">
        
        {/* Vault door background pattern */}
        <div className="absolute inset-0 opacity-10 text-blue-400">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            {/* Concentric circles */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="3" />
            
            {/* Lock bolts around circles */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = angle * Math.PI / 180;
              return (
                <circle
                  key={angle}
                  cx={200 + Math.cos(rad) * 140}
                  cy={200 + Math.sin(rad) * 140}
                  r="8"
                  fill="currentColor"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Central lock icon - HUGE */}
        <div className="relative text-center mb-6 md:mb-8">
          <motion.div
            animate={shouldReduceAnimations ? {} : (isLocked ? { rotate: [0, -5, 5, 0] } : { rotate: 90 })}
            transition={shouldReduceAnimations ? {} : (isLocked ? { duration: 2, repeat: Infinity, repeatDelay: 3 } : { duration: 1 })}
            className="inline-flex"
          >
            {isLocked ? (
              <Lock className="w-16 h-16 md:w-24 md:h-24 text-blue-400 drop-shadow-[0_0_20px_rgba(0,82,255,0.8)]" />
            ) : (
              <Unlock className="w-16 h-16 md:w-24 md:h-24 text-green-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
            )}
          </motion.div>
          
          <div className="mt-4 text-xs md:text-sm text-blue-400/70 uppercase tracking-widest font-semibold">
            {isLocked ? 'Vault Secured' : 'Vault Open - Distributing'}
          </div>
        </div>
        
        {/* USDC Logo + Amount - MASSIVE */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <img
              src="/usdc-logo.png"
              width={50}
              height={50}
              alt="USDC"
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_20px_rgba(39,117,202,0.6)]"
            />
          </div>
          
          <motion.div
            key={Math.floor(vaultAmount / 100)} // Update animation every $100
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-b from-white via-blue-100 to-blue-400 
                            bg-clip-text text-transparent
                            drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                ${vaultAmount.toLocaleString()}
              </span>
            </div>
            <div className="text-white/40 text-xs md:text-sm uppercase tracking-wider">
              Total Prize Pool
            </div>
          </motion.div>
        </div>
        
        {/* Deposit stats bar */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-blue-500/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">847</div>
            <div className="text-xs text-white/40 uppercase">Active Depositors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">2,134</div>
            <div className="text-xs text-white/40 uppercase">Total Predictions</div>
          </div>
        </div>
        
        {/* Vault filling progress */}
        <div className="mt-4 md:mt-6">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>Vault Capacity</span>
            <span>87% Full</span>
          </div>
          <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full
                         shadow-[0_0_20px_rgba(0,82,255,0.6)]"
            />
          </div>
        </div>
      </div>
      
      {/* Floating USDC coins around vault */}
      <FloatingUSDCCoins />
    </motion.div>
  );
}

