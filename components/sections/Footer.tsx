'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Waitlist', href: '#waitlist' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ];

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-base-blue/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-[1024px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Brand - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="text-lg sm:text-xl font-semibold">SEERSHUB</div>
            <span className="text-muted text-xs sm:text-sm">© 2025</span>
          </motion.div>

          {/* Links - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs sm:text-sm text-subtle hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social Links - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2.5 sm:gap-3"
          >
            {socialLinks.map((social, index) => (
                     <motion.a
                       key={index}
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg glass-effect hover:glass-effect-strong flex items-center justify-center transition-all duration-300 group"
                       aria-label={social.label}
                       whileHover={{ scale: 1.1, y: -3 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted group-hover:text-base-blue transition-colors" />
                     </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted max-w-2xl mx-auto">
            Built on Base Network. Sports prediction involves risk. Only participate with funds you can afford to lose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


