'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, DollarSign } from 'lucide-react';

export default function WhyBase() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second transaction finality for instant predictions and payouts.",
      metric: "~2s"
    },
    {
      icon: DollarSign,
      title: "Ultra Low Fees",
      description: "Gas fees under $0.01 per transaction. Keep your winnings.",
      metric: "<$0.01"
    },
    {
      icon: Shield,
      title: "Ethereum Security",
      description: "Built on Base, secured by Ethereum. Your funds are safe.",
      metric: "L2"
    },
  ];

  return (
    <section id="why-base" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Soccer Ball - Top Right */}
      <motion.div
        className="absolute top-16 right-16 text-8xl opacity-10 pointer-events-none"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        ⚽
      </motion.div>

      {/* Trophy - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-16 text-7xl opacity-10 pointer-events-none"
        animate={{
          rotate: [-5, 5, -5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏆
      </motion.div>

      {/* Target - Top Left */}
      <motion.div
        className="absolute top-32 left-20 text-6xl opacity-8 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎯
      </motion.div>

      {/* USDC Coin - Middle Right */}
      <motion.div
        className="absolute top-1/2 right-24 text-5xl opacity-10 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        💰
      </motion.div>

      <div className="container mx-auto max-w-[1024px] relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: 600
          }} className="mb-4">
            <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Why</strong>
            <span className="text-gradient">Base</span>?
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
            lineHeight: '1.6',
            letterSpacing: '-0.011em'
          }} className="text-subtle max-w-[580px]">
            Base Network provides the perfect infrastructure for sports prediction.
          </p>
        </motion.div>

        {/* Features grid */}
               <div className="grid md:grid-cols-3 gap-6">
                 {features.map((feature, index) => {
                   const gradientColors = [
                     'from-accent-cyan/20 to-primary-500/20',
                     'from-accent-green/20 to-accent-cyan/20',
                     'from-primary-500/20 to-accent-purple/20',
                   ];
                   
                   const iconColors = [
                     'text-accent-cyan',
                     'text-accent-green',
                     'text-accent-purple',
                   ];

                   return (
            <motion.div
              key={index}
                       initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: index * 0.1 }}
                       className="relative p-8 rounded-2xl overflow-hidden group/feat transition-all duration-500"
                       whileHover={{ 
                         y: -8,
                         scale: 1.02
                       }}
                     >
                       {/* Gradient border effect */}
                       <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index].replace('/20', '/50')} p-[2px] rounded-2xl
                                       opacity-60 group-hover/feat:opacity-100 transition-opacity duration-500`}>
                         <div className="absolute inset-[2px] rounded-2xl bg-black/90 backdrop-blur-sm" />
                       </div>
                       
                       {/* Enhanced glow on hover */}
                       <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover/feat:opacity-100 blur-2xl transition-opacity duration-500"
                            style={{
                              background: `radial-gradient(circle, ${gradientColors[index].includes('cyan') ? 'rgba(6,182,212,0.2)' : gradientColors[index].includes('green') ? 'rgba(16,185,129,0.2)' : 'rgba(139,92,246,0.2)'}, transparent 70%)`
                            }} />
                       
                       {/* Shimmer effect */}
                       <div className="absolute inset-0 opacity-0 group-hover/feat:opacity-100 transition-opacity duration-700">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                         translate-x-[-100%] group-hover/feat:translate-x-[100%] transition-transform duration-1000" />
                </div>

                       {/* Icon badge with animation */}
                       <motion.div 
                         className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 rounded-xl flex items-center justify-center mb-6 relative z-10"
                         whileHover={{ rotate: 360, scale: 1.1 }}
                         transition={{ duration: 0.6 }}
                       >
                         <feature.icon className={`w-8 h-8 ${iconColors[index]} relative z-10`} />
                         
                         {/* Pulsing background */}
                         <motion.div
                           className={`absolute inset-0 rounded-xl ${iconColors[index].replace('text-', 'bg-')}/30`}
                           animate={{
                             scale: [1, 1.2, 1],
                             opacity: [0.5, 0, 0.5],
                           }}
                           transition={{
                             duration: 2,
                             repeat: Infinity,
                             delay: index * 0.3,
                           }}
                         />
                       </motion.div>

                       {/* Metric with gradient */}
                       <motion.div 
                         className="text-5xl font-bold mb-3 relative z-10"
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                       >
                         <span className={`bg-gradient-to-r ${gradientColors[index].replace('/20', '')} bg-clip-text text-transparent`}>
                           {feature.metric}
                         </span>
                       </motion.div>

                {/* Title */}
                       <h3 className="text-xl font-semibold mb-3 relative z-10 text-white">{feature.title}</h3>

                {/* Description */}
                       <p className="text-white/70 text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>

                       {/* Decorative corner */}
                       <motion.div
                         className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                         initial={{ rotate: 0 }}
                         whileHover={{ rotate: 90 }}
                         transition={{ duration: 0.3 }}
                       >
                         <div className={`w-6 h-6 border-t-2 border-r-2 ${iconColors[index].replace('text-', 'border-')}`} />
                       </motion.div>
            </motion.div>
                   );
                 })}
        </div>

        {/* Base + Coinbase Integration Card - PREMIUM DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 group"
        >
          <div className="relative rounded-2xl overflow-hidden
                          transition-all duration-500 ease-out
                          shadow-[0_4px_40px_rgba(0,82,255,0.15),0_0_80px_rgba(0,82,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]
                          hover:shadow-[0_8px_60px_rgba(0,82,255,0.3),0_0_120px_rgba(0,82,255,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]
                          hover:scale-[1.02]">
            
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/50 via-accent-cyan/30 to-primary-500/50 p-[2px]
                            opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[2px] rounded-2xl bg-black" />
            </div>
            
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-transparent to-accent-cyan/15"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            />
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            
            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                
                {/* Text content - Left side */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 flex items-center justify-center md:justify-start gap-0 flex-wrap">
                    <Zap className="w-5 h-5 text-accent-cyan flex-shrink-0 mr-2" />
                    <span className="flex items-center gap-0">
                      {/* "Powered by" with white background - matched size */}
                      <span className="inline-flex items-center justify-center h-8 md:h-9 px-3 md:px-4 
                                       rounded-l-lg bg-white text-black font-semibold text-sm md:text-base
                                       border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Powered by
                      </span>
                      {/* Base Video - Matched size with border */}
                      <span className="inline-block relative h-8 md:h-9 w-24 md:w-28 
                                       rounded-r-lg overflow-hidden bg-white
                                       border-2 border-l-0 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            transform: 'scale(2.5)',
                            filter: 'brightness(1.2) contrast(1.15)',
                            mixBlendMode: 'multiply'
                          }}
                        >
                          <source src="/Wordmark_TEST_07_large.mp4" type="video/mp4" />
                        </video>
                      </span>
                    </span>
                  </h4>
                  
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
                    Built on <strong className="text-white">Base</strong>, an Ethereum L2 by <strong className="text-white">Coinbase</strong>. 
                    Enjoy Ethereum's security with lightning-fast transactions and minimal fees.
                  </p>
                  
                  {/* Key benefits - PREMIUM badges */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-3 py-1.5 rounded-full text-xs font-semibold overflow-hidden
                                 shadow-[0_0_15px_rgba(0,82,255,0.2)] hover:shadow-[0_0_25px_rgba(0,82,255,0.4)]
                                 transition-all duration-300 cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-primary-600/30 backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-primary-500/50 rounded-full" />
                      <span className="relative z-10 text-white">⚡ Sub-second finality</span>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-3 py-1.5 rounded-full text-xs font-semibold overflow-hidden
                                 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]
                                 transition-all duration-300 cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/30 to-accent-green/30 backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-accent-green/50 rounded-full" />
                      <span className="relative z-10 text-white">💰 {"<$0.01 fees"}</span>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-3 py-1.5 rounded-full text-xs font-semibold overflow-hidden
                                 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]
                                 transition-all duration-300 cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/30 to-accent-cyan/30 backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-accent-cyan/50 rounded-full" />
                      <span className="relative z-10 text-white">🔒 Ethereum security</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Stats - PREMIUM glass cards */}
                <div className="flex md:flex-col gap-3 justify-center">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    className="relative text-center px-5 py-4 rounded-xl overflow-hidden
                               backdrop-blur-md transition-all duration-300 group/stat"
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/40 to-primary-500/40 p-[1.5px] rounded-xl">
                      <div className="absolute inset-[1.5px] rounded-xl bg-black/80 backdrop-blur-sm" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-accent-cyan/10 rounded-xl opacity-0 group-hover/stat:opacity-100 
                                    blur-xl transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-cyan to-primary-500 
                                      bg-clip-text text-transparent">
                        120M+
                      </div>
                      <div className="text-[10px] text-white/70 font-semibold mt-1 uppercase tracking-wider">
                        Coinbase Users
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    className="relative text-center px-5 py-4 rounded-xl overflow-hidden
                               backdrop-blur-md transition-all duration-300 group/stat"
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-green/40 to-accent-cyan/40 p-[1.5px] rounded-xl">
                      <div className="absolute inset-[1.5px] rounded-xl bg-black/80 backdrop-blur-sm" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-accent-green/10 rounded-xl opacity-0 group-hover/stat:opacity-100 
                                    blur-xl transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-green to-accent-cyan 
                                      bg-clip-text text-transparent">
                        $3B+
                      </div>
                      <div className="text-[10px] text-white/70 font-semibold mt-1 uppercase tracking-wider">
                        Total TVL
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


