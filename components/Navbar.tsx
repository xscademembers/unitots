import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-display font-medium text-sm lg:text-base transition-all duration-300 ${
      isActive
        ? 'bg-yellow-400 text-yellow-900 shadow-md transform scale-105'
        : 'text-gray-600 hover:bg-yellow-100 hover:text-yellow-800'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-yellow-100 min-w-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-14 sm:h-16 md:h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center flex-shrink-0 cursor-pointer" 
            onClick={() => navigate('/')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/');
              }
            }}
            aria-label="Navigate to home page"
          >
            <img 
              src="https://storage.googleapis.com/new_client_files/unitots/unitots%20logo%2066.png" 
              alt="UNITOTS Logo" 
              className="h-9 sm:h-10 md:h-12 w-auto max-h-10 sm:max-h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact" 
              className="ml-2 lg:ml-4 bg-pink-500 hover:bg-pink-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-display font-bold text-sm lg:text-base shadow-lg shadow-pink-200 transition-all hover:scale-105 active:scale-95"
            >
              Enroll Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-yellow-600 focus:outline-none p-3 min-h-[44px] min-w-[44px] rounded-lg hover:bg-yellow-50 flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-yellow-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 min-h-[44px] rounded-xl text-base font-medium touch-manipulation ${
                      isActive
                        ? 'bg-yellow-100 text-yellow-900'
                        : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
               <NavLink 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 w-full text-center bg-pink-500 text-white px-4 py-3 min-h-[44px] rounded-xl font-bold shadow-md touch-manipulation active:bg-pink-600"
                >
                  Enroll Now
                </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;