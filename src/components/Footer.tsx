
import React from 'react';
import { Facebook, Instagram, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
                alt="Mie-num Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-mienum-yellow">Mie-num</span>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Elevating your dining experience with our delicious noodles, rice dishes, 
              and refreshing beverages in a modern atmosphere.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-mienum-yellow transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mienum-yellow transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mienum-yellow transition-colors duration-300"
              >
                <Link size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-mienum-yellow">Visit Us</h3>
            <p className="text-gray-400 leading-relaxed">SPBU Cibolerang</p>
            <p className="text-gray-400 leading-relaxed">Bandung, Indonesia</p>
            <p className="mt-6">
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mienum-yellow hover:underline inline-flex items-center gap-2"
              >
                Order on GoFood
                <span className="text-xs bg-mienum-yellow text-gray-900 px-2 py-1 rounded-full">Delivery</span>
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-mienum-yellow">Opening Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: <span className="text-white">8:00 AM - 9:00 PM</span></p>
              <p>Saturday - Sunday: <span className="text-white">9:00 AM - 10:00 PM</span></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mie-num. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
