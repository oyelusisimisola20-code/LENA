import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mail, Instagram, Linkedin, MessageSquare, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-cyan/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-800 border border-white/15">
                <span className="font-bold text-base text-brand-cyan">L</span>
              </div>
              <span className="font-bold text-xl tracking-widest text-white">LENA</span>
            </Link>
            <p className="text-sm text-neutral-secondary max-w-sm leading-relaxed">
              Pioneering the intersection of cinema and generative AI. We engineer high-impact commercials, hyper-real product simulations, and narrative visual worlds for forward-thinking brands.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://www.fiverr.com/lena_drawux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-dark-900 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-colors font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                aria-label="Fiverr Profile"
                title="Hire Me on Fiverr"
              >
                <span>fi</span>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Fiverr</span>
              </a>
              <a
                href="tel:+2348143779940"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="Call +234 814 377 9940"
                title="+234 814 377 9940"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2348143779940"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="WhatsApp"
                title="Chat on WhatsApp (+234 814 377 9940)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/simisola-oyelusi-0223682a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-blue-400 hover:border-blue-400/40 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn (Simisola Oyelusi)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:lizabethlenna@gmail.com"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="Email"
                title="lizabethlenna@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-primary mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio?category=AI+Ads" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  AI Commercials
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Product+Videos" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  3D & Product Renders
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=UGC" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  AI UGC Campaigns
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Cinematic" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  Cinematic Trailers
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Social" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  Social Velocity Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Studio */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-primary mb-4">
              Studio & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  All Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  Studio Ethos & Bio
                </Link>
              </li>
              <li>
                <Link href="/about#tools" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  AI Tool Pipeline
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-secondary hover:text-brand-cyan transition-colors">
                  Quote Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-primary mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="tel:+2348143779940"
                className="flex items-center gap-2 text-neutral-secondary hover:text-brand-cyan font-mono text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>+234 814 377 9940</span>
              </a>
              <a
                href="https://wa.me/2348143779940"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-secondary hover:text-emerald-400 font-mono text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="https://www.fiverr.com/lena_drawux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-xs transition-colors font-medium"
              >
                <span className="font-bold text-[10px] px-1 rounded bg-emerald-500/20 border border-emerald-500/30">fi</span>
                <span>Hire on Fiverr</span>
              </a>
              <a
                href="https://www.linkedin.com/in/simisola-oyelusi-0223682a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-secondary hover:text-blue-400 font-mono text-xs transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:lizabethlenna@gmail.com"
                className="block text-brand-cyan font-mono text-xs hover:underline pt-1"
              >
                lizabethlenna@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} LENA — AI Creative Studio. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>Built with Generative Precision</span>
            <span className="hidden sm:inline">•</span>
            <span>Worldwide Remote Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

