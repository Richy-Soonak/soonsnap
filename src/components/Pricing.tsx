"use client";

import { motion } from "framer-motion";

function CheckGold() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CheckTeal() {
  return (
    <svg className="h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XMark() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Simple Pricing. Real Utility.
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 md:grid-cols-3">
        {/* FREE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="rounded-2xl border border-border bg-void p-8"
        >
          <span className="inline-block rounded-lg bg-card px-3 py-1 text-xs font-semibold text-[#999]">
            FREE
          </span>
          <div className="mt-5 mb-6">
            <p className="text-2xl font-bold">$0 /month</p>
            <p className="text-sm text-[#555]">ad-supported</p>
          </div>
          <ul className="mb-8 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2"><CheckTeal /> 2 videos/day</li>
            <li className="flex items-center gap-2"><CheckTeal /> 3 edits (4 versions)</li>
            <li className="flex items-center gap-2"><CheckTeal /> Free prompt enhancer</li>
            <li className="flex items-center gap-2"><CheckTeal /> 720p export</li>
            <li className="flex items-center gap-2"><CheckTeal /> Email sign-up</li>
            <li className="flex items-center gap-2 line-through text-[#555]"><XMark /> No watermark</li>
            <li className="flex items-center gap-2 line-through text-[#555]"><XMark /> No ads</li>
            <li className="flex items-center gap-2 line-through text-[#555]"><XMark /> 1080p</li>
          </ul>
          <button className="w-full rounded-xl border border-teal py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal/10">
            Start Free
          </button>
        </motion.div>

        {/* SOONAK HOLDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative scale-[1.03] rounded-2xl border-2 border-gold bg-void p-8 shadow-[0_0_40px_rgba(253,202,87,0.15)]"
        >
          <span className="inline-block rounded-lg border border-gold/30 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
            SOONAK HOLDER
          </span>
          <div className="mt-5 mb-6">
            <p className="text-2xl font-bold text-gold">$0 /month</p>
            <p className="text-sm text-gold/70">hold 200+ $SOONAK</p>
          </div>
          <ul className="mb-8 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2"><CheckGold /> 2 videos/day</li>
            <li className="flex items-center gap-2"><CheckGold /> 5 edits (6 versions)</li>
            <li className="flex items-center gap-2"><CheckGold /> Free prompt enhancer</li>
            <li className="flex items-center gap-2"><CheckGold /> 1080p export</li>
            <li className="flex items-center gap-2"><CheckGold /> No watermark</li>
            <li className="flex items-center gap-2"><CheckGold /> No ads</li>
            <li className="flex items-center gap-2"><CheckGold /> Priority queue</li>
            <li className="flex items-center gap-2"><CheckGold /> All templates</li>
            <li className="flex items-center gap-2"><CheckGold /> Holder badge</li>
          </ul>
          <button className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-void transition-colors hover:bg-gold/90">
            Connect Wallet
          </button>
          <p className="mt-3 text-center text-xs text-[#555]">
            Phantom · Solflare · Backpack
          </p>
          <a
            href="#"
            className="mt-2 block text-center text-xs text-teal underline underline-offset-2 hover:text-gold"
          >
            Don&apos;t have $SOONAK? Get it on Raydium →
          </a>
        </motion.div>

        {/* PRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border bg-void p-8"
        >
          <span className="inline-block rounded-lg bg-card px-3 py-1 text-xs font-semibold text-teal">
            PRO
          </span>
          <div className="mt-5 mb-6">
            <p className="text-2xl font-bold">Pay per render</p>
            <p className="text-sm text-[#555]">buy credits, no limits</p>
          </div>
          <ul className="mb-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2"><CheckTeal /> Unlimited videos</li>
            <li className="flex items-center gap-2"><CheckTeal /> Unlimited edits</li>
            <li className="flex items-center gap-2"><CheckTeal /> Free prompt enhancer</li>
            <li className="flex items-center gap-2"><CheckTeal /> 1080p export</li>
            <li className="flex items-center gap-2"><CheckTeal /> No watermark/ads</li>
            <li className="flex items-center gap-2"><CheckTeal /> Priority queue</li>
            <li className="flex items-center gap-2"><CheckTeal /> All templates</li>
            <li className="flex items-center gap-2"><CheckTeal /> API access (100/day)</li>
            <li className="flex items-center gap-2"><CheckTeal /> Max 120s videos</li>
          </ul>
          <div className="mb-6 rounded-lg bg-card p-3 text-xs text-[#999]">
            <p className="font-semibold text-[#F8F9FC]">Credit packs:</p>
            <p>$5 → 20 credits</p>
            <p>$10 → 50 credits</p>
            <p>$25 → 150 credits</p>
          </div>
          <button className="w-full rounded-xl bg-teal py-3 text-sm font-semibold text-void transition-colors hover:bg-teal/90">
            Buy Credits
          </button>
          <p className="mt-3 text-center text-xs text-[#555]">
            Secure payment via Stripe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
