import type { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "ai-fullstack-dev",
    role: "AI & Full-Stack Developer",
    company: "Independent Client Engagements",
    period: "2024 – Present",
    location: "Remote",
    type: "Independent / Freelance",
    description:
      "Architecting production-grade web applications with integrated AI intelligence for high-growth tech clients.",
    achievements: [
      "Engineered automated candidate screening voice agents using Twilio Voice and streaming LLMs, reducing preliminary recruiter screen workloads by 70%.",
      "Designed and delivered an enterprise multi-tenant CRM using NestJS and MongoDB with zero cross-tenant data leakage.",
      "Built multi-step RAG assistants with LangGraph featuring live tool-calling and source citation tracking.",
      "Developed high-throughput Puppeteer price intelligence scrapers handling 45,000+ daily marketplace catalog checks.",
    ],
    technologies: [
      "Next.js ",
      "NestJS",
      "LangChain",
      "LangGraph",
      "Twilio",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
    ],
  }
];
