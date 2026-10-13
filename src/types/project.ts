export type ProjectCategory =
  | "All"
  | "AI"
  | "CRM/ATS"
  | "E-commerce"
  | "Automation"
  | "Web Apps";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "demo" | "case-study";
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  metrics: ProjectMetric[];
  images: string[];
  links: ProjectLink[];
  featured: boolean;
  order: number;
}
