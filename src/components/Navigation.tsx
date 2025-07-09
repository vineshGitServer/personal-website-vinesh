import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigationItems = [
  { label: "Profile", id: "profile" },
  { label: "Technology", id: "technology" },
  { label: "Business", id: "business" },
  { label: "Research", id: "research" },
  { label: "Services", id: "services" },
  { label: "Life", id: "life" }
];

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Navigation({ onNavigate, activeSection }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-4 mt-8"
    >
      {navigationItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        >
          <Button
            onClick={() => onNavigate(item.id)}
            variant={activeSection === item.id ? "default" : "outline"}
            className={`
              px-6 py-3 text-sm font-medium transition-all duration-300
              ${activeSection === item.id 
                ? "bg-gradient-neon text-white shadow-neon" 
                : "neon-border hover-glow bg-background/50 backdrop-blur-sm hover:bg-background/80"
              }
            `}
          >
            {item.label}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}