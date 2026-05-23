"use client";

import { motion } from "framer-motion";

function HeroLogo() {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-[0_0_24px_rgba(253,202,87,0.35)]"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      whileHover={{ animationPlayState: "paused" }}
      style={{ animationDuration: "20s" }}
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
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center px-5 pt-20 text-center md:min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <HeroLogo />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[56px]"
      >
        Turn Any Website Into a Video
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-5 max-w-xl text-lg text-[#999]"
      >
        Paste a URL. Pick a style. Get a polished, animated promo video in
        minutes. No design skills needed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative mt-10 w-full max-w-[580px]"
      >
        <div className="flex h-14 flex-col items-stretch gap-2 rounded-2xl border border-border bg-card px-4 py-3 focus-within:border-gold/50 focus-within:animate-glow sm:h-14 sm:flex-row sm:gap-0 sm:py-0">
          {/* Globe icon */}
          <svg
            className="mr-3 hidden h-5 w-5 shrink-0 text-[#999] sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 014 9 14.5 14.5 0 01-4 9 14.5 14.5 0 01-4-9 14.5 14.5 0 014-9z"
            />
          </svg>
          <input
            type="url"
            placeholder="https://your-website.com"
            className="flex-1 bg-transparent text-sm text-[#F8F9FC] outline-none placeholder:text-[#555]"
          />
          <button className="w-full rounded-xl bg-gold px-5 py-2 text-sm font-semibold text-void transition-colors hover:bg-gold/90 sm:ml-2 sm:w-auto sm:shrink-0">
            Snap it →
          </button>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-5 text-sm text-[#999]"
      >
        Free to start &bull; No credit card &bull; SOONAK holders go ad-free
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce-slow">
          <svg
            className="h-6 w-6 text-[#555]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
