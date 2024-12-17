import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              DJOSSI
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-orange-500 transition-colors">
              <Home className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/524443113785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};