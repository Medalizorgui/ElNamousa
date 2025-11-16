"use client";
import React from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { VideoSection } from '@/components/VideoSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CTAFooter } from '@/components/CTAFooter';
import { Footer } from '@/components/Footer';

// ============================================
// MAIN: Complete Landing Page
// ============================================
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <VideoSection />
        <HowItWorksSection />
        <CTAFooter />
        <Footer />
      </div>
    </div>
  );
}
