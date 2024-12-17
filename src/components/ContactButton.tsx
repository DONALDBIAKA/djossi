import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getCurrentLocation, createWhatsAppLink } from '../utils/location';

interface ContactButtonProps {
  service: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ service, className = '' }) => {
  const handleContact = async () => {
    try {
      const position = await getCurrentLocation();
      const whatsappLink = createWhatsAppLink(
        '524443113785',
        service,
        position.coords
      );
      window.open(whatsappLink, '_blank');
    } catch (error) {
      alert('Erreur lors de l\'accès à la localisation. Veuillez autoriser l\'accès à votre position et réessayer.');
      console.error('Erreur de géolocalisation:', error);
    }
  };

  return (
    <button
      onClick={handleContact}
      className={`inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Contacter par WhatsApp</span>
    </button>
  );
};