import { useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessPopup({ 
  isVisible, 
  onClose, 
  title = "Client has been added",
  message = "Successfully!"
}: SuccessPopupProps) {
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-testid="success-popup-backdrop">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center" data-testid="success-popup">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Success Message */}
        <div className="space-y-2 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-success-title">
            {title}
          </h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-success-message">
            {message}
          </p>
        </div>
        
        {/* Continue Button */}
        <Button 
          onClick={onClose}
          className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg h-12"
          data-testid="button-continue"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}