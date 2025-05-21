import { NavItem, Project, Skill, SocialLink } from "../types";

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
  { name: "Python", level: 93 },
  { name: "LLM Evaluation", level: 89 },
  { name: "LLM Fine-Tuning", level: 85 },
  { name: "PyTorch/TensorFlow", level: 82 },
  { name: "Model Benchmarking", level: 91 },
  { name: "Statistical Analysis", level: 88 },
  { name: "AWS/Azure Cloud", level: 82 },
  { name: "RAG Systems", level: 84 },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "AI Text Generator",
    description: "A natural language processing application that generates human-like text based on input prompts.",
    tags: ["AI", "NLP", "React", "Python"],
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis dashboard for monitoring social media conversations.",
    tags: ["Machine Learning", "Data Visualization", "React", "TensorFlow"],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Chatbot Framework",
    description: "An extensible framework for building customizable AI chatbots for various domains.",
    tags: ["NLP", "API Design", "JavaScript", "Python"],
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
Born and raised in Stockholm, I’m currently a senior at Northeastern University pursuing a Bachelor's in Data Science with a minor in Business Administration. 
By day, I work as a Software Engineer at a stealth-mode AI startup in the health fintech space building intelligent systems that make complex healthcare and financial data more actionable.

My work sits at the intersection of AI, data engineering, and product innovation. 
Over the past few years, I’ve focused on large language model (LLM) integration, building tools that leverage proprietary and qualitative data to solve nuanced, high stakes problems.
 I’ve also researched and benchmarked document processing models to push the limits of automated understanding.

What drives me? A deep fascination with emerging technology and a constant curiosity to explore what’s next. 
Whether it's building custom pipelines, prototyping with the latest models, or experimenting with bleeding-edge frameworks, I thrive on bringing ideas to life.

When I’m not coding or deep in model evaluations, you’ll find me watching F1 races, obsessing over hockey stats, 
or hacking together fun side projects just for the joy of learning.
`;