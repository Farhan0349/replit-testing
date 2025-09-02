import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RejectSuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function RejectSuccessPopup({ isVisible, onClose }: RejectSuccessPopupProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-sm md:max-w-md">
        <div className="text-center space-y-4 md:space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          {/* Success Message */}
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-lg md:text-xl font-heading font-light text-primary-black dark:text-white">
              Report has been rejected
            </h2>
            <p className="text-lg md:text-xl font-heading font-light text-primary-black dark:text-white">
              Successfully!
            </p>
          </div>
          
          {/* Continue Button */}
          <Button 
            onClick={onClose}
            className="w-full bg-primary-black hover:bg-secondary-5 dark:bg-gray-900 dark:hover:bg-gray-800 text-primary-white rounded-lg h-10 md:h-12 font-body font-medium text-sm md:text-base"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}