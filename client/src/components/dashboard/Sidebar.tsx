import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  CreditCard,
  TrendingUp,
  MessageSquare,
  Calendar,
  Settings
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage?: string;
}

const getNavigationItems = (currentPage: string) => [
  { icon: LayoutDashboard, label: "Dashboard", isActive: currentPage === "dashboard", path: "/dashboard" },
  { icon: Users, label: "Clients", isActive: currentPage === "clients", path: "/clients" },
  { icon: FileText, label: "Lab Reports", isActive: currentPage === "lab-reports", path: "/lab-reports" },
  { icon: BarChart3, label: "Reports", isActive: currentPage === "reports", path: "/reports" },
  { icon: CreditCard, label: "Payments", isActive: currentPage === "payments", path: "/payments" },
  { icon: TrendingUp, label: "Progress", isActive: currentPage === "progress", path: "/progress" },
  { icon: MessageSquare, label: "Questionnaire", isActive: currentPage === "questionnaire", path: "/questionnaire" },
  { icon: Calendar, label: "Session Management", isActive: currentPage === "session-management", path: "/session-management" },
  { icon: Settings, label: "Settings", isActive: currentPage === "settings", path: "/settings" },
];

export default function Sidebar({ isOpen, onClose, currentPage = "dashboard" }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <SidebarContent currentPage={currentPage} />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        data-testid="sidebar-mobile"
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GZ</span>
            </div>
            <span className="font-heading font-normal text-gray-900 dark:text-white">GEN ZEN</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            data-testid="button-close-sidebar"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <SidebarContent currentPage={currentPage} />
      </aside>
    </>
  );
}

function SidebarContent({ currentPage }: { currentPage: string }) {
  const navigationItems = getNavigationItems(currentPage);
  return (
    <div className="flex flex-col h-full">
      {/* Logo - Desktop only */}
      <div className="hidden lg:flex items-center gap-2 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">GZ</span>
        </div>
        <span className="font-heading font-normal text-gray-900 dark:text-white">GEN ZEN</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                item.isActive
                  ? "bg-gray-900 dark:bg-gray-700 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
              )}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-body font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h3 className="font-heading font-light text-sm mb-1">New Updates</h3>
            <p className="text-xs text-gray-300 mb-3 font-body">Available</p>
            <button 
              className="bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-body font-medium hover:bg-gray-100 transition-colors"
              data-testid="button-view-all-updates"
            >
              View all
            </button>
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}