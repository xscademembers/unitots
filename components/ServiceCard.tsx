import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  border: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color, border, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 border-2 ${border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-0`}
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
        <Icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      </div>
      <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;