'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

// Social media icons as SVG components
const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FarcasterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 4h-17A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4zM8 17H6V7h2v10zm8 0h-2V7h2v10z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = [
    { icon: XIcon, href: 'https://x.com/seershub', label: 'X (Twitter)' },
    { icon: FarcasterIcon, href: 'https://farcaster.xyz/seershub', label: 'Farcaster' },
    { icon: GithubIcon, href: 'https://github.com/seershub/seershub-landing', label: 'GitHub' },
    { icon: DiscordIcon, href: 'https://discord.gg/9wm8cETmb9', label: 'Discord' },
  ];

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
            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              <Link 
                href="#how-it-works" 
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
              >
                How it works
              </Link>
              
              <Link 
                href="/demo" 
                className="relative group"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 text-accent-cyan hover:from-accent-cyan/20 hover:to-accent-purple/20 transition-all duration-300">
                  <span className="text-sm font-medium">🎮 Demo</span>
                  <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
                </div>
              </Link>
              
              <Link 
                href="/pitch-deck" 
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
              >
                Pitch Deck
              </Link>
              
              <Link 
                href="#roadmap" 
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
              >
                Roadmap
              </Link>
            </div>

            {/* Social Links - Compact */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/40 hover:text-accent-cyan transition-all duration-200 rounded-lg hover:bg-white/5 hover:scale-110"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="#waitlist" 
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-cyan text-white text-sm font-semibold rounded-lg hover:from-primary-600 hover:to-accent-cyan/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,82,255,0.4)]"
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
