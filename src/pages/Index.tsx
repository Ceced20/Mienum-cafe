
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedMenu from '../components/FeaturedMenu';
import Footer from '../components/Footer';
import GoFoodButton from '../components/GoFoodButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Explore Our Full Menu</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover our complete selection of delicious food and refreshing beverages, 
            from noodles and rice dishes to our signature milky series drinks.
          </p>
          <Link to="/menu">
            <Button className="bg-mienum-red hover:bg-red-700 text-white px-8 py-6 text-lg">
              View Complete Menu
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
      <GoFoodButton />
    </div>
  );
};

export default Index;
