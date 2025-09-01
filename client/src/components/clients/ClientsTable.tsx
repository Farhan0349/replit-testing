import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Copy, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClientsTableProps {
  filters: {
    clients: string;
    statuses: string;
    languages: string;
  };
}

const clientsData = [
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

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Inactive":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    case "Pending":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
};

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

export default function ClientsTable({ filters }: ClientsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // Filter clients based on selected filters
  const filteredClients = clientsData.filter(client => {
    if (filters.statuses !== "All Statuses" && client.status !== filters.statuses) return false;
    if (filters.languages !== "All Languages" && client.language !== filters.languages) return false;
    return true;
  });
  
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClients = filteredClients.slice(startIndex, endIndex);
  
  return (
    <Card className="bg-white dark:bg-gray-800" data-testid="card-clients-table">
      <CardContent className="p-0">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-[80px,1fr,200px,120px,100px,100px,120px,100px] gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div>Client ID</div>
            <div>Client Name</div>
            <div>Client Email</div>
            <div>Protocol</div>
            <div>Language</div>
            <div>Status</div>
            <div>Last Session</div>
            <div>Actions</div>
          </div>
        </div>
        
        {/* Table Body */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {currentClients.map((client, index) => (
            <div 
              key={client.id} 
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              data-testid={`row-client-${client.id}`}
            >
              <div className="grid grid-cols-[80px,1fr,200px,120px,100px,100px,120px,100px] gap-4 items-center">
                {/* Client ID */}
                <div className="text-sm text-gray-900 dark:text-white font-medium" data-testid={`text-client-id-${client.id}`}>
                  {client.id}
                </div>
                
                {/* Client Name with Avatar */}
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium",
                    getAvatarColor(index)
                  )}>
                    {client.avatar}
                  </div>
                  <span className="text-sm text-gray-900 dark:text-white font-medium" data-testid={`text-client-name-${client.id}`}>
                    {client.name}
                  </span>
                </div>
                
                {/* Client Email */}
                <div className="text-sm text-gray-600 dark:text-gray-400" data-testid={`text-client-email-${client.id}`}>
                  {client.email}
                </div>
                
                {/* Protocol */}
                <div className="text-sm text-gray-900 dark:text-white" data-testid={`text-client-protocol-${client.id}`}>
                  {client.protocol}
                </div>
                
                {/* Language */}
                <div className="text-sm text-gray-900 dark:text-white" data-testid={`text-client-language-${client.id}`}>
                  {client.language}
                </div>
                
                {/* Status */}
                <div>
                  <Badge 
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full border-0",
                      getStatusColor(client.status)
                    )}
                    data-testid={`badge-client-status-${client.id}`}
                  >
                    {client.status}
                  </Badge>
                </div>
                
                {/* Last Session */}
                <div className="text-sm text-gray-900 dark:text-white" data-testid={`text-client-session-${client.id}`}>
                  {client.lastSession}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    data-testid={`button-view-${client.id}`}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    data-testid={`button-copy-${client.id}`}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    data-testid={`button-edit-${client.id}`}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Rows per page:</span>
            <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(parseInt(value))}>
              <SelectTrigger className="w-16 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-pagination-info">
              {startIndex + 1}-{Math.min(endIndex, filteredClients.length)} of {filteredClients.length}
            </span>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                data-testid="button-prev-page"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                data-testid="button-next-page"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}