'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, ExternalLink, Copy, Sparkles } from 'lucide-react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import confetti from 'canvas-confetti';
import { Match } from './MatchCard';
import ABI from '@/public/contract-abi.json';

const CONTRACT_ADDRESS = '0x718430F546A7e7b74b1BA4a13e0C391e36108D8b' as `0x${string}`;

export default function PredictionModal({ match, onClose }: { match: Match | null; onClose: () => void; }) {
  const { address } = useAccount();
  const [outcome, setOutcome] = useState<0 | 1 | 2 | null>(null);
  const [confidence, setConfidence] = useState(3);
  const [reasoning, setReasoning] = useState('');

  const { data: hash, writeContract, isPending: isWriting, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash, chainId: baseSepolia.id });

  useEffect(() => {
    if (isSuccess) {
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (!match || outcome === null || !address) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: 'submitPrediction',
      args: [BigInt(match.id), outcome],
      chainId: baseSepolia.id,
    });
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
                  <p className="text-white/60 text-sm">{match.homeTeam} vs {match.awayTeam}</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <div className="text-sm text-white/60 mb-3">Select Outcome</div>
                  <div className="grid grid-cols-3 gap-3">
                    <OutcomeButton label="Home Win" selected={outcome === 0} onClick={() => setOutcome(0)} />
                    <OutcomeButton label="Draw" selected={outcome === 1} onClick={() => setOutcome(1)} />
                    <OutcomeButton label="Away Win" selected={outcome === 2} onClick={() => setOutcome(2)} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/60 mb-3 block">Confidence: {confidence}/5</label>
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
                  <label className="text-sm text-white/60 mb-2 block">Reasoning (optional, off-chain)</label>
                  <textarea
                    value={reasoning}
                    onChange={(e) => setReasoning(e.target.value)}
                    placeholder="Why do you think this outcome will happen?"
                    maxLength={200}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm placeholder:text-white/40 focus:border-[#0052FF] focus:outline-none"
                  />
                  <div className="text-xs text-white/40 mt-1 text-right">{reasoning.length}/200</div>
                </div>

                {writeError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {writeError.message.includes('Already predicted') ? 'You already predicted this match' : 'Error submitting prediction'}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={outcome === null || isPending || !address}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D4FF] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {isWriting ? 'Waiting for signature...' : 'Broadcasting...'}
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

function SuccessState({ hash, onClose }: { hash: `0x${string}`; onClose: () => void; }) {
  const shortHash = `${hash.slice(0, 10)}...${hash.slice(-8)}`;
  const [copied, setCopied] = useState(false);

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

