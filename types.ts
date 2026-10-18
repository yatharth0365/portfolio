export type SkillCategory = {
  category: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  href?: string;
  tags: string[];
  featured?: boolean;
  award?: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Education = {
  degree: string;
  school: string;
  year: string;
};

export type Resume = {
  name: string;
  email: string;
  phone: string;
  education: Education[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
};