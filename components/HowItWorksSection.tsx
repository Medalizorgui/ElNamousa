import React from 'react';

// ============================================
// COMPONENT: Step Card
// ============================================
interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const StepCard: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative group">
      {/* Step Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          number === 1 
            ? 'bg-linear-to-br from-[#32ACCA] to-[#5ABACD]'
            : number === 2
            ? 'bg-linear-to-br from-[#32ACCA] to-[#5ABACD]'
            : number === 3
            ? 'bg-linear-to-br from-[#32ACCA] to-[#5ABACD]'
            : 'bg-linear-to-br from-[#32ACCA] to-[#5ABACD]'
        }`}>
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

// ============================================
// COMPONENT: How It Works Section
// ============================================
export const HowItWorksSection = () => {
  return (
    <section id="how" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-linear-to-b from-[#32ACCA]/25 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-linear-to-t from-[#E26537]/25 to-transparent rounded-full filter blur-3xl opacity-40" />

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

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#00D9FF] via-white to-[#FF6B35] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <StepCard 
            number={1}
            icon="📦"
            title="Unbox"
            description="Get your board set and place your pawn "
          />
          <StepCard 
            number={2}
            icon="🎲"
            title="Play"
            description="Roll the dice and complete hilarious challenges"
          />
          <StepCard 
            number={3}
            icon="🎉"
            title="Celebrate"
            description="Create epic memories with your friends"
          />
          <StepCard 
            number={4}
            icon="🏆"
            title="Repeat"
            description="Every game night is a new adventure"
          />
        </div>
      </div>
    </section>
  );
};
