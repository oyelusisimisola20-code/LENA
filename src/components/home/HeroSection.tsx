"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/Button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Cinematic Video Loop */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/previews/project-001.mp4"
          poster="/videos/gig_video-Cover.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/80" />
        <div className="absolute inset-0 bg-cyber-glow opacity-80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* Sound Toggle Floating Control */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-dark-900/80 border border-white/10 backdrop-blur-md text-neutral-secondary hover:text-white hover:border-white/30 text-[11px] sm:text-xs font-mono transition-all shadow-lg"
        title="Toggle Ambient Audio"
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-cyan" />}
        <span>{isMuted ? "Muted" : "Sound On"}</span>
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Studio Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 rounded-full bg-dark-900/90 border border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] mb-6 backdrop-blur-md max-w-full">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-cyan">
            Next-Gen AI Video Production & Creative Studio
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] max-w-4xl">
          Visuals That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-amber">
            Defy Reality.
          </span>
        </h1>

        {/* Subtitle / Positioning */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-secondary max-w-2xl font-normal leading-relaxed">
          Crafting hyper-realistic AI commercials, cinematic brand films, and high-converting visual experiences for visionary brands and creators.
        </p>

        {/* Direct Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="/portfolio"
            variant="cyan"
            size="lg"
            iconRight={<ArrowUpRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.35)]"
          >
            Explore Portfolio
          </Button>

          <Button
            href="https://www.fiverr.com/lena_drawux"
            target="_blank"
            variant="secondary"
            size="lg"
            iconRight={<ArrowUpRight className="w-4 h-4 text-emerald-400" />}
            className="w-full sm:w-auto border-emerald-500/30 hover:border-emerald-500 text-emerald-300 hover:bg-emerald-500/10"
          >
            Hire on Fiverr
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Work With Me
          </Button>
        </div>

        {/* Metrics / Social Proof Ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-8 w-full max-w-3xl">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-white">15M+</p>
            <p className="text-[11px] font-mono text-neutral-muted uppercase tracking-wider mt-1">
              Campaign Views
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-brand-cyan">4.8x</p>
            <p className="text-[11px] font-mono text-neutral-muted uppercase tracking-wider mt-1">
              Average Ad ROAS
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-brand-amber">&lt; 5 Days</p>
            <p className="text-[11px] font-mono text-neutral-muted uppercase tracking-wider mt-1">
              Rapid Turnaround
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-white">100%</p>
            <p className="text-[11px] font-mono text-neutral-muted uppercase tracking-wider mt-1">
              Generative AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

