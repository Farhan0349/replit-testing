import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const initialLabReportsData = [
  {
    id: "R - 001",
    clientId: "CL - 001",
    clientName: "Michael Rodriguez",
    avatar: "MR",
    reportName: "Vizbody Scan",
    reportType: "body-scan",
    status: "completed",
    date: "2025-01-02"
  },
  {
    id: "R - 002", 
    clientId: "CL - 002",
    clientName: "Sarah Johnson",
    avatar: "SJ",
    reportName: "HRVIANS Assessment", 
    reportType: "assessment",
    status: "active",
    date: "2025-01-02"
  },
  {
    id: "R - 003",
    clientId: "CL - 003", 
    clientName: "David Chen",
    avatar: "DC",
    reportName: "Firstbeat Analysis",
    reportType: "analysis", 
    status: "completed",
    date: "2025-01-03"
  },
  {
    id: "R - 004",
    clientId: "CL - 004",
    clientName: "Sophie Martin", 
    avatar: "SM",
    reportName: "Vizbody Scan",
    reportType: "body-scan",
    status: "active",
    date: "2025-01-04"
  },
  {
    id: "R - 005",
    clientId: "CL - 005",
    clientName: "John Doe",
    avatar: "JD", 
    reportName: "Vizbody Scan",
    reportType: "body-scan",
    status: "completed",
    date: "2025-01-05"
  },
  {
    id: "R - 006",
    clientId: "CL - 006",
    clientName: "Samantha Wheeler",
    avatar: "SW",
    reportName: "Firstbeat Analysis", 
    reportType: "analysis",
    status: "active",
    date: "2025-01-06"
  },
  {
    id: "R - 007", 
    clientId: "CL - 007",
    clientName: "Harvey Specter",
    avatar: "HS",
    reportName: "Firstbeat Analysis",
    reportType: "analysis",
    status: "completed", 
    date: "2025-01-07"
  },
  {
    id: "R - 008",
    clientId: "CL - 008",
    clientName: "Jessica Pearson",
    avatar: "JP",
    reportName: "Firstbeat Analysis",
    reportType: "analysis",
    status: "active",
    date: "2025-01-08"
  }
];

const getAvatarColor = (index: number) => {
  const colors = [
    "bg-blue-500",
    "bg-purple-500", 
    "bg-green-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-teal-500"
  ];
  return colors[index % colors.length];
};

const getStatusIndicator = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "completed":
      return "bg-red-500";
    case "pending":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

export default function LabReports() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    clients: "All Clients",
    reportStatus: "Report Status"
  });
  const [reports] = useState(initialLabReportsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const totalReports = reports.length;
  const totalPages = Math.ceil(totalReports / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalReports);
  const currentReports = reports.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} currentPage="lab-reports" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} title="Lab Reports" />
        
        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex gap-4">
                <Select value={filters.clients} onValueChange={(value) => setFilters(prev => ({ ...prev, clients: value }))}>
                  <SelectTrigger className="w-40 h-11 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Clients">All Clients</SelectItem>
                    <SelectItem value="Active Clients">Active Clients</SelectItem>
                    <SelectItem value="Inactive Clients">Inactive Clients</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filters.reportStatus} onValueChange={(value) => setFilters(prev => ({ ...prev, reportStatus: value }))}>
                  <SelectTrigger className="w-40 h-11 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Report Status">Report Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Lab Reports Table */}
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-0">
                {/* Table Header */}
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-[120px,1fr,1fr,120px] gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <div>Report ID</div>
                    <div>Client Name</div>
                    <div>Report Name</div>
                    <div>Actions</div>
                  </div>
                </div>
                
                {/* Table Body */}
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {currentReports.map((report, index) => (
                    <div 
                      key={report.id} 
                      className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <div className="grid grid-cols-[120px,1fr,1fr,120px] gap-6 items-center">
                        {/* Report ID */}
                        <div className="text-sm text-gray-900 dark:text-white font-medium">
                          {report.id}
                        </div>
                        
                        {/* Client Name with Avatar */}
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium",
                            getAvatarColor(index)
                          )}>
                            {report.avatar}
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white font-medium">
                            {report.clientName}
                          </span>
                        </div>
                        
                        {/* Report Name */}
                        <div>
                          <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline underline-offset-2">
                            {report.reportName}
                          </button>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-0"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            getStatusIndicator(report.status)
                          )} />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-0"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Rows per page:</span>
                    <Select value={itemsPerPage.toString()} disabled>
                      <SelectTrigger className="w-16 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {startIndex + 1}-{endIndex} of {totalReports}
                    </span>
                    <div className="flex items-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-8 h-8"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-8 h-8"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}