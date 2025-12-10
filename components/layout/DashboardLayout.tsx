'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  tabs?: { label: string; href: string; active?: boolean }[];
}

export default function DashboardLayout({ children, title, tabs }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <DashboardHeader 
          title={title}
          tabs={tabs}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        {/* Page Content */}
        <div className="bento-grid">
          {children}
        </div>
      </main>
    </div>
  );
}

