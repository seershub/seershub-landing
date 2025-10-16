'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode, useState } from 'react';
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CDPReactProvider } from '@coinbase/cdp-react';
import { cdpConfig } from '@/lib/cdp-config';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo';

const config = getDefaultConfig({
  appName: 'Seershub Demo',
  projectId,
  chains: [baseSepolia, base],
  ssr: true,
});

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <CDPReactProvider config={cdpConfig}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider 
            locale="en-US"
            theme={darkTheme({
              accentColor: '#0052FF',
              borderRadius: 'large',
              overlayBlur: 'small',
            })}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </CDPReactProvider>
  );
}


