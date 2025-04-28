
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ActivitiesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
