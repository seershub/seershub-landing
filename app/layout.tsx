import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Providers from "./providers";

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
    <html lang="en">
      <body className="antialiased">
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


