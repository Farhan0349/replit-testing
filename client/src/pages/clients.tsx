import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatusChart from "@/components/clients/StatusChart";
import RecentActivity from "@/components/clients/RecentActivity";
import Filters from "@/components/clients/Filters";
import ClientsTable from "@/components/clients/ClientsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Clients() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    clients: "All Clients",
    statuses: "All Statuses", 
    languages: "All Languages"
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex" data-testid="clients-page">
      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          data-testid="sidebar-backdrop"
        />
      )}
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} currentPage="clients" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} title="Clients" />
        
        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Section: Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <StatusChart />
              </div>
              <div className="lg:col-span-1">
                <RecentActivity />
              </div>
            </div>
            
            {/* Filters and Add Client Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <Filters filters={filters} onFiltersChange={setFilters} />
              <Button 
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                data-testid="button-add-client"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Client
              </Button>
            </div>
            
            {/* Clients Table */}
            <ClientsTable filters={filters} />
          </div>
        </main>
      </div>
    </div>
  );
}