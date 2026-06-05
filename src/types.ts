export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  date: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface SkillItem {
  name: string;
  level: 'proficient' | 'training';
}

export interface SkillDomain {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface JourneyLink {
  label: string;
  url: string;
}

export interface JourneyEntry {
  id: string;
  date: string;
  phase: string;
  title: string;
  description: string;
  images?: string[];
  links?: JourneyLink[];
  status: 'completed' | 'current' | 'revised';
  revisionNote?: string;
}
