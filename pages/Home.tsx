import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24 lg:pt-32 lg:pb-40">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-yellow-200/50 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-200/50 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-pink-100/30 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-sm">
                👋 Welcome to UNITOTS
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 md:mb-6">
                A Happy Place to <br />
                <span className="text-pink-500 drop-shadow-sm">Learn</span>, <span className="text-blue-500 drop-shadow-sm">Play</span> <br />
                & <span className="text-green-500 drop-shadow-sm">Grow</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                We provide a nurturing environment where your child can explore their potential through fun activities, creative learning, and safe play.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full bg-pink-500 text-white font-bold text-sm sm:text-base md:text-lg shadow-lg shadow-pink-200 hover:bg-pink-600 active:scale-[0.98] transition-all min-h-[44px] touch-manipulation">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full bg-white text-gray-700 border-2 border-gray-100 font-bold text-sm sm:text-base md:text-lg hover:border-yellow-300 hover:bg-yellow-50 active:scale-[0.98] transition-all shadow-sm min-h-[44px] touch-manipulation">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white transform rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-500 bg-white">
                <img
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Happy kids playing"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/1200x900/FFE4E1/FF69B4?text=Happy+Kids+Playing';
                  }}
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="hidden sm:flex absolute -top-4 -left-4 lg:-top-6 lg:-left-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-yellow-100 items-center gap-2 sm:gap-3"
              >
                <div className="bg-yellow-100 p-1.5 sm:p-2 rounded-full"><Star className="text-yellow-500" size={20} fill="currentColor" /></div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-lg">4.9/5</p>
                  <p className="text-xs text-gray-500 font-bold">Parent Rating</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}
                className="hidden sm:flex absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-pink-100 items-center gap-2 sm:gap-3"
              >
                <div className="bg-pink-100 p-1.5 sm:p-2 rounded-full"><Heart className="text-pink-500" size={20} fill="currentColor" /></div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-lg">Safe &</p>
                  <p className="text-xs text-gray-500 font-bold">Secure Zone</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center w-full min-w-0">
          <span className="text-blue-500 font-display font-bold text-base sm:text-lg lg:text-xl mb-2 block tracking-wide uppercase">Who We Are</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">Nurturing Tomorrow's Leaders</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
            At UNITOTS, we believe every child is unique. Our integrated approach combines modern education techniques with traditional values. From daycare to skill development, we offer a comprehensive ecosystem for your child's early years.
          </p>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-2xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 text-green-600 group-hover:scale-110 transition-transform">
                <Smile size={28} className="sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <span className="font-bold text-gray-800 text-xs sm:text-sm lg:text-lg text-center">Happy Kids</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                <Star size={28} className="sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <span className="font-bold text-gray-800 text-xs sm:text-sm lg:text-lg text-center">Expert Staff</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                <Heart size={28} className="sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <span className="font-bold text-gray-800 text-xs sm:text-sm lg:text-lg text-center">Safe Environment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Activities & Programs</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              We offer a wide range of activities designed to stimulate physical, mental, and emotional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                description={
                  service.title === 'Music'
                    ? `${service.description} Days: Thrice in a week`
                    : service.description
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-blue-500 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 text-white w-full min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">Ready to join the UNITOTS family?</h2>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
            Admissions are open for the upcoming session. Schedule a visit today and see our happy world yourself!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="inline-block px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl transition-all active:scale-[0.98] min-h-[44px] touch-manipulation">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;