import { useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";
import StatsCards from "@/components/dashboard/stats-cards";
import Analytics from "@/components/dashboard/analytics";
import RecentUpload from "@/components/dashboard/recent-upload";
import UpdateCard from "@/components/dashboard/update-card";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Dashboard Content */}
        <main className="flex-1 p-[24px]" data-testid="main-dashboard">
          {/* Page Title */}
          <div className="mb-[32px]">
            <h1 className="text-[24px] font-semibold text-gray-900" data-testid="heading-dashboard">
              Dashboard
            </h1>
          </div>

          {/* Stats Cards */}
          <div className="mb-[32px]">
            <StatsCards />
          </div>

          {/* Analytics and Recent Upload Row */}
          <div className="grid grid-cols-3 gap-[24px] mb-[24px]">
            {/* Analytics Chart */}
            <div className="col-span-2">
              <Analytics />
            </div>
            
            {/* Recent Upload */}
            <div className="col-span-1">
              <RecentUpload />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}