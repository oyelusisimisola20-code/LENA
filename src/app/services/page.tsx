import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowUpRight, CheckCircle2, Clock, Cpu, Film } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import servicesData from "@/data/services.json";
import { Service } from "@/types";

export const metadata: Metadata = {
  title: "Services & Capabilities | LENA AI Creative Studio",
  description: "AI Video Production, Commercial Advertising, 3D Product Renders, AI UGC, Sci-Fi Cinematic Films, and Social Video Packs.",
};

export default function ServicesPage() {
  const services = servicesData as Service[];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Generative Video Production Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-secondary leading-relaxed">
            We partner with ambitious brands, creative agencies, and founders to produce cutting-edge AI video content that commands attention and drives undeniable conversion.
          </p>
        </div>

        {/* Detailed Service List */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 md:p-12 rounded-3xl bg-dark-900 border border-white/10 hover:border-white/20 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden"
            >
              {/* Left Column: Overview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                    Service 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-neutral-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {service.turnaroundTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {service.title}
                </h2>
                <p className="text-sm font-mono text-brand-amber">
                  {service.tagline}
                </p>
                <p className="text-sm text-neutral-secondary leading-relaxed pt-2">
                  {service.description}
                </p>

                {/* AI Tools Used */}
                <div className="pt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-neutral-muted flex items-center gap-1 mr-1">
                    <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> Tools:
                  </span>
                  {service.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-dark-800 text-neutral-secondary border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href="/contact"
                    variant="cyan"
                    size="md"
                    iconRight={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Inquire About {service.title}
                  </Button>
                </div>
              </div>

              {/* Right Column: Deliverables & Use Cases */}
              <div className="lg:col-span-6 bg-dark-850 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-primary mb-3">
                    What You Receive (Deliverables)
                  </h3>
                  <div className="space-y-2.5">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-primary mb-3">
                    Ideal Applications & Use Cases
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.useCases.map((useCase, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-dark-900 border border-white/5 text-xs text-neutral-secondary">
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
}
