
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="bg-gradient-to-r from-mienum-red to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to <span className="text-mienum-yellow">Mie-num</span>
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Enjoy our delicious selection of noodles, rice dishes, sandwiches, and refreshing beverages!
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#menu" 
                  className="bg-mienum-yellow text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  View Menu
                </a>
                <a 
                  href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-mienum-red px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e0d76fac-abc6-4721-b452-d3c434d56f05.png" 
                  alt="Mie-num Dimsum Promotion" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 animate-wiggle">
                  <img 
                    src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
                    alt="Mie-num Character" 
                    className="h-24 w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-mienum-yellow h-4"></div>
    </section>
  );
};

export default Hero;
