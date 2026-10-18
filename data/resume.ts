import type { Resume } from '@/types';

export const resume: Resume = {
  name: 'Yatharth Shrirame',
  email: 'yatharth.shrirame@gmail.com',
  phone: '+91 8793774341',
  education: [
    {
      degree: 'B.Tech Artificial Intelligence',
      school: 'GH Raisoni College of Engineering (GHRCE), Nagpur',
      year: 'Expected 2027',
    },
  ],
  skills: [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'SQL'],
    },
    {
      category: 'Web Fundamentals',
      skills: ['HTML', 'CSS'],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        'Scikit-learn',
        'TensorFlow',
        'Keras',
        'PyTorch',
        'Data Preprocessing',
        'Predictive Modelling',
        'Neural Networks',
      ],
    },
    {
      category: 'Data Science & Analytics',
      skills: [
        'Pandas',
        'Data Cleaning',
        'Data Validation',
        'Data Manipulation',
        'Data Integrity',
        'Data Reporting',
        'Statistics & Probability',
      ],
    },
    {
      category: 'Databases & Tools',
      skills: ['PostgreSQL', 'Microsoft Excel (Pivot Tables)', 'Google Workspace'],
    },
    {
      category: 'Fundamentals',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'File I/O',
        'CSV Processing',
      ],
    },
  ],
  experience: [
    {
      role: 'Data Analytics Intern',
      company: 'InAmigos Foundation',
      period: 'July 2026',
      points: [
        'Structured datasets',
        'AI applications research in non-profits',
        'Data validation',
      ],
    },
    {
      role: 'Python Programming Intern',
      company: 'Oasis Infobyte',
      period: 'April-May 2026',
      points: [
        'Algorithmic thinking',
        'Data structures',
        'Python workflows',
      ],
    },
  ],
  projects: [
    {
      name: 'Predictive OS',
      description:
        'Governed Industrial Predictive Maintenance Engine with confidence-gated decision routing (ALGOTHON\'26 Top 20 Winner).',
      href: 'https://predictive-os.yatharthshrirame.xyz',
      tags: ['Python', 'Predictive Maintenance', 'ML', 'Decision Routing'],
      featured: true,
      award: 'ALGOTHON\'26 Top 20 Winner',
    },
    {
      name: 'U.S. States Data Map Game',
      description:
        'Python, Pandas dataset processing & state tracking.',
      tags: ['Python', 'Pandas', 'Data Processing'],
    },
    {
      name: 'Automated Quiz Application',
      description:
        'Python OOP, live API fetching, modular logic.',
      tags: ['Python', 'OOP', 'API', 'Modular'],
    },
  ],
  certifications: [
    { name: 'Remote Sensing & GIS Using Python', issuer: 'India Space Academy' },
    { name: 'AI Tools & ChatGPT Workshop', issuer: 'be10x' },
    { name: 'Python 100 Days of Learning', issuer: '' },
    { name: 'C++ Training', issuer: '' },
  ],
};