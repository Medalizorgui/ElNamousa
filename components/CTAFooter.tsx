// ============================================
// COMPONENT: CTA Footer Section
// ============================================
export const CTAFooter = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-b from-[#5ABACD]/30 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-linear-to-t from-[#E26537]/30 to-transparent rounded-full filter blur-3xl opacity-40" />

      {/* Gradient animation styles */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .gradient-text {
          background-size: 200% auto;
          animation: gradient-shift 3s ease-in-out infinite;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.3);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="group relative">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-1 bg-linear-to-r from-[#32ACCA] via-[#E26537] to-[#5ABACD] rounded-3xl opacity-60 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse" />
          
          <div className="relative bg-linear-to-br from-white/15 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/30 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="bg-linear-to-r from-[#00D9FF] via-white to-[#FF6B35] bg-clip-text text-transparent gradient-text">
                Ready to Play?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of players enjoying the best Tunisian drinking game
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-linear-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
                Order Now 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
