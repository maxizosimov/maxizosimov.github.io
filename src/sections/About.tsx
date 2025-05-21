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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative">
              {/* Main image with glowing border */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with slight gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 opacity-20 blur-xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl" />
              
              {/* Decorative dot pattern */}
              <div className="absolute -right-8 top-1/4 w-20 h-20 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-teal-400 opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:col-span-7">
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
      </div>
    </section>
  );
};

export default About;