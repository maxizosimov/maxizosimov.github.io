import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SocialLink } from '../types';

interface SocialButtonProps {
  social: SocialLink;
}

const SocialButton: React.FC<SocialButtonProps> = ({ social }) => {
  // Dynamically get the icon from Lucide React
  const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
      aria-label={`Visit ${social.name}`}
    >
      {IconComponent && <IconComponent size={20} />}
    </a>
  );
};

export default SocialButton;