import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RejectSuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function RejectSuccessPopup({ isVisible, onClose }: RejectSuccessPopupProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md mx-4">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          {/* Success Message */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Report has been rejected
            </h2>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Successfully!
            </p>
          </div>
          
          {/* Continue Button */}
          <Button 
            onClick={onClose}
            className="w-full bg-black hover:bg-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800 text-white rounded-lg h-12 font-medium"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}