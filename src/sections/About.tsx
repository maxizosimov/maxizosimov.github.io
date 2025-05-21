import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ABOUT_ME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know more about my background and what drives me"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Passionate About AI & Technology
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {ABOUT_ME.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-bold text-teal-500">3+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</span>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-bold text-blue-500">15+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Projects</span>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-bold text-purple-500">10+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">AI Models</span>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-bold text-pink-500">5+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;