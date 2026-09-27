import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles, Clock, Calendar, Briefcase, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/portfolio/VideoCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const projects = projectsData as Project[];
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.id === params.id || p.slug === params.id);

  if (!project) {
    return {
      title: "Project Not Found | LENA Creative Studio",
    };
  }

  return {
    title: `${project.title} — AI Video Case Study | LENA`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | LENA AI Creative Studio`,
      description: project.summary,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.id === params.id || p.slug === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.featured))
    .slice(0, 3);

  const isVertical = project.aspectRatio === "9:16";

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-secondary hover:text-brand-cyan transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Works</span>
        </Link>

        {/* Project Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                {project.category}
              </span>
              {project.client && (
                <span className="text-xs font-mono text-neutral-muted">
                  Client: {project.client}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-brand-amber font-mono">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="cyan"
              size="md"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Inquire About Similar
            </Button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="mb-12 sm:mb-16">
          <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${isVertical ? "max-w-md mx-auto aspect-[9/16]" : "aspect-video"}`}>
            <video
              src={project.fullVideo || project.previewVideo}
              poster={project.thumbnail}
              controls
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-neutral-secondary text-base leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Generative AI Pipeline & Execution</h2>
              <p className="text-neutral-secondary text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Performance Metrics (if available) */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Campaign Results & Impact</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-dark-900 border border-white/10"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-cyan">
                        {metric.value}
                      </p>
                      <p className="text-xs font-mono text-neutral-muted mt-1 uppercase">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Storyboard Prompts (if available) */}
            {project.storyboard && project.storyboard.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Prompt & Shot Architecture</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.storyboard.map((shot, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-dark-900 border border-white/10 space-y-3">
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={shot.image}
                          alt={shot.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{shot.title}</h4>
                      <p className="text-xs font-mono text-neutral-secondary bg-dark-800 p-2.5 rounded-lg border border-white/5">
                        &quot;{shot.promptNote}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Tech Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-primary border-b border-white/10 pb-3">
                Technical Specifications
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Duration
                  </span>
                  <span className="text-white font-semibold">{project.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-muted flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Year
                  </span>
                  <span className="text-white font-semibold">{project.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-muted flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Aspect Ratio
                  </span>
                  <span className="text-white font-semibold">{project.aspectRatio}</span>
                </div>

                {project.client && (
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-muted">Client / Brand</span>
                    <span className="text-white font-semibold">{project.client}</span>
                  </div>
                )}
              </div>

              {/* Tools Used */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-mono text-neutral-muted uppercase mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> AI Tool Arsenal
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-dark-800 text-brand-cyan border border-brand-cyan/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-mono text-neutral-muted uppercase mb-3">
                  Project Tags
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-neutral-secondary border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-cyan/15 via-dark-900 to-dark-900 border border-brand-cyan/30 text-center space-y-4">
              <h4 className="text-lg font-bold text-white">Need a Video in this Style?</h4>
              <p className="text-xs text-neutral-secondary leading-relaxed">
                We can adapt this exact generative lighting and physics pipeline for your product or brand.
              </p>
              <Button
                href="/contact"
                variant="cyan"
                size="md"
                className="w-full shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Related Projects</h3>
              <Link href="/portfolio" className="text-xs font-mono text-brand-cyan hover:underline">
                View All Works →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <VideoCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

