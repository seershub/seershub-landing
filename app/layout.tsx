import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Providers from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seershub - Web3 Sports Prediction Platform",
  description: "Decentralized sports prediction platform on Base Network. Predict outcomes, win USDC.",
  keywords: ["web3", "sports", "prediction", "Base", "blockchain", "USDC"],
  openGraph: {
    title: "Seershub - Web3 Sports Prediction Platform",
    description: "Decentralized sports prediction platform on Base Network",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="antialiased font-body bg-background text-foreground">
        <Providers>
          <Header />
          <main className="pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}


