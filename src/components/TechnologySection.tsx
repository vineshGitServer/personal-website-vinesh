import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Brain, Atom, Lock, Zap } from "lucide-react";
import robotTechBg from "@/assets/robot-tech-bg.jpg";

const technologyItems = [
  { 
    label: "Machine Learning", 
    id: "machine-learning",
    icon: Brain,
    description: "Advanced ML algorithms and neural networks"
  },
  { 
    label: "AI", 
    id: "ai",
    icon: Cpu,
    description: "Artificial Intelligence systems and applications"
  },
  { 
    label: "AGI", 
    id: "agi",
    icon: Zap,
    description: "Artificial General Intelligence research"
  },
  { 
    label: "Quantum Computing", 
    id: "quantum-computing",
    icon: Atom,
    description: "Quantum algorithms and computing systems"
  },
  { 
    label: "Cryptography", 
    id: "cryptography",
    icon: Lock,
    description: "Advanced encryption and security protocols"
  }
];

interface TechnologySectionProps {
  onNavigate: (section: string) => void;
}

export function TechnologySection({ onNavigate }: TechnologySectionProps) {
  return (
    <section 
      id="technology" 
      className="section-padding relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${robotTechBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="container-wide mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="heading-xl mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Technology
          </h1>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Explore cutting-edge technologies and innovations in artificial intelligence, 
            quantum computing, and advanced computational systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="neon-border hover-glow bg-background/10 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-neon group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Button
                    onClick={() => onNavigate(item.id)}
                    variant="outline"
                    className="neon-border hover-glow bg-background/50 hover:bg-primary/20"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => onNavigate("profile")}
            variant="outline"
            size="lg"
            className="neon-border hover-glow bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            Back to Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}