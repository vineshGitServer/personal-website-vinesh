import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "Ferrus Engine",
    description: "Cutting-edge AI infrastructure platform providing intelligent agents, agentic AI systems, and semi-humanoid robotic platforms for modern enterprises.",
    role: "Founder & Technical Lead",
    stack: ["AI Infrastructure", "Robotics", "Data Centers", "Automation"],
    year: "2024",
    type: "AI/Robotics Platform",
    hasVisitPage: true
  },
  {
    name: "Intelligent Data Pipeline",
    description: "Automated ML pipeline for real-time data processing and insights generation using advanced algorithms.",
    role: "Lead ML Engineer",
    stack: ["Python", "TensorFlow", "Apache Kafka", "Docker"],
    year: "2024",
    type: "AI/ML Platform"
  },
  {
    name: "Agentic Business Intelligence",
    description: "AI-powered business intelligence system that autonomously generates insights and recommendations.",
    role: "Technical Lead",
    stack: ["Python", "LangChain", "PostgreSQL", "React"],
    year: "2024",
    type: "AI Agent System"
  },
  {
    name: "Predictive Analytics Suite",
    description: "Comprehensive analytics platform for forecasting business metrics with 95% accuracy.",
    role: "Data Scientist",
    stack: ["R", "Python", "Spark", "Tableau"],
    year: "2023",
    type: "Analytics Platform"
  },
  {
    name: "Neural Network Optimizer",
    description: "Custom optimization algorithms for improving neural network training efficiency and performance.",
    role: "Research Engineer",
    stack: ["PyTorch", "CUDA", "NumPy", "Jupyter"],
    year: "2023",
    type: "Research Project"
  }
];

export function ProjectsSection() {
  const navigate = useNavigate();
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          <p className="text-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of technical innovations in AI, ML, and data analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass neon-border hover-lift group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                      <CardTitle className="text-xl leading-tight">
                        {project.name}
                      </CardTitle>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Role: </span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="neon-border hover-glow"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    {project.hasVisitPage ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="neon-border hover-glow"
                        onClick={() => navigate("/ferrus-engine")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="neon-border hover-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}