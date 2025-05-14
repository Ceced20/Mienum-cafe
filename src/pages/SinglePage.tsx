
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedMenu from '../components/FeaturedMenu';
import Footer from '../components/Footer';
import GoFoodButton from '../components/GoFoodButton';
import MenuSection from '../components/MenuSection';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

// Menu data
const menuData = {
  drinks: {
    teaAndCoffee: [
      { name: "Mienum Lemon Tea", description: "Teh lemon yang kerasa bangetz asem lemonnya!", price: "14.000" },
      { name: "Mienum Teh Tawar", description: "Teh yg kerasa tehnya dongz", price: "7.000" },
      { name: "Mienum Teh Manis", description: "Teh yang berasa maniezzz", price: "7.000" },
      { name: "Kopi Kapal Api Special Mix", description: "Kopi hitam yang hot kaya kamu", price: "5.000" },
      { name: "Americano", description: "Kopi toraja yang dibuat espresso + air", price: "17.000" },
      { name: "Kopi Susu ala Mienum", description: "Espresso kopi toraja + susu murni, bikin melek", price: "23.000" },
      { name: "Susu Rhum (non-alkohol)", description: "Susu + sirup rhum, maniezz tapi nggak mabuk", price: "17.000" },
      { name: "Susu Jahe", description: "STMJ tanpa MJ, bisa dingin/panas", price: "10.000" }
    ],
    milkySeries: [
      { name: "Milky Strawberry", description: "Susu rasa strawberry yang creamy & maniezzz", price: "20.000" },
      { name: "Milky Chocolate", description: "Susu coklat yang seger dan maniezzz", price: "20.000" },
      { name: "Milky Vanilla", description: "Susu vanila yang creamy dan maniezzz", price: "20.000" },
      { name: "Milky Taro", description: "Susu rasa ubi ungu yang maniezzz", price: "20.000" },
      { name: "Milky Banana", description: "Susu rasa pisang ala Tokyo yang maniezzz", price: "20.000" },
      { name: "Milky Salted Caramel", description: "Susu karamel yang gurih dan maniezzz", price: "20.000" },
      { name: "Milky Tiramisu", description: "Susu rasa tiramisu kayak kue tiramisu", price: "20.000" },
      { name: "Milky Bubblegum", description: "Susu rasa permen karet yang maniezzz", price: "20.000" },
      { name: "Milky Red Velvet", description: "Susu red velvet yang maniezzz dan menggoda", price: "20.000" },
      { name: "Milky Cappucino", description: "Susu + cappucino yang segerrr dan maniezzz", price: "20.000" },
      { name: "Milky Greentea Latte", description: "Susu greentea latte, tidak terlalu maniezzz", price: "20.000" }
    ],
    mojitoAndTeaFusion: [
      { name: "Orange Mojito", description: "Soda + jeruk + mint, segar & menyejukkan", price: "17.000" },
      { name: "Pandan Mojito", description: "Soda + sirup pandan + daun mint", price: "17.000" },
      { name: "Lychee Mojito", description: "Soda + sirup lychee + daun mint", price: "17.000" },
      { name: "Mango Mojito", description: "Soda + sirup mango + daun mint", price: "17.000" },
      { name: "Mango Tea", description: "Teh + sirup mangga yang segarrr", price: "15.000" },
      { name: "Lychee Tea", description: "Teh + lychee yang segarr", price: "15.000" },
      { name: "Vanilla Tea", description: "Teh + sirup vanilla, manis dan segar", price: "15.000" },
      { name: "Es Susu Lychee", description: "Susu + sirup lychee, segar dan manis", price: "17.000" },
      { name: "Es Susu Mango", description: "Susu + sirup mango yang manis dan segarrr", price: "17.000" }
    ]
  },
  food: [
    { name: "Yamien Komplit", description: "Mie yamien + baso, pangsit, dan sayur", price: "13.500" },
    { name: "Nasi Goreng Ala Mie-Num", description: "Nasi goreng bumbu khas + telur + sayur", price: "18.000" },
    { name: "Nasi Katsu BBQ", description: "Nasi + ayam katsu barbeque + sayur", price: "21.000" },
    { name: "Nasi Chicken Popcorn", description: "Nasi + chicken popcorn + kriukan + sayur", price: "21.000" },
    { name: "Nasi Goreng Katsu Spesial", description: "Nasi goreng + telur + ayam katsu + saus-sausan", price: "28.000" },
    { name: "Sandwich Mie", description: "Roti + mie goreng + telur + sayur", price: "16.000" },
    { name: "Sandwich Ala Mie-Num", description: "Roti + ham + telur + keju + sayur", price: "18.000" },
    { name: "Roti Panggang", description: "Roti yang dipanggang dengan penuh cinta", price: "8.000" },
    { name: "Indomie Kuah", description: "Indomie kuah kesukaan rakyat Indonesia", price: "9.500" },
    { name: "Indomie Goreng", description: "Indomie goreng kesukaan rakyat akhir bulan", price: "9.500" }
  ],
  economic: [
    { name: "Mienum Chocolate Economist", description: "Minuman coklat maniezzz ukuran dan harga ekonomiz", price: "10.000" },
    { name: "Mienum Strawberry Economist", description: "Strawberry maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Vanilla Economist", description: "Vanilla maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Taro Economist", description: "Taro maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Tiramisu Economist", description: "Tiramisu maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Red Velvet Economist", description: "Red velvet maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Caramel Economist", description: "Karamel maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Banana Economist", description: "Pisang ala Korea maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Bubble Gum Economist", description: "Permen karet maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Cappucino Economist", description: "Cappucino maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Mienum Greentea Latte Economist", description: "Greentea latte tidak terlalu maniezzz, harga ekonomiz", price: "11.000" }
  ],
  premiumMilk: [
    { name: "Milky Vanilla", description: "Susu vanilla yang maniez", price: "23.000" },
    { name: "Milky Strawberry", description: "Susu strawberry yang maniez", price: "23.000" },
    { name: "Milky Red Velvet", description: "Susu red velvet yang maniez", price: "23.000" },
    { name: "Milky Salted Caramel", description: "Susu salted caramel yang maniez", price: "23.000" },
    { name: "Milky Green Tea Latte", description: "Susu greentea latte yang maniez", price: "23.000" },
    { name: "Milky Banana", description: "Susu banana yang maniez", price: "23.000" },
    { name: "Milky Taro", description: "Susu taro yang maniez", price: "23.000" },
    { name: "Milky Bubble Gum", description: "Susu bubble gum yang maniez", price: "23.000" },
    { name: "Milky Tiramisu", description: "Susu tiramisu yang maniez", price: "23.000" },
    { name: "Milky Cappucino", description: "Susu cappucino yang maniez", price: "23.000" },
    { name: "Milky Chocolate", description: "Susu coklat yang maniez", price: "23.000" }
  ],
  topPicks: [
    { name: "Mienum Lemon Tea", description: "Teh lemon yang kerasa bangetz asem lemonnya!", price: "14.000" },
    { name: "Yamien Komplit", description: "Mie yamien + baso, pangsit, dan sayur", price: "13.500" },
    { name: "Milky Strawberry", description: "Susu rasa strawberry yang creamy & maniezzz", price: "20.000" },
    { name: "Roti Panggang", description: "Roti yang dipanggang dengan penuh cinta", price: "8.000" }
  ]
};

