'use client';

import { useAccount, useBalance, useChainId, useEnsName, useEnsAvatar } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Avatar pool from /public/avatar
const AVATAR_POOL = [
  '/avatar/0a16668c89dfc9920789891b2c13891c.png',
  '/avatar/31cc024c00da0d1d8d0337120142b52d.png',
  '/avatar/79e0ce7f58179293cc2dc4f061e4444a.png',
  '/avatar/b35e3ae275ce74427ca3e8690d55b945.png',
  '/avatar/ca7158ba2cf3398875dd67933e6da3f8.png',
];

// Deterministic avatar selection based on address
const getAvatarForAddress = (address?: string) => {
  if (!address) return AVATAR_POOL[0];
  // Convert address to number and use modulo to select avatar
  const addressNum = parseInt(address.slice(2, 10), 16);
  return AVATAR_POOL[addressNum % AVATAR_POOL.length];
};

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
  // Use avatar pool from /public/avatar instead of Dicebear
  const avatarUrl = avatar || getAvatarForAddress(address);

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


