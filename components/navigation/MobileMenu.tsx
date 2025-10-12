'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '/pitch-deck', label: '📄 Pitch Deck' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#waitlist', label: 'Join Waitlist', primary: true },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-neutral-900 
                     border-l border-white/10 z-50 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center">
                <span className="text-2xl font-bold text-white">Seershub</span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors touch-target"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`
                        block px-4 py-3 rounded-xl text-lg font-medium
                        transition-all duration-300 touch-target
                        ${item.primary 
                          ? 'bg-primary-500 text-white hover:bg-primary-600' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Built on Base Network</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

