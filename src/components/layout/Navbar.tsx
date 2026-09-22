"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-dark-800 border border-white/15 group-hover:border-brand-cyan/60 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <span className="font-bold text-base tracking-tighter text-white group-hover:text-brand-cyan transition-colors">
              L
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-widest text-white leading-none group-hover:text-brand-cyan transition-colors">
              LENA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-neutral-muted uppercase leading-tight mt-0.5">
              AI Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full p-1.5 bg-dark-900/70 border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-dark-950 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] font-semibold"
                    : "text-neutral-secondary hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Q4</span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-brand-cyan text-dark-950 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] active:scale-95"
          >
            <span>Work With Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-dark-850 border border-white/10 text-neutral-secondary hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-dark-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Select Projects</span>
          </div>

          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white/10 text-brand-cyan border border-brand-cyan/20"
                      : "text-neutral-secondary hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-brand-cyan text-dark-950 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

