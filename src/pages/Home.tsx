import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Wrench, Lightbulb, Home, Droplet, Scale } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

export const HomePage = () => {
  const services = [
    {
      title: 'Services Médicaux',
      icon: <Stethoscope className="w-12 h-12" />,
      description: 'Soins médicaux professionnels disponibles 24h/24',
      link: '/services/medical'
    },
    {
      title: 'Services Mécaniques',
      icon: <Wrench className="w-12 h-12" />,
      description: 'Experts en réparation et maintenance automobile',
      link: '/services/mechanical'
    },
    {
      title: 'Services Électriques',
      icon: <Lightbulb className="w-12 h-12" />,
      description: 'Solutions électriques sûres et efficaces',
      link: '/services/electrical'
    },
    {
      title: 'Services Immobiliers',
      icon: <Home className="w-12 h-12" />,
      description: 'Trouvez votre maison idéale avec nous',
      link: '/services/real-estate'
    },
    {
      title: 'Services de Plomberie',
      icon: <Droplet className="w-12 h-12" />,
      description: 'Solutions rapides pour tous vos problèmes de plomberie',
      link: '/services/plumbing'
    },
    {
      title: 'Services Juridiques',
      icon: <Scale className="w-12 h-12" />,
      description: 'Conseil juridique professionnel et fiable',
      link: '/services/legal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 bg-clip-text text-transparent mb-6">
            DJOSSI
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Votre solution intégrale pour des services professionnels. Nous connectons des experts qualifiés à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/524443113785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            <span>Contacter par WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};