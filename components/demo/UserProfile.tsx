'use client';

import { useAccount, useBalance, useChainId } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function UserProfile() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: bal } = useBalance({ address, chainId, query: { enabled: Boolean(address) } });

  const short = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '—';

  return (
    <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0052FF] to-[#00D4FF]" />
          <div>
            <div className="text-sm text-white/60">Wallet</div>
            <div className="font-mono text-lg">{short}</div>
            <div className="text-xs text-white/50 mt-1">Network: Base Sepolia</div>
          </div>
        </div>
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-5">
        <Stat label="Balance" value={bal ? `${Number(bal.value) / 1e18} ETH` : '—'} />
        <Stat label="Predictions" value="10" />
        <Stat label="Accuracy" value="73%" />
        <Stat label="Rank" value="#127" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string; }) {
  return (
    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
      <div className="text-white/60 text-xs">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}


