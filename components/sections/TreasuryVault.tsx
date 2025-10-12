'use client';

import VaultBackground from '@/components/graphics/vault/VaultBackground';
import VaultHeader from '@/components/vault/VaultHeader';
import VaultCenterpiece from '@/components/vault/VaultCenterpiece';
import LiveDepositStream from '@/components/vault/LiveDepositStream';
import DistributionCountdown from '@/components/vault/DistributionCountdown';
import VaultStats from '@/components/vault/VaultStats';
import VaultSecurityFooter from '@/components/vault/VaultSecurityFooter';

export default function TreasuryVault() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      
      {/* Dramatic background */}
      <VaultBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <VaultHeader />
        
        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-12 md:mt-16">
          
          {/* LEFT: Live Deposit Stream (4 cols) */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <LiveDepositStream />
          </div>
          
          {/* CENTER: Main Vault Visual (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <VaultCenterpiece />
          </div>
          
          {/* RIGHT: Stats & Countdown (3 cols) */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-6">
            <VaultStats />
            <DistributionCountdown />
          </div>
          
        </div>
        
        {/* Footer: Security Badges */}
        <VaultSecurityFooter />
        
      </div>
      
    </section>
  );
}

