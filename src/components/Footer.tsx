import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import anonicLogo from "@/assets/anonic-logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={anonicLogo} alt="Anonic Media" className="h-8 w-8" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Anonic Media
              </span>
            </div>
            <p className="text-muted-foreground">
              Transforming brands through strategic social media marketing and data-driven results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Social Media Strategy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Community Management</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-brand-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@anonicmedia.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Avenue<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Anonic Media. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;