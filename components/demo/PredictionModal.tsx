'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, ExternalLink, Copy, Sparkles } from 'lucide-react';
import { useAccount } from 'wagmi';
import confetti from 'canvas-confetti';
import { MatchData } from '@/lib/mockData';
import { useUnifiedContract } from '@/hooks/useUnifiedContract';
import Image from 'next/image';

export default function PredictionModal({ 
  match, 
  onClose,
  onSuccess 
}: { 
  match: MatchData | null; 
  onClose: () => void;
  onSuccess?: (matchId: number, txHash: string, outcome: 0 | 1 | 2) => void;
}) {
  const { address } = useAccount();
  const [outcome, setOutcome] = useState<0 | 1 | 2 | null>(null);
  const [confidence, setConfidence] = useState(3);
  const [reasoning, setReasoning] = useState('');
  const [hasShownConfetti, setHasShownConfetti] = useState(false);
  const [currentTxHash, setCurrentTxHash] = useState<string | null>(null);

  const {
    isConnected,
    address: activeAddress,
    isUsingEmbeddedWallet,
    isPending,
    isConfirming,
    isSuccess,
    hash,
    error,
    submitPrediction,
    resetTransactionState,
  } = useUnifiedContract();

  // Debug logging
  useEffect(() => {
    if (error) {
      console.error('❌ Transaction Error:', error);
    }
  }, [error]);

  // Reset all state when modal closes or match changes
  const resetPredictionState = () => {
    setOutcome(null);
    setConfidence(3);
    setReasoning('');
    setHasShownConfetti(false);
    setCurrentTxHash(null);
    resetTransactionState();
  };

  // Reset when match changes
  useEffect(() => {
    if (match) {
      resetPredictionState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match?.id]);

  useEffect(() => {
    if (isSuccess && hash && !hasShownConfetti && match && outcome !== null) {
      setCurrentTxHash(hash);
      setHasShownConfetti(true);
      
      confetti({ 
        particleCount: 200, 
        spread: 80, 
        origin: { y: 0.6 },
        colors: ['#0052FF', '#00D4FF', '#ffffff']
      });
      
      // Auto-close and callback after 3 seconds
      const timer = setTimeout(() => {
        if (onSuccess) onSuccess(match.id, hash, outcome);
        onClose();
        resetPredictionState();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, hash, hasShownConfetti, match, outcome]);

  const handleSubmit = async () => {
    if (!match || outcome === null || !activeAddress) {
      console.warn('⚠️ Cannot submit:', { match: !!match, outcome, address: activeAddress });
      return;
    }
    
    console.log('📝 Submitting prediction:', {
      matchId: match.id,
      outcome,
      address: activeAddress,
      walletType: isUsingEmbeddedWallet ? 'embedded' : 'traditional'
    });
    
    try {
      await submitPrediction(match.id, outcome);
    } catch (error) {
      console.error('❌ Submit error:', error);
    }
  };

  if (!match) return null;

  const isPending = isWriting || isConfirming;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#000814] border border-white/20 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {isSuccess ? (
            <SuccessState hash={hash!} onClose={onClose} />
          ) : (
            <>
              <div className="sticky top-0 bg-[#000814] border-b border-white/10 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Submit Prediction</h2>
                  <p className="text-white/60 text-sm">{match.homeTeam.name} vs {match.awayTeam.name}</p>
                  <p className="text-white/40 text-xs mt-1">{match.venue} · {match.weather}</p>
                </div>
                <button 
                  onClick={() => {
                    resetPredictionState();
                    onClose();
                  }} 
                  className="p-2 hover:bg-white/10 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Head to Head */}
                <div>
                  <div className="text-sm text-white/60 mb-3">Head to Head (Last 10 matches)</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                      <div className="text-2xl font-bold text-green-500">{match.headToHead.home}</div>
                      <div className="text-xs text-white/60 mt-1">Home Wins</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                      <div className="text-2xl font-bold text-yellow-500">{match.headToHead.draw}</div>
                      <div className="text-xs text-white/60 mt-1">Draws</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                      <div className="text-2xl font-bold text-blue-500">{match.headToHead.away}</div>
                      <div className="text-xs text-white/60 mt-1">Away Wins</div>
                    </div>
                  </div>
                </div>

                {/* Team Form */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-white/60 mb-2">{match.homeTeam.name} - Last 5</div>
                    <div className="flex gap-1">
                      {match.homeTeam.form.map((result, i) => (
                        <div 
                          key={i}
                          className={`flex-1 aspect-square rounded flex items-center justify-center text-xs font-bold
                            ${result === 'W' ? 'bg-green-500 text-white' : 
                              result === 'L' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-2">{match.awayTeam.name} - Last 5</div>
                    <div className="flex gap-1">
                      {match.awayTeam.form.map((result, i) => (
                        <div 
                          key={i}
                          className={`flex-1 aspect-square rounded flex items-center justify-center text-xs font-bold
                            ${result === 'W' ? 'bg-green-500 text-white' : 
                              result === 'L' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Entry Fee Display - FIXED: No odds/multipliers */}
                <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-white/60">Entry Fee</span>
                    <div className="flex items-center gap-2">
                      <Image src="/usdc-logo.png" alt="USDC" width={28} height={28} className="w-7 h-7" />
                      <span className="text-2xl font-bold text-[#00D4FF]">3</span>
                      <span className="text-sm text-white/60">USDC</span>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 space-y-1">
                    <div>✓ Entry goes to weekly prize pool</div>
                    <div>✓ Win by being in top 10% accuracy</div>
                    <div>✓ No odds, pure skill-based competition</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-white/60 mb-3">Select Outcome</div>
                  <div className="grid grid-cols-3 gap-3">
                    <OutcomeButton label="Home Win" selected={outcome === 0} onClick={() => setOutcome(0)} />
                    <OutcomeButton label="Draw" selected={outcome === 1} onClick={() => setOutcome(1)} />
                    <OutcomeButton label="Away Win" selected={outcome === 2} onClick={() => setOutcome(2)} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/60 mb-3 block flex items-center gap-2">
                    Confidence: 
                    <span className="text-[#00D4FF] font-bold">{confidence}/5 ⭐</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={confidence}
                    onChange={(e) => setConfidence(Number(e.target.value))}
                    className="w-full accent-[#0052FF]"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/60 mb-2 block">
                    Reasoning (optional, stored off-chain)
                  </label>
                  <textarea
                    value={reasoning}
                    onChange={(e) => setReasoning(e.target.value)}
                    placeholder="Why do you think this outcome will happen? Share your analysis..."
                    maxLength={200}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm placeholder:text-white/40 focus:border-[#0052FF] focus:outline-none resize-none"
                  />
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-white/40">💡 Reasoning is not stored on blockchain</div>
                    <div className="text-xs text-white/40">{reasoning.length}/200</div>
                  </div>
                </div>

                {(writeError || receiptError) && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm space-y-1">
                    <div className="font-semibold">
                      {writeError?.message.includes('Already predicted') 
                        ? '⚠️ You already predicted this match' 
                        : writeError?.message.includes('insufficient') || writeError?.message.includes('gas')
                        ? '⚠️ Insufficient funds for gas'
                        : writeError?.message.includes('rejected') || writeError?.message.includes('denied')
                        ? '⚠️ Transaction rejected'
                        : '⚠️ Error submitting prediction'}
                    </div>
                    {writeError && (
                      <div className="text-xs opacity-75 font-mono">
                        {writeError.message.slice(0, 150)}{writeError.message.length > 150 ? '...' : ''}
                      </div>
                    )}
                    {receiptError && (
                      <div className="text-xs opacity-75">Receipt error occurred</div>
                    )}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={outcome === null || isPending || !activeAddress}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D4FF] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {isUsingEmbeddedWallet ? 'Processing...' : 'Waiting for signature...'}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Submit On-Chain
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function OutcomeButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void; }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 rounded-xl border-2 font-semibold transition-all ${
        selected ? 'bg-[#0052FF] border-[#0052FF] scale-105' : 'bg-white/5 border-white/10 hover:border-white/30'
      }`}
    >
      {label}
    </button>
  );
}

function SuccessState({ hash, onClose }: { hash: `0x${string}` | null; onClose: () => void; }) {
  const [copied, setCopied] = useState(false);
  
  if (!hash) return null;
  
  const shortHash = `${hash.slice(0, 10)}...${hash.slice(-8)}`;

  const copyHash = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center"
      >
        <Check className="w-10 h-10 text-green-500" />
      </motion.div>

      <div>
        <h3 className="text-2xl font-bold mb-2">Prediction Recorded!</h3>
        <p className="text-white/60">Your prediction is now on-chain</p>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">TX Hash</span>
          <button onClick={copyHash} className="text-[#00D4FF] hover:underline flex items-center gap-1">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {shortHash}
          </button>
        </div>
        <a
          href={`https://sepolia.basescan.org/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          View on BaseScan
        </a>
      </div>

      <button onClick={onClose} className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition">
        Close
      </button>
    </div>
  );
}

