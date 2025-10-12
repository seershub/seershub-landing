'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, Sparkles, Gift, Zap } from 'lucide-react';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [isFollowingSeershub, setIsFollowingSeershub] = useState(false);
  const [isFollowingBase, setIsFollowingBase] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user confirmed following both accounts on X
    if (!isFollowingSeershub || !isFollowingBase) {
      setStatus('error');
      const missing = [];
      if (!isFollowingSeershub) missing.push('@seershub');
      if (!isFollowingBase) missing.push('@base');
      setMessage(`Please follow ${missing.join(' and ')} on X to join the waitlist! 𝕏`);
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

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section id="waitlist" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-[1024px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect-strong p-12 md:p-16 rounded-3xl relative overflow-hidden group"
          whileHover={{ 
            scale: 1.01,
            boxShadow: '0 30px 80px rgba(0, 82, 255, 0.3)'
          }}
        >
          {/* Dynamic gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-base-blue/10 via-accent-cyan/5 to-accent-purple/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Sparkles className="w-6 h-6 text-accent-cyan" />
            </motion.div>
          ))}

          <div className="relative z-10">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontWeight: 600
              }}
              className="mb-6 text-center"
            >
              <strong className="bg-[#0052FF] text-white px-3 py-1 rounded mr-2">Join</strong>
              the <span className="text-gradient">waitlist</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.011em'
              }}
              className="text-subtle mb-12 max-w-[580px] mx-auto text-center"
            >
              Be among the first to access Seershub. Early members get exclusive perks.
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-base-blue focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* X (Twitter) Follow Requirements - COMPACT & MODERN DESIGN */}
              <motion.div 
                className="mb-5 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Title */}
                <p className="text-white/70 text-xs font-medium text-center mb-3">
                  Follow these accounts to join (required):
                </p>

                {/* @seershub Follow */}
                <motion.div whileHover={{ scale: 1.005 }}>
                  <div className={`relative px-4 py-3 rounded-lg border transition-all duration-300 ${
                    isFollowingSeershub 
                      ? 'bg-accent-cyan/10 border-accent-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      {/* Custom Checkbox - Smaller */}
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={isFollowingSeershub}
                          onChange={(e) => setIsFollowingSeershub(e.target.checked)}
                          disabled={status === 'loading' || status === 'success'}
                          className="peer sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                          isFollowingSeershub 
                            ? 'bg-accent-cyan border-accent-cyan' 
                            : 'bg-white/5 border-white/25 group-hover:border-accent-cyan/40'
                        }`}>
                          {isFollowingSeershub && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle2 className="w-3 h-3 text-black" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {/* Text with X Link - Compact */}
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <span className="text-white/80">I follow</span>
                        <a 
                          href="https://x.com/seershub" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent-cyan hover:text-accent-cyan/80 
                                     transition-colors duration-200 font-semibold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Modern X Logo - Smaller */}
                          <svg 
                            viewBox="0 0 24 24" 
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            aria-label="X"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          @seershub
                        </a>
                        <span className="text-white/80">on X</span>
                      </div>
                    </label>
                  </div>
                </motion.div>

                {/* @base Follow */}
                <motion.div whileHover={{ scale: 1.005 }}>
                  <div className={`relative px-4 py-3 rounded-lg border transition-all duration-300 ${
                    isFollowingBase 
                      ? 'bg-primary-500/10 border-primary-500/30 shadow-[0_0_15px_rgba(0,82,255,0.15)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      {/* Custom Checkbox - Smaller */}
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={isFollowingBase}
                          onChange={(e) => setIsFollowingBase(e.target.checked)}
                          disabled={status === 'loading' || status === 'success'}
                          className="peer sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                          isFollowingBase 
                            ? 'bg-primary-500 border-primary-500' 
                            : 'bg-white/5 border-white/25 group-hover:border-primary-500/40'
                        }`}>
                          {isFollowingBase && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {/* Text with X Link - Compact */}
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <span className="text-white/80">I follow</span>
                        <a 
                          href="https://x.com/base" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-400 
                                     transition-colors duration-200 font-semibold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Modern X Logo - Smaller */}
                          <svg 
                            viewBox="0 0 24 24" 
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            aria-label="X"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          @base
                        </a>
                        <span className="text-white/80">on X</span>
                      </div>
                    </label>
                  </div>
                </motion.div>
              </motion.div>

              {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                className="w-full bg-base-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg 
                           font-medium transition-all duration-300 flex items-center justify-center gap-2 
                           disabled:opacity-50 disabled:cursor-not-allowed btn-glow
                           shadow-[0_0_30px_rgba(0,82,255,0.3)] hover:shadow-[0_0_40px_rgba(0,82,255,0.5)]"
                >
                  {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' ? 'Joined!' : 'Join Waitlist'}
                </button>

              {/* Status Messages */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-5 flex items-center justify-center gap-2 p-4 rounded-xl ${
                    status === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">{message}</span>
                </motion.div>
              )}
            </motion.form>

                  {/* Benefits - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
                  >
                    <motion.div
                      className="glass-effect px-4 py-3 rounded-xl flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap className="w-5 h-5 text-accent-cyan" />
                      </motion.div>
                      <span className="text-sm font-medium">Early access</span>
                    </motion.div>

                    <motion.div
                      className="glass-effect px-4 py-3 rounded-xl flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      >
                        <Gift className="w-5 h-5 text-accent-green" />
                      </motion.div>
                      <span className="text-sm font-medium">Bonus USDC</span>
                    </motion.div>

                    <motion.div
                      className="glass-effect px-4 py-3 rounded-xl flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      >
                        <Sparkles className="w-5 h-5 text-accent-purple" />
                      </motion.div>
                      <span className="text-sm font-medium">Exclusive features</span>
                    </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


