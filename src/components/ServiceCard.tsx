import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

export const ServiceCard = ({ title, icon, description, link }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
      style={{
        perspective: '1000px',
      }}
    >
      <div className="text-green-500 mb-4 w-24 h-24">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        to={link}
        className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        En savoir plus
      </Link>
    </motion.div>
  );
};