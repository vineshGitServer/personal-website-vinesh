import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { IdeasSection } from "@/components/IdeasSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CompaniesSection } from "@/components/CompaniesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("portfolio");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section if it exists
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "portfolio":
        return (
          <>
            <AboutSection />
            <IdeasSection />
            <ProjectsSection />
          </>
        );
      case "technology":
        return <CompaniesSection />;
      case "business":
        return (
          <section id="business" className="section-padding">
            <div className="container-wide mx-auto px-4 text-center">
              <h2 className="heading-lg mb-6">Business</h2>
              <p className="text-large text-muted-foreground">Business insights and strategies coming soon.</p>
            </div>
          </section>
        );
      case "research":
        return (
          <section id="research" className="section-padding">
            <div className="container-wide mx-auto px-4 text-center">
              <h2 className="heading-lg mb-6">Research</h2>
              <p className="text-large text-muted-foreground">Research publications and findings coming soon.</p>
            </div>
          </section>
        );
      case "services":
        return (
          <section id="services" className="section-padding">
            <div className="container-wide mx-auto px-4 text-center">
              <h2 className="heading-lg mb-6">Services</h2>
              <p className="text-large text-muted-foreground">Professional services and consulting coming soon.</p>
            </div>
          </section>
        );
      case "life":
        return (
          <section id="life" className="section-padding">
            <div className="container-wide mx-auto px-4 text-center">
              <h2 className="heading-lg mb-6">Life</h2>
              <p className="text-large text-muted-foreground">Personal insights and experiences coming soon.</p>
            </div>
          </section>
        );
      default:
        return (
          <>
            <AboutSection />
            <IdeasSection />
            <ProjectsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onNavigate={handleNavigate} activeSection={activeSection} />
      {renderContent()}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
