import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take your social media presence to the next level? Let's discuss how 
              we can help your brand achieve its goals and drive meaningful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  We're here to answer your questions and discuss how our social media marketing 
                  expertise can benefit your business. Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-muted-foreground">hello@anonicmedia.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">123 Digital Avenue, Tech City, TC 12345</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 rounded-lg bg-gradient-hero border border-brand-primary/20">
                <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
                <p className="text-muted-foreground mb-4">
                  Book a free 30-minute consultation to discuss your social media goals.
                </p>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Book Free Consultation
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;