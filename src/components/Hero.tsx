import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <span className="text-brand-primary font-medium">🚀 Leading Social Media Marketing Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Scale Your Brand with
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Strategic Social Media Marketing
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We help ambitious brands dominate social media through data-driven strategies, 
            compelling content, and measurable results that drive real business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              Start Growing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">500+</div>
              <div className="text-muted-foreground text-sm">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">10M+</div>
              <div className="text-muted-foreground text-sm">Impressions Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">300%</div>
              <div className="text-muted-foreground text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">24/7</div>
              <div className="text-muted-foreground text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;