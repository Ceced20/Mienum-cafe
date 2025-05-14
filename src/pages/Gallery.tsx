
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoFoodButton from '../components/GoFoodButton';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  // Sample gallery images
  const galleryImages = [
    {
      src: "/lovable-uploads/e0d76fac-abc6-4721-b452-d3c434d56f05.png",
      alt: "Mie-num Special Menu",
      title: "Our Special Menu"
    },
    {
      src: "/lovable-uploads/ae8e3626-781e-4cfa-922e-454d6ea48ff3.png",
      alt: "Mie-num Logo",
      title: "Our Brand"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?cafe",
      alt: "Cafe Atmosphere",
      title: "Our Cafe Atmosphere"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24 mt-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-mienum-red transition-colors duration-300">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <GoFoodButton />
    </div>
  );
};

export default Gallery;
