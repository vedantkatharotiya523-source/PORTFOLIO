import type { SkillGroup } from "@/types";

export const skillGroupsData: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Modern, reactive, and accessible web interfaces built for high speed and seamless UX.",
    skills: [
      { name: "Next.js 15 (App Router)", level: "Expert", category: "frontend", highlight: true },
      { name: "React 19", level: "Expert", category: "frontend", highlight: true },
      { name: "TypeScript (Strict)", level: "Expert", category: "frontend", highlight: true },
      { name: "Tailwind CSS v4", level: "Expert", category: "frontend", highlight: true },
      { name: "Redux Toolkit", level: "Proficient", category: "frontend" },
      { name: "Framer Motion", level: "Advanced", category: "frontend", highlight: true },
    ],
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    description: "Layered, typed, and scalable server architectures with modular services.",
    skills: [
      { name: "NestJS", level: "Expert", category: "backend", highlight: true },
      { name: "Node.js", level: "Expert", category: "backend", highlight: true },
      { name: "Express", level: "Proficient", category: "backend" },
      { name: "RESTful APIs", level: "Expert", category: "backend" },
      { name: "WebSockets & SSE", level: "Advanced", category: "backend", highlight: true },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational integrity and high-performance document data layers.",
    skills: [
      { name: "PostgreSQL", level: "Expert", category: "databases", highlight: true },
      { name: "MongoDB", level: "Expert", category: "databases", highlight: true },
      { name: "Prisma ORM", level: "Advanced", category: "databases" },
      { name: "TypeORM", level: "Advanced", category: "databases" },
      { name: "Mongoose", level: "Expert", category: "databases" },
      { name: "Redis Caching", level: "Advanced", category: "databases" },
    ],
  },
  {
    id: "ai",
    title: "AI & Autonomous Systems",
    description: "Production agent architectures, real-time voice, and grounded retrieval.",
    skills: [
      { name: "LangChain", level: "Expert", category: "ai", highlight: true },
      { name: "LangGraph", level: "Expert", category: "ai", highlight: true },
      { name: "RAG Architectures", level: "Expert", category: "ai", highlight: true },
      { name: "Vector Databases (pgvector)", level: "Advanced", category: "ai", highlight: true },
      { name: "OpenAI & Anthropic APIs", level: "Expert", category: "ai" },
      { name: "Prompt Design & Function Calling", level: "Expert", category: "ai" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & APIs",
    description: "Telephony, email dispatch, web scraping, and third-party gateways.",
    skills: [
      { name: "Twilio Voice & SMS", level: "Expert", category: "integrations", highlight: true },
      { name: "Resend & SMTP", level: "Advanced", category: "integrations" },
      { name: "Puppeteer Scraping", level: "Expert", category: "integrations", highlight: true },
      { name: "Stripe & Payment Gateways", level: "Proficient", category: "integrations" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    description: "Rigorous development environments, containers, and test suites.",
    skills: [
      { name: "Git & GitHub", level: "Expert", category: "tools" },
      { name: "Docker & Compose", level: "Advanced", category: "tools" },
      { name: "Postman & API Testing", level: "Expert", category: "tools" },
      { name: "Playwright E2E", level: "Advanced", category: "tools" },
      { name: "Vercel & Cloud Deployments", level: "Expert", category: "tools" },
    ],
  },
];
