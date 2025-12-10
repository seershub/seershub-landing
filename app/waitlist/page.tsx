'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, Sparkles, Gift, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [isFollowingSeershub, setIsFollowingSeershub] = useState(false);
  const [isFollowingBase, setIsFollowingBase] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFollowingSeershub || !isFollowingBase) {
      setStatus('error');
      const missing = [];
      if (!isFollowingSeershub) missing.push('@seershub');
      if (!isFollowingBase) missing.push('@base');
      setMessage(`Please follow ${missing.join(' and ')} on X to join the waitlist!`);
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      return;
    }
    
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to Seershub! Check your email for confirmation.');
        setEmail('');
        setIsFollowingSeershub(false);
        setIsFollowingBase(false);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  const tabs = [
    { label: 'Home', href: '/' },
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '/waitlist', active: true },
  ];

  return (
    <DashboardLayout title="Join Waitlist" tabs={tabs}>
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[var(--accent-primary)]" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Early Access</h1>
            <p className="text-[var(--text-muted)]">
              Be among the first to access Seershub. Early members get exclusive perks.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-5 py-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] 
                         text-white placeholder-[var(--text-muted)]
                         focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20
                         transition-all duration-300 disabled:opacity-50"
              />
            </div>

            {/* X Follow Requirements */}
            <div className="space-y-3">
              <p className="text-xs text-[var(--text-muted)] text-center">
                Follow these accounts to join (required):
              </p>

              {/* @seershub */}
              <label className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all
                              ${isFollowingSeershub 
                                ? 'bg-green-500/10 border border-green-500/30' 
                                : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]'}`}>
                <input
                  type="checkbox"
                  checked={isFollowingSeershub}
                  onChange={(e) => setIsFollowingSeershub(e.target.checked)}
                  disabled={status === 'loading' || status === 'success'}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                            ${isFollowingSeershub 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-[var(--glass-border)]'}`}>
                  {isFollowingSeershub && <CheckCircle2 className="w-3 h-3 text-black" />}
                </div>
                <span className="text-sm text-[var(--text-secondary)]">I follow</span>
                <a 
                  href="https://x.com/seershub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--accent-primary)] font-semibold text-sm hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @seershub
                </a>
              </label>

              {/* @base */}
              <label className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all
                              ${isFollowingBase 
                                ? 'bg-blue-500/10 border border-blue-500/30' 
                                : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]'}`}>
                <input
                  type="checkbox"
                  checked={isFollowingBase}
                  onChange={(e) => setIsFollowingBase(e.target.checked)}
                  disabled={status === 'loading' || status === 'success'}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                            ${isFollowingBase 
                              ? 'bg-blue-500 border-blue-500' 
                              : 'border-[var(--glass-border)]'}`}>
                  {isFollowingBase && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-[var(--text-secondary)]">I follow</span>
                <a 
                  href="https://x.com/base" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-500 font-semibold text-sm hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @base
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl btn btn-primary
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
            >
              {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
              {status === 'success' ? 'Joined!' : 'Join Waitlist'}
            </motion.button>

            {/* Status Messages */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl text-sm
                          ${status === 'success'
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
              >
                {status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </form>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Zap, label: 'Early access', color: 'text-[var(--accent-primary)]' },
              { icon: Gift, label: 'Bonus USDC', color: 'text-green-500' },
              { icon: Sparkles, label: 'Exclusives', color: 'text-purple-500' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-[var(--glass-bg)] rounded-xl p-3 flex flex-col items-center gap-2 text-center border border-[var(--glass-border)]"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs text-[var(--text-muted)]">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
