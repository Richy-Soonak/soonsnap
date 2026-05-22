import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ForHolders from "@/components/ForHolders";
import EnhancerDemo from "@/components/EnhancerDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Pricing />
      <ForHolders />
      <EnhancerDemo />
      <Footer />
    </main>
  );
}
