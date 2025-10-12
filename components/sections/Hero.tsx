'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 py-16 sm:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Decorative Soccer Ball - Behind "Predict" */}
      <motion.div
        className="absolute top-1/2 left-[5%] md:left-[15%] lg:left-[20%] -translate-y-1/2 z-[1] pointer-events-none"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="text-[15rem] md:text-[25rem] lg:text-[35rem] opacity-[0.08]" style={{
          filter: 'blur(2px) drop-shadow(0 0 60px rgba(0, 82, 255, 0.4))'
        }}>
          ⚽
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container-responsive py-32 text-center">
        
        {/* Badge - Balanced & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full 
                     bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 
                     border border-primary-500/30 backdrop-blur-md mb-8
                     hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(0,82,255,0.25)]
                     transition-all duration-300
                     shadow-[0_0_20px_rgba(0,82,255,0.15)]"
        >
          {/* Animated "B" Icon */}
          <div className="relative flex-shrink-0">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.08, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan 
                         flex items-center justify-center shadow-[0_0_12px_rgba(0,82,255,0.5)]"
            >
              <span className="text-white text-sm font-bold">B</span>
            </motion.div>
            {/* Pulse ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
              className="absolute inset-0 rounded-full border-2 border-primary-500"
            />
          </div>
          
          {/* Text + Logo Group - Aligned */}
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-white tracking-wide">
              Built on
            </span>
            
            {/* Base Logo - Same Height as Text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center"
            >
              <img 
                src="/Base_Logo_1.png" 
                alt="Base" 
                className="h-[18px] w-auto object-contain"
                style={{
                  filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 2px 8px rgba(0, 82, 255, 0.4))'
                }}
              />
            </motion.div>
            
            <span className="text-base font-medium text-white tracking-wide">
              Network
            </span>
          </div>
          
          {/* Sparkle */}
          <motion.div
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-accent-cyan text-base flex-shrink-0"
          >
            ✨
          </motion.div>
        </motion.div>
        
        {/* MASSIVE headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-hero mb-6"
        >
          Predict Sports.
          <br />
          <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
            Win On-Chain.
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-body-lg max-w-2xl mx-auto mb-12"
        >
          Skill-based sports prediction competitions on Base. 
          Transparent, verifiable, and rewarding. No gambling, pure strategy.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#waitlist" className="btn-primary group">
            Join Waitlist
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          
          <Link href="/pitch-deck" className="btn-secondary group">
            📄 Pitch Deck
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Audited Smart Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Non-Custodial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>10,000+ Predictions</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
