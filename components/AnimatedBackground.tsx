// ============================================
// COMPONENT: Animated Background
// ============================================
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main Gradient Background - Fixed syntax */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C75030] via-[#E26537] to-[#FF9966]" />
      
      {/* Additional gradient overlay for better color balance */}
      <div className="absolute inset-0 bg-gradient-to-tl from-[#D96B45] via-[#FF9966] to-[#FFB380] opacity-40" />
      
      {/* Tertiary gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB380]/20 via-transparent to-[#E26537]/30" />
      
      {/* Animated Blob 1 - Deep Orange with custom animation */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(199, 80, 48, 0.3), rgba(226, 101, 55, 0.15))',
          animation: 'blob1 18s ease-in-out infinite'
        }}
      />
      
      {/* Animated Blob 2 - Bright Orange */}
      <div 
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(255, 153, 102, 0.35), rgba(255, 179, 128, 0.2))',
          animation: 'blob2 20s ease-in-out infinite 2s'
        }}
      />
      
      {/* Animated Blob 3 - Light Orange */}
      <div 
        className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(255, 179, 128, 0.3), rgba(217, 107, 69, 0.15))',
          animation: 'blob3 22s ease-in-out infinite 4s'
        }}
      />
      
      {/* Animated Blob 4 - Center accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(226, 101, 55, 0.25), rgba(255, 153, 102, 0.15))',
          animation: 'blob4 16s ease-in-out infinite 1s'
        }}
      />
      
      {/* Animated Blob 5 - Dark contrast */}
      <div 
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(217, 107, 69, 0.3), rgba(199, 80, 48, 0.15))',
          animation: 'blob5 19s ease-in-out infinite 3s'
        }}
      />
      
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.15); }
          66% { transform: translate(-25px, 30px) scale(0.9); }
        }
        
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-35px, 25px) scale(1.1); }
          66% { transform: translate(40px, -20px) scale(0.95); }
        }
        
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, 35px) scale(1.05); }
          66% { transform: translate(-30px, -25px) scale(1.1); }
        }
        
        @keyframes blob4 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(calc(-50% + 20px), calc(-50% - 30px)) scale(1.08); }
          66% { transform: translate(calc(-50% - 20px), calc(-50% + 20px)) scale(0.92); }
        }
        
        @keyframes blob5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, -30px) scale(1.12); }
          66% { transform: translate(35px, 35px) scale(0.88); }
        }
      `}</style>
    </div>
  );
};