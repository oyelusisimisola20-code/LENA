import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hoverEffect?: boolean;
}

export function GlassCard({ className, glow = false, hoverEffect = true, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        "bg-dark-900/60 backdrop-blur-xl border border-white/10",
        hoverEffect && "hover:border-white/25 hover:bg-dark-850/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
        glow && "border-brand-cyan/30 shadow-[0_0_25px_rgba(0,240,255,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

