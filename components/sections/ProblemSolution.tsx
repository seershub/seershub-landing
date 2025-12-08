'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const problems = [
  { text: 'Platforms control your funds', sub: 'No self-custody' },
  { text: 'High fees reduce winnings', sub: 'Up to 15% commission' },
  { text: 'Zero transparency', sub: 'Hidden algorithms' },
  { text: 'Slow withdrawals', sub: '3-7 days wait' },
];

const solutions = [
  { text: 'Non-custodial wallets', sub: 'You control your funds' },
  { text: 'Minimal platform fees', sub: 'Less than 3% on Base' },
  { text: 'Open smart contracts', sub: 'Fully auditable on-chain' },
  { text: 'Instant USDC payouts', sub: 'Seconds, not days' },
];

export default function ProblemSolution() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-nova mb-4 inline-flex">
            <X className="w-3.5 h-3.5" />
            The Old Way is Broken
          </span>
          <h2 className="text-section-title text-white mb-4">
            Why{' '}
            <span className="text-gradient-nova">Decentralize</span>
            {' '}Sports Betting?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Traditional platforms have failed bettors. We're building something better with blockchain.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(127, 29, 29, 0.04) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Problem</h3>
                <span className="text-xs text-red-400/70">Centralized Platforms</span>
              </div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-500/5 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">{item.text}</span>
                    <p className="text-white/30 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(136, 255, 42, 0.06) 0%, rgba(0, 230, 118, 0.04) 100%)',
              border: '1px solid rgba(136, 255, 42, 0.15)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon/20 flex items-center justify-center border border-neon/30">
                <Check className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SeersHub Solution</h3>
                <span className="text-xs text-neon/70">Decentralized on Base</span>
              </div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-neon/5 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-neon/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-neon" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">{item.text}</span>
                    <p className="text-white/30 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#waitlist" className="btn-outline-neon inline-flex items-center gap-2">
            Experience the Difference
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
