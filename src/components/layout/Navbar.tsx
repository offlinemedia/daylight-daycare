
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary">Daylight Adult Daycare</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-neutral-dark hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-neutral-dark hover:text-primary transition-colors">About Us</a>
            <a href="#activities" className="text-neutral-dark hover:text-primary transition-colors">Activities</a>
            <a href="#testimonials" className="text-neutral-dark hover:text-primary transition-colors">Testimonials</a>
            <a href="#gallery" className="text-neutral-dark hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-neutral-dark hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-primary hover:text-primary-dark transition-colors">
              <Phone size={18} className="mr-2" />
              (123) 456-7890
            </a>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Schedule a Tour
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutral-dark focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#services" className="text-neutral-dark hover:text-primary transition-colors py-2">Services</a>
            <a href="#about" className="text-neutral-dark hover:text-primary transition-colors py-2">About Us</a>
            <a href="#activities" className="text-neutral-dark hover:text-primary transition-colors py-2">Activities</a>
            <a href="#testimonials" className="text-neutral-dark hover:text-primary transition-colors py-2">Testimonials</a>
            <a href="#gallery" className="text-neutral-dark hover:text-primary transition-colors py-2">Gallery</a>
            <a href="#contact" className="text-neutral-dark hover:text-primary transition-colors py-2">Contact</a>
            <a href="tel:+1234567890" className="flex items-center text-primary hover:text-primary-dark transition-colors py-2">
              <Phone size={18} className="mr-2" />
              (123) 456-7890
            </a>
            <Button className="bg-primary hover:bg-primary-dark text-white w-full mt-2">
              Schedule a Tour
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
