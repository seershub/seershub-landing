'use client';

import { motion } from 'framer-motion';
import { Wallet, Target, Trophy, UserPlus, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      subtitle: "Step_01",
      description: "Create your Seershub account and connect your Web3 wallet to Base Network in just minutes."
    },
    {
      icon: Target,
      title: "Make Predictions",
      subtitle: "Step_02",
      description: "Browse live sports matches and make your skill-based predictions using USDC with minimal fees."
    },
    {
      icon: Trophy,
      title: "Win Real Crypto",
      subtitle: "Step_03",
      description: "Smart contracts automatically distribute USDC rewards to winners. Instant payouts, no delays."
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary-color text-lg font-semibold mb-4">
              Step, by Step Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">How</strong>
              It's Works
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We've made it easier than ever to dive into the world of
              crypto gaming. With just a few clicks, you can deposit your
              favorite cryptocurrency
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <Icon 
                      className="w-16 h-16 md:w-20 md:h-20 text-primary-500" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-lg font-medium mb-4">
                    {step.subtitle.split('_')[0]}_
                    <span className="text-secondary-color">
                      {step.subtitle.split('_')[1]}
                    </span>
                  </p>
                  <h6 className="text-xl font-bold mb-4">{step.title}</h6>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                {index < 2 && (
                  <div className="hidden xl:block absolute top-12 -right-20">
                    <ArrowRight 
                      className="w-12 h-12 text-primary-500/30"
                      style={{ 
                        animation: 'moveLeftRight 3s linear infinite',
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="p-6 rounded-2xl flex items-center justify-between gap-6 flex-wrap"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="flex items-center gap-4">
              <UserPlus className="w-8 h-8 text-secondary-color" />
              <p className="text-xl font-medium text-secondary-color">
                Ready to play? Create your account now.
              </p>
            </div>
            <a 
              href="#waitlist" 
              className="btn--primary px-8 py-3 rounded-full bg-primary-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes moveLeftRight {
          0% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(15px);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
