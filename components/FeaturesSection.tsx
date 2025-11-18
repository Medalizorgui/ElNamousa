import React, { useState } from 'react';
import { Users, Clock, Globe } from 'lucide-react';

// ============================================
// COMPONENT: Feature Card
// ============================================
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group
        ${isHovered 
          ? 'bg-white/20 border-white/60 shadow-2xl scale-105' 
          : 'bg-white/10 border-white/20'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-linear-to-br from-[#32ACCA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className={`mb-4 inline-block p-3 rounded-xl transition-all duration-300 ${
          isHovered 
            ? 'bg-linear-to-br from-[#32ACCA] to-[#E26537]'
            : 'bg-linear-to-r from-[#32ACCA]/60 to-[#5ABACD]/60'
        }`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/75 text-sm mb-4">{description}</p>
        <p className={`text-3xl font-black text-transparent bg-clip-text transition-all duration-300 ${
          isHovered
            ? 'bg-linear-to-r from-[#E26537] via-[#32ACCA] to-[#5ABACD]'
            : 'bg-linear-to-r from-[#32ACCA] to-[#E26537]'
        }`}>
          {value}
        </p>
      </div>
    </div>
  );
};

// ============================================
// COMPONENT: Features Section
// ============================================
export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-[#5ABACD]/30 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-[#E26537]/25 to-transparent rounded-full filter blur-3xl opacity-40" />

      {/* Gradient animation styles */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">Why </span>
            <span className="bg-gradient-to-r from-[#00D9FF] via-white to-[#FF6B35] bg-clip-text text-transparent gradient-text">
              El Namousa?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Everything you need for an epic night with friends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-white" />}
            title="Perfect Group"
            description="Ideal for any party size"
            value="2-10 Players"
          />
          <FeatureCard 
            icon={<Clock className="w-8 h-8 text-white" />}
            title="Quick Sessions"
            description="No long commitment needed"
            value="30-60 Mins"
          />
          <FeatureCard 
            icon={<Globe className="w-8 h-8 text-white" />}
            title="Local Pride"
            description="Crafted with Tunisian spirit"
            value="Made in Tunisia"
          />
        </div>
      </div>
    </section>
  );
};
