'use client';

import { useAccount, useBalance, useChainId, useEnsName, useEnsAvatar } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function UserProfile() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: bal } = useBalance({ address, chainId, query: { enabled: Boolean(address) } });
  
  // Try to get Base Name (ENS on Base Mainnet)
  const { data: ensName } = useEnsName({
    address,
    chainId: 8453, // Base Mainnet for .base.eth names
  });
  
  // Try to get ENS avatar
  const { data: avatar } = useEnsAvatar({
    name: ensName || undefined,
    chainId: 8453,
  });

  const displayName = ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '—');
  const avatarUrl = avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${address}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#0052FF]">
            <Image
              src={avatarUrl}
              alt={displayName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm text-white/60">
              {ensName ? 'Base Name' : 'Wallet'}
            </div>
            <div className="font-semibold text-lg">{displayName}</div>
            <div className="text-xs text-white/50 mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Network: Base Sepolia
            </div>
          </div>
        </div>
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-5">
        <Stat label="Balance" value={bal ? `${(Number(bal.value) / 1e18).toFixed(4)} ETH` : '0.0000 ETH'} />
        <Stat label="Predictions" value="3" />
        <Stat label="Accuracy" value="73%" />
        <Stat label="Rank" value="#127" />
      </div>
    </motion.div>
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


