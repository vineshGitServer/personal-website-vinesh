import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const ideas = [
  {
    title: "The Future of Agentic AI",
    abstract: "Exploring autonomous AI systems that can reason, plan, and execute complex tasks with minimal human intervention.",
    tags: ["AI", "Futurism"],
    readTime: "8 min read"
  },
  {
    title: "Building Intelligent Business Systems",
    abstract: "How modern enterprises can leverage AI and ML to transform their operations and decision-making processes.",
    tags: ["AI", "Startups"],
    readTime: "12 min read"
  },
  {
    title: "Data as the New Intelligence Layer",
    abstract: "Reimagining how we collect, process, and extract insights from data in the age of artificial intelligence.",
    tags: ["Tech Philosophy", "AI"],
    readTime: "6 min read"
  },
  {
    title: "The Entrepreneurial AI Mindset",
    abstract: "Why the next generation of entrepreneurs needs to think like AI systems: iterative, adaptive, and data-driven.",
    tags: ["Startups", "Futurism"],
    readTime: "10 min read"
  }
];

export function IdeasSection() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Ideas & Essays</h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          <p className="text-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            Thoughts on the intersection of technology, business, and the future of intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass neon-border hover-lift group cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl leading-tight group-hover:text-neon-blue transition-colors">
                      {idea.title}
                    </CardTitle>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-neon-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {idea.abstract}
                  </p>
                  <div className="text-sm text-muted-foreground font-mono">
                    {idea.readTime}
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