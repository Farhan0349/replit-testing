export default function Logo() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4" data-testid="logo-genzen">
        <span className="text-2xl font-bold text-foreground tracking-wide">GEN</span>
        <div className="w-8 h-8 mx-2 relative">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path 
              d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" 
              fill="currentColor" 
              className="text-gray-600"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-foreground tracking-wide">ZEN</span>
      </div>
    </div>
  );
}
