
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedMenu from '../components/FeaturedMenu';
import MenuSection, { MenuItem } from '../components/MenuSection';
import Footer from '../components/Footer';
import GoFoodButton from '../components/GoFoodButton';

const Index = () => {
  // Menu Items grouped by category
  const tehKopiItems: MenuItem[] = [
    { name: "Mienum Lemon Tea", price: "14.000", description: "Teh lemon yang kerasa bangetz asem lemonnya!" },
    { name: "Mienum Teh Tawar", price: "7.000", description: "Teh yg kerasa tehnya dongz" },
    { name: "Mienum Teh Manis", price: "7.000", description: "Teh yang berasa maniezzz" },
    { name: "Kopi Kapal Api Special Mix", price: "5.000", description: "Kopi hitam yang hot kaya kamu" },
    { name: "Americano", price: "17.000", description: "Kopi toraja yang dibuat espresso + air" },
    { name: "Kopi Susu ala Mienum", price: "23.000", description: "Espresso kopi toraja + susu murni, bikin melek" },
    { name: "Susu Rhum (non-alkohol)", price: "17.000", description: "Susu + sirup rhum, maniezz tapi nggak mabuk" },
    { name: "Susu Jahe", price: "10.000", description: "STMJ tanpa MJ, bisa dingin/panas" }
  ];

  const milkySeriesItems: MenuItem[] = [
    { name: "Milky Strawberry", price: "20.000", description: "Susu rasa strawberry yang creamy & maniezzz" },
    { name: "Milky Chocolate", price: "20.000", description: "Susu coklat yang seger dan maniezzz" },
    { name: "Milky Vanilla", price: "20.000", description: "Susu vanila yang creamy dan maniezzz" },
    { name: "Milky Taro", price: "20.000", description: "Susu rasa ubi ungu yang maniezzz" },
    { name: "Milky Banana", price: "20.000", description: "Susu rasa pisang ala Tokyo yang maniezzz" },
    { name: "Milky Salted Caramel", price: "20.000", description: "Susu karamel yang gurih dan maniezzz" },
    { name: "Milky Tiramisu", price: "20.000", description: "Susu rasa tiramisu kayak kue tiramisu" },
    { name: "Milky Bubblegum", price: "20.000", description: "Susu rasa permen karet yang maniezzz" },
    { name: "Milky Red Velvet", price: "20.000", description: "Susu red velvet yang maniezzz dan menggoda" },
    { name: "Milky Cappucino", price: "20.000", description: "Susu + cappucino yang segerrr dan maniezzz" },
    { name: "Milky Greentea Latte", price: "20.000", description: "Susu greentea latte, tidak terlalu maniezzz" }
  ];

  const mojitoItems: MenuItem[] = [
    { name: "Orange Mojito", price: "17.000", description: "Soda + jeruk + mint, segar & menyejukkan" },
    { name: "Pandan Mojito", price: "17.000", description: "Soda + sirup pandan + daun mint" },
    { name: "Lychee Mojito", price: "17.000", description: "Soda + sirup lychee + daun mint" },
    { name: "Mango Mojito", price: "17.000", description: "Soda + sirup mango + daun mint" },
    { name: "Mango Tea", price: "15.000", description: "Teh + sirup mangga yang segarrr" },
    { name: "Lychee Tea", price: "15.000", description: "Teh + lychee yang segarr" },
    { name: "Vanilla Tea", price: "15.000", description: "Teh + sirup vanilla, manis dan segar" },
    { name: "Es Susu Lychee", price: "17.000", description: "Susu + sirup lychee, segar dan manis" },
    { name: "Es Susu Mango", price: "17.000", description: "Susu + sirup mango yang manis dan segarrr" }
  ];

  const foodItems: MenuItem[] = [
    { name: "Yamien Komplit", price: "13.500", description: "Mie yamien + baso, pangsit, dan sayur" },
    { name: "Nasi Goreng Ala Mie-Num", price: "18.000", description: "Nasi goreng bumbu khas + telur + sayur" },
    { name: "Nasi Katsu BBQ", price: "21.000", description: "Nasi + ayam katsu barbeque + sayur" },
    { name: "Nasi Chicken Popcorn", price: "21.000", description: "Nasi + chicken popcorn + kriukan + sayur" },
    { name: "Nasi Goreng Katsu Spesial", price: "28.000", description: "Nasi goreng + telur + ayam katsu + saus-sausan" },
    { name: "Sandwich Mie", price: "16.000", description: "Roti + mie goreng + telur + sayur" },
    { name: "Sandwich Ala Mie-Num", price: "18.000", description: "Roti + ham + telur + keju + sayur" },
    { name: "Roti Panggang", price: "8.000", description: "Roti yang dipanggang dengan penuh cinta" },
    { name: "Indomie Kuah", price: "9.500", description: "Indomie kuah kesukaan rakyat Indonesia" },
    { name: "Indomie Goreng", price: "9.500", description: "Indomie goreng kesukaan rakyat akhir bulan" }
  ];

  const economicItems: MenuItem[] = [
    { name: "Mienum Chocolate Economist", price: "10.000", description: "Minuman coklat maniezzz ukuran dan harga ekonomiz" },
    { name: "Mienum Strawberry Economist", price: "10.000", description: "Strawberry maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Vanilla Economist", price: "10.000", description: "Vanilla maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Taro Economist", price: "10.000", description: "Taro maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Tiramisu Economist", price: "10.000", description: "Tiramisu maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Red Velvet Economist", price: "10.000", description: "Red velvet maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Caramel Economist", price: "10.000", description: "Karamel maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Banana Economist", price: "10.000", description: "Pisang ala Korea maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Bubble Gum Economist", price: "10.000", description: "Permen karet maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Cappucino Economist", price: "10.000", description: "Cappucino maniezzz harga dan ukuran ekonomiz" },
    { name: "Mienum Greentea Latte Economist", price: "11.000", description: "Greentea latte tidak terlalu maniezzz, harga ekonomiz" }
  ];

  const premiumItems: MenuItem[] = [
    { name: "Milky Vanilla", price: "23.000", description: "Susu vanilla yang maniez" },
    { name: "Milky Strawberry", price: "23.000", description: "Susu strawberry yang maniez" },
    { name: "Milky Red Velvet", price: "23.000", description: "Susu red velvet yang maniez" },
    { name: "Milky Salted Caramel", price: "23.000", description: "Susu salted caramel yang maniez" },
    { name: "Milky Green Tea Latte", price: "23.000", description: "Susu greentea latte yang maniez" },
    { name: "Milky Banana", price: "23.000", description: "Susu banana yang maniez" },
    { name: "Milky Taro", price: "23.000", description: "Susu taro yang maniez" },
    { name: "Milky Bubble Gum", price: "23.000", description: "Susu bubble gum yang maniez" },
    { name: "Milky Tiramisu", price: "23.000", description: "Susu tiramisu yang maniez" },
    { name: "Milky Cappucino", price: "23.000", description: "Susu cappucino yang maniez" },
    { name: "Milky Chocolate", price: "23.000", description: "Susu coklat yang maniez" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Menu</h2>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-mienum-red mb-6">🍜 Makanan</h3>
            <MenuSection 
              title="Main Dishes" 
              items={foodItems} 
              bgColor="bg-gray-50"
            />
            
            <h3 className="text-2xl font-bold text-mienum-red mb-6 mt-12">🥤 Minuman</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MenuSection 
                title="Teh & Kopi" 
                items={tehKopiItems} 
                bgColor="bg-gray-50"
              />
              <MenuSection 
                title="Milky Series" 
                items={milkySeriesItems} 
                bgColor="bg-gray-50"
              />
            </div>
            
            <div className="mt-6">
              <MenuSection 
                title="Mojito & Tea Fusion" 
                items={mojitoItems} 
                bgColor="bg-gray-50"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-mienum-red mb-6 mt-12">💸 Menu Ekonomis</h3>
            <MenuSection 
              title="Budget-Friendly Options" 
              items={economicItems} 
              bgColor="bg-gray-50"
            />
            
            <h3 className="text-2xl font-bold text-mienum-red mb-6 mt-12">🥛 Mienuman Susu (Premium)</h3>
            <MenuSection 
              title="Premium Milk Beverages" 
              items={premiumItems} 
              bgColor="bg-gray-50"
            />
          </div>
        </div>
      </section>
      
      <Footer />
      <GoFoodButton />
    </div>
  );
};

export default Index;
