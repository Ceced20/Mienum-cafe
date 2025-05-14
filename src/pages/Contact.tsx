
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoFoodButton from '../components/GoFoodButton';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-white">
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

export default Contact;
