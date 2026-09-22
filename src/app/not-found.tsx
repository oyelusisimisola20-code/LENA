import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-xs font-mono uppercase text-brand-cyan tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/30">
          Error 404 — Latent Void
        </span>
        <h1 className="text-6xl font-black text-white tracking-tighter">
          404
        </h1>
        <p className="text-sm text-neutral-secondary leading-relaxed">
          The requested generative scene could not be synthesized or has moved to an alternate dimension.
        </p>
        <div className="pt-2 flex justify-center">
          <Button
            href="/"
            variant="cyan"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Return to Studio
          </Button>
        </div>
      </div>
    </div>
  );
}
