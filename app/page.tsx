'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCard from '@/components/ui/StatsCard';
import ChartCard from '@/components/ui/ChartCard';
import ListCard from '@/components/ui/ListCard';
import AreaChartComponent from '@/components/charts/AreaChart';
import DonutChart from '@/components/charts/DonutChart';
import FeaturedMatch from '@/components/dashboard/FeaturedMatch';
import TopSeers from '@/components/dashboard/TopSeers';
import VaultOverview from '@/components/dashboard/VaultOverview';
import EcosystemApps from '@/components/dashboard/EcosystemApps';
import { Activity, Users, DollarSign, Zap, Trophy, Target } from 'lucide-react';

const activityData = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 180 },
  { name: 'Wed', value: 140 },
  { name: 'Thu', value: 200 },
  { name: 'Fri', value: 230 },
  { name: 'Sat', value: 190 },
  { name: 'Sun', value: 210 },
];

export default function Home() {
  const tabs = [
    { label: 'Home', href: '/', active: true },
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '/waitlist' },
  ];

  return (
    <DashboardLayout title="Seershub Dashboard" tabs={tabs}>
      {/* Stats Row */}
      <div className="bento-grid-stats">
        <StatsCard
          icon={Target}
          label="Total Predictions"
          value="200+"
          subStats={[
            { label: 'This Week', value: 45 },
            { label: 'Pending', value: 12 },
          ]}
          delay={0}
          isLive={true}
          backgroundImage="/totalp.png"
        />
        <StatsCard
          icon={Users}
          label="Active Seers"
          value="53"
          subStats={[
            { label: 'Online Now', value: 18 },
            { label: 'New Today', value: 5 },
          ]}
          delay={0.1}
          isLive={true}
          backgroundImage="/cup.png"
        />
        <StatsCard
          icon={DollarSign}
          label="Total Payouts"
          value="$12,450"
          subStats={[
            { label: 'This Month', value: '$3.2K' },
            { label: 'Pending', value: '$890' },
          ]}
          delay={0.2}
        />
        <StatsCard
          icon={Zap}
          label="Base App Live"
          value="2"
          subStats={[
            { label: 'Active miniapp', value: 'Seers League' },
            { label: 'Platform testnet', value: 'Demo' },
          ]}
          delay={0.3}
          isLive={true}
          backgroundImage="/liveapp.png"
        />
      </div>

      {/* Main Content Grid */}
      <div className="bento-grid-main">
        {/* Left: Chart + Vault */}
        <div className="space-y-6">
          {/* Revenue Chart */}
          <ChartCard title="Platform Activity" dropdown="Year" delay={0.4}>
            <AreaChartComponent data={activityData} />
          </ChartCard>

          {/* Vault Overview */}
          <VaultOverview />
        </div>

        {/* Right: Top Seers + Ecosystem */}
        <div className="space-y-6">
          <TopSeers />
          <EcosystemApps />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bento-grid-bottom" id="matches">
        <FeaturedMatch />

        <ChartCard title="Vault Distribution" actions={false} delay={0.6}>
          <DonutChart
            data={[
              { name: 'Prize Pool', value: 80, color: '#f59e0b', amount: '$36,184' },
              { name: 'Treasury', value: 15, color: '#d97706', amount: '$6,784' },
              { name: 'Operations', value: 5, color: '#92400e', amount: '$2,262' },
            ]}
            centerValue="80%"
            centerLabel="Prize Pool"
          />
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
