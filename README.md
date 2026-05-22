# SoonSnap

> **Any Website. Any Video. In Seconds.**
> A [SOONAK](https://richysoonak.com) Product

## What is SoonSnap?

SoonSnap converts any website into a polished, animated promo video. Paste a URL, pick a style, review, edit, and download an MP4 — no design skills required.

## Tiers

| Tier | Cost | Videos/Day | Edits/Video | Watermark | Ads | Resolution |
|------|------|-----------|-------------|-----------|-----|------------|
| Free | $0 (email signup) | 2 | 3 (4 versions) | Yes (soonsnap.richysoonak.com) | Yes | 720p |
| SOONAK Holder | Hold 200+ $SOONAK | 2 | 5 (6 versions) | No | No | 1080p |
| Pro | Credits ($5–$25 packs) | Unlimited | Unlimited | No | No | 1080p |

## Token

$SOONAK Contract: `H218TQViAXsSqwCLnf7L41zewUTRmdN1r4neLtjBXYXS` (Solana)

## Tech Stack

- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
- **Backend:** Node.js (Hono) + Supabase
- **Render:** HyperFrames (Apache 2.0) + FFmpeg
- **Queue:** Redis + BullMQ
- **Payments:** Stripe
- **Storage:** Cloudflare R2
- **Wallet:** Solana Web3.js

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
│   ├── layout.tsx          # Global layout, fonts, metadata
│   ├── page.tsx            # Landing page — all sections
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VideoShowcase.tsx   # Embedded demo video (placeholder)
│   ├── SocialProof.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── ForHolders.tsx
│   ├── EnhancerDemo.tsx
│   └── Footer.tsx
└── public/
    ├── logo.svg
    ├── og-image.png
    └── icons/
```

## Documentation

- [Product Specification (Google Docs)](https://docs.google.com/document/d/1uBSRqaIJrmbFoeCvKQeT87h-cqDflGyPNERHQeFi9-4/edit)
- [Terms of Service](./TERMS_OF_SERVICE.md)
- [Privacy Policy](./PRIVACY_POLICY.md)

## License

MIT
