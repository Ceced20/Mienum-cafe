
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
            alt="Mie-num Logo" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-mienum-red hidden md:inline">Mie-num</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-mienum-red font-medium">Home</a>
          <a href="#about" className="text-gray-800 hover:text-mienum-red font-medium">About</a>
          <a href="#featured" className="text-gray-800 hover:text-mienum-red font-medium">Featured</a>
          <a href="#menu" className="text-gray-800 hover:text-mienum-red font-medium">Menu</a>
          <a 
            href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-mienum-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Order on GoFood
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col">
            <a href="#home" className="py-2 text-gray-800 hover:text-mienum-red" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="py-2 text-gray-800 hover:text-mienum-red" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#featured" className="py-2 text-gray-800 hover:text-mienum-red" onClick={() => setIsMenuOpen(false)}>Featured</a>
            <a href="#menu" className="py-2 text-gray-800 hover:text-mienum-red" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a 
              href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 bg-mienum-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors text-center"
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
