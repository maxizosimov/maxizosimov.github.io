// Type definitions for the portfolio website

export interface NavItem {
    label: string;
    href: string;
  }
  
  export enum SkillCategory {
    EXPERT = 'Expert',
    ADVANCED = 'Advanced',
    INTERMEDIATE = 'Intermediate',
    PROFICIENT = 'Proficient'
  }
  
  export interface Skill {
    name: string;
    category: SkillCategory;
    icon?: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    demoLink?: string;
    codeLink?: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }