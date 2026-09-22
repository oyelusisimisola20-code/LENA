import React from "react";
import Image from "next/image";
import { Star, Sparkles, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-dark-900/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-amber text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Visionary Brands
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-secondary">
            Here is what marketing directors, agency founders, and brand executives say about working with LENA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-dark-900 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-amber fill-brand-amber" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/15" />
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-neutral-primary leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  {item.avatar && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15">
                      <Image
                        src={item.avatar}
                        alt={item.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-neutral-muted">
                      {item.role}, <span className="text-neutral-secondary">{item.company}</span>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-dark-800 text-brand-cyan border border-brand-cyan/20">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

