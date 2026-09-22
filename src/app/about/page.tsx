import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Cpu, Award, Zap, Shield, ArrowUpRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import toolsData from "@/data/tools.json";
import { ToolItem } from "@/types";

export const metadata: Metadata = {
  title: "About Studio & AI Pipeline | LENA Creative Studio",
  description: "Learn about LENA — AI Video Creator, Filmmaker, and Creative Studio pioneering generative commercial visual production.",
};

const FAQS = [
  {
    q: "How does AI video production compare to traditional commercial filming?",
    a: "Traditional commercial production involves expensive physical set rentals, camera crews, actors, travel, and months of post-production. With generative AI video, we achieve broadcast-grade visual fidelity, surreal physics, and fluid camera choreography in days at a fraction of the cost."
  },
  {
    q: "Can you maintain consistency with my actual product bottle or label?",
    a: "Yes! We use ControlNet depth mapping, 3D CAD render passes, and LoRA fine-tuning pipelines to lock in your exact logo, packaging geometry, and label typography while letting AI generate dynamic fluid simulations and environment lighting."
  },
  {
    q: "What rights and licenses do I get with the final videos?",
    a: "You receive 100% full commercial ownership and distribution rights across all broadcast, digital, paid social, and web channels with no ongoing royalties."
  },
  {
    q: "What is the typical project turnaround time?",
    a: "Most single commercial spots or UGC video sets are completed in 3 to 7 business days. Large-scale multi-format campaigns or narrative concept films typically take 10 to 14 days."
  }
];

export default function AboutPage() {
  const tools = toolsData as ToolItem[];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Identity & Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            The Future of Cinema is Generative.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-secondary leading-relaxed">
            LENA is an AI-first visual studio dedicated to bridging the gap between cutting-edge generative video models and world-class commercial storytelling.
          </p>
        </div>

        {/* Bio & Studio Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="LENA Creative Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 inset-x-6">
                <span className="text-xs font-mono uppercase text-brand-cyan">Creative Director</span>
                <h3 className="text-xl font-bold text-white">LENA</h3>
                <p className="text-xs text-neutral-secondary mt-0.5">AI Filmmaker & Creative Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Pushing the Boundaries of Visual Storytelling
            </h2>
            <p className="text-sm sm:text-base text-neutral-secondary leading-relaxed">
              We operate at the bleeding edge of video synthesis. By combining advanced generative models—such as Google Veo, Kling AI, and Runway Gen-3—with classical cinematic cinematography, motion pacing, and sound design, we produce videos that don&apos;t just look futuristic—they evoke genuine emotion.
            </p>
            <p className="text-sm sm:text-base text-neutral-secondary leading-relaxed">
              Whether crafting zero-gravity watch commercials, viral TikTok creator personas, or sci-fi narrative trailers, our focus is always on delivering measurable business impact and unforgettable aesthetics.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold font-mono text-brand-cyan">15+</p>
                <p className="text-xs text-neutral-muted">Commercials Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-brand-amber">4.8x</p>
                <p className="text-xs text-neutral-muted">Average Ad ROAS</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-white">Global</p>
                <p className="text-xs text-neutral-muted">Remote Client Base</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tool Stack Breakdown */}
        <div id="tools" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Generative AI Arsenal
            </h2>
            <p className="text-sm text-neutral-secondary mt-2">
              We don&apos;t rely on a single model. We leverage the specific superpower of each specialized neural engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-muted uppercase tracking-wider block mb-2">
                    {tool.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {tool.name}
                  </h3>
                  <span className="inline-block text-[11px] font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 mb-3">
                    {tool.badge}
                  </span>
                  <p className="text-xs text-neutral-secondary leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-brand-amber text-xs font-mono uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-2"
              >
                <h3 className="text-base font-semibold text-white">
                  {faq.q}
                </h3>
                <p className="text-sm text-neutral-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
