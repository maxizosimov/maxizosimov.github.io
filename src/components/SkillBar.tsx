import React from 'react';
import { Skill, SkillCategory } from '../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const getCategoryColor = (category: SkillCategory) => {
  switch (category) {
    case SkillCategory.EXPERT:
      return 'from-emerald-400 to-emerald-600';
    case SkillCategory.ADVANCED:
      return 'from-blue-400 to-blue-600';
    case SkillCategory.INTERMEDIATE:
      return 'from-purple-400 to-purple-600';
    case SkillCategory.PROFICIENT:
      return 'from-teal-400 to-teal-600';
  }
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(skill.category)} text-white`}>
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillBar;