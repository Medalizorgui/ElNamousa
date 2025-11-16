// ============================================
// COMPONENT: Animated Background
// ============================================
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#E26537] via-[#E26537] to-[#FF9966]" />
      
      {/* Additional gradient overlay for better color balance */}
      <div className="absolute inset-0 bg-linear-to-tl from-[#E26537] via-[#FF9966] to-[#E26537] opacity-40" />
      
      {/* Animated Blob - Orange */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E26537]/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse" />
      
      {/* Animated Blob - Bright Orange */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF9966]/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-500" />
      
      {/* Animated Blob - Orange */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FFB380]/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-1000" />
      
      {/* Additional Animated Blob - Multi-color center */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-linear-to-r from-[#E26537] via-[#FF9966] to-[#FFB380] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
    </div>
  );
};
