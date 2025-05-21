import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Skills"
          subtitle="Technical expertise and competencies I've developed"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {SKILLS.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Technology ecosystem */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-8">
              Technology Ecosystem
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: 'PyTorch', bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400' },
                { name: 'Hugging Face', bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400' },
                { name: 'MLflow', bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400' },
                { name: 'Transformers', bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400' },
                { name: 'FastAPI', bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400' },
                { name: 'Docker', bg: 'bg-slate-100 dark:bg-slate-900/30', text: 'text-slate-600 dark:text-slate-400' },
                { name: 'LangChain', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
                { name: 'AWS SageMaker', bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
              ].map((tech, index) => (
                <div 
                  key={index}
                  className={`${tech.bg} ${tech.text} rounded-lg py-3 px-4 text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;