import { useState } from "react";

interface ForgotPasswordFormProps {
  onSendResetLink: () => void;
  onBackToLogin: () => void;
}

export default function ForgotPasswordForm({ onSendResetLink, onBackToLogin }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle send reset link logic here
    console.log("Reset link requested for:", email);
    onSendResetLink();
  };

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-foreground mb-2" data-testid="heading-forgot-password">
          Forgot Password 
          <span className="text-yellow-500">🔒</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-input rounded-lg input-focus transition-all duration-200 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="input-reset-email"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 btn-primary rounded-lg font-medium text-sm"
          data-testid="button-send-reset-link"
        >
          Send Reset Link
        </button>

        <button 
          type="button" 
          className="w-full py-3 btn-secondary rounded-lg font-medium text-sm"
          onClick={onBackToLogin}
          data-testid="button-back-to-login"
        >
          Back to Login
        </button>
      </form>
    </>
  );
}
