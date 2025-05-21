import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Projects"
          subtitle="Showcasing my work and contributions to AI and software development"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards' 
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;