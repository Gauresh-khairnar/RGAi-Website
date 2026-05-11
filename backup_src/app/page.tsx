import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ServicesBento from "@/components/ServicesBento";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AIAutomationShowcase from "@/components/AIAutomationShowcase";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesBento />
      <BeforeAfterSlider />
      <AIAutomationShowcase />
      <Portfolio />
      <Testimonials />
      <PricingCalculator />
      <ContactSection />
      <Footer />
    </main>
  );
}
