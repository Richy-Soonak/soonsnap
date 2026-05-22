"use client";

import { motion } from "framer-motion";

const items = [
  "Solana Projects",
  "Web3 Startups",
  "Indie Hackers",
  "Content Creators",
  "Small Businesses",
];

export default function SocialProof() {
  return (
    <section className="border-y border-border py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-5"
      >
        <div className="flex items-center gap-6">
          <p className="shrink-0 text-sm text-[#555]">Powering videos for</p>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...items, ...items, ...items, ...items].map((item, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm font-medium text-[#999]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