// Gallery images
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

const SinglePage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>('topPicks');
  const [activeDrinkTab, setActiveDrinkTab] = React.useState<string>('teaAndCoffee');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-black to-gray-900">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <About />
      </section>
      
      {/* Featured Menu Section */}
      <section id="featured" className="py-16 bg-gray-50">
        <FeaturedMenu />
      </section>
      
      {/* Full Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Menu</h2>
          
          <div className="mt-12 flex flex-col">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={() => setActiveTab('topPicks')}
                className={`${activeTab === 'topPicks' ? 'bg-mienum-red text-white' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-red hover:text-white`}
              >
                Top Picks
              </Button>
              <Button 
                onClick={() => setActiveTab('drinks')}
                className={`${activeTab === 'drinks' ? 'bg-mienum-red text-white' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-red hover:text-white`}
              >
                Drinks
              </Button>
              <Button 
                onClick={() => setActiveTab('food')}
                className={`${activeTab === 'food' ? 'bg-mienum-red text-white' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-red hover:text-white`}
              >
                Food
              </Button>
              <Button 
                onClick={() => setActiveTab('economic')}
                className={`${activeTab === 'economic' ? 'bg-mienum-red text-white' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-red hover:text-white`}
              >
                Economic Menu
              </Button>
              <Button 
                onClick={() => setActiveTab('premiumMilk')}
                className={`${activeTab === 'premiumMilk' ? 'bg-mienum-red text-white' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-red hover:text-white`}
              >
                Premium Milk
              </Button>
            </div>
            
            {activeTab === 'topPicks' && (
              <MenuSection 
                title="Resto's Top Picks" 
                items={menuData.topPicks}
                bgColor="bg-white" 
              />
            )}
            
            {activeTab === 'food' && (
              <MenuSection 
                title="Food" 
                items={menuData.food}
                bgColor="bg-white" 
              />
            )}
            
            {activeTab === 'economic' && (
              <MenuSection 
                title="Economic Menu" 
                items={menuData.economic}
                bgColor="bg-white" 
              />
            )}
            
            {activeTab === 'premiumMilk' && (
              <MenuSection 
                title="Premium Milk" 
                items={menuData.premiumMilk}
                bgColor="bg-white" 
              />
            )}
            
            {activeTab === 'drinks' && (
              <div>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button 
                    onClick={() => setActiveDrinkTab('teaAndCoffee')}
                    className={`${activeDrinkTab === 'teaAndCoffee' ? 'bg-mienum-yellow text-gray-900' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-yellow hover:text-gray-900`}
                  >
                    Tea & Coffee
                  </Button>
                  <Button 
                    onClick={() => setActiveDrinkTab('milkySeries')}
                    className={`${activeDrinkTab === 'milkySeries' ? 'bg-mienum-yellow text-gray-900' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-yellow hover:text-gray-900`}
                  >
                    Milky Series
                  </Button>
                  <Button 
                    onClick={() => setActiveDrinkTab('mojitoAndTeaFusion')}
                    className={`${activeDrinkTab === 'mojitoAndTeaFusion' ? 'bg-mienum-yellow text-gray-900' : 'bg-gray-100 text-gray-700'} hover:bg-mienum-yellow hover:text-gray-900`}
                  >
                    Mojito & Tea Fusion
                  </Button>
                </div>
                
                {activeDrinkTab === 'teaAndCoffee' && (
                  <MenuSection 
                    title="Tea & Coffee" 
                    items={menuData.drinks.teaAndCoffee}
                    bgColor="bg-white" 
                  />
                )}
                
                {activeDrinkTab === 'milkySeries' && (
                  <MenuSection 
                    title="Milky Series" 
                    items={menuData.drinks.milkySeries}
                    bgColor="bg-white" 
                  />
                )}
                
                {activeDrinkTab === 'mojitoAndTeaFusion' && (
                  <MenuSection 
                    title="Mojito & Tea Fusion" 
                    items={menuData.drinks.mojitoAndTeaFusion}
                    bgColor="bg-white" 
                  />
                )}
              </div>
            )}
            
            <div className="mt-12 text-center">
              <a 
                href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mienum-red text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Order Now on GoFood
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="section-title">Gallery</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-10">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-mienum-red mb-4">Our Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-mienum-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>SPBU Cibolerang, Jl. Terusan Pasir Koja No.215, Babakan, Kec. Babakan Ciparay, Kota Bandung, Jawa Barat 40223</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-mienum-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-mienum-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>info@mie-num.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="text-mienum-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <p>Everyday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold mb-2">Order Online</h4>
                <a 
                  href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-mienum-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors inline-block"
                >
                  Order on GoFood
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-mienum-red mb-4">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mienum-red" 
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mienum-red" 
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mienum-red" 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mienum-red" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-mienum-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-mienum-red mb-4">Find Us</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6933112388997!2d107.59009381087505!3d-6.930798993001126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e61a3c86401f%3A0xf48bf4a862bce3e8!2sSPBU%20Pertamina%20Cibolerang!5e0!3m2!1sen!2sid!4v1654789012345!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <GoFoodButton />
    </div>
  );
};

export default SinglePage;
