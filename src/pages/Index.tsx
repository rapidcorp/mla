import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import GallerySection from "@/components/GallerySection";
import ConstituencySection from "@/components/ConstituencySection";
import SchemesSection from "@/components/SchemesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MobileNav />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TimelineSection />
      <DevelopmentSection />
      <GallerySection />
      <ConstituencySection />
      <SchemesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
