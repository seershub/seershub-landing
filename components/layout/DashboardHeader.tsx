'use client';

import { motion } from 'framer-motion';
import { Menu, Bell, Settings, User, ExternalLink, Grid3X3 } from 'lucide-react';
import Link from 'next/link';

interface DashboardHeaderProps {
  title?: string;
  tabs?: { label: string; href: string; active?: boolean }[];
  onMenuClick: () => void;
}

const defaultTabs = [
  { label: 'Home', href: '/', active: true },
  { label: 'Pitch Deck', href: '/pitch-deck' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Waitlist', href: '/waitlist' },
];

export default function DashboardHeader({ title = 'Dashboard', tabs = defaultTabs, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="dashboard-header">
      {/* Left: Menu + Title */}
      <div className="dashboard-title">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex w-10 h-10 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] items-center justify-center">
            <Grid3X3 className="w-5 h-5 text-[var(--accent-primary)]" />
          </div>
          <h1 className="text-white flex items-center gap-2">{title}</h1>
        </div>
      </div>

      {/* Center: Tabs */}
      <div className="dashboard-tabs hidden md:flex">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`dashboard-tab ${tab.active ? 'active' : ''}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Launch App Button */}
        <motion.a
          href="https://league.seershub.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary"
        >
          <span className="hidden sm:inline">Launch App</span>
          <span className="sm:hidden">Play</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
          <User className="w-4 h-4 text-black" />
        </div>
      </div>
    </header>
  );
}
