import { Award, Users2, Clock, Globe, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Anonic Media</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a results-driven social media marketing agency passionate about helping brands 
              connect with their audience and achieve unprecedented growth in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Transforming Brands Through Strategic Social Media
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with the vision of bridging the gap between brands and their audiences, 
                  Anonic Media has evolved into a powerhouse of creativity, strategy, and execution 
                  in the social media marketing space.
                </p>
                <p>
                  Our team of experienced marketers, content creators, and data analysts work 
                  collaboratively to deliver campaigns that not only engage but convert. We believe 
                  in the power of authentic storytelling combined with data-driven insights.
                </p>
                <p>
                  Whether you're a startup looking to make your mark or an established business 
                  aiming to expand your digital footprint, we have the expertise and passion to 
                  make your social media presence truly impactful.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brand-primary mb-1">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <Users2 className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brand-primary mb-1">15+</div>
                  <div className="text-muted-foreground text-sm">Team Members</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <Clock className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brand-primary mb-1">24/7</div>
                  <div className="text-muted-foreground text-sm">Support Available</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <Globe className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brand-primary mb-1">Global</div>
                  <div className="text-muted-foreground text-sm">Reach & Impact</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Values */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-brand-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Results-Driven</h4>
                <p className="text-muted-foreground">Every strategy is designed with measurable outcomes and ROI in mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Users2 className="h-8 w-8 text-brand-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Client-Centric</h4>
                <p className="text-muted-foreground">Your success is our success. We're committed to your growth.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-brand-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground">We stay ahead of trends and leverage cutting-edge strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;