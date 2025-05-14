
import React from 'react';

interface FeaturedItem {
  name: string;
  price: string;
  description?: string;
  image: string;
}

const FeaturedMenu = () => {
  const featuredItems: FeaturedItem[] = [
    {
      name: "Mienum Lemon Tea",
      price: "14.000",
      description: "Teh lemon yang kerasa bangetz asem lemonnya!",
      image: "https://source.unsplash.com/random/300x200/?lemon,tea"
    },
    {
      name: "Yamien Komplit",
      price: "13.500",
      description: "Mie yamien + baso, pangsit, dan sayur",
      image: "https://source.unsplash.com/random/300x200/?noodles"
    },
    {
      name: "Milky Strawberry",
      price: "20.000",
      description: "Susu rasa strawberry yang creamy & maniezzz",
      image: "https://source.unsplash.com/random/300x200/?strawberry,milk"
    },
    {
      name: "Roti Panggang",
      price: "8.000",
      description: "Roti yang dipanggang dengan penuh cinta",
      image: "https://source.unsplash.com/random/300x200/?toast,bread"
    }
  ];
  
  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Resto's Top Picks</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-mienum-red">{item.name}</h3>
                {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-mienum-red font-bold">Rp {item.price}</span>
                  <a 
                    href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mienum-red hover:underline"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
