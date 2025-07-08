import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Vinesh Reddy Karra. Building the future of intelligence.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="neon-border hover-glow"
              asChild
            >
              <a href="mailto:vinesh@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="neon-border hover-glow"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="neon-border hover-glow"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right side - Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Bottom gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-gradient-neon origin-center"
        />
      </div>
    </footer>
  );
}