import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { IdeasSection } from "@/components/IdeasSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CompaniesSection } from "@/components/CompaniesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <IdeasSection />
      <ProjectsSection />
      <CompaniesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
