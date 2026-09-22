import React from "react";
import { Sparkles, FileText, Cpu, Layers, Disc3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <FileText className="w-5 h-5 text-brand-cyan" />,
    title: "Brief & Storyboard",
    description: "We align on your creative vision, brand aesthetics, target platform ratios (16:9, 9:16), key messaging hooks, and asset requirements."
  },
  {
    number: "02",
    icon: <Cpu className="w-5 h-5 text-brand-amber" />,
    title: "Generative Generation",
    description: "Using cutting-edge models (Veo, Kling, Runway), we synthesize multi-angle camera movements, physics simulations, and micro lighting."
  },
  {
    number: "03",
    icon: <Disc3 className="w-5 h-5 text-brand-purple" />,
    title: "Audio & Voice Synthesis",
    description: "We craft broadcast-quality voiceovers, hyper-realistic Foley sound effects, and spatial music soundscapes (ElevenLabs, Fish Audio)."
  },
  {
    number: "04",
    icon: <Layers className="w-5 h-5 text-emerald-400" />,
    title: "VFX & 4K Mastering",
    description: "Final color mastering, seamless frame transitions, on-screen typography, and export in broadcast-ready 4K master files."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow & Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Concept to Master in Days
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-secondary">
            A battle-tested production pipeline combining generative velocity with cinematic discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-dark-800 border border-white/5">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-white/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[10px] font-mono text-neutral-muted uppercase">
                  Step {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

