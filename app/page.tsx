import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <PortfolioSection />
      <ClientsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
