"use client";

import React, { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal, Sparkles, Filter } from "lucide-react";
import { Project, ProjectCategory } from "@/types";
import { VideoCard } from "./VideoCard";
import { CategoryFilter } from "./CategoryFilter";
import { VideoModal } from "../ui/VideoModal";

interface ProjectGridProps {
  projects: Project[];
  initialCategory?: ProjectCategory;
  showFilter?: boolean;
}

export function ProjectGrid({
  projects,
  initialCategory = "All",
  showFilter = true,
}: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute category counts based on full project list
  const counts: Record<string, number> = useMemo(() => {
    const acc: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
    });
    return acc;
  }, [projects]);

  // Filter projects by category AND search query
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchSubtitle = p.subtitle.toLowerCase().includes(q);
      const matchSummary = p.summary.toLowerCase().includes(q);
      const matchClient = p.client?.toLowerCase().includes(q);
      const matchTools = p.tools.some((t) => t.toLowerCase().includes(q));
      const matchTags = p.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchTitle || matchSubtitle || matchSummary || matchClient || matchTools || matchTags;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="space-y-4">
          {/* Top Bar: Category Tabs & Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={counts}
            />

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-muted" />
              <input
                type="text"
                placeholder="Search by tool, client, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-full bg-dark-900 border border-white/10 text-xs text-white placeholder-neutral-muted focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Active Filter State */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-muted px-1">
            <div className="flex items-center gap-2">
              <span>Showing {filteredProjects.length} of {projects.length} works</span>
              {searchQuery && (
                <span className="px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                  Keyword: &quot;{searchQuery}&quot;
                </span>
              )}
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-brand-cyan hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
      )}

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, idx) => (
          <VideoCard
            key={project.id}
            project={project}
            onOpenModal={(proj) => setSelectedProject(proj)}
            priority={idx < 3}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-24 text-center rounded-3xl border border-white/5 bg-dark-900/40 max-w-lg mx-auto p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-neutral-muted mx-auto flex items-center justify-center">
            <Filter className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">No Matching Projects</h3>
          <p className="text-xs text-neutral-secondary">
            No projects found matching your category and search criteria. Try searching for &quot;Veo&quot;, &quot;Commercial&quot;, &quot;Runway&quot;, or reset filters.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Video Modal Lightbox */}
      <VideoModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
