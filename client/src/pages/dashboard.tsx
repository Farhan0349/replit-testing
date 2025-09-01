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
        <main className="flex-1 p-6 space-y-6" data-testid="main-dashboard">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900" data-testid="heading-dashboard">
              Dashboard
            </h1>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Analytics and Recent Upload Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Analytics Chart */}
            <div className="xl:col-span-2">
              <Analytics />
            </div>
            
            {/* Recent Upload */}
            <div className="xl:col-span-1">
              <RecentUpload />
            </div>
          </div>

          {/* Update Card */}
          <div className="max-w-xs">
            <UpdateCard />
          </div>
        </main>
      </div>
    </div>
  );
}