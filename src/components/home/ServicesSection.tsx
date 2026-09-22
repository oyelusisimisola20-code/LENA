import React from "react";
import Link from "next/link";
import { ArrowUpRight, Film, Megaphone, Box, Users, Clapperboard, Share2, Sparkles } from "lucide-react";
import { Service } from "@/types";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "ai-video-production": <Film className="w-6 h-6 text-brand-cyan" />,
  "ai-advertising": <Megaphone className="w-6 h-6 text-brand-amber" />,
  "ai-product-videos": <Box className="w-6 h-6 text-brand-purple" />,
  "ai-ugc": <Users className="w-6 h-6 text-emerald-400" />,
  "cinematic-ai-films": <Clapperboard className="w-6 h-6 text-brand-crimson" />,
  "social-media-content": <Share2 className="w-6 h-6 text-blue-400" />,
};

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-dark-900/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Impact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-secondary leading-relaxed">
            From viral social hooks to broadcast-quality commercials and sci-fi concept films, our AI generation pipeline delivers production values that used to require a $100k+ camera crew.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-dark-900 border border-white/10 hover:border-white/25 hover:bg-dark-850/90 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-dark-800 border border-white/10 group-hover:border-brand-cyan/40 transition-colors">
                    {SERVICE_ICONS[service.slug] || <Film className="w-6 h-6 text-brand-cyan" />}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-muted">
                    {service.turnaroundTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-amber font-mono mb-4">
                  {service.tagline}
                </p>
                <p className="text-xs text-neutral-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <span className="text-[10px] font-mono text-neutral-muted uppercase tracking-wider block">
                    Core Deliverables
                  </span>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-secondary">
                      <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {service.toolsUsed.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-neutral-muted border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan hover:underline"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-primary hover:text-brand-cyan transition-colors"
          >
            <span>Explore Full Services Breakdown & Deliverables</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
