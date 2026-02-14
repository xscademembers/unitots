import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const CONTACT_API = '/api/contact';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '+91 ', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          phone: formState.phone.trim(),
          message: formState.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      const apiError = typeof data?.error === 'string' ? data.error : null;

      if (!res.ok) {
        if (res.status === 404) {
          setSubmitError('Contact form could not be reached. When running locally, add MONGODB_URI to .env.local and restart the dev server.');
        } else {
          setSubmitError(apiError ?? 'Something went wrong. Please try again.');
        }
        return;
      }

      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '+91 ', message: '' });
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (submitError) setSubmitError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen"
    >
      <header className="bg-pastel-pink py-8 sm:py-10 md:py-14 lg:py-16 text-center px-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2 sm:px-0 max-w-xl mx-auto">We'd love to hear from you. Visit us or send a message!</p>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Unitots office</h2>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions about admissions, programs, or just want to say hi? 
                Reach out to us using any of the methods below.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Phone, title: 'Call Us', text: '9371696151', tel: '+919371696151', color: 'bg-blue-100 text-blue-600' },
                { icon: MapPin, title: 'Visit Us', text: 'A-6 Ashok Bhavan , Near Sunder Apartment, Behind Gomti Hotel, East Suryanagar, Kalamna Road, Nagpur.', color: 'bg-yellow-100 text-yellow-600' },
                { icon: Clock, title: 'Working Hours', text: 'Mon - Sat: 9:00 AM to 7:00 PM', color: 'bg-green-100 text-green-600' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start sm:items-center p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${item.color} mr-3 sm:mr-5 flex-shrink-0`}>
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{item.title}</h3>
                    {'tel' in item && item.tel ? (
                      <a href={`tel:${item.tel}`} className="text-gray-600 text-xs sm:text-sm break-words hover:text-pink-600 underline-offset-2 hover:underline transition-colors">{item.text}</a>
                    ) : (
                      <p className="text-gray-600 text-xs sm:text-sm break-words">{item.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden min-w-0"
          >
            {submitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 text-center p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-green-500">
                  <Send size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. We will get back to you shortly.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-4 sm:mt-6 text-pink-500 font-bold hover:underline text-sm sm:text-base">Send another message</button>
              </div>
            ) : null}

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {submitError ? (
                <div className="p-3 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm sm:text-base" role="alert">
                  {submitError}
                </div>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Parent's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-300 focus:ring-2 sm:focus:ring-4 focus:ring-pink-100 outline-none transition-all text-base"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-300 focus:ring-2 sm:focus:ring-4 focus:ring-pink-100 outline-none transition-all text-base"
                    placeholder="+91 9876543210"
                    autoComplete="tel"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-300 focus:ring-2 sm:focus:ring-4 focus:ring-pink-100 outline-none transition-all text-base"
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Message / Inquiry <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-300 focus:ring-2 sm:focus:ring-4 focus:ring-pink-100 outline-none transition-all resize-y text-base"
                  placeholder="Tell us about your child or ask a question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full min-h-[48px] py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-white shadow-lg transition-all touch-manipulation active:scale-[0.99] ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 shadow-pink-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
