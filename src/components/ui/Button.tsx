import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "amber";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, icon, iconRight, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none disabled:opacity-50 disabled:pointer-events-none group";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary: "bg-white text-dark-950 hover:bg-neutral-primary hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95",
      secondary: "bg-dark-800 text-neutral-primary border border-white/10 hover:border-white/30 hover:bg-dark-700 active:scale-95",
      outline: "bg-transparent text-neutral-primary border border-white/20 hover:border-brand-cyan hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] active:scale-95",
      ghost: "bg-transparent text-neutral-secondary hover:text-white hover:bg-white/5 active:scale-95",
      cyan: "bg-brand-cyan text-dark-950 font-semibold hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95",
      amber: "bg-brand-amber text-dark-950 font-semibold hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] active:scale-95",
    };

    const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {icon && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
          <span>{children}</span>
          {iconRight && <span className="transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

