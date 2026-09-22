import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mail, Instagram, Linkedin, MessageSquare } from "lucide-react";

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
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@lenacreative.studio"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                aria-label="Email"
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
            <div className="space-y-3 text-sm">
              <p className="text-xs text-neutral-secondary">
                Ready to produce your next campaign?
              </p>
              <a
                href="mailto:contact@lenacreative.studio"
                className="block text-brand-cyan font-mono text-xs hover:underline"
              >
                contact@lenacreative.studio
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all mt-2"
              >
                <span>Request Project Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-muted">
          <p>© {new Date().getFullYear()} LENA — AI Creative Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Generative Precision</span>
            <span>•</span>
            <span>Worldwide Remote Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
