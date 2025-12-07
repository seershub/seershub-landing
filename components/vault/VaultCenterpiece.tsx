'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

// Floating USDC coins with better animation
function FloatingUSDCCoins() {
  const { shouldReduceAnimations } = usePerformanceMode();
  const coins = [
    { delay: 0, angle: 0, distance: 160 },
    { delay: 0.5, angle: 60, distance: 140 },
    { delay: 1, angle: 120, distance: 170 },
    { delay: 1.5, angle: 180, distance: 150 },
    { delay: 2, angle: 240, distance: 160 },
    { delay: 2.5, angle: 300, distance: 145 },
  ];

  if (shouldReduceAnimations) return null;

  return (
    <>
      {coins.map((coin, i) => {
        const rad = coin.angle * Math.PI / 180;
        const x = Math.cos(rad) * coin.distance;
        const y = Math.sin(rad) * coin.distance;

        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: [0, x, x, 0],
              y: [0, y, y, 0],
              scale: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: coin.delay,
              ease: "easeInOut"
            }}
            className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="relative">
              <img
                src="/usdc-logo.png"
                width={36}
                height={36}
                alt="USDC"
                className="drop-shadow-[0_0_20px_rgba(39,117,202,0.9)]"
              />
              <div className="absolute inset-0 bg-accent-cyan/30 blur-xl rounded-full" />
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

// Animated vault rings
function VaultRings() {
  const { shouldReduceAnimations } = usePerformanceMode();

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full vault-ring"
          style={{
            width: `${60 + ring * 50}px`,
            height: `${60 + ring * 50}px`,
          }}
          animate={shouldReduceAnimations ? {} : {
            rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: { duration: 20 + ring * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Decorative notches */}
          {[0, 90, 180, 270].map((angle) => (
            <div
              key={angle}
              className="absolute w-2 h-2 bg-primary-500/50 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateY(-${(60 + ring * 50) / 2}px) translate(-50%, -50%)`,
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export default function VaultCenterpiece() {
  const { shouldReduceAnimations } = usePerformanceMode();
  const [vaultAmount, setVaultAmount] = useState(87650);
  const isLocked = true;

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
      {/* Outer glow effect */}
      <motion.div
        animate={shouldReduceAnimations ? {} : {
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 bg-gradient-radial from-primary-500/30 via-accent-cyan/10 to-transparent 
                    rounded-full blur-3xl"
      />

      {/* Main vault container with metal texture */}
      <div className="relative metal-texture rounded-2xl sm:rounded-3xl overflow-hidden
                      border border-primary-500/30 vault-glow">

        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

        {/* Premium vault door pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            {/* Outer ring */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="url(#vaultGradient)" strokeWidth="1" />
            {/* Middle ring */}
            <circle cx="200" cy="200" r="140" fill="none" stroke="url(#vaultGradient)" strokeWidth="1.5" />
            {/* Inner ring */}
            <circle cx="200" cy="200" r="100" fill="none" stroke="url(#vaultGradient)" strokeWidth="2" />
            {/* Center circle */}
            <circle cx="200" cy="200" r="50" fill="none" stroke="url(#vaultGradient)" strokeWidth="3" />

            {/* Radial lines */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <line
                key={angle}
                x1="200"
                y1="200"
                x2={200 + Math.cos(angle * Math.PI / 180) * 180}
                y2={200 + Math.sin(angle * Math.PI / 180) * 180}
                stroke="rgba(0, 82, 255, 0.3)"
                strokeWidth="0.5"
              />
            ))}

            {/* Lock bolts */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = angle * Math.PI / 180;
              return (
                <circle
                  key={angle}
                  cx={200 + Math.cos(rad) * 140}
                  cy={200 + Math.sin(rad) * 140}
                  r="6"
                  fill="url(#vaultGradient)"
                />
              );
            })}

            <defs>
              <linearGradient id="vaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052FF" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated rings */}
        <VaultRings />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10">

          {/* Central lock icon */}
          <div className="relative text-center mb-6 md:mb-8">
            <motion.div
              animate={shouldReduceAnimations ? {} : (isLocked ? { rotate: [0, -3, 3, 0] } : { rotate: 90 })}
              transition={isLocked ? { duration: 2, repeat: Infinity, repeatDelay: 4 } : { duration: 1 }}
              className="inline-flex"
            >
              <div className="relative">
                {isLocked ? (
                  <Lock className="w-14 h-14 md:w-20 md:h-20 text-primary-400 drop-shadow-[0_0_30px_rgba(0,82,255,0.8)]" />
                ) : (
                  <Unlock className="w-14 h-14 md:w-20 md:h-20 text-accent-green drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]" />
                )}
                {/* Glow behind lock */}
                <div className="absolute inset-0 bg-primary-500/30 blur-2xl rounded-full" />
              </div>
            </motion.div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-primary-400/60" />
              <span className="text-xs md:text-sm text-primary-400/80 uppercase tracking-widest font-semibold">
                {isLocked ? 'Vault Secured' : 'Vault Open'}
              </span>
            </div>
          </div>

          {/* USDC Logo + Amount */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={shouldReduceAnimations ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <img
                  src="/usdc-logo.png"
                  width={50}
                  height={50}
                  alt="USDC"
                  className="w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_0_25px_rgba(39,117,202,0.7)]"
                />
              </motion.div>
            </div>

            <motion.div
              key={Math.floor(vaultAmount / 100)}
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span className="text-gradient-primary drop-shadow-[0_0_40px_rgba(0,82,255,0.5)]">
                  ${vaultAmount.toLocaleString()}
                </span>
              </div>
              <div className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-medium">
                Total Prize Pool
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 gap-4 pt-5 border-t border-primary-500/20">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gradient-primary">847</div>
              <div className="text-xs text-white/40 uppercase tracking-wider flex items-center justify-center gap-1">
                <Zap className="w-3 h-3" />
                Depositors
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gradient-primary">2,134</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Predictions</div>
            </div>
          </div>

          {/* Vault capacity bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Vault Capacity</span>
              <span className="text-primary-400">87% Full</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #0052FF, #00D4FF, #0052FF)',
                  backgroundSize: '200% 100%',
                }}
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating USDC coins */}
      <FloatingUSDCCoins />
    </motion.div>
  );
}
