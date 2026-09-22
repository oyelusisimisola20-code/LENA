import React, { Suspense } from "react";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { CTASection } from "@/components/home/CTASection";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio & AI Video Works | LENA Creative Studio",
  description: "Explore our complete showcase of AI commercial ads, 3D product visuals, AI UGC campaigns, sci-fi short films, and animated generative reels.",
};

export default function PortfolioPage() {
  const projects = projectsData as Project[];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Archive & Selected Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            AI Video Portfolio
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-secondary leading-relaxed">
            A comprehensive catalog of high-concept AI commercial productions, fluid simulation product reveals, viral vertical UGC campaigns, and narrative cinematic films.
          </p>
        </div>

        {/* Portfolio Filter & Grid System */}
        <Suspense fallback={<div className="py-20 text-center text-neutral-muted">Loading projects...</div>}>
          <ProjectGrid projects={projects} initialCategory="All" showFilter={true} />
        </Suspense>
      </div>

      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
}

