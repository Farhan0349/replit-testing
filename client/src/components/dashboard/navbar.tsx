import { Menu, Bell, ChevronDown } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4" data-testid="navbar-header">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          data-testid="button-mobile-menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Left side - empty for desktop, menu for mobile */}
        <div className="flex-1 lg:flex-none" />

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 rounded-full hover:bg-gray-100 relative" data-testid="button-notifications">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                alt="Agnieszka Admin"
                className="w-8 h-8 rounded-full object-cover"
                data-testid="img-user-avatar"
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-1">
                <div>
                  <p className="text-sm font-medium text-gray-900" data-testid="text-username">Agnieszka</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}