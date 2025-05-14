
import React from 'react';
import { Coffee, CupSoda, Utensils } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Mie-num</h2>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-mienum-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Great Drinks</h3>
              <p className="text-gray-600">
                From our signature Mienum Lemon Tea to our premium Milky Series, we offer a wide range of delicious beverages.
              </p>
            </div>
            
            <div className="bg-accent rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-mienum-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Delicious Food</h3>
              <p className="text-gray-600">
                Enjoy our famous Yamien Komplit, satisfying rice dishes, and tasty sandwiches made with love.
              </p>
            </div>
            
            <div className="bg-accent rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-mienum-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CupSoda size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Options</h3>
              <p className="text-gray-600">
                Our Economist menu offers great taste at budget-friendly prices, perfect for anyone on a tight budget.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <p className="text-center text-lg">
            At Mie-num, we're passionate about serving delicious food and drinks with a fun twist. 
            Our playful menu descriptions and quality ingredients make every visit special. 
            Whether you're stopping by for a quick bite or ordering delivery, we're here to make your day a little more delicious!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
