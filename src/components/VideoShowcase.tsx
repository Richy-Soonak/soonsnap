"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative px-5 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
          See it in action
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
          Watch This Page Become a Video
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#999]">
          That&apos;s right — this very landing page can be turned into a stunning
          animated video with one click. Meta, right?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-12 max-w-4xl"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
          {/* Pulsing glow */}
          <div className="absolute inset-0 animate-glow rounded-2xl" />

          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 36 36"
              fill="none"
              className="animate-shimmer"
            >
              <rect x="0" y="12" width="24" height="24" rx="4" fill="#2A2B2D" />
              <rect x="3" y="6" width="24" height="24" rx="4" fill="#43C4CC" />
              <rect x="6" y="0" width="24" height="24" rx="4" fill="#FDCA57" />
              <text
                x="18"
                y="17"
                textAnchor="middle"
                fill="#0F0F1A"
                fontSize="14"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                S
              </text>
            </svg>
            <p className="max-w-sm text-sm text-[#999]">
              Video coming soon — this landing page rendered by SoonSnap
            </p>

            {/* Play button */}
            <button className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-void shadow-lg shadow-gold/25 transition-transform hover:scale-110">
              <svg
                className="ml-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#555]">
          Made with SoonSnap
        </p>
      </motion.div>
    </section>
  );
}
