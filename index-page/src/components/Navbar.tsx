import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/linuxdroid-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="LinuxDroid Logo" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LinuxDroid
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-primary transition-all active:scale-95"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("supported-os")}
              className="text-foreground/80 hover:text-primary transition-all active:scale-95"
            >
              Supported OS
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-all active:scale-95"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all active:scale-95"
            >
              Contact
            </button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all active:scale-95"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("supported-os")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all active:scale-95"
            >
              Supported OS
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all active:scale-95"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all active:scale-95"
            >
              Contact
            </button>
            <div className="px-4">
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
