import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h3>
        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
          style={{ 
            width: `${skill.level}%`,
            animation: `growWidth 1s ease-out ${delay}s forwards`,
            transform: 'translateX(-100%)',
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;