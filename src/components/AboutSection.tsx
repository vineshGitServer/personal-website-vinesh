import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["ML", "AI", "BI", "Agentic AI", "Analytics"];

const timeline = [
  { event: "AI/ML Innovation Focus" },
  { event: "Business Intelligence Leadership" },
  { event: "Data Analytics Expertise" },
  { event: "Entrepreneurial Journey" }
];

export function AboutSection() {
  return (
    <section id="profile" className="section-padding bg-muted/30">
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">About</h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mb-12" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Hello, Welcome to Vinesh-AI. Here you get exposed to a domain of Technologies and Advanced tools.
            </h3>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-large text-muted-foreground leading-relaxed">
                I'm an AI/ML practitioner and entrepreneur focused on building intelligent systems 
                that solve real-world problems. My approach combines deep technical expertise with 
                strategic business insight to create solutions that scale.
              </p>
              
              <p className="text-large text-muted-foreground leading-relaxed">
                Through my ventures, I explore the intersection of artificial intelligence, 
                data analytics, and business intelligence, always with an eye toward the future 
                of human-machine collaboration.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary"
                      className="px-4 py-2 neon-border hover-glow cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass neon-border">
              <h3 className="text-xl font-semibold mb-8">Professional Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.event}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-neon-blue rounded-full group-hover:shadow-neon transition-all duration-300" />
                    </div>
                    <div className="flex-grow border-l border-border pl-4 pb-4 last:border-l-0 last:pb-0">
                      <div className="text-muted-foreground">
                        {item.event}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}