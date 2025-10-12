'use client';

import { motion } from 'framer-motion';
import { X, Check, Shield, Lock } from 'lucide-react';
import BlockchainNetwork from '@/components/graphics/BlockchainNetwork';

export default function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Floating blockchain graphic */}
      <motion.div
        className="absolute top-20 right-10 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BlockchainNetwork />
      </motion.div>

      {/* Lock icon - security theme */}
      <motion.div
        className="absolute bottom-40 left-10 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Lock className="w-24 h-24 text-accent-green" />
      </motion.div>

      {/* Shield - transparency theme */}
      <motion.div
        className="absolute top-1/3 right-[5%] opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-32 h-32 text-base-blue" />
      </motion.div>

      <div className="container mx-auto max-w-[1200px] relative z-10 w-full">
        {/* Section title - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          {/* Badge - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                       bg-red-500/10 border border-red-500/30 mb-4 sm:mb-6 text-sm"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-xs sm:text-sm font-semibold text-red-400">The Old Way is Broken</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <strong className="bg-[#0052FF] text-white px-2 sm:px-3 py-1 rounded mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why</strong>
            <span className="text-gradient">decentralize</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">sports betting?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-[680px] mx-auto leading-relaxed">
            Traditional platforms have failed bettors. We're building a better way with blockchain—transparent, 
            secure, and truly fair.
          </p>
        </motion.div>

        {/* Two column layout - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {/* Problem card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl overflow-hidden group"
                 style={{
                   background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(127, 29, 29, 0.05) 100%)',
                   border: '1px solid rgba(239, 68, 68, 0.2)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                 }}
                 whileHover={{ 
                   scale: 1.02,
                   boxShadow: '0 20px 60px rgba(239, 68, 68, 0.3)'
                 }}
               >
                 {/* Animated background gradient */}
                 <motion.div 
                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
                   }}
                 />
                 
                 {/* Floating X icons in background */}
                 <div className="absolute top-4 right-4 opacity-5">
                   <X className="w-32 h-32 text-red-500" />
                 </div>
                 
                 <div className="relative">
                   <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
                     <div className="flex items-center gap-2 sm:gap-3">
                       <motion.div 
                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/20 flex items-center justify-center
                                    border border-red-500/30"
                         whileHover={{ rotate: 180, scale: 1.1 }}
                         transition={{ duration: 0.4 }}
                       >
                         <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                       </motion.div>
                       <h3 className="text-xl sm:text-2xl font-bold text-white">The Problem</h3>
                     </div>
                     <span className="px-2.5 sm:px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-semibold">
                       Centralized
                     </span>
                   </div>
                  <ul className="space-y-3 sm:space-y-5">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-red-500/5 transition-colors"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium text-sm sm:text-base">Platforms control your funds</span>
                        <p className="text-white/40 text-xs sm:text-sm mt-1">Your money is locked in their custody</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-red-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">High fees reduce winnings</span>
                        <p className="text-white/40 text-sm mt-1">Up to 15% commission on every bet</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-red-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-400" />
              </div>
                      <div>
                        <span className="text-white font-medium">Zero transparency</span>
                        <p className="text-white/40 text-sm mt-1">Opaque odds and hidden algorithms</p>
            </div>
                    </motion.li>
                    <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-red-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">Slow withdrawals</span>
                        <p className="text-white/40 text-sm mt-1">Wait 3-7 days to access your winnings</p>
                      </div>
                    </motion.li>
                  </ul>
                </div>
          </motion.div>

          {/* Solution card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative p-8 rounded-3xl overflow-hidden group"
                 style={{
                   background: 'linear-gradient(135deg, rgba(0, 82, 255, 0.08) 0%, rgba(6, 182, 212, 0.06) 100%)',
                   border: '1px solid rgba(0, 82, 255, 0.3)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 82, 255, 0.1)'
                 }}
                 whileHover={{ 
                   scale: 1.02,
                   boxShadow: '0 20px 60px rgba(0, 82, 255, 0.4), inset 0 0 0 1px rgba(0, 82, 255, 0.2)'
                 }}
               >
                 {/* Animated background gradient */}
                 <motion.div 
                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'radial-gradient(circle at 50% 50%, rgba(0, 82, 255, 0.15) 0%, transparent 70%)'
                   }}
                 />
                 
                 {/* Floating checkmark in background */}
                 <div className="absolute top-4 right-4 opacity-5">
                   <Check className="w-32 h-32 text-blue-500" />
                 </div>
                 
                 {/* Shield animation */}
                 <motion.div
                   className="absolute top-8 right-8"
                   initial={{ rotate: 0 }}
                   whileInView={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 >
                   <Shield className="w-20 h-20 text-blue-500/10" />
                 </motion.div>
                 
                 <div className="relative">
                   <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                       <motion.div 
                         className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center
                                    border border-blue-500/30"
                         whileHover={{ scale: 1.2, rotate: 360 }}
                         transition={{ duration: 0.5 }}
                       >
                         <Check className="w-6 h-6 text-blue-400" />
                       </motion.div>
                       <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                         Seershub Solution
                       </h3>
                     </div>
                     <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 font-semibold">
                       Decentralized
                     </span>
                   </div>
                  <ul className="space-y-5">
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-semibold">Non-custodial, you own your wallet</span>
                        <p className="text-white/50 text-sm mt-1">Full control over your funds at all times</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-semibold">Minimal fees, maximum returns</span>
                        <p className="text-white/50 text-sm mt-1">Less than 3% platform fee on Base Network</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
              </div>
                      <div>
                        <span className="text-white font-semibold">Open smart contracts</span>
                        <p className="text-white/50 text-sm mt-1">Every transaction is auditable on-chain</p>
            </div>
                    </motion.li>
                    <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-semibold">Instant USDC payouts</span>
                        <p className="text-white/50 text-sm mt-1">Winnings credited in seconds, not days</p>
                      </div>
                    </motion.li>
                  </ul>
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


