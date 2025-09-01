import { useState } from "react";
import { X, BarChart3, Users, FileText, CreditCard, TrendingUp, HelpCircle, Settings, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Users, label: "Clients", active: false },
  { icon: FileText, label: "Lab Reports", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: TrendingUp, label: "Progress", active: false },
  { icon: HelpCircle, label: "Questionnaire", active: false },
  { icon: Settings, label: "Session Management", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2" data-testid="logo-sidebar">
            <span className="text-xl font-bold text-gray-900">GEN</span>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path 
                  d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" 
                  fill="currentColor" 
                  className="text-gray-600"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">ZEN</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            data-testid="button-close-sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-3" data-testid="nav-sidebar">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={cn(
                    "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200",
                    item.active 
                      ? "bg-gray-900 text-white" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}