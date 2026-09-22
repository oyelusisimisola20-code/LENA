"use client";

import React from "react";
import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "All", label: "All Work" },
  { id: "AI Ads", label: "AI Commercials" },
  { id: "Product Videos", label: "Product & 3D" },
  { id: "UGC", label: "AI UGC" },
  { id: "Cinematic", label: "Cinematic Films" },
  { id: "Social", label: "Social Media" },
  { id: "Animation", label: "Art & Animation" },
];

interface CategoryFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts?: Record<string, number>;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none no-scrollbar py-2">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = counts ? counts[cat.id] : null;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 border",
              isActive
                ? "bg-white text-dark-950 font-semibold border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                : "bg-dark-900/80 text-neutral-secondary border-white/10 hover:border-white/30 hover:text-white hover:bg-dark-850"
            )}
          >
            <span>{cat.label}</span>
            {count !== undefined && count !== null && (
              <span
                className={cn(
                  "px-1.5 py-0.2 rounded-full text-[10px] font-mono",
                  isActive ? "bg-black/15 text-dark-950" : "bg-white/10 text-neutral-muted"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
