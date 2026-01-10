'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Trophy, 
  Wallet, 
  BarChart3, 
  FileText, 
  Gamepad2,
  Mail,
  Settings,
  HelpCircle,
  ChevronRight,
  X,
  ExternalLink,
  Zap,
  Gauge
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    section: 'Main',
    items: [
      { icon: Home, label: 'Dashboard', href: '/' },
      { icon: Trophy, label: 'Leaderboard', href: '/#leaderboard' },
      { icon: Wallet, label: 'Community Vault', href: '/#vault' },
      { icon: BarChart3, label: 'Live Matches', href: '/#matches' },
    ]
  },
  {
    section: 'Apps',
    items: [
      { icon: Gauge, label: 'Pulseers', href: 'https://pulseers.seershub.com/', external: true, badge: 'Live' },
      { icon: Zap, label: 'Seers League', href: 'https://league.seershub.com', external: true, badge: 'Live' },
      { icon: Gamepad2, label: 'Demo', href: '/demo', badge: 'Testnet' },
    ]
  },
  {
    section: 'Resources',
    items: [
      { icon: FileText, label: 'Pitch Deck', href: '/pitch-deck' },
      { icon: HelpCircle, label: 'FAQ', href: '/faq' },
      { icon: Mail, label: 'Waitlist', href: '/waitlist' },
    ]
  }
];

// Social Icons
const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FarcasterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.5 4h-17A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4zM8 17H6V7h2v10zm8 0h-2V7h2v10z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const socialLinks = [
  { icon: XIcon, href: 'https://x.com/seershub', label: 'X' },
  { icon: FarcasterIcon, href: 'https://farcaster.xyz/seershub', label: 'Farcaster' },
  { icon: GithubIcon, href: 'https://github.com/seershub', label: 'GitHub' },
  { icon: DiscordIcon, href: 'https://discord.gg/9wm8cETmb9', label: 'Discord' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header h-18">
          <div className="relative flex items-center h-16 w-full rounded-xl border border-[var(--glass-border)] overflow-hidden bg-gradient-to-r from-[var(--accent-primary)]/30 via-[var(--accent-secondary)]/22 to-[var(--accent-primary)]/18 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.28] pointer-events-none"
              style={{ backgroundImage: "url('/logoback.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/16 via-transparent to-black/12 pointer-events-none" />
            <div className="relative px-4 flex-1 flex items-center justify-center pt-2">
              <Image
                src="/seershub-logo.png"
                alt="Seershub"
                width={148}
                height={60}
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>
          </div>
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="lg:hidden ml-auto p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((section) => (
            <div key={section.section} className="sidebar-section">
              <div className="sidebar-section-title">{section.section}</div>
              
              {section.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const isExternal = 'external' in item && item.external;
                
                const ItemContent = (
                  <>
                    <item.icon className="icon" />
                    <span className="flex-1">{item.label}</span>
                    {'badge' in item && item.badge && (
                      <span className={`badge ${
                        item.badge === 'Live' ? 'badge-success' : 
                        item.badge === 'Testnet' ? 'badge-info' : 
                        'badge-primary'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {isExternal && <ExternalLink className="w-3.5 h-3.5 opacity-50" />}
                    {!isExternal && <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />}
                  </>
                );

                if (isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sidebar-item group ${isActive ? 'active' : ''}`}
                    >
                      {ItemContent}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={`sidebar-item group ${isActive ? 'active' : ''}`}
                  >
                    {ItemContent}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="flex items-center gap-2 mb-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-[var(--accent-primary)] transition-all"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-white/30">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Built on Base</span>
          </div>
        </div>
      </aside>
    </>
  );
}
