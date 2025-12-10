'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Menu, ExternalLink } from 'lucide-react';
import Sidebar from './Sidebar';
=======
import { Menu, X, ArrowUpRight } from 'lucide-react';
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pitch Deck', href: '/pitch-deck' },
];

export default function Header() {
<<<<<<< HEAD
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
=======
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
<<<<<<< HEAD
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 
                   glass-strong rounded-b-2xl mx-2 sm:mx-4 mt-2
                   border border-white/10"
      >
        <nav className="container-responsive h-16 sm:h-20 flex items-center justify-between relative px-4 sm:px-6">
          
          {/* Left: Menu Button + Logo */}
          <div className="flex items-center gap-4">
            {/* Menu Button - Visible on all screens */}
            <motion.button
              onClick={() => setIsSidebarOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl glass hover:glass-strong transition-all
                       border border-white/10 hover:border-primary-500/30
                       group"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-white/70 group-hover:text-primary-500 transition-colors" />
            </motion.button>
            
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-95 transition-all duration-300 
                                       hover:scale-105 relative z-10 group">
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-cyan/30 
                                blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Image 
                  src="/seershub-logo.png" 
                  alt="Seershub" 
                  width={400} 
                  height={100}
                  className="h-10 sm:h-12 md:h-14 w-auto relative"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 15px rgba(0, 82, 255, 0.5))'
                  }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop only) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            
            <Link 
              href="/demo" 
              className="relative group"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:glass-strong
                            border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300">
                <span className="text-sm font-medium text-accent-cyan">🎮 Demo</span>
                <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
              </div>
            </Link>
            
            <Link 
              href="/pitch-deck" 
              className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Pitch Deck
            </Link>
          </div>

          {/* Right: Social + CTA */}
          <div className="flex items-center gap-3">
            {/* Social Links - Desktop only */}
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/40 hover:text-primary-500 transition-all duration-200 
                           rounded-lg hover:bg-white/5 hover:scale-110"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-white/10" />

            {/* Launch App Button */}
            <motion.a 
              href="https://league.seershub.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 
                       bg-gradient-to-r from-green-500 to-emerald-500 
                       text-white text-sm font-semibold rounded-xl 
                       hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
                       transition-all duration-300"
            >
              <span className="hidden sm:inline">Launch App</span>
              <span className="sm:hidden">Play</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
=======
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
          }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-xl bg-[#88FF2A] flex items-center justify-center"
              >
                <span className="text-xl">⚡</span>
              </motion.div>
              <span className="text-xl font-bold text-white">SEERSHUB</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-[#88FF2A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="#waitlist" className="btn-neon py-3 px-6 text-sm">
                Join Waitlist
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 md:hidden"
          >
            <div className="container-main py-8">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-[#88FF2A] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-10">
                <Link
                  href="#waitlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-neon w-full justify-center"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> 468314e551d397265c7bdd65cd444c3cb387c4a4
    </>
  );
}
