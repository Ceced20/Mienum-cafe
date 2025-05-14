
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-10">Our Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <AspectRatio ratio={4/3} className="bg-muted">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-mienum-red">{image.title}</h3>
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
