export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Independent / Freelance";
  description: string;
  achievements: string[];
  technologies: string[];
}
