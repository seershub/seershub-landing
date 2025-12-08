'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What exactly is SeersHub?",
    answer: "SeersHub is a skill-based competition platform, not a betting site. You compete with other users based on your sports knowledge to win from a transparent prize pool.",
  },
  {
    question: "How do I get started?",
    answer: "It's simple! 1) Connect your wallet. 2) Choose a match you want to predict. 3) Submit your prediction on-chain and compete for prizes!",
  },
  {
    question: "Is this gambling?",
    answer: "No. SeersHub has no odds, no house edge, and no chance-based mechanics. Your success depends entirely on your sports knowledge. We're classified as a skill-based competition.",
  },
  {
    question: "How are prizes distributed?",
    answer: "75-80% of all entry fees goes directly into the prize pool. Smart contracts automatically distribute USDC to top performers each week.",
  },
  {
    question: "Are my funds safe?",
    answer: "Yes. Funds are held in audited smart contracts and a multi-sig treasury. Your predictions are stored immutably on Base network.",
  },
  {
    question: "Why USDC on Base?",
    answer: "USDC is a stable, trusted currency. Base network offers extremely low fees (< $0.01) and fast transactions. Perfect for micro-payments.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container-responsive relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge-nova mb-4 inline-flex">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-section-title text-white mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-nova">Questions</span>
          </h2>
          <p className="text-white/50">
            Everything you need to know about SeersHub.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="font-semibold text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-white/30'}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-4">
                        <div className="h-px bg-white/5 mb-3" />
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm mb-3">Still have questions?</p>
          <a href="https://x.com/seershub" target="_blank" rel="noopener noreferrer" className="btn-glass text-sm">
            Reach out on X
          </a>
        </motion.div>
      </div>
    </section>
  );
}
