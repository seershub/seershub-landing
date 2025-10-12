import Hero from "@/components/sections/Hero";
import LiveMatchesDemo from "@/components/sections/LiveMatchesDemo";
import TreasuryVault from "@/components/sections/TreasuryVault";
import Leaderboard from "@/components/sections/Leaderboard";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyBase from "@/components/sections/WhyBase";
import FAQ from "@/components/sections/FAQ";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TreasuryVault />
      <LiveMatchesDemo />
      <Leaderboard />
      <ProblemSolution />
      <HowItWorks />
      <WhyBase />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
