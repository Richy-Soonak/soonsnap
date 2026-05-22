"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Paste Your URL",
    description:
      "Drop in any website URL — SoonSnap captures its design tokens, colors, fonts, and layout automatically.",
    icon: (
      <svg
        className="h-8 w-8 text-teal"
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
    ),
  },
  {
    num: "02",
    title: "Review and Edit",
    description:
      "Our AI builds a video from your site's DNA. Tweak it with the prompt enhancer, preview every version in the timeline, and refine until it's perfect.",
    icon: (
      <svg
        className="h-8 w-8 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 7.125l-2.652-2.652M12 21h9"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Download and Share",
    description:
      "Export your finished video as an MP4 and share it everywhere — socials, ads, pitch decks. Your brand, perfectly animated.",
    icon: (
      <svg
        className="h-8 w-8 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Three Steps. One Video.
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-[20px] border border-border bg-void p-10 transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            {/* Step number watermark */}
            <span className="absolute right-6 top-4 select-none text-6xl font-bold text-gold/15">
              {step.num}
            </span>
            <div className="mb-5">{step.icon}</div>
            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[#999]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
