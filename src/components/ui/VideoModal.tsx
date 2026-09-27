"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && isOpen) {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isVertical = project.aspectRatio === "9:16";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-950/90 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={cn(
        "relative z-10 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-dark-900 border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col max-h-[94vh] transition-all",
        isVertical ? "max-w-md sm:max-w-lg" : "max-w-5xl"
      )}>
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-dark-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs rounded-full bg-brand-cyan/10 text-brand-cyan font-mono border border-brand-cyan/30 whitespace-nowrap">
              {project.category}
            </span>
            <h3 className="text-sm sm:text-lg font-semibold text-neutral-primary truncate">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full text-neutral-secondary hover:text-white hover:bg-white/10 transition-colors ml-2 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className={cn(
          "relative w-full bg-black flex items-center justify-center group overflow-hidden",
          isVertical ? "aspect-[9/16] max-h-[55vh] sm:max-h-[75vh]" : "aspect-video max-h-[55vh] sm:max-h-[70vh]"
        )}>
          <video
            ref={videoRef}
            src={project.fullVideo}
            poster={project.thumbnail}
            autoPlay
            playsInline
            loop
            className="w-full h-full object-contain"
            onClick={togglePlay}
          />

          {/* Custom Overlay Controls (Visible on mobile, hover on desktop) */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/20 hover:bg-brand-cyan hover:text-black text-white transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[11px] sm:text-xs text-neutral-secondary font-mono">
                {project.duration}
              </span>
            </div>

            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Action Bar */}
        <div className="p-4 sm:p-6 bg-dark-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/5 overflow-y-auto">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-neutral-secondary max-w-xl line-clamp-2">
              {project.summary}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-white/5 text-neutral-secondary border border-white/5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
            <Link
              href={`/portfolio/${project.id}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all w-1/2 sm:w-auto"
            >
              Case Study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-brand-cyan text-dark-950 hover:bg-cyan-300 transition-all w-1/2 sm:w-auto shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Request Similar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

