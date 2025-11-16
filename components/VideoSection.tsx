import React, { useState } from 'react';

// ============================================
// COMPONENT: Video Showcase Section
// ============================================
export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-linear-to-br from-[#32ACCA]/30 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-[#E26537]/25 to-transparent rounded-full filter blur-3xl opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            See El Namousa in Action
          </h2>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto">
            Watch how our game brings friends together for unforgettable moments
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500" />
          <div className="absolute -inset-1 bg-linear-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-500" />

          {/* Video Card */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="aspect-video relative bg-linear-to-br from-[#32ACCA]/20 to-[#E26537]/20 flex items-center justify-center">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-black/40 z-5" />
              
              {/* Local Video Player */}
              <video
                width="100%"
                height="100%"
                controls
                className="relative z-10 w-full h-full object-cover"
                poster="/elnamousa.png"
              >
                <source src="/elnamousaVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-linear-to-r from-[#32ACCA] to-[#5ABACD] bg-clip-text text-transparent">50K+</p>
            <p className="text-white/75 mt-2">Views</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-linear-to-r from-[#5ABACD] to-[#E26537] bg-clip-text text-transparent">4.8★</p>
            <p className="text-white/75 mt-2">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-linear-to-r from-[#E26537] to-[#32ACCA] bg-clip-text text-transparent">5M+</p>
            <p className="text-white/75 mt-2">Total Plays</p>
          </div>
        </div>
      </div>
    </section>
  );
};
