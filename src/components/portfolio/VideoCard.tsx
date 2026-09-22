"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
  priority?: boolean;
}

export function VideoCard({ project, onOpenModal, priority = false }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented (browser restriction or low power)
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isVertical = project.aspectRatio === "9:16";

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 transition-all duration-500",
        "hover:border-brand-cyan/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1.5 flex flex-col justify-between"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Box */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-dark-950 cursor-pointer",
          isVertical ? "aspect-[9/14]" : "aspect-video"
        )}
        onClick={() => onOpenModal && onOpenModal(project)}
      >
        {/* Poster Image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-all duration-700",
            isHovered && isVideoLoaded ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
          priority={priority}
        />

        {/* Hover Video Preview */}
        <video
          ref={videoRef}
          src={project.previewVideo}
          muted
          playsInline
          loop
          preload="none"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full bg-dark-950/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
            {project.category}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/70 backdrop-blur-md text-neutral-secondary border border-white/10">
            {project.duration}
          </span>
        </div>

        {/* Central Play Button Overlay (Visible on hover) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center z-10 transition-all duration-300",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <div className="w-13 h-13 p-3.5 rounded-full bg-brand-cyan text-dark-950 shadow-[0_0_25px_rgba(0,240,255,0.7)] flex items-center justify-center transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Bottom subtle gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent pointer-events-none" />
      </div>

      {/* Content & Metadata Area */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-dark-900/90">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base text-neutral-primary group-hover:text-brand-cyan transition-colors line-clamp-1">
              {project.title}
            </h3>
            <Link
              href={`/portfolio/${project.id}`}
              className="p-1 rounded-full text-neutral-muted hover:text-white transition-colors"
              title="View Case Study"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-neutral-secondary mt-1 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Bottom Tools Badges */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-hidden">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-dark-800 text-neutral-secondary border border-white/5 truncate"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-[10px] font-mono text-neutral-muted">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenModal && onOpenModal(project)}
            className="text-[11px] font-mono text-brand-cyan hover:underline flex items-center gap-1"
          >
            Watch Reel
          </button>
        </div>
      </div>
    </div>
  );
}
