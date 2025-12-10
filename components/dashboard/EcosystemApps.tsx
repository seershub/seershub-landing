'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap, Clock, Gauge } from 'lucide-react';
import Image from 'next/image';

const apps = [
  {
    id: 1,
    name: 'Pulseers',
    description: 'Free social pulse mini app',
    icon: 'https://raw.githubusercontent.com/seershub/Pulseers/refs/heads/main/icon-512.png',
    status: 'live',
    href: 'https://pulseers.seershub.com/',
    stats: 'Free',
    type: 'miniapp',
  },
  {
    id: 2,
    name: 'Seers League',
    description: 'Live prediction competitions',
    icon: 'https://raw.githubusercontent.com/seershub/seersleague-miniapp/refs/heads/main/icon-512.png',
    status: 'live',
    href: 'https://league.seershub.com',
    stats: '1.2K+ Users',
    type: 'miniapp',
  },
  {
    id: 3,
    name: 'Seershub Demo',
    description: 'Platform demo on Base Sepolia',
    icon: '/seershub-logo.png',
    status: 'testnet',
    href: '/demo',
    stats: 'Try Now',
    type: 'platform',
  },
];

export default function EcosystemApps() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.4 }}
      className="glass-card p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[var(--accent-primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ecosystem</h3>
            <p className="text-sm text-[var(--text-muted)]">Our Apps</p>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="space-y-3">
        {apps.map((app, index) => (
          <motion.a
            key={app.id}
            href={app.href}
            target={app.href.startsWith('http') ? '_blank' : undefined}
            rel={app.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + index * 0.05 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`block p-4 rounded-xl border transition-all cursor-pointer group
                       ${app.type === 'platform' 
                         ? 'bg-[var(--glass-bg)] border-[var(--glass-border)] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                         : 'bg-[var(--glass-bg)] border-[var(--glass-border)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_30px_var(--accent-glow)]'}`}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] flex items-center justify-center
                             ${app.type === 'platform' ? 'ring-2 ring-blue-500/20' : ''}`}>
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{app.name}</h4>
                  {app.status === 'live' ? (
                    <span className="badge badge-success">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="badge badge-info">
                      <Clock className="w-3 h-3" />
                      Testnet
                    </span>
                  )}
                  {app.type === 'platform' && (
                    <span className="badge badge-info text-xs">Platform</span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)]">{app.description}</p>
              </div>

              {/* Stats + Arrow */}
              <div className="text-right">
                <p className={`text-sm font-medium ${app.type === 'platform' ? 'text-blue-500' : 'text-[var(--accent-primary)]'}`}>
                  {app.stats}
                </p>
                <ExternalLink className={`w-4 h-4 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity mt-1 ml-auto ${app.type === 'platform' ? 'text-blue-500/50' : ''}`} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
