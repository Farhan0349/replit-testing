import { cn } from "@/lib/utils";
import Logo from "./logo";
import LoginForm from "./login-form";
import ForgotPasswordForm from "./forgot-password-form";
import ResetPasswordForm from "./reset-password-form";
import PasswordResetSuccess from "./password-reset-success";
import type { AuthScreen } from "@/pages/auth";

interface AuthCardProps {
  currentScreen: AuthScreen;
  setCurrentScreen: (screen: AuthScreen) => void;
}

export default function AuthCard({ currentScreen, setCurrentScreen }: AuthCardProps) {
  return (
    <div className="bg-card rounded-xl card-shadow p-8 w-full form-transition" data-testid="card-auth">
      <Logo />
      
      <div className={cn("screen-content", currentScreen !== "login" && "hidden")}>
        <LoginForm onForgotPassword={() => setCurrentScreen("forgotPassword")} />
      </div>

      <div className={cn("screen-content", currentScreen !== "forgotPassword" && "hidden")}>
        <ForgotPasswordForm 
          onSendResetLink={() => setCurrentScreen("requestSent")}
          onBackToLogin={() => setCurrentScreen("login")}
        />
      </div>

      <div className={cn("screen-content", currentScreen !== "requestSent" && "hidden")}>
        <ResetPasswordForm 
          onSetNewPassword={() => setCurrentScreen("passwordReset")}
          onBackToLogin={() => setCurrentScreen("login")}
        />
      </div>

      <div className={cn("screen-content", currentScreen !== "passwordReset" && "hidden")}>
        <PasswordResetSuccess 
          onContinue={() => setCurrentScreen("login")}
          onBackToLogin={() => setCurrentScreen("login")}
        />
      </div>
    </div>
  );
}
