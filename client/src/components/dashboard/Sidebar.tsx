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
}

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", isActive: true },
  { icon: Users, label: "Clients", isActive: false },
  { icon: FileText, label: "Lab Reports", isActive: false },
  { icon: BarChart3, label: "Reports", isActive: false },
  { icon: CreditCard, label: "Payments", isActive: false },
  { icon: TrendingUp, label: "Progress", isActive: false },
  { icon: MessageSquare, label: "Questionnaire", isActive: false },
  { icon: Calendar, label: "Session Management", isActive: false },
  { icon: Settings, label: "Settings", isActive: false },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <SidebarContent />
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
            <span className="font-semibold text-gray-900 dark:text-white">GEN ZEN</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            data-testid="button-close-sidebar"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <SidebarContent />
      </aside>
    </>
  );
}

function SidebarContent() {
  return (
    <div className="flex flex-col h-full">
      {/* Logo - Desktop only */}
      <div className="hidden lg:flex items-center gap-2 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">GZ</span>
        </div>
        <span className="font-semibold text-gray-900 dark:text-white">GEN ZEN</span>
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
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h3 className="font-medium text-sm mb-1">New Updates</h3>
            <p className="text-xs text-gray-300 mb-3">Available</p>
            <button 
              className="bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-100 transition-colors"
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