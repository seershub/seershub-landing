'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Rocket, Users, TrendingUp, Coins, Shield, Trophy, Zap, Gift } from 'lucide-react';
import TimelineConnector from '@/components/graphics/TimelineConnector';
import QuarterBadge from '@/components/graphics/QuarterBadge';

export default function Roadmap() {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Launch",
      subtitle: "Platform Goes Live",
      status: "current" as const,
      icon: Rocket,
      color: 'base-blue',
      items: [
        { text: "Public platform launch on Base", icon: Zap },
        { text: "Smart contract audit completion", icon: Shield },
        { text: "Beta testing program", icon: Users },
        { text: "Community building initiatives", icon: Trophy }
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Scale",
      subtitle: "Multi-Sport Expansion",
      status: "upcoming" as const,
      icon: TrendingUp,
      color: 'accent-cyan',
      items: [
        { text: "Basketball & American Football", icon: Trophy },
        { text: "Mobile app (iOS & Android)", icon: Users },
        { text: "BASE token bonus rewards", icon: Gift },
        { text: "Partnership announcements", icon: Zap }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Expand",
      subtitle: "Global Features",
      status: "upcoming" as const,
      icon: Users,
      color: 'accent-purple',
      items: [
        { text: "Tennis & esports integration", icon: Trophy },
        { text: "Advanced analytics dashboard", icon: TrendingUp },
        { text: "Live betting functionality", icon: Zap },
        { text: "Referral program launch", icon: Gift }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "NFT & Rewards",
      subtitle: "Digital Collectibles",
      status: "upcoming" as const,
      icon: Coins,
      color: 'accent-orange',
      items: [
        { text: "NFT achievement badges", icon: Trophy },
        { text: "Limited edition collectibles", icon: Gift },
        { text: "Stake-to-predict mechanics", icon: Coins },
        { text: "VIP tier rewards system", icon: Shield }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-base-blue animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/30 bg-green-500/5';
      case 'current':
        return 'border-base-blue/50 bg-base-blue/10';
      default:
        return 'border-gray-700';
    }
  };

  return (
    <section id="roadmap" className="py-32 px-6 relative overflow-hidden">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-base-blue/30 to-transparent hidden md:block" />

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
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
            lineHeight: '1.6',
            letterSpacing: '-0.011em'
          }} className="text-subtle max-w-[580px]">
            Building the future of sports prediction, milestone by milestone.
          </p>
        </motion.div>

        {/* Timeline - Quarter badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase, index) => (
            <QuarterBadge
              key={index}
              quarter={phase.quarter}
              title={phase.title}
              icon={phase.icon}
              status={phase.status}
              index={index}
            />
          ))}
        </div>

        {/* Detailed Timeline */}
               <div className="space-y-8">
                 {phases.map((phase, index) => {
                   const IconComponent = phase.icon;
                   const isEven = index % 2 === 0;
                   
                   return (
                     <motion.div
                       key={index}
                       initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: index * 0.1 }}
                       className="relative"
                     >
                       <motion.div
                         className="glass-effect p-8 rounded-2xl hover:glass-effect-strong transition-all duration-300 group relative overflow-hidden"
                         whileHover={{ 
                           y: -8,
                           boxShadow: `0 20px 60px rgba(0, 82, 255, 0.2)`
                         }}
                       >
                         {/* Gradient overlay */}
                         <div className={`absolute inset-0 bg-gradient-to-br from-${phase.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                         <div className="flex items-start gap-6 relative">
                           {/* Animated quarter icon */}
                           <motion.div 
                             className={`w-20 h-20 bg-gradient-to-br from-${phase.color}/20 to-${phase.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative`}
                             whileHover={{ rotate: 360, scale: 1.1 }}
                             transition={{ duration: 0.8 }}
                           >
                             <IconComponent className={`w-10 h-10 text-${phase.color} relative z-10`} />
                             
                             {/* Pulsing ring */}
                             <motion.div
                               className={`absolute inset-0 rounded-2xl bg-${phase.color}/20`}
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

                           {/* Status icon */}
                           <div className="flex-shrink-0 mt-1">
                             {getStatusIcon(phase.status)}
                           </div>

                           {/* Content */}
                           <div className="flex-1">
                             <div className="mb-3">
                               <motion.span 
                                 className="text-xs text-accent-cyan font-semibold uppercase tracking-wider"
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 1 }}
                                 transition={{ delay: index * 0.1 + 0.2 }}
                               >
                                 {phase.quarter} • {phase.subtitle}
                               </motion.span>
                             </div>
                             
                             <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                               {phase.title}
                               {phase.status === 'current' && (
                                 <motion.span 
                                   className="glass-effect px-3 py-1 rounded-full text-xs text-base-blue border border-base-blue/30"
                                   animate={{
                                     boxShadow: [
                                       '0 0 10px rgba(0, 82, 255, 0.2)',
                                       '0 0 20px rgba(0, 82, 255, 0.4)',
                                       '0 0 10px rgba(0, 82, 255, 0.2)',
                                     ]
                                   }}
                                   transition={{ duration: 2, repeat: Infinity }}
                                 >
                                   LIVE
                                 </motion.span>
                               )}
                             </h3>
                             
                             <ul className="space-y-4">
                               {phase.items.map((item, itemIndex) => {
                                 const ItemIcon = item.icon;
                                 return (
                                   <motion.li
                                     key={itemIndex}
                                     initial={{ opacity: 0, x: -10 }}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     viewport={{ once: true }}
                                     transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                                     className="flex items-center gap-3 group/item"
                                   >
                                     <motion.div
                                       className={`w-8 h-8 rounded-lg bg-${phase.color}/10 flex items-center justify-center flex-shrink-0`}
                                       whileHover={{ rotate: 360, scale: 1.1 }}
                                       transition={{ duration: 0.5 }}
                                     >
                                       <ItemIcon className={`w-4 h-4 text-${phase.color}`} />
                                     </motion.div>
                                     <span className="text-subtle group-hover/item:text-white transition-colors text-sm">
                                       {item.text}
                                     </span>
                                   </motion.li>
                                 );
                               })}
                             </ul>
                           </div>
                         </div>

                         {/* Decorative corner */}
                         <motion.div
                           className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                           initial={{ rotate: 0 }}
                           whileHover={{ rotate: 180 }}
                           transition={{ duration: 0.5 }}
                         >
                           <div className={`w-8 h-8 border-t-2 border-r-2 border-${phase.color}`} />
                         </motion.div>
                       </motion.div>

                       {/* Timeline connector */}
                       <TimelineConnector isLast={index === phases.length - 1} />
                     </motion.div>
                   );
                 })}
               </div>
      </div>
    </section>
  );
}


