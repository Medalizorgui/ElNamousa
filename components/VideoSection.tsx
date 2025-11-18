import React, { useState, useRef, useEffect } from 'react';

// ============================================
// COMPONENT: Video Showcase Section with Custom Player
// ============================================
export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Load video metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying && showControls) {
      timeout = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, showControls]);

  return (
    <section id='video' className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#32ACCA]/30 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#E26537]/25 to-transparent rounded-full filter blur-3xl opacity-40" />

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
          <div className="absolute -inset-1 bg-gradient-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-[#32ACCA] via-[#5ABACD] to-[#E26537] rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-500" />

          {/* Video Card */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div 
              className="aspect-video relative bg-gradient-to-br from-[#32ACCA]/20 to-[#E26537]/20 flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setShowControls(true)}
              onMouseMove={() => setShowControls(true)}
              onClick={togglePlay}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/40 z-5" />
              
              {/* Video Element */}
              <video
                ref={videoRef}
                className="relative z-10 w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={(e) => e.stopPropagation()}
              >
                <source src="/elnamousaVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Shows when not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 transition-opacity duration-300">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#32ACCA] to-[#5ABACD] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group-hover:shadow-[#32ACCA]/50"
                  >
                    <svg 
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Custom Controls - Shows on hover or when playing */}
              <div 
                className={`absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 transition-all duration-300 ${
                  showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bar */}
                <div 
                  ref={progressBarRef}
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-3 group/progress relative overflow-hidden"
                  onClick={handleProgressClick}
                >
                  {/* Progress Fill */}
                  <div 
                    className="h-full bg-gradient-to-r from-[#32ACCA] to-[#5ABACD] rounded-full relative transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Progress Handle */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-4">
                  {/* Left Controls */}
                  <div className="flex items-center gap-3">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Volume Control */}
                    <div className="flex items-center gap-2 group/volume">
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                      >
                        {isMuted || volume === 0 ? (
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-0 group-hover/volume:w-20 transition-all duration-300 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      />
                    </div>

                    {/* Time Display */}
                    <div className="text-white text-sm font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-2">
                    {/* Fullscreen Button */}
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          if (document.fullscreenElement) {
                            document.exitFullscreen();
                          } else {
                            videoRef.current.requestFullscreen();
                          }
                        }
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-gradient-to-r from-[#32ACCA] to-[#5ABACD] bg-clip-text text-transparent">400K+</p>
            <p className="text-white mt-2">Views</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-gradient-to-r from-[#32ACCA] to-[#5ABACD] bg-clip-text text-transparent">4.8★</p>
            <p className="text-white mt-2">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <p className="text-3xl font-black bg-gradient-to-r from-[#32ACCA] to-[#5ABACD] bg-clip-text text-transparent">5K+</p>
            <p className="text-white mt-2">Total Plays</p>
          </div>
        </div>
      </div>
    </section>
  );
};