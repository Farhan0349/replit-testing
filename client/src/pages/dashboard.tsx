import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatsCard from "@/components/dashboard/StatsCard";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import ReportCard from "@/components/dashboard/ReportCard";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const statsData = [
    {
      title: "Total Clients",
      value: "30",
      icon: Users,
      color: "purple",
      isHighlighted: true
    },
    {
      title: "New Clients",
      value: "10",
      icon: UserPlus,
      color: "orange"
    },
    {
      title: "Active Clients",
      value: "10",
      icon: UserCheck,
      color: "blue"
    },
    {
      title: "Inactive Clients",
      value: "13",
      icon: UserX,
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex" data-testid="dashboard-page">
      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          data-testid="sidebar-backdrop"
        />
      )}
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            
            {/* Analytics and Reports Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AnalyticsCard />
              </div>
              <div className="lg:col-span-1">
                <ReportCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}