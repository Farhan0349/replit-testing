import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatusChart from "@/components/clients/StatusChart";
import RecentActivity from "@/components/clients/RecentActivity";
import Filters from "@/components/clients/Filters";
import ClientsTable from "@/components/clients/ClientsTable";
import AddClientModal from "@/components/clients/AddClientModal";
import SuccessPopup from "@/components/clients/SuccessPopup";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const initialClientsData = [
  {
    id: "CL - 001",
    name: "Micha Johnson",
    email: "micha@gmail.com",
    protocol: "Immune Up",
    language: "English",
    status: "Active",
    lastSession: "01/07/2025",
    avatar: "MJ"
  },
  {
    id: "CL - 002",
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    protocol: "Longevity",
    language: "Polish",
    status: "Inactive",
    lastSession: "02/07/2025",
    avatar: "SJ"
  },
  {
    id: "CL - 003",
    name: "David Chen",
    email: "david@gmail.com",
    protocol: "Beauty Glow",
    language: "English",
    status: "Pending",
    lastSession: "03/07/2025",
    avatar: "DC"
  },
  {
    id: "CL - 004",
    name: "Sophie Martin",
    email: "sophie@gmail.com",
    protocol: "Immune Up",
    language: "Polish",
    status: "Inactive",
    lastSession: "04/07/2025",
    avatar: "SM"
  },
  {
    id: "CL - 005",
    name: "John Doe",
    email: "john@gmail.com",
    protocol: "Beauty Glow",
    language: "English",
    status: "Active",
    lastSession: "05/07/2025",
    avatar: "JD"
  },
  {
    id: "CL - 006",
    name: "Samantha Wheeler",
    email: "samantha@gmail.com",
    protocol: "Longevity",
    language: "Polish",
    status: "Pending",
    lastSession: "06/07/2025",
    avatar: "SW"
  },
  {
    id: "CL - 007",
    name: "Harvey Specter",
    email: "harvey@gmail.com",
    protocol: "Immune Up",
    language: "English",
    status: "Active",
    lastSession: "07/07/2025",
    avatar: "HS"
  },
  {
    id: "CL - 008",
    name: "Jessica Pearson",
    email: "jessica@gmail.com",
    protocol: "Beauty Glow",
    language: "Polish",
    status: "Inactive",
    lastSession: "08/07/2025",
    avatar: "JP"
  }
];

export default function Clients() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    clients: "All Clients",
    statuses: "All Statuses", 
    languages: "All Languages"
  });
  const [clients, setClients] = useState(initialClientsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleAddClient = (newClient: any) => {
    // Add new client at the top of the list
    setClients(prev => [newClient, ...prev]);
    setShowSuccessPopup(true);
  };

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
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                data-testid="button-add-client"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Client
              </Button>
            </div>
            
            {/* Clients Table */}
            <ClientsTable filters={filters} clients={clients} />
          </div>
        </main>
      </div>

      {/* Add Client Modal */}
      <AddClientModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddClient={handleAddClient}
      />

      {/* Success Popup */}
      <SuccessPopup 
        isVisible={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </div>
  );
}