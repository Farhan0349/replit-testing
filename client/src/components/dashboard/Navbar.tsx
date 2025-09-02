import { ChevronLeft, Menu, Bell, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onMenuClick: () => void;
  title?: string;
}

export default function Navbar({ onMenuClick, title = "Dashboard" }: NavbarProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
            data-testid="button-menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {/* Back Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            data-testid="button-back"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          {/* Page Title */}
          <h1 className="text-xl lg:text-2xl font-heading font-light text-gray-900 dark:text-white" data-testid="text-page-title">
            {title}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notification Badge */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-testid="button-notifications"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </Button>
          </div>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            data-testid="button-settings"
          >
            <Settings className="w-5 h-5" />
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 h-auto p-2"
                data-testid="button-profile"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zen-gradient-2 to-zen-gradient-3 flex items-center justify-center">
                    <span className="text-white text-sm font-body font-medium">A</span>
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-sm font-body font-medium text-gray-900 dark:text-white" data-testid="text-username">
                      Agniveshaa
                    </div>
                    <div className="text-xs font-body text-gray-500 dark:text-gray-400" data-testid="text-user-role">
                      Admin
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem data-testid="menu-profile">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem data-testid="menu-account-settings">
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem data-testid="menu-logout">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}