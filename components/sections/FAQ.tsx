'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is SeersHub?",
    answer: "SeersHub is a skill-based prediction platform - not betting. Compete using sports knowledge to win from prize pools.",
  },
  {
    question: "How do I start?",
    answer: "1) Connect wallet 2) Pick a match 3) Make predictions 4) Win USDC if you're right!",
  },
  {
    question: "Is this gambling?",
    answer: "No. No house edge, no odds manipulation. Pure skill competition like fantasy sports.",
  },
  {
    question: "How are prizes distributed?",
    answer: "75-80% of entries go to prize pool. Smart contracts auto-distribute to top performers.",
  },
  {
    question: "Why Base Network?",
    answer: "Ultra-low fees (<$0.01), fast transactions, trusted by Coinbase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-gap bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#88FF2A]/5 rounded-full blur-[150px]" />

      <div className="container-main relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge-neon mb-6 inline-flex">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="font-display text-section text-white">
            Questions<span className="text-[#88FF2A]">?</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bento-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#88FF2A]' : 'text-white/30'}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-5 pb-5">
                        <div className="h-px bg-white/5 mb-4" />
                        <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
