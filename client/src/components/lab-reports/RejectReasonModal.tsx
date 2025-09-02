import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface RejectReasonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

export default function RejectReasonModal({ isOpen, onClose, onSubmit }: RejectReasonModalProps) {
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(reason);
    setReason("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center md:items-start justify-center md:justify-end z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto md:mt-16 md:mr-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-lg md:text-xl font-heading font-light text-primary-black dark:text-white">
            Reason
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Reason Textarea */}
          <div className="space-y-2">
            <Textarea
              placeholder="Enter reason to reject the lab report"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full h-24 md:h-32 resize-none border-secondary-2 dark:border-gray-600 focus:border-secondary-4 dark:focus:border-blue-400 rounded-lg text-sm font-body placeholder:text-gray-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button 
              type="submit"
              className="w-full bg-primary-black hover:bg-secondary-5 dark:bg-gray-900 dark:hover:bg-gray-800 text-primary-white rounded-lg h-10 md:h-11 font-body font-medium text-sm"
              disabled={!reason.trim()}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}