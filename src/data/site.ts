// All site content lives here. Edit this file to update the website.

export const site = {
  name: 'Maxim Izosimov',
  title: 'Maxim Izosimov — Software Engineer, AI & Data',
  description:
    'Software engineer working on LLM systems, model evaluation and data engineering. Based in Boston, from Stockholm.',
  role: 'Software Engineer · AI & Data',
  location: 'Boston, MA · from Stockholm',
  email: 'maxizosimov@gmail.com',
  tagline:
    'I build intelligent systems that make complex data actionable — mostly LLM integration, model evaluation and the pipelines around them.',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/maxizosimov' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxim-izosimov/' },
  { label: 'Email', href: `mailto:${site.email}` },
];

// Each string is one paragraph.
export const about = [
  "Born and raised in Stockholm, I'm studying Data Science with a minor in Business Administration at Northeastern University. By day I work as a Software Engineer at a stealth-mode AI startup in the health fintech space, building systems that make complex healthcare and financial data more actionable.",
  "My work sits at the intersection of AI, data engineering and product. I've focused on large language model integration — tools that use proprietary and qualitative data to solve nuanced, high-stakes problems — and I've researched and benchmarked document processing models to push the limits of automated understanding.",
  "When I'm not deep in model evaluations, I'm watching F1, obsessing over hockey stats, or hacking together side projects for the joy of learning.",
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    org: 'Stealth AI startup · Health fintech',
    period: 'Current',
    summary:
      'LLM integration over proprietary and qualitative data; data pipelines that turn healthcare and financial records into decisions.',
  },
  {
    role: 'Research · Document AI benchmarking',
    org: 'Benchmarking paper',
    period: '',
    summary:
      'Researched and benchmarked document processing models, measuring where automated understanding holds up and where it breaks.',
  },
  {
    role: 'B.S. Data Science, minor in Business Administration',
    org: 'Northeastern University',
    period: '',
    summary: 'Boston, MA.',
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status?: 'In progress' | 'Shipped';
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'A language model from scratch',
    description:
      'A custom BPE tokenizer and a decoder-only transformer with every core component — embeddings, self-attention, feed-forward and normalization layers — trained on a personal NVIDIA GPU.',
    tags: ['PyTorch', 'Transformers', 'NLP'],
    status: 'In progress',
  },
  {
    title: 'Neural weather predictor',
    description:
      "Tired of Boston's unpredictable weather: a deep learning system that forecasts localized weather over time, with an interactive dashboard showing how conditions evolve.",
    tags: ['Time series', 'Geospatial', 'Visualization'],
    status: 'In progress',
  },
  {
    title: 'Protein structure visualization',
    description:
      'Predicting protein folding patterns and exploring the results as interactive 3D structures in the browser.',
    tags: ['Bioinformatics', '3D', 'React'],
    status: 'In progress',
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Machine learning',
    items: ['LLM evaluation', 'Model benchmarking', 'Deep learning', 'Fine-tuning', 'RAG systems', 'Statistical analysis'],
  },
  {
    group: 'Languages & frameworks',
    items: ['Python', 'PyTorch', 'Hugging Face Transformers', 'LangChain', 'FastAPI', 'MLflow'],
  },
  {
    group: 'Infrastructure',
    items: ['AWS', 'SageMaker', 'Azure', 'Docker'],
  },
];
