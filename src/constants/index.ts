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
  { name: "AI/ML", level: 85 },
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 82 },
  { name: "Node.js", level: 75 },
  { name: "Data Science", level: 78 },
  { name: "Deep Learning", level: 72 },
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
I'm a passionate AI enthusiast and developer focused on creating intelligent solutions 
that solve real-world problems. With a strong foundation in machine learning, 
natural language processing, and software development, I bridge the gap between 
cutting-edge AI research and practical applications.

My journey in AI began with a fascination for how machines can learn and adapt. 
This led me to explore various aspects of machine learning, from neural networks 
to reinforcement learning. I'm particularly interested in how large language models 
can transform human-computer interaction and enable new forms of creative expression.

When I'm not coding or training models, I enjoy [your hobbies/interests] and 
[something else about you]. I believe in ethical AI development and am committed 
to creating technology that benefits humanity.
`;