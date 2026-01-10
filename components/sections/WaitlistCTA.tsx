'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, ArrowUpRight, Sparkles, Mail } from 'lucide-react';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to SeersHub!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="waitlist" className="section-gap bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] bg-[#88FF2A]/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#88FF2A] flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(136,255,42,0.5)]">
            <Sparkles className="w-10 h-10 text-black" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-section text-white mb-4">
            Join <span className="text-[#88FF2A]">Waitlist</span>
          </h2>

          <p className="text-white/50 text-lg mb-10">
            Be among the first. Early members get exclusive perks.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 
                           focus:outline-none focus:border-[#88FF2A]/50 transition-all disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-neon px-8 py-4 disabled:opacity-50"
              >
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' ? 'Joined!' : 'Join'}
                {status === 'idle' && <ArrowUpRight className="w-5 h-5" />}
              </button>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center justify-center gap-2 p-3 rounded-xl ${status === 'success'
                    ? 'bg-[#88FF2A]/10 text-[#88FF2A] border border-[#88FF2A]/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
              >
                {status === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {message}
              </motion.div>
            )}
          </form>

          {/* Note */}
          <p className="text-xs text-white/30 mt-6">
            Follow <a href="https://x.com/seershub" target="_blank" rel="noopener noreferrer" className="text-[#88FF2A] hover:underline">@seershub</a> for updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
