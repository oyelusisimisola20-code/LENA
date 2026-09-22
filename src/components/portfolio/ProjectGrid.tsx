"use client";

import React, { useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute category counts
  const counts: Record<string, number> = {
    All: projects.length,
  };
  projects.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />
          <span className="text-xs font-mono text-neutral-muted">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>
      )}

      {/* Grid */}
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

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center rounded-2xl border border-white/5 bg-dark-900/40">
          <p className="text-neutral-secondary text-sm">
            No projects found in this category.
          </p>
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

