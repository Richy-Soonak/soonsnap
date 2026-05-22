# SoonSnap Landing Page

> **Any Website. Any Video. In Seconds.**
> A [SOONAK](https://richysoonak.com) Product

## What is this?

This is the **landing page** for [SoonSnap](https://github.com/Richy-Soonak/soonsnap-app) — an AI-powered website-to-video SaaS. This repo contains the static marketing site at `soonsnap.richysoonak.com`.

The actual application lives in a separate repo: **[Richy-Soonak/soonsnap-app](https://github.com/Richy-Soonak/soonsnap-app)**

## Sections

1. **Navbar** — Sticky nav with Connect Wallet (teal) + Start Free (gold) buttons
2. **Hero** — Full-viewport, animated logo, URL input bar with gold glow
3. **Video Showcase** — Embedded self-referential demo video (landing page turned into a video by SoonSnap)
4. **Social Proof** — Scrolling audience labels (Solana Projects, Web3 Startups, etc.)
5. **How It Works** — 3-step cards (Paste URL → Review & Edit → Download)
6. **Features** — 2×2 grid: Token Capture, Version Timeline, Prompt Enhancer, SOONAK Token Gate
7. **Pricing** — 3 cards (Free / SOONAK Holder / Pro)
8. **For Holders** — $SOONAK utility pitch with wallet connect mockup
9. **Prompt Enhancer Demo** — Auto-cycling before/after demo
10. **Footer** — 4-column grid with links

## Brand

- **Gold:** `#FDCA57` (primary CTA, holder accents)
- **Teal:** `#43C4CC` (secondary buttons, icons)
- **Dark:** `#0F0F1A` (background)
- **Display font:** Space Grotesk
- **Body font:** Inter
- **Code font:** JetBrains Mono
- **Dark mode only** — no light mode toggle

## Tech Stack

- **Framework:** Next.js 14 (App Router, SSG)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Global layout, fonts, metadata, SEO
│   ├── page.tsx            # Landing page — all sections composed
│   └── globals.css         # Tailwind + brand colours + animations
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── VideoShowcase.tsx
    ├── SocialProof.tsx
    ├── HowItWorks.tsx
    ├── Features.tsx
    ├── Pricing.tsx
    ├── ForHolders.tsx
    ├── EnhancerDemo.tsx
    └── Footer.tsx
```

## Related Repos

| Repo | Purpose |
|------|---------|
| [soonsnap](https://github.com/Richy-Soonak/soonsnap) | Landing page (this repo) |
| [soonsnap-app](https://github.com/Richy-Soonak/soonsnap-app) | SaaS application (render engine, wallet, Stripe, API) |

## Documentation

- [Product Specification (Google Docs)](https://docs.google.com/document/d/1uBSRqaIJrmbFoeCvKQeT87h-cqDflGyPNERHQeFi9-4/edit)
- [Terms of Service](./TERMS_OF_SERVICE.md)
- [Privacy Policy](./PRIVACY_POLICY.md)

## License

MIT
