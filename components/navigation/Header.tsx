'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-neutral-950/90
                   border-b border-transparent
                   bg-gradient-to-r from-transparent via-primary-500/20 to-transparent
                   shadow-[0_1px_0_0_rgba(0,82,255,0.2),0_1px_20px_0_rgba(0,82,255,0.1)]"
      >
        <nav className="container-responsive h-20 flex items-center justify-between relative">
          {/* Logo Highlight Background */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-24 
                          bg-gradient-radial from-primary-500/10 via-primary-500/5 to-transparent 
                          blur-2xl pointer-events-none" />
          
          {/* Logo - PROMINENT & GLOWING! */}
          <Link href="/" className="flex items-center hover:opacity-95 transition-all duration-300 
                                     hover:scale-105 relative z-10 group">
            <div className="relative">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-cyan/30 
                              blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Image 
                src="/seershub-logo.png" 
                alt="Seershub" 
                width={520} 
                height={130}
                className="h-16 md:h-20 w-auto scale-[1.35] md:scale-[1.65] relative"
                style={{
                  filter: 'brightness(1.25) contrast(1.2) saturate(1.1) drop-shadow(0 0 20px rgba(0, 82, 255, 0.6)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                  transformOrigin: 'left center'
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#how-it-works" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="/pitch-deck" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              📄 Pitch Deck
            </Link>
            <Link 
              href="#roadmap" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Roadmap
            </Link>
            
            {/* Join Waitlist Button */}
            <Link 
              href="#waitlist" 
              className="btn-primary"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors touch-target"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
