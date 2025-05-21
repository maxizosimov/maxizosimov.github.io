import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-500 mt-4 rounded ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;