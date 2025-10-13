'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Wallet, ExternalLink } from 'lucide-react';
import { useReadContract } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import ABI from '@/public/contract-abi.json';

const CONTRACT_ADDRESS = '0x718430F546A7e7b74b1BA4a13e0C391e36108D8b' as `0x${string}`;

export default function PlatformStats() {
  const { data: totalPredictions } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'predictionCount',
    chainId: baseSepolia.id,
  });

  const { data: uniqueUsers } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'uniqueUsers',
    chainId: baseSepolia.id,
  });

  const stats = [
    {
      icon: Target,
      label: 'Total Predictions',
      value: totalPredictions ? totalPredictions.toString() : '...',
      color: 'text-[#00D4FF]',
    },
    {
      icon: Users,
      label: 'Unique Users',
      value: uniqueUsers ? uniqueUsers.toString() : '...',
      color: 'text-green-500',
    },
    {
      icon: Wallet,
      label: 'Total Prize Pool',
      value: '$12,450',
      color: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      label: 'Avg Accuracy',
      value: '68%',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur">
      <h3 className="text-2xl font-bold mb-6">Platform Statistics</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <a
        href={`https://sepolia.basescan.org/address/${CONTRACT_ADDRESS}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold"
      >
        <ExternalLink className="w-4 h-4" />
        View Contract on BaseScan
      </a>
    </div>
  );
}

