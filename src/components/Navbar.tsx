
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'featured', 'menu', 'gallery', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
            alt="Mie-num Logo" 
            className="h-10 w-auto"
          />
          <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-mienum-red' : 'text-white'} hidden md:inline`}>
            Mie-num
          </span>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`font-medium text-sm transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-800 hover:text-mienum-red' 
                : 'text-white hover:text-mienum-yellow'
            } ${activeSection === 'home' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`font-medium text-sm transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-800 hover:text-mienum-red' 
                : 'text-white hover:text-mienum-yellow'
            } ${activeSection === 'about' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('menu')} 
            className={`font-medium text-sm transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-800 hover:text-mienum-red' 
                : 'text-white hover:text-mienum-yellow'
            } ${activeSection === 'menu' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className={`font-medium text-sm transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-800 hover:text-mienum-red' 
                : 'text-white hover:text-mienum-yellow'
            } ${activeSection === 'gallery' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`font-medium text-sm transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-800 hover:text-mienum-red' 
                : 'text-white hover:text-mienum-yellow'
            } ${activeSection === 'contact' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
          >
            Contact
          </button>
          <a 
            href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-mienum-red text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Order on GoFood
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="py-2 text-gray-800 hover:text-mienum-red font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="py-2 text-gray-800 hover:text-mienum-red font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="py-2 text-gray-800 hover:text-mienum-red font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="py-2 text-gray-800 hover:text-mienum-red font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="py-2 text-gray-800 hover:text-mienum-red font-medium">
              Contact
            </button>
            <a 
              href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 bg-mienum-red text-white px-4 py-3 rounded-full font-medium hover:bg-red-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Order on GoFood
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
