'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    // Platform Basics
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
    // Legality & Security
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
    // Financial & Technical
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

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-blue-500/10 border border-blue-500/30 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Frequently</strong>
            Asked Questions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about Seershub. Can't find the answer you're looking for? 
            Feel free to reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10
                           hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl"
                >
                  <span className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors ${
                      isOpen ? 'text-blue-400' : 'text-white/40'
                    }`} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                        <p className="text-white/70 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                        
                        {/* Category badge */}
                        {faq.category && (
                          <div className="mt-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full 
                                           bg-blue-500/10 border border-blue-500/30 text-xs text-blue-400">
                              {faq.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl
                         bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                         border border-blue-500/30 backdrop-blur-sm">
            <HelpCircle className="w-12 h-12 text-blue-400" />
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="text-white/60 max-w-md">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a
              href="#waitlist"
              className="px-8 py-3 rounded-full bg-[#0052FF] hover:bg-blue-600 
                       text-white font-semibold transition-all duration-300
                       inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Join Waitlist & Ask
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

