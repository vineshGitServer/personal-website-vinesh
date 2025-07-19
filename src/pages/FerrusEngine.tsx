import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FerrusEngine() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
              Ferrus Engine
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                At Ferrus Engine, our mission is to empower businesses by providing cutting-edge AI infrastructure that significantly enhances operational performance and scalability. We specialize in delivering advanced AI solutions—including intelligent agents, agentic AI systems, and semi-humanoid robotic platforms—tailored to meet the evolving needs of modern enterprises.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Beyond AI, we also address one of the most pressing challenges across industries: workforce limitations. Our robotics offerings, designed for labor-intensive sectors, bring workforce automation to scale, enabling organizations to reduce reliance on manual labor while boosting efficiency and consistency.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                What sets Ferrus Engine apart is our integrated ecosystem. We are a comprehensive provider of robotics, AI-driven digital products and services, and high-performance AI data centers. This combination allows us to deliver end-to-end solutions—from infrastructure to intelligent automation—making us a one-stop partner for businesses looking to thrive in the age of artificial intelligence.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                In essence, Ferrus Engine is building the future of intelligent infrastructure, where human potential is augmented, operations are streamlined, and innovation becomes limitless.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}