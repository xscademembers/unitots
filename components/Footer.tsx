import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-6 sm:pb-8 min-w-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <img 
                src="https://storage.googleapis.com/new_client_files/unitots/unitots%20logo%2066.png" 
                alt="UNITOTS Logo" 
                className="h-8 sm:h-10 w-auto"
                style={{ maxHeight: '40px' }}
              />
            </div>
            <p className="text-gray-600 leading-relaxed max-w-xs text-sm sm:text-base lg:text-lg">
              A happy place where children discover, learn, and grow through play and creativity. Nurturing tomorrow's bright minds today.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="bg-white min-h-[44px] min-w-[44px] p-3 rounded-full text-blue-600 shadow-sm hover:shadow-md active:scale-95 transition-all hover:bg-blue-50 touch-manipulation flex items-center justify-center"
              >
                <Facebook size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="bg-white min-h-[44px] min-w-[44px] p-3 rounded-full text-pink-600 shadow-sm hover:shadow-md active:scale-95 transition-all hover:bg-pink-50 touch-manipulation flex items-center justify-center"
              >
                <Instagram size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="bg-white min-h-[44px] min-w-[44px] p-3 rounded-full text-sky-500 shadow-sm hover:shadow-md active:scale-95 transition-all hover:bg-sky-50 touch-manipulation flex items-center justify-center"
              >
                <Twitter size={20} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:pl-0 lg:pl-10">
            <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Explore</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all block text-sm sm:text-base">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all block text-sm sm:text-base">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all block text-sm sm:text-base">Photo Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all block text-sm sm:text-base">Contact / Admissions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Unitots office</h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start group">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                </div>
                <span className="text-gray-600 leading-tight text-xs sm:text-sm lg:text-base break-words">A-6 Ashok Bhavan , Near Sunder Apartment, Behind Gomti Hotel, East Suryanagar, Kalamna Road, Nagpur.</span>
              </li>
              <li className="flex items-center group">
                 <div className="bg-white p-2 rounded-lg shadow-sm mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                 </div>
                <a href="tel:+919371696151" className="text-gray-600 text-sm sm:text-base lg:text-lg hover:text-yellow-600 underline-offset-2 hover:underline transition-colors">9371696151</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} UNITOTS Preschool. Made with ☀️ & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;