import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://soonsnap.richysoonak.com";

export const viewport: Viewport = {
  themeColor: "#FDCA57",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SoonSnap — Turn Any Website Into a Video | A SOONAK Product",
    template: "%s | SoonSnap",
  },
  description:
    "Convert any website into a polished, animated promo video in minutes. Free to start. SOONAK holders go ad-free. No design skills needed.",
  keywords: [
    "website to video",
    "promo video generator",
    "animated video",
    "AI video creator",
    "website video converter",
    "landing page video",
    "SoonSnap",
    "SOONAK",
    "Solana",
    "Web3",
    "video marketing",
    "no-code video",
  ],
  authors: [{ name: "Richy Soonak", url: "https://richysoonak.com" }],
  creator: "Richy Soonak",
  publisher: "SOONAK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "SoonSnap — Turn Any Website Into a Video",
    description:
      "Convert any website into a polished, animated promo video in minutes. Free to start. SOONAK holders go ad-free.",
    url: SITE_URL,
    siteName: "SoonSnap",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/soonsnap/og.png`,
        width: 1200,
        height: 630,
        alt: "SoonSnap — Turn Any Website Into a Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoonSnap — Turn Any Website Into a Video",
    description:
      "Convert any website into a polished, animated promo video in minutes. Free to start.",
    images: [`${SITE_URL}/soonsnap/og.png`],
    creator: "@RichySoonak",
  },
  icons: {
    icon: [
      { url: "/soonsnap/favicon.ico", sizes: "any" },
      { url: "/soonsnap/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/soonsnap/apple-touch-icon.png",
  },
  manifest: "/soonsnap/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SoonSnap",
    description:
      "Convert any website into a polished, animated promo video in minutes.",
    url: SITE_URL,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier — ad-supported",
      },
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "SOONAK Holder tier — hold 200+ tokens",
      },
    ],
    creator: {
      "@type": "Organization",
      name: "SOONAK",
      url: "https://richysoonak.com",
    },
  };

  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-void font-sans text-[#F8F9FC] antialiased">
        {children}
      </body>
    </html>
  );
}
