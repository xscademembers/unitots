import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Brain, HeartHandshake, Users, GraduationCap, Baby, BookOpen, Calculator, Gamepad2, Palette, Flower, Library, Pencil, Swords, Music, Languages, Sparkles, Phone } from 'lucide-react';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Header */}
      <div className="bg-pastel-green py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -right-10 sm:-right-20 top-10 text-5xl sm:text-6xl md:text-8xl lg:text-9xl opacity-10 rotate-12 pointer-events-none" aria-hidden="true">🌼</div>
        <div className="absolute left-5 sm:left-10 bottom-0 text-4xl sm:text-5xl md:text-7xl lg:text-8xl opacity-10 -rotate-12 pointer-events-none" aria-hidden="true">🌱</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 w-full min-w-0">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">About UNITOTS</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-2 sm:px-0">
            We are more than just a preschool. We are a community dedicated to the happiness and holistic development of every child.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-yellow-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-yellow-100">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 sm:mb-4 flex items-center">
                  <span className="text-3xl sm:text-4xl mr-2 sm:mr-3">🚀</span> Our Mission
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To provide a safe, engaging, and loving environment where children can explore their curiosity, build confidence, and develop a lifelong love for learning through play-based activities.
                </p>
              </div>
              <div className="bg-sky-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-100">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-sky-700 mb-3 sm:mb-4 flex items-center">
                  <span className="text-3xl sm:text-4xl mr-2 sm:mr-3">🔭</span> Our Vision
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To be the most trusted partner for parents in nurturing the next generation of creative thinkers, compassionate leaders, and happy individuals.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] mt-8 md:mt-0">
              <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full h-full transform rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-500 border-4 sm:border-8 border-white bg-white">
                <img
                  src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Teacher with children"
                  className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/800x600/E6F3FF/4A90D9?text=Teacher+With+Children';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Why Parents Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { title: 'Safe & Secure', icon: ShieldCheck, text: 'CCTV surveillance and child-proof premises.', color: 'text-blue-500', bg: 'bg-blue-100' },
              { title: 'Holistic Growth', icon: Brain, text: 'Focus on IQ, EQ, and physical development.', color: 'text-pink-500', bg: 'bg-pink-100' },
              { title: 'Caring Staff', icon: HeartHandshake, text: 'Trained, certified, and compassionate caregivers.', color: 'text-red-500', bg: 'bg-red-100' },
              { title: 'Small Batch Size', icon: Users, text: 'Personal attention for every single child.', color: 'text-purple-500', bg: 'bg-purple-100' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all text-center border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${item.bg} ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <item.icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director - side-by-side layout, image displays properly */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-50/50 to-white" aria-labelledby="director-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 id="director-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Meet Our Director</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Leading UNITOTS with passion and expertise in child development.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '24px' }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-lg shadow-gray-200/80 overflow-hidden border border-gray-100 flex flex-col md:flex-row"
          >
            {/* Image: full photo visible, no harsh crop; side-by-side on desktop */}
            <div className="relative w-full md:w-[260px] lg:w-[300px] aspect-[3/4] min-h-[280px] md:min-h-[320px] overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src="https://storage.googleapis.com/new_client_files/unitots/WhatsApp%20Image%202026-02-14%20at%2019.04.00%20(1).jpeg"
                alt="The Kids Castle Fest, Director of UNITOTS"
                className="w-full h-full object-contain object-center bg-gray-50"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/400x533/FEF3C7/F59E0B?text=Director';
                }}
              />
            </div>

            {/* Content: right on desktop, below image on mobile */}
            <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 flex-1 min-w-0">
              <p className="text-pink-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-1">Director</p>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5">The Kids Castle Fest</h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-amber-100 text-amber-800">B.com</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">5+ years experience</span>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">Expertise</p>
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                <span className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700">Drawing / Sketching</span>
                <span className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700">Abacus</span>
                <span className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700">Personality Development</span>
              </div>

              <a
                href="tel:+919371696151"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] px-5 py-3 rounded-xl bg-pink-500 text-white font-bold text-sm sm:text-base shadow-md hover:bg-pink-600 active:scale-[0.98] transition-all touch-manipulation"
              >
                <Phone size={20} aria-hidden />
                Call 9371696151
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Our Programs & Classes */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Programs & Classes</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We offer a comprehensive range of programs designed to nurture every aspect of your child's development. Each class is carefully crafted to provide maximum benefits and prepare children for a bright future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <GraduationCap size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">School</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Play Group, Nursery, Jr KG, Sr KG</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Academic foundation & cognitive development</li>
                  <li>• Social skills & peer cooperation</li>
                  <li>• Prepares for formal schooling</li>
                </ul>
              </div>
            </motion.div>

            {/* Daycare */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-yellow-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Baby size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Daycare</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Safe, nurturing home away from home</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Safe supervised care & consistent routines</li>
                  <li>• Socialization & peer interaction</li>
                  <li>• Nutritious meals & proper rest</li>
                </ul>
              </div>
            </motion.div>

            {/* Tuition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <BookOpen size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Tuition</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Personalized academic support (Nursery to 10th)</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• One-on-one attention & personalized learning</li>
                  <li>• Improves academic performance & confidence</li>
                  <li>• Builds study habits & exam preparation</li>
                </ul>
              </div>
            </motion.div>

            {/* Abacus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-pink-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Calculator size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Abacus</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Mental calculation speed & brain development</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Faster mental calculations & accuracy</li>
                  <li>• Enhances brain coordination & memory</li>
                  <li>• Improves concentration & focus</li>
                </ul>
              </div>
            </motion.div>

            {/* Vedic Maths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-pink-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Calculator size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Vedic Maths</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Ancient techniques for faster calculations</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Faster calculations without calculator</li>
                  <li>• Simplifies complex operations</li>
                  <li>• Makes math fun & logical</li>
                </ul>
              </div>
            </motion.div>

            {/* Phonics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-purple-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Sparkles size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Phonics</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Strong reading & pronunciation skills</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Strong reading & decoding skills</li>
                  <li>• Better pronunciation & spelling</li>
                  <li>• Builds reading confidence</li>
                </ul>
              </div>
            </motion.div>

            {/* Basic Grammar / Spoken English */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Languages size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Grammar / Spoken English</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Language skills for ages 5 to 15 years</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Better communication & self-expression</li>
                  <li>• Public speaking confidence</li>
                  <li>• Career & exam preparation</li>
                </ul>
              </div>
            </motion.div>

            {/* Chess */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-purple-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Gamepad2 size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Chess</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Strategic thinking & problem-solving</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Strategic thinking & planning</li>
                  <li>• Improves concentration & memory</li>
                  <li>• Problem-solving & discipline</li>
                </ul>
              </div>
            </motion.div>

            {/* Drawing & Sketching */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Palette size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Drawing & Sketching</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Unleashing creativity & imagination</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Fine motor skills & coordination</li>
                  <li>• Creativity & self-expression</li>
                  <li>• Visual-spatial awareness</li>
                </ul>
              </div>
            </motion.div>

            {/* Yoga / Zumba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-teal-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Flower size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Yoga / Zumba</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Fun fitness for physical & mental well-being</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Physical fitness & flexibility</li>
                  <li>• Mental well-being & stress relief</li>
                  <li>• Balance & coordination</li>
                </ul>
              </div>
            </motion.div>

            {/* Reading Room */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Library size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Reading Room</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Quiet space to fall in love with books</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Love for reading & learning</li>
                  <li>• Expands vocabulary & comprehension</li>
                  <li>• Enhances imagination & focus</li>
                </ul>
              </div>
            </motion.div>

            {/* Handwriting / Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Pencil size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Handwriting / Calligraphy</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Beautiful writing & improved presentation</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Better legibility & presentation</li>
                  <li>• Fine motor skills & precision</li>
                  <li>• Confidence in writing</li>
                </ul>
              </div>
            </motion.div>

            {/* Karate / Skating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Swords size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Karate / Skating</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Discipline, strength & coordination</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Physical strength & endurance</li>
                  <li>• Discipline & self-control</li>
                  <li>• Balance & coordination</li>
                </ul>
              </div>
            </motion.div>

            {/* Dance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Music size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Dance</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Joyful expression through movement</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Physical fitness & flexibility</li>
                  <li>• Rhythm & coordination</li>
                  <li>• Confidence & self-expression</li>
                </ul>
              </div>
            </motion.div>

            {/* Music */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Music size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Music</h3>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Melodious music classes to build rhythm & confidence.</p>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs font-bold text-gray-700 mb-1 sm:mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                  <li>• Sense of rhythm & musicality</li>
                  <li>• Improves listening & coordination</li>
                  <li>• Builds stage confidence & expression</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;