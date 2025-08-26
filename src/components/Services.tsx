import { TrendingUp, Target, Zap, BarChart3, Users, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-primary" />,
      title: "Social Media Strategy",
      description: "Comprehensive strategies tailored to your brand's goals, audience, and industry trends."
    },
    {
      icon: <Target className="h-8 w-8 text-brand-primary" />,
      title: "Paid Advertising",
      description: "High-converting ad campaigns across Facebook, Instagram, TikTok, and LinkedIn platforms."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-primary" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and drives meaningful connections with your audience."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      title: "Community Management",
      description: "Building and nurturing engaged communities that become loyal brand advocates."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-brand-primary" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights and detailed reports to track performance and optimize results."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-primary" />,
      title: "Growth Optimization",
      description: "Continuous testing and optimization to maximize your social media ROI and growth."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive social media marketing solutions designed to elevate your brand, 
            engage your audience, and drive measurable business results across all major platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Our Process</h3>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and target audience" },
              { step: "02", title: "Strategy", desc: "Developing a customized social media roadmap" },
              { step: "03", title: "Execution", desc: "Implementing campaigns with precision and creativity" },
              { step: "04", title: "Optimization", desc: "Continuous improvement based on data and insights" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;