import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import neuralBg from "@/assets/neural-bg.jpg";
import { Navigation } from "./Navigation";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function HeroSection({ onNavigate, activeSection }: HeroSectionProps) {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={neuralBg} 
          alt="Neural network background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Animated neural network overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="neural-animation"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Vinesh AI Logo */}
          <div className="vinesh-ai-logo">
            <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-pink-300 to-blue-500 bg-clip-text text-transparent font-logo">
              Vinesh AI
            </span>
          </div>
          
          <Navigation onNavigate={onNavigate} activeSection={activeSection} />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-neon-blue to-transparent rounded-full animate-pulse" />
      </motion.div>
    </section>
  );
}