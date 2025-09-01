import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface ResetPasswordFormProps {
  onSetNewPassword: () => void;
  onBackToLogin: () => void;
}

export default function ResetPasswordForm({ onSetNewPassword, onBackToLogin }: ResetPasswordFormProps) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // Handle set new password logic here
    console.log("New password set:", newPassword);
    onSetNewPassword();
  };

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-foreground mb-2" data-testid="heading-request-sent">
          Request Sent Successfully! 
          <span className="text-yellow-500">🔒</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Your new password must be different from previously used passwords.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input 
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full px-4 py-3 border border-input rounded-lg input-focus transition-all duration-200 text-sm password-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            data-testid="input-new-password"
            required
          />
          <button 
            type="button" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 eye-icon"
            onClick={() => setShowNewPassword(!showNewPassword)}
            data-testid="button-toggle-new-password"
          >
            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative">
          <input 
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-input rounded-lg input-focus transition-all duration-200 text-sm password-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            data-testid="input-confirm-password"
            required
          />
          <button 
            type="button" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            data-testid="button-toggle-confirm-password"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 btn-primary rounded-lg font-medium text-sm"
          data-testid="button-set-new-password"
        >
          Set New Password
        </button>

        <button 
          type="button" 
          className="w-full py-3 text-accent hover:text-blue-600 transition-colors text-sm font-medium"
          onClick={onBackToLogin}
          data-testid="link-back-to-login"
        >
          Back to Login
        </button>
      </form>
    </>
  );
}
