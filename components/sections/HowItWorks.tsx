'use client';

import { motion } from 'framer-motion';
import { Wallet, Target, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    description: 'Create your account and connect your Web3 wallet to Base Network. Quick and secure.',
    color: 'from-primary to-orange-400',
  },
  {
    icon: Target,
    number: '02',
    title: 'Make Predictions',
    description: 'Browse live matches, analyze odds, and place skill-based predictions using USDC.',
    color: 'from-secondary to-pink-400',
  },
  {
    icon: Trophy,
    number: '03',
    title: 'Win Rewards',
    description: 'Smart contracts instantly distribute USDC to winners. No delays, no middlemen.',
    color: 'from-neon to-emerald-400',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-nova mb-4 inline-flex">How It Works</span>
          <h2 className="text-section-title text-white mb-4">
            Get Started in{' '}
            <span className="text-gradient-nova">3 Simple Steps</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Join thousands of sports enthusiasts making predictions on Base Network.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}

                <div className="glass-card p-6 md:p-8 text-center relative z-10 h-full">
                  {/* Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-white/30">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="#waitlist"
            className="btn-nova inline-flex items-center gap-2"
          >
            Start Predicting Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
