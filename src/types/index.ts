export type ProjectCategory = 
  | 'All'
  | 'AI Ads'
  | 'Product Videos'
  | 'UGC'
  | 'Cinematic'
  | 'Social'
  | 'Animation'
  | 'Other';

export interface StoryboardShot {
  title: string;
  promptNote: string;
  image: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  featured: boolean;
  thumbnail: string;
  previewVideo: string;
  fullVideo: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  duration: string;
  client?: string;
  year: string;
  summary: string;
  description: string;
  tools: string[];
  metrics?: MetricItem[];
  storyboard?: StoryboardShot[];
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  useCases: string[];
  toolsUsed: string[];
  sampleProjectIds: string[];
  turnaroundTime: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  projectType: string;
  rating: number;
}

export interface ToolItem {
  name: string;
  category: 'Video Generation' | 'Audio & Voice' | 'Post-Production & VFX';
  badge: string;
  description: string;
  icon?: string;
}
