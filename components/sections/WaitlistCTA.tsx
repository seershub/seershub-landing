'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to SeersHub! Check your email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-premium p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-section-title text-white mb-4">
            Join the{' '}
            <span className="text-gradient-nova">Waitlist</span>
          </h2>

          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Be among the first to access SeersHub. Early members get exclusive perks and bonus rewards.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 
                         focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-300
                         disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-nova px-6 py-3.5 disabled:opacity-50"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' ? 'Joined!' : 'Join'}
                {status === 'idle' && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center justify-center gap-2 p-3 rounded-xl text-sm ${status === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
              >
                {status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                {message}
              </motion.div>
            )}
          </form>

          {/* Social Requirement Note */}
          <p className="text-xs text-white/30 mb-6">
            Follow{' '}
            <a
              href="https://x.com/seershub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @seershub
            </a>
            {' '}on X for updates and early access codes
          </p>

          {/* Full Form Link */}
          <Link
            href="/waitlist"
            className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            View full registration requirements
            <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
