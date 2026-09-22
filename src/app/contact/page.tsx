import React from "react";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | LENA AI Creative Studio",
  description: "Request a custom AI video project quote, book an intro discovery call, or send an inquiry to LENA AI Creative Studio.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Start Your AI Video Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-secondary leading-relaxed">
            Tell us about your campaign goals, target deliverables, or custom concept. We typically respond with a creative proposal and timeline within 24 hours.
          </p>
        </div>

        {/* Contact Form & Channels */}
        <ContactForm />
      </div>
    </div>
  );
}
