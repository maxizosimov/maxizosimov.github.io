import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import SocialButton from './SocialButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 mb-6"
          >
            Maxim's Portfolio
          </a>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialButton key={index} social={social} />
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; {currentYear} Maxim Izosimov. All rights reserved.</p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;