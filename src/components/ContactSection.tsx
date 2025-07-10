import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam check
    if (formData.honeypot) {
      return;
    }
    
    // Basic validation
    if (!formData.name || !formData.email || formData.message.length < 20) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields. Message must be at least 20 characters.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "", honeypot: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <h2 className="heading-lg mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          <p className="text-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to explore the possibilities of AI and intelligent systems? Let's discuss your next innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass neon-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Let's Build Something Intelligent Together
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <p className="text-xs text-muted-foreground">Contact</p>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="neon-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <p className="text-xs text-muted-foreground">Organization</p>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="neon-border"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="neon-border resize-none"
                    placeholder="Tell me about your project, ideas, or how we can collaborate..."
                    required
                    minLength={20}
                  />
                  <div className="text-xs text-muted-foreground">
                    Minimum 20 characters ({formData.message.length}/20)
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-neon text-white hover:shadow-neon transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}