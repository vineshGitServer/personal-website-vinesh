import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const companies = [
  {
    name: "Ferrus Engine",
    description: "Advanced ML optimization platform for industrial applications",
    status: "Active"
  },
  {
    name: "Green Bodys",
    description: "Sustainable AI solutions for environmental monitoring",
    status: "Active"
  },
  {
    name: "Enerchiks",
    description: "Energy analytics and optimization through intelligent systems",
    status: "Development"
  },
  {
    name: "Mengnorts",
    description: "Next-generation data processing and analysis tools",
    status: "Active"
  },
  {
    name: "Black Neuron",
    description: "Neural network research and development laboratory",
    status: "Research"
  },
  {
    name: "A+B+C",
    description: "Mathematical modeling and algorithmic solutions",
    status: "Active"
  },
  {
    name: "K&Eight",
    description: "Kubernetes-native AI deployment and scaling platform",
    status: "Development"
  },
  {
    name: "Karrant",
    description: "Automated business intelligence and reporting systems",
    status: "Active"
  },
  {
    name: "G-matter",
    description: "Graph-based analytics and relationship mapping",
    status: "Research"
  },
  {
    name: "Redey-BI",
    description: "Real-time business intelligence and predictive analytics",
    status: "Active"
  },
  {
    name: "Greenade",
    description: "Sustainable technology and green AI initiatives",
    status: "Development"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "text-green-500";
    case "Development":
      return "text-neon-blue";
    case "Research":
      return "text-neon-purple";
    default:
      return "text-muted-foreground";
  }
};

export function CompaniesSection() {
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
          <h2 className="heading-lg mb-6">Companies I've Built</h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          <p className="text-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            Entrepreneurial ventures exploring the frontiers of AI, ML, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass neon-border hover-lift group">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <div className={`text-xs font-mono ${getStatusColor(company.status)}`}>
                      {company.status}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {company.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full neon-border hover-glow group-hover:bg-neon-blue/10"
                  >
                    {company.status === "Active" ? (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}