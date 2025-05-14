
import React from 'react';

const GoFoodButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a
        href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-mienum-red text-white px-5 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 group hover:shadow-xl hover:shadow-mienum-red/20"
      >
        <span className="text-sm font-bold">Order on GoFood</span>
        <div className="bg-white rounded-full p-1 transform transition-transform duration-300 group-hover:rotate-12">
          <img 
            src="/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png" 
            alt="Mie-num" 
            className="h-6 w-6 object-contain"
          />
        </div>
      </a>
    </div>
  );
};

export default GoFoodButton;
