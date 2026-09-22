import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "amber" | "outline" | "pulse";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase";

  const variantStyles = {
    default: "bg-white/10 text-neutral-primary border border-white/10 backdrop-blur-md",
    cyan: "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]",
    amber: "bg-brand-amber/10 text-brand-amber border border-brand-amber/30",
    outline: "bg-transparent text-neutral-secondary border border-white/15",
    pulse: "bg-brand-crimson/15 text-brand-crimson border border-brand-crimson/30",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {variant === "pulse" && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-ping" />
      )}
      {children}
    </span>
  );
}

