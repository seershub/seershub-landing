'use client';

import { motion } from 'framer-motion';
import { Wallet, Target, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet to Base Network',
  },
  {
    icon: Target,
    number: '02',
    title: 'Make Predictions',
    description: 'Choose matches and predict outcomes',
  },
  {
    icon: Trophy,
    number: '03',
    title: 'Win USDC',
    description: 'Correct predictions earn instant rewards',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-gap bg-black relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-[5%] text-5xl opacity-40"
      >
        💸
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 right-[8%] text-5xl opacity-40"
      >
        🏆
      </motion.div>

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section text-white mb-4">
            How It <span className="text-[#88FF2A]">Works</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Three simple steps to start winning
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bento-card p-8 text-center ${index === 1 ? 'md:-translate-y-8' : ''}`}
            >
              {/* Number */}
              <div className="text-6xl font-black text-[#88FF2A]/20 mb-4">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#88FF2A]/10 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-[#88FF2A]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#waitlist" className="btn-neon">
            Start Predicting
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
