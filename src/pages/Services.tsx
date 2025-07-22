import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Content Writing",
    description: "Professional content creation for web, marketing, and technical documentation with engaging storytelling and clear communication.",
    features: ["Technical Writing", "Marketing Copy", "Blog Articles", "Documentation"]
  },
  {
    title: "Business Consulting",
    description: "Strategic business guidance to help organizations optimize operations, scale effectively, and achieve sustainable growth.",
    features: ["Strategy Development", "Process Optimization", "Market Analysis", "Growth Planning"]
  },
  {
    title: "Investment and Collaboration",
    description: "Partnership opportunities for innovative projects and strategic investments in technology and business ventures.",
    features: ["Strategic Partnerships", "Investment Advisory", "Joint Ventures", "Collaborative Projects"]
  },
  {
    title: "Design",
    description: "Creative design solutions spanning digital interfaces, brand identity, and user experience optimization.",
    features: ["UI/UX Design", "Brand Identity", "Digital Graphics", "User Research"]
  },
  {
    title: "Technology Partner and Provider",
    description: "Comprehensive technology solutions including development, infrastructure, and digital transformation services.",
    features: ["Software Development", "Cloud Solutions", "AI Integration", "Digital Transformation"]
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
        <div className="absolute inset-0 bg-neural-pattern opacity-10" />
        
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-background/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your business and technology initiatives
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Key Areas:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Let's discuss how we can help bring your vision to life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Contact for Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}