// ============================================
// COMPONENT: Header Navigation
// ============================================
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-transparent backdrop-blur-lg" />
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo Badge - Floating Design */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-[#32ACCA] to-[#E26537] rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-all duration-300" />
            
            {/* Logo Container */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-[#32ACCA] to-[#E26537] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
              <img 
                src="/elnamousa.png" 
                alt="El Namousa Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
              />
            </div>
          </div>
          
          {/* Brand Text */}
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-black text-sm md:text-base leading-tight">EL NAMOUSA</span>
            <span className="text-[#32ACCA] text-xs font-semibold tracking-wider">TUNISIAN GAME</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-8">
          <a 
            href="#features" 
            className="relative text-white text-sm md:text-base font-medium group/link transition-colors"
          >
            <span className="relative z-10">Features</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#32ACCA] to-[#E26537] group-hover/link:w-full transition-all duration-300" />
          </a>
          
          <a 
            href="#how" 
            className="relative text-white text-sm md:text-base font-medium group/link transition-colors hidden sm:inline-block"
          >
            <span className="relative z-10">How to Play</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#32ACCA] to-[#E26537] group-hover/link:w-full transition-all duration-300" />
          </a>
          
          <button className="px-5 py-2 md:px-6 md:py-2 bg-linear-to-r from-[#32ACCA] to-[#E26537] text-white font-bold rounded-full text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Order Now
          </button>
        </nav>
      </div>
    </header>
  );
};
