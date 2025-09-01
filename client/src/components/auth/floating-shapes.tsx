export default function FloatingShapes() {
  return (
    <>
      <div className="floating-shape top-20 left-20 w-16 h-16 bg-gray-700 rounded-full opacity-80" style={{ animationDelay: "0s" }} />
      <div 
        className="floating-shape top-40 right-32 w-12 h-12 bg-purple-500 opacity-70" 
        style={{ 
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "2s"
        }} 
      />
      <div 
        className="floating-shape bottom-32 left-32 w-14 h-14 bg-green-500 opacity-75" 
        style={{ 
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          animationDelay: "4s"
        }} 
      />
      <div 
        className="floating-shape bottom-40 right-20 w-10 h-10 bg-blue-500 opacity-80" 
        style={{ 
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          animationDelay: "6s"
        }} 
      />
    </>
  );
}
