'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowUpRight } from 'lucide-react';

const problems = [
  'Platforms control your funds',
  'High fees up to 15%',
  'Zero transparency',
  'Slow 3-7 day withdrawals',
];

const solutions = [
  'Non-custodial wallets',
  'Less than 3% fees',
  'Open smart contracts',
  'Instant USDC payouts',
];

export default function ProblemSolution() {
  return (
    <section className="section-gap bg-black relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[10%] text-6xl opacity-50"
      >
        🌿
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
            Why <span className="text-[#88FF2A]">Decentralize?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Traditional platforms have failed. We're building better.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card-neon p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black">SeersHub Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black flex-shrink-0" />
                  <span className="text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
