// Type definitions for the portfolio website

export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Skill {
    name: string;
    level: number; // 0-100
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