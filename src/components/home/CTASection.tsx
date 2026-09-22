import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, Calendar } from "lucide-react";
import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 border border-brand-cyan/20 shadow-[0_0_50px_rgba(0,240,255,0.08)] text-center relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Redefine Your Visuals?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s Create Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-amber">
              Extraordinary Together.
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-neutral-secondary max-w-xl mx-auto leading-relaxed">
            Have a brand campaign, commercial spot, or creative film in mind? Let&apos;s turn your vision into an unforgettable visual experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="cyan"
              size="lg"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Request a Project Quote
            </Button>

            <Button
              href="https://wa.me/"
              variant="secondary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Direct Chat
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-muted">
            <span>✓ Fixed Scope Estimates</span>
            <span>•</span>
            <span>✓ 4K Master Deliverables</span>
            <span>•</span>
            <span>✓ Full Commercial IP Rights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
