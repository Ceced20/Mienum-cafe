
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const GoFoodButton = () => {
  return (
    <a 
      href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-mienum-red text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2"
    >
      <ShoppingCart size={24} />
      <span className="hidden md:inline font-bold">Order on GoFood</span>
    </a>
  );
};

export default GoFoodButton;
