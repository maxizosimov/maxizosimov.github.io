import { NavItem, Project, Skill, SocialLink, SkillCategory } from "../types";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Skills
export const SKILLS: Skill[] = [
  { name: "Python", category: SkillCategory.EXPERT },
  { name: "Model Benchmarking", category: SkillCategory.EXPERT },
  { name: "LLM Evaluation", category: SkillCategory.ADVANCED },
  { name: "LLM Fine-Tuning", category: SkillCategory.ADVANCED },
  { name: "Statistical Analysis", category: SkillCategory.ADVANCED },
  { name: "Deep Learning", category: SkillCategory.ADVANCED },
  { name: "RAG Systems", category: SkillCategory.PROFICIENT },
  { name: "AWS/Azure Cloud", category: SkillCategory.PROFICIENT },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "Large Language Model from Scratch",
    description: "Building a llm from scratch, implementing both a custom BPE tokenizer and a decoder-only transformer architecture with all core components (embeddings, self-attention, FFN, and normalization layers). All done on personal Nvidia GPU. (In Progress)",
    tags: ["LLM", "Transformers", "PyTorch", "NLP"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-sPAKLO8SKgyIVF94GOE_cplfwY_Q9vP0g&s",
  },
  {
    title: "Neural Weather Predictor",
    description: "Tired of Boston's unpredictable weather. Presenting, a deep learning system that predicts localized weather patterns over time, visualizing the evolution of atmospheric conditions in an interactive dashboard. (In Progress)",
    tags: ["Neural Networks", "Geospatial Data", "TimeSeries", "Visualization"],
    image: "https://cdn.britannica.com/45/231245-050-D7E2EA32/weather-map-meteorology.jpg",
  },
  {
    title: "Protein Structure Prediction Visualization Platform",
    description: "Predicting protein folding patterns and creating interactive 3D visualizations of the results. (In Progress)",
    tags: ["Bioinformatics", "3D Visualization", "Molecular", "React"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/maxizosimov", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/maxim-izosimov/", icon: "Linkedin" },
  { name: "Email", url: "mailto:maxizosimov@gmail.com", icon: "Mail" },
];

// About content
export const ABOUT_ME = `
Born and raised in Stockholm, I'm currently a senior at Northeastern University pursuing a Bachelor's in Data Science with a minor in Business Administration. 
By day, I work as a Software Engineer at a stealth-mode AI startup in the health fintech space building intelligent systems that make complex healthcare and financial data more actionable.

My work sits at the intersection of AI, data engineering, and product innovation. 
Over the past few years, I've focused on large language model (LLM) integration, building tools that leverage proprietary and qualitative data to solve nuanced, high stakes problems.
 I've also researched and benchmarked document processing models to push the limits of automated understanding.

What drives me? A deep fascination with emerging technology and a constant curiosity to explore what's next. 
Whether it's building custom pipelines, prototyping with the latest models, or experimenting with bleeding-edge frameworks, I thrive on bringing ideas to life.

When I'm not coding or deep in model evaluations, you'll find me watching F1 races, obsessing over hockey stats, 
or hacking together fun side projects just for the joy of learning.
`;