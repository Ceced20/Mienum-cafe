
import React from 'react';
import { Facebook, Instagram, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
                alt="Mie-num Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-mienum-yellow">Mie-num</span>
            </div>
            <p className="mb-4">
              Serving delicious food and drinks with a fun twist.
              Visit us today or order online!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-mienum-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mienum-yellow">
                <Instagram size={20} />
              </a>
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-mienum-yellow"
              >
                <Link size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-mienum-yellow">Location</h3>
            <p>SPBU Cibolerang</p>
            <p>Bandung, Indonesia</p>
            <p className="mt-4">
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mienum-yellow hover:underline"
              >
                Order on GoFood
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-mienum-yellow">Opening Hours</h3>
            <p>Monday - Friday: 8:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 10:00 PM</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mie-num. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
