import Navigation from "@/components/Navigation";
import HeroSection from "@/components/Hero";
import WorkflowCanvas from "@/components/Workflow";
import PhilosophySection from "@/components/Philosophy";
import AutomationEngine from "@/components/Automation";
import FeaturesGrid from "@/components/Features";

import ScrollAnimationScript from "@/lib/Scrollanimationscript";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollAnimationScript />
      {/* Hero Section with Navigation */}
      <section className="min-h-screen flex flex-col overflow-hidden w-full pt-6 pb-20 relative items-center justify-start">
        {/* Background Glow */}
        <div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px] pointer-events-none saturate-200 brightness-125" style={{ maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-950/0 to-zinc-950/0 opacity-70"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <Navigation />
        <HeroSection />
        <WorkflowCanvas />
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Automation Engine */}
      <AutomationEngine />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}