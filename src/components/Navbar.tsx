"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
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
      <span className="text-lg font-bold tracking-tight text-[#F8F9FC]">
        SoonSnap
      </span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "For Holders", href: "#for-holders" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{ height: scrolled ? 64 : 64 }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#999] transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-teal px-4 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal/10">
            Connect Wallet
          </button>
          <button className="rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-void transition-colors hover:bg-gold/90">
            Start Free
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#F8F9FC] transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F8F9FC] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F8F9FC] transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-6 bg-void/98 p-8 pt-20 backdrop-blur-lg md:hidden"
          >
            <button
              className="absolute right-6 top-5 text-2xl text-[#999]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-[#999] transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button className="rounded-xl border border-teal px-4 py-2.5 text-sm font-medium text-teal">
                Connect Wallet
              </button>
              <button className="rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-void">
                Start Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
