
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 z-10 mt-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              Experience <span className="text-mienum-yellow">Mie-num</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Indulge in our delicious menu of noodles, rice dishes, and refreshing beverages in a warm, modern atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-mienum-yellow text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-yellow-400 transition-all duration-300 inline-flex items-center"
              >
                Explore Menu
              </button>
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-mienum-red/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
              alt="Mie-num Logo" 
              className="h-80 w-80 object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-gradient-to-r from-mienum-red to-mienum-yellow h-2"></div>
      </div>
    </div>
  );
};

export default Hero;
