import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import anonicLogo from "@/assets/anonic-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={anonicLogo} alt="Anonic Media" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Anonic Media
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-brand-primary transition-colors duration-300"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-brand-primary transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-brand-primary transition-colors duration-300"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-brand-primary transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-foreground hover:text-brand-primary transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-brand-primary transition-colors duration-300"
              >
                Contact Us
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 self-start"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;