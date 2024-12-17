import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { serviceDetails } from '../data/services';

export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return <div>Service non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-white hover:text-orange-500 mb-8">
          <ArrowLeft className="mr-2" />
          Retour
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-6">
              {service.title}
            </h1>
            <p className="text-gray-300 mb-8">{service.description}</p>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Caractéristiques</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <ContactButton service={service.title} />
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};