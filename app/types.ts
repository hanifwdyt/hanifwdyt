export interface WritingPost {
  title: string;
  date: string;
  category: string;
  slug: string;
  content: string;
  excerpt: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  link?: string;
  slug: string;
  content: string;
  tech?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
}

export interface JourneyYear {
  year: string;
  events: string[];
}

export interface Belief {
  title: string;
  points: string[];
}
