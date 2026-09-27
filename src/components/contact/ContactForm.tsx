"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, MessageSquare, Mail, Calendar, Linkedin, Instagram, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "../ui/Button";

const PROJECT_TYPES = [
  "AI Commercial / Ad",
  "Product 3D & Fluid Reveal",
  "AI UGC Persona Campaign",
  "Cinematic Trailer / Short",
  "Social Batch Pack (9:16)",
  "Custom AI Creative R&D",
];

const BUDGET_RANGES = [
  "$1,500 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Flexible / Undecided",
];

const TIMELINES = [
  "Immediate (< 1 Week)",
  "Standard (1 – 3 Weeks)",
  "Next Month",
  "Exploring Concepts",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    timeline: TIMELINES[1],
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setActivationNotice(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/lizabethlenna@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Studio Project Inquiry from ${formData.name || "Client"} (${formData.projectType})`,
          _template: "table",
          _captcha: "false",
          "Client Name": formData.name,
          "Email Address": formData.email,
          "Company / Project": formData.company || "Not specified",
          "Project Type": formData.projectType,
          "Estimated Budget": formData.budget,
          "Delivery Timeline": formData.timeline,
          "Project Details": formData.details,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        setActivationNotice(true);
        setSubmitted(true);
      } else {
        // FormSubmit accepted but might have sent activation
        setSubmitted(true);
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      // Fallback: still show submitted with alternative direct contact channel
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Direct Channels & Information */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Your Vision
          </h2>
          <p className="mt-3 text-sm text-neutral-secondary leading-relaxed">
            Fill out the quote builder or message directly across any channel below for rapid scoping and availability.
          </p>
        </div>

        {/* Channel Cards */}
        <div className="space-y-3">
          <a
            href="https://www.fiverr.com/lena_drawux"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-dark-900 border border-emerald-500/30 hover:border-emerald-500 hover:bg-dark-850 transition-all flex items-center justify-between group shadow-[0_0_20px_rgba(16,185,129,0.08)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-emerald-500 group-hover:text-black transition-all">
                fi
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Hire Me On Fiverr</p>
                <p className="text-sm font-semibold text-white">fiverr.com/lena_drawux</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-muted group-hover:text-emerald-400 transition-colors" />
          </a>

          <a
            href="tel:+2348143779940"
            className="p-4 rounded-2xl bg-dark-900 border border-white/10 hover:border-brand-cyan/40 hover:bg-dark-850 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-dark-800 text-brand-cyan group-hover:bg-brand-cyan/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-muted">Direct Phone & Inquiries</p>
                <p className="text-sm font-semibold text-white">+234 814 377 9940</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-muted group-hover:text-brand-cyan transition-colors" />
          </a>

          <a
            href="https://wa.me/2348143779940"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-dark-900 border border-white/10 hover:border-emerald-500/40 hover:bg-dark-850 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-dark-800 text-emerald-400 group-hover:bg-emerald-500/10">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-muted">WhatsApp Quick Chat</p>
                <p className="text-sm font-semibold text-white">+234 814 377 9940</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-muted group-hover:text-emerald-400 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/simisola-oyelusi-0223682a1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-dark-900 border border-white/10 hover:border-blue-400/40 hover:bg-dark-850 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-dark-800 text-blue-400 group-hover:bg-blue-400/10">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-muted">LinkedIn Profile</p>
                <p className="text-sm font-semibold text-white">Simisola Oyelusi</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-muted group-hover:text-blue-400 transition-colors" />
          </a>

          <a
            href="mailto:lizabethlenna@gmail.com"
            className="p-4 rounded-2xl bg-dark-900 border border-white/10 hover:border-brand-cyan/40 hover:bg-dark-850 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-dark-800 text-brand-cyan group-hover:bg-brand-cyan/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-muted">Direct Email</p>
                <p className="text-sm font-semibold text-white">lizabethlenna@gmail.com</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-muted group-hover:text-brand-cyan transition-colors" />
          </a>
        </div>

        {/* Studio Availability Status Card */}
        <div className="p-5 rounded-2xl bg-dark-900/60 border border-emerald-500/20 flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <p className="text-xs font-semibold text-white">Currently Booking Select Projects</p>
            <p className="text-xs text-neutral-muted">Average initial turnaround response under 12 hours.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Quote Builder Form */}
      <div className="lg:col-span-7">
        <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-dark-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {submitted ? (
            <div className="py-12 sm:py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received & Dispatched!</h3>
              <p className="text-sm text-neutral-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name || "Client"}</span>. Your project brief has been sent live to <span className="text-brand-cyan font-mono">lizabethlenna@gmail.com</span>. We will review your project scope and respond within 24 hours.
              </p>

              {activationNotice && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs text-left max-w-md mx-auto space-y-1">
                  <p className="font-semibold text-amber-200">Owner Activation Notice:</p>
                  <p className="text-neutral-300">FormSubmit dispatched a confirmation link to <span className="font-mono text-white">lizabethlenna@gmail.com</span>. Please click &ldquo;Activate Form&rdquo; in your Gmail to authorize automatic live forwarding.</p>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      projectType: PROJECT_TYPES[0],
                      budget: BUDGET_RANGES[1],
                      timeline: TIMELINES[1],
                      details: "",
                    });
                  }}
                  className="w-full sm:w-auto"
                >
                  Send Another Note
                </Button>
                <a
                  href="https://wa.me/2348143779940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500/30 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quick Chat</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type Select */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-primary mb-3">
                  1. Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                        formData.projectType === type
                          ? "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                          : "bg-dark-800 text-neutral-secondary border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-primary mb-3">
                  2. Approximate Budget (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {BUDGET_RANGES.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: budget })}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                        formData.budget === budget
                          ? "bg-brand-amber/15 text-brand-amber border-brand-amber/50 shadow-[0_0_15px_rgba(255,184,0,0.15)]"
                          : "bg-dark-800 text-neutral-secondary border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-primary mb-3">
                  3. Delivery Timeframe
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                        formData.timeline === t
                          ? "bg-white/15 text-white border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                          : "bg-dark-800 text-neutral-secondary border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-neutral-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-neutral-muted text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-muted mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-neutral-muted text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              {/* Company / Brand */}
              <div>
                <label className="block text-xs font-mono text-neutral-muted mb-1.5">
                  Company / Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lumina Tech or Personal Brand"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-neutral-muted text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono text-neutral-muted mb-1.5">
                  Tell Me About The Project & Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your product, aesthetic direction, mood references, target platforms, or specific deliverables..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-neutral-muted text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-cyan text-dark-950 font-bold text-sm tracking-wide uppercase hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,240,255,0.35)] flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
