import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  onForgotPassword: () => void;
}

export default function LoginForm({ onForgotPassword }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-foreground mb-2" data-testid="heading-signin">
          Sign in to Recovery Compass
        </h1>
        <p className="text-muted-foreground text-sm">Please sign-in to your account</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-input rounded-lg input-focus transition-all duration-200 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="input-email"
            required
          />
        </div>

        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-input rounded-lg input-focus transition-all duration-200 text-sm password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="input-password"
            required
          />
          <button 
            type="button" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 eye-icon"
            onClick={() => setShowPassword(!showPassword)}
            data-testid="button-toggle-password"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="checkbox-custom"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              data-testid="checkbox-remember"
            />
            <span className="text-muted-foreground">Remember Me</span>
          </label>
          <button 
            type="button" 
            className="link-text text-sm"
            onClick={onForgotPassword}
            data-testid="link-forgot-password"
          >
            Forgot Password?
          </button>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 btn-primary rounded-lg font-medium text-sm"
          data-testid="button-signin"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
