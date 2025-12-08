'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Github, MessageCircle, ExternalLink } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Seers League', href: '#' },
    { label: 'Pulseers', href: '#' },
    { label: 'Demo', href: '/demo' },
  ],
  company: [
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/seershub', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      {/* Main Footer */}
      <div className="container-responsive py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/seershub-logo.png"
                alt="SeersHub"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold font-display text-white">
                SEERSHUB
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              The first skill-based sports prediction platform built on Base.
              Fair play, transparent odds, real prizes.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all group"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center md:text-left">
              © {new Date().getFullYear()} SeersHub. All rights reserved. Built on Base Network.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://base.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/30 hover:text-white/50 transition-colors"
              >
                <img
                  src="/Base_Logo_1.png"
                  alt="Base"
                  className="w-4 h-4 object-contain"
                />
                Powered by Base
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white/[0.02] border-t border-white/5">
        <div className="container-responsive py-4">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            SeersHub is a skill-based prediction platform. Sports prediction involves risk. Only participate with funds you can afford to lose.
            Not available in all jurisdictions. Please check your local laws before participating.
          </p>
        </div>
      </div>
    </footer>
  );
}
