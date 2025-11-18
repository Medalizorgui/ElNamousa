import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// ============================================
// COMPONENT: Hero Section
// ============================================
export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="max-w-5xl w-full mx-auto text-center">
        {/* Floating Logo Container */}
        <div className="flex justify-center mb-8 sm:mb-16">
          {/* Floating animation */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes glow-pulse {
              0%, 100% { box-shadow: 0 0 30px rgba(50, 172, 202, 0.5); }
              50% { box-shadow: 0 0 60px rgba(226, 101, 55, 0.6); }
            }
            @keyframes gradient-shift {
              0% { background-position: 0% center; }
              50% { background-position: 100% center; }
              100% { background-position: 0% center; }
            }
            .float-logo {
              animation: float 3s ease-in-out infinite;
            }
            .glow-pulse {
              animation: glow-pulse 3s ease-in-out infinite;
            }
            .animate-gradient {
              background-size: 200% auto;
              animation: gradient-shift 3s ease-in-out infinite;
            }
            .gradient-text {
              background-size: 200% auto;
              animation: gradient-shift 3s ease-in-out infinite;
              -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.3);
              filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
            }
          `}</style>
          
          <div 
            className="float-logo relative transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer glow layers */}
            <div className="absolute inset-0 bg-linear-to-r from-[#32ACCA] to-[#E26537] rounded-full blur-3xl opacity-40 glow-pulse" />
            <div className="absolute -inset-2 bg-linear-to-br from-[#32ACCA]/30 via-[#5ABACD]/20 to-[#E26537]/30 rounded-full blur-2xl opacity-50" />
            
            {/* Main Logo Container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-linear-to-br from-[#32ACCA]/20 via-[#5ABACD]/15 to-[#E26537]/10 backdrop-blur-2xl rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 p-6 group hover:border-white/60 transition-all duration-300">
              {/* Inner radial gradient */}
              <div className="absolute inset-0 bg-radial-gradient rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              <img 
                src="/el.namousaLogo.png" 
                alt="El Namousa Logo" 
                className="w-40 md:w-56 md:h-56 object-contain drop-shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-12 sm:mb-16 space-y-5">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight">
            <span className="bg-gradient-to-r from-[#00D9FF] via-white to-[#FF6B35] bg-clip-text text-transparent gradient-text">
              EL NAMOUSA
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#00D9FF] via-white to-[#FF6B35] bg-clip-text text-transparent gradient-text">
              The Ultimate Tunisian Drinking Game
            </span>
          </p>
          <p className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed font-medium">
            Gather your crew, challenge yourself, and create unforgettable memories with the most entertaining party game
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg"
          >
            🎮 Explore Now
          </button>
          <button
          onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })} 
            className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/50 hover:bg-white/25 hover:border-white transition-all duration-300 text-lg hover:shadow-xl"
          >
            👀 sneak peek
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};
