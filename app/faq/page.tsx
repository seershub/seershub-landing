'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What exactly is Seershub?",
      answer: "Seershub is a skill-based competition platform, not a betting site. You compete with other users based on your sports knowledge to win from a transparent prize pool.",
      category: "Platform Basics"
    },
    {
      question: "How do I get started?",
      answer: "It's simple! 1) Connect your wallet. 2) Choose a match you want to predict. 3) Submit your prediction on-chain with a small entry fee and secure your spot on the weekly leaderboard!",
      category: "Platform Basics"
    },
    {
      question: "How does the scoring work?",
      answer: "Scoring is based on the accuracy of your prediction and the difficulty of the match. You earn more points for correctly predicting challenging matches like derbies or finals. All rules are transparent.",
      category: "Platform Basics"
    },
    {
      question: "How are the prizes distributed?",
      answer: "A large portion (75-80%) of all entry fees goes directly into the community prize pool. At the end of the week, top performers on the leaderboard automatically receive their share from this pool via transparent smart contracts.",
      category: "Platform Basics"
    },
    {
      question: "Is this a betting or gambling platform?",
      answer: "Absolutely not. Seershub has no odds, no house edge, and no chance-based mechanics. Your success depends entirely on your sports knowledge and analytical skill. We are legally classified as a \"skill-based competition,\" similar to fantasy sports leagues.",
      category: "Legality & Security"
    },
    {
      question: "Is the platform legal?",
      answer: "Yes. We operate legally in most jurisdictions where skill-based competitions are permitted and do not require a gambling license.",
      category: "Legality & Security"
    },
    {
      question: "Are my funds and data secure?",
      answer: "Yes. All funds are held in audited smart contracts (to be audited before mainnet launch) and a multi-signature protected treasury. Your predictions are immutably stored on the Base network blockchain.",
      category: "Legality & Security"
    },
    {
      question: "How can I trust the match results are fair?",
      answer: "We use decentralized oracle networks like Chainlink to verify match results. This ensures that outcomes cannot be manipulated by a single source and are completely fair.",
      category: "Legality & Security"
    },
    {
      question: "Why does the platform use USDC?",
      answer: "USDC is a trusted and transparent stablecoin pegged to the US Dollar. This ensures that the value of the prize pool is stable and not affected by market volatility.",
      category: "Financial & Technical"
    },
    {
      question: "Will I have to pay transaction (gas) fees?",
      answer: "Yes, but thanks to the Base network, these fees are extremely low (typically less than $0.01). We are also exploring features like \"gasless\" transactions for new users.",
      category: "Financial & Technical"
    },
    {
      question: "Will I be able to pay with the BASE token?",
      answer: "Yes! Once the BASE token is officially launched, we will activate the option to pay with BASE on our platform. We will even support the Base ecosystem by burning a portion of the protocol revenue from these payments.",
      category: "Financial & Technical"
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = [
    { label: 'Home', href: '/' },
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'FAQ', href: '/faq', active: true },
    { label: 'Waitlist', href: '/waitlist' },
  ];

  return (
    <DashboardLayout title="FAQ" tabs={tabs}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-[var(--accent-primary)]" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-[var(--text-muted)]">
              Everything you need to know about Seershub. Can't find the answer? Reach out to our team.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl overflow-hidden
                           hover:border-[var(--accent-primary)]/30 transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left
                             hover:bg-[var(--glass-bg-hover)] transition-colors"
                  >
                    <span className="font-semibold text-[var(--text-primary)] pr-4">
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        isOpen ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
                      }`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-[var(--glass-border)]">
                          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                            {faq.answer}
                          </p>
                          
                          {faq.category && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full 
                                           bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 
                                           text-xs text-[var(--accent-primary)]">
                              {faq.category}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-[var(--text-muted)] mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a
              href="/waitlist"
              className="btn btn-primary"
            >
              Join Waitlist & Ask
            </a>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
