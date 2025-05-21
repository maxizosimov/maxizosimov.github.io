import React, { useEffect, useState } from 'react';
import TypingEffect from '../components/TypingEffect';

const Hero: React.FC = () => {
  const [activePhrase, setActivePhrase] = useState(0);
  const phrases = [
    "AI Developer",
    "Machine Learning Engineer",
    "NLP Specialist",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 z-0" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),rgba(255,255,255,0)_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl font-medium text-teal-400 mb-4 animate-fadeIn">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block mb-2">Maxim Izosimov</span>
            <span className="h-16 md:h-20 block">
              <TypingEffect
                text={phrases[activePhrase]}
                className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
                typingSpeed={80}
                delayBeforeStart={500}
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Building intelligent systems to solve complex problems. Passionate about AI, 
            machine learning, and creating technology that enhances human capabilities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-scrollDown" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;