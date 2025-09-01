import { useState } from "react";
import AuthCard from "@/components/auth/auth-card";
import FloatingShapes from "@/components/auth/floating-shapes";

export type AuthScreen = "login" | "forgotPassword" | "requestSent" | "passwordReset";

export default function AuthPage() {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("login");

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingShapes />
      
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AuthCard currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        </div>
      </div>
    </div>
  );
}
