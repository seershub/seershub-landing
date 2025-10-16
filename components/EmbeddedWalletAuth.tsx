'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEmbeddedWallet } from '@/hooks/useEmbeddedWallet';
import { Mail, Smartphone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface EmbeddedWalletAuthProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function EmbeddedWalletAuth({ onSuccess, onError }: EmbeddedWalletAuthProps) {
  const [authMethod, setAuthMethod] = useState<'email' | 'sms'>('email');
  const [identifier, setIdentifier] = useState('');
  const { createWallet, loading, error, clearError } = useEmbeddedWallet();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await createWallet(authMethod, identifier);
      onSuccess?.();
    } catch (err: any) {
      onError?.(err.message);
    }
  };

  const handleMethodChange = (method: 'email' | 'sms') => {
    setAuthMethod(method);
    setIdentifier('');
    clearError();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-card p-8 rounded-2xl border border-white/10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500">Embedded Wallet</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Create Your Wallet
          </h3>
          <p className="text-white/60 text-sm">
            No seed phrases needed. Secured by Coinbase.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Auth Method Toggle */}
          <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => handleMethodChange('email')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                authMethod === 'email'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
            <button
              type="button"
              onClick={() => handleMethodChange('sms')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                authMethod === 'sms'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              SMS
            </button>
          </div>

          {/* Input Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/80">
              {authMethod === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={authMethod === 'email' ? 'email' : 'tel'}
              placeholder={
                authMethod === 'email' 
                  ? 'name@example.com' 
                  : '+1 (555) 123-4567'
              }
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
              required
              disabled={loading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl"
            >
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !identifier.trim()}
            className="w-full bg-gradient-to-r from-primary-500 to-accent-cyan text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-accent-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,82,255,0.4)] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating Wallet...
              </>
            ) : (
              'Continue'
            )}
          </button>

          {/* Security Note */}
          <div className="text-center">
            <p className="text-xs text-white/50 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Secured by Coinbase • No seed phrases required
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
