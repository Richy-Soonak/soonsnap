"use client";

import { motion } from "framer-motion";

const wallets = [
  {
    name: "Phantom",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#AB9FF2" />
        <path d="M28 20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" fill="#fff" />
        <circle cx="16" cy="19" r="2" fill="#AB9FF2" />
        <circle cx="24" cy="19" r="2" fill="#AB9FF2" />
      </svg>
    ),
  },
  {
    name: "Solflare",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#FC7227" />
        <path d="M20 10l2.5 7.5H30l-6 4.5 2.3 7.5L20 25l-6.3 4.5 2.3-7.5-6-4.5h7.5L20 10z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Backpack",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#E14443" />
        <rect x="13" y="14" width="14" height="14" rx="3" fill="#fff" />
        <rect x="17" y="11" width="6" height="5" rx="1" fill="#fff" />
      </svg>
    ),
  },
];

const bullets = [
  "No signature needed — read-only verification",
  "Works with Phantom, Solflare, and Backpack",
  "Verified once per session (24-hour cache)",
  "Grace period: use Holder tier for 1 hour after balance dip",
];

export default function ForHolders() {
  return (
    <section
      id="for-holders"
      className="relative px-5 py-24 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(253,202,87,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
            SOONAK UTILITY
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Real Utility. Not Just a Meme.
          </h2>
          <p className="mt-5 max-w-md text-[#999]">
            Hold 200 $SOONAK tokens in your wallet and unlock the Holder tier —
            ad-free, watermark-free, 1080p videos with priority rendering. No
            subscription. No extra cost.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-[#999]">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal underline underline-offset-2 hover:text-gold"
          >
            Get $SOONAK on Raydium →
          </a>
        </motion.div>

        {/* Right column — mock wallet modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <h3 className="mb-1 text-center text-lg font-semibold">
              Connect Wallet
            </h3>
            <p className="mb-6 text-center text-xs text-[#555]">
              Verify your $SOONAK holdings
            </p>
            <div className="flex flex-col gap-3">
              {wallets.map((w) => (
                <button
                  key={w.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-void px-4 py-3 text-sm font-medium transition-colors hover:border-gold/40 hover:bg-void/80"
                >
                  {w.icon}
                  {w.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-[#555]">
              Read-only. We never request signatures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
