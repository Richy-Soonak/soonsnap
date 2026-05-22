"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BEFORE = "make it faster and more exciting";
const AFTER =
  "Increase the pacing with quick 0.3s cuts, add dynamic zoom transitions between sections, layer a driving percussion track at 128 BPM, and use kinetic typography with bounce easing on key headlines.";

export default function EnhancerDemo() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setEnhanced((v) => !v), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[640px] text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Write Rough. Get Precise.
        </h2>
        <p className="mt-3 text-[#999]">
          Our AI turns your rough directions into cinematic, production-ready prompts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-12 max-w-[640px]"
      >
        {/* Before */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#555]">
            YOUR EDIT
          </p>
          <p className="text-sm leading-relaxed text-[#999]">{BEFORE}</p>
          <button className="mt-4 rounded-lg border border-border bg-void px-4 py-2 text-xs text-[#555]">
            ✨ Enhance
          </button>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-4">
          <svg
            className="h-6 w-6 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* After */}
        <div
          className={`rounded-2xl border p-6 transition-colors ${
            enhanced
              ? "border-gold/40 bg-card"
              : "border-border bg-card"
          }`}
        >
          <p
            className={`mb-2 text-[10px] font-semibold uppercase tracking-widest transition-colors ${
              enhanced ? "text-gold" : "text-[#555]"
            }`}
          >
            ENHANCED
          </p>
          <div
            className={`border-l-2 pl-4 transition-colors ${
              enhanced ? "border-gold" : "border-border"
            }`}
          >
            <p
              className={`text-sm leading-relaxed transition-colors ${
                enhanced ? "text-[#F8F9FC]" : "text-[#999]"
              }`}
            >
              {AFTER}
            </p>
          </div>
          <button
            className={`mt-4 rounded-lg px-4 py-2 text-xs font-medium transition-colors ${
              enhanced
                ? "bg-gold/15 text-gold"
                : "border border-border bg-void text-[#555]"
            }`}
          >
            ✨ {enhanced ? "Enhanced" : "Enhance"}
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-[#555]">
          Free on every tier · No credit needed · Instant
        </p>
      </motion.div>
    </section>
  );
}
