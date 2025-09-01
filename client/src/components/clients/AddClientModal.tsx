import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClient: (client: any) => void;
}

export default function AddClientModal({ isOpen, onClose, onAddClient }: AddClientModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
    language: "",
    note: "",
    status: "Active"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate new client ID
    const newId = `CL - ${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    const newClient = {
      id: newId,
      name: formData.name,
      email: formData.email,
      protocol: "Beauty Glow", // Default protocol
      language: formData.language,
      status: formData.status,
      lastSession: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    };
    
    onAddClient(newClient);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      age: "",
      language: "",
      note: "",
      status: "Active"
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-testid="modal-backdrop">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" data-testid="modal-add-client">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-modal-title">
            Add New Client
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Client Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Client Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Client Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full"
              required
              data-testid="input-client-name"
            />
          </div>

          {/* Client Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Client Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Client Email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full"
              required
              data-testid="input-client-email"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Contact Number
            </Label>
            <Input
              id="contact"
              type="tel"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
              className="w-full"
              data-testid="input-contact-number"
            />
          </div>

          {/* Client Age */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Client Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Client Age"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              className="w-full"
              data-testid="input-client-age"
            />
          </div>

          {/* Language */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Language
            </Label>
            <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
              <SelectTrigger className="w-full" data-testid="select-language">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Polish">Polish</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Note */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Note
            </Label>
            <Textarea
              id="note"
              placeholder="Add a note..."
              value={formData.note}
              onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
              className="w-full h-20 resize-none"
              data-testid="textarea-note"
            />
          </div>

          {/* Status Toggle */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Status :
            </Label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, status: "Active" }))}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  formData.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
                data-testid="button-status-active"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                Active
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, status: "Inactive" }))}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  formData.status === "Inactive"
                    ? "bg-gray-800 text-white dark:bg-gray-600"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
                data-testid="button-status-inactive"
              >
                <div className="w-3 h-3 bg-gray-500 rounded-full" />
                Inactive
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg h-12"
              disabled={!formData.name || !formData.email || !formData.language}
              data-testid="button-add-client-submit"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}