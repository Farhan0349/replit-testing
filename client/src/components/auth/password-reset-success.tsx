interface PasswordResetSuccessProps {
  onContinue: () => void;
  onBackToLogin: () => void;
}

export default function PasswordResetSuccess({ onContinue, onBackToLogin }: PasswordResetSuccessProps) {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-foreground mb-2" data-testid="heading-password-reset">
          Password Reset 
          <span className="text-yellow-500">🔒</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Your password has been successfully reset.
        </p>
      </div>

      <div className="space-y-4">
        <button 
          type="button" 
          className="w-full py-3 btn-primary rounded-lg font-medium text-sm"
          onClick={onContinue}
          data-testid="button-continue"
        >
          Continue
        </button>

        <button 
          type="button" 
          className="w-full py-3 text-accent hover:text-blue-600 transition-colors text-sm font-medium"
          onClick={onBackToLogin}
          data-testid="link-back-to-login-final"
        >
          Back to Login
        </button>
      </div>
    </>
  );
}
