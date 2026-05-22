import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoonSnap — Turn Any Website Into a Video | A SOONAK Product",
  description:
    "Convert any website into a polished, animated promo video in minutes. Free to start. SOONAK holders go ad-free. No design skills needed.",
  openGraph: {
    title: "SoonSnap — Turn Any Website Into a Video",
    description:
      "Convert any website into a polished, animated promo video in minutes. Free to start. SOONAK holders go ad-free.",
    url: "https://soonsnap.richysoonak.com",
    siteName: "SoonSnap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoonSnap — Turn Any Website Into a Video",
    description:
      "Convert any website into a polished, animated promo video in minutes. Free to start.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0F0F1A] text-[#F8F9FC] antialiased">
        {children}
      </body>
    </html>
  );
}
