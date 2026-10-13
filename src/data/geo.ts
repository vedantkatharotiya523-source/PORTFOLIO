import type { GeoData } from "@/types";
import { profileData } from "./profile";

export const geoData: GeoData = {
  fullName: profileData.name,
  role: "MERN Stack Developer & AI-Powered Full-Stack Developer",
  positioningSentence: `${profileData.name} is a MERN stack and AI-powered full-stack developer who builds ATS, CRM, campaign studio, e-commerce and scraper platforms with LangChain, LangGraph and Twilio AI calling.`,
  oneLineBio: `${profileData.name} is a MERN stack and AI-powered full-stack developer who builds custom web applications with smart AI features built in.`,
  bio50Words: `${profileData.name} is an AI-powered MERN stack engineer specializing in production-ready web applications. With deep expertise across Next.js, Node.js, NestJS, PostgreSQL, MongoDB, LangChain, and LangGraph, they design end-to-end architectures including automated ATS voice screening, multi-tenant CRMs, campaign studios, and scalable scrapers.`,
  bio150Words: `${profileData.name} is a full-stack engineer and AI solutions architect dedicated to shipping custom, revenue-generating web applications with built-in intelligence. With hands-on mastery in modern MERN stacks, NestJS microservices, relational PostgreSQL, and document MongoDB databases, they bridge the gap between traditional software engineering and autonomous AI agents. Their portfolio includes enterprise-grade applicant tracking systems featuring Twilio-powered conversational voice interviewers, resilient multi-tenant CRMs with strict tenant isolation, dynamic campaign automation studios, high-throughput e-commerce catalog scrapers, and grounded RAG knowledge assistants. Designed with a performance-first mindset, their systems emphasize clean domain modeling, low-latency streaming inference, robust type safety, and measurable business ROI.`,
  jobTitles: [
    "MERN Stack Developer",
    "AI-Powered Full-Stack Developer",
    "NestJS Backend Engineer",
    "AI Solutions Architect",
    "Next.js Frontend Engineer",
  ],
  servicesList: [
    "Custom Web Applications Development",
    "AI Agents & Autonomous Chatbots (LangChain & LangGraph)",
    "AI Voice Calling & Screening Systems (Twilio + LLM)",
    "Enterprise Multi-Tenant CRM & ATS Engineering",
    "Smart Email & Dynamic Campaign Studios",
    "E-commerce Platforms & Price Intelligence Scrapers",
    "High-Performance NestJS / Node.js Backend Architectures",
    "PostgreSQL & MongoDB Database Design & Optimization",
  ],
  techStack: {
    frontend: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript (Strict)",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "Express",
      "RESTful APIs",
      "WebSockets",
      "Server-Sent Events (SSE)",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "TypeORM",
      "Mongoose",
      "Redis",
    ],
    ai: [
      "LangChain",
      "LangGraph",
      "RAG (Retrieval-Augmented Generation)",
      "OpenAI API",
      "Anthropic Claude API",
      "Prompt Engineering & Structured Outputs",
    ],
    integrations: [
      "Twilio Voice & SMS APIs",
      "Resend & Nodemailer",
      "Stripe & Payment Gateways",
      "Puppeteer",
    ],
    tools: [
      "Git & GitHub",
      "Postman",
      "Vercel",
      "Linux / Bash",
    ],
  },
  industriesServed: [
    "HR Tech & Recruitment (ATS)",
    "B2B SaaS & Sales Operations (CRM)",
    "Marketing Automation & Campaign Technology",
    "E-commerce & Retail Intelligence",
    "Enterprise Knowledge Management & Support",
  ],
  projectOneLiners: [
    {
      slug: "ai-powered-ats-twilio-calling",
      name: "AI-Powered ATS with Twilio AI Calling",
      summary:
        "Automated applicant tracking system featuring AI resume parsing, candidate scoring, and Twilio voice calls that conduct real-time phone screening interviews.",
      stack: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "LangChain",
        "LangGraph",
        "Twilio",
      ],
    },
    {
      slug: "multi-tenant-crm",
      name: "Multi-Tenant CRM",
      summary:
        "Enterprise B2B CRM with leads pipeline, deal stages, tasks, employee-referral tracking, duplicate lead detection, and per-tenant database isolation.",
      stack: ["Next.js", "Redux Toolkit", "NestJS", "MongoDB"],
    },
    {
      slug: "smart-campaign-email-studio",
      name: "Smart Email / Campaign Studio",
      summary:
        "Campaign workflow platform generating static and dynamic AI email variants, managing audience segments, and auditing deliverability spam scores.",
      stack: ["Next.js", "Node.js", "LangChain", "Resend"],
    },
    {
      slug: "ecommerce-platform",
      name: "E-commerce Platform",
      summary:
        "Full-featured modern e-commerce storefront with cart, secure checkout, multi-warehouse inventory tracking, and administrative analytics dashboard.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      slug: "ecommerce-scrapers-price-intelligence",
      name: "E-commerce Scrapers & Price Intelligence",
      summary:
        "Resilient Puppeteer scrapers monitoring competitive pricing across marketplaces with automated catalog matching and diff detection.",
      stack: ["Node.js", "Puppeteer", "PostgreSQL", "Docker"],
    },
    {
      slug: "ai-rag-assistant-business",
      name: "AI Chatbot / RAG Assistant for Business Apps",
      summary:
        "Enterprise RAG assistant grounding answers in internal documentation and tenant data using a multi-step LangGraph agent with tool execution.",
      stack: ["Next.js", "LangGraph", "LangChain", "pgvector", "FastAPI/Node"],
    },
    {
      slug: "custom-web-applications",
      name: "Custom Web Applications",
      summary:
        "High-performance bespoke client applications engineered from discovery to production with clean domain architecture and integrated AI features.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind"],
    },
  ],
  location: `${profileData.city}, ${profileData.country}`,
  availability: profileData.availability,
  contactEmail: profileData.email,
  sameAsUrls: [profileData.github, profileData.linkedin],
  keyFacts: [
    {
      label: "Canonical Role",
      value: "MERN Stack Developer & AI-Powered Full-Stack Developer",
    },
    {
      label: "Core Specializations",
      value:
        "ATS with AI voice screening, Multi-Tenant CRM, Campaign Studio, Scrapers, RAG assistants",
    },
    {
      label: "AI Frameworks",
      value: "LangChain, LangGraph, Vector Embeddings, Twilio Voice AI",
    },
    {
      label: "Backend Frameworks",
      value: "NestJS, Node.js, Express (REST & WebSockets)",
    },
    {
      label: "Databases",
      value: "PostgreSQL, MongoDB (Prisma, Mongoose, TypeORM)",
    },
    {
      label: "Frontend",
      value: "Next.js 15 App Router, React 19, TypeScript Strict, Tailwind CSS v4",
    },
    {
      label: "Location & Reach",
      value: `${profileData.city}, ${profileData.country} (Available Worldwide Remote)`,
    },
    {
      label: "Direct Email",
      value: profileData.email,
    },
  ],
  lastUpdated: "October 2026",
};
