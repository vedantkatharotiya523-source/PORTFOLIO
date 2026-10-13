import type { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "custom-web-apps",
    slug: "custom-web-apps",
    title: "Custom Web Applications",
    tagline: "Tailor-made full-stack applications with smart AI features built in.",
    description:
      "Full-cycle development from system design to cloud deployment. Clean Next.js 15 architectures coupled with rock-solid NestJS or Node backends, built strictly with TypeScript.",
    features: [
      "Modular full-stack architecture with strict domain typing",
      "Responsive, accessible UI with sub-second page loads",
      "Scalable REST and WebSocket API design",
      "Production-ready authentication and role-based access control",
    ],
    deliverables: [
      "Production Next.js application codebase",
      "Tested API endpoints with OpenAPI / Swagger documentation",
      "Automated CI/CD deployment pipeline configuration",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "NestJS", "PostgreSQL"],
    iconName: "Globe",
    estimatedTimeline: "3–6 weeks",
  },
  {
    id: "ai-agents-chatbots",
    slug: "ai-agents-chatbots",
    title: "AI Agents & Autonomous Chatbots",
    tagline: "Grounded conversational systems built with LangChain and LangGraph.",
    description:
      "Enterprise-ready AI agents capable of multi-step reasoning, external tool-calling, and verified RAG knowledge retrieval without hallucinations.",
    features: [
      "LangGraph cyclical state graphs with retry and human-in-the-loop validation",
      "Hybrid vector and keyword search using pgvector or Pinecone",
      "Document ingestion pipelines with chunking and token optimization",
      "Safe transactional tool execution against live databases",
    ],
    deliverables: [
      "Custom LangGraph agent microservice",
      "Vector search ingestion pipeline",
      "Interactive web chat interface with source citations",
    ],
    techStack: ["LangGraph", "LangChain", "pgvector", "OpenAI / Claude APIs", "Next.js"],
    iconName: "Bot",
    estimatedTimeline: "2–4 weeks",
  },
  {
    id: "ai-voice-calling",
    slug: "ai-voice-calling",
    title: "AI Voice Calling Systems",
    tagline: "Autonomous phone interview and screening pipelines powered by Twilio.",
    description:
      "Turnkey phone calling agents that dial candidates or customers, conduct real-time spoken conversations, and produce instant transcripts and structured evaluations.",
    features: [
      "Twilio Voice API integration with bidirectional audio streams",
      "Sub-second conversational turnarounds with streaming LLM inference",
      "Asynchronous buffer handlers preventing call drops during deep reasoning",
      "Structured call summaries, sentiment scoring, and ATS pipeline synchronization",
    ],
    deliverables: [
      "Twilio webhook handling server",
      "Audio streaming bridge service",
      "ATS/CRM webhook dispatch integration",
    ],
    techStack: ["Twilio Voice API", "Node.js", "NestJS", "LangChain", "WebSockets"],
    iconName: "PhoneCall",
    estimatedTimeline: "3–5 weeks",
  },
  {
    id: "crm-ats-engineering",
    slug: "crm-ats-engineering",
    title: "CRM & ATS Platform Engineering",
    tagline: "Multi-tenant pipeline management with strict data isolation.",
    description:
      "Bespoke sales CRMs and recruitment ATS platforms engineered to handle complex deals, duplicate lead prevention, referral attribution, and candidate pipelines.",
    features: [
      "Multi-tenant database schema isolation guaranteeing data privacy",
      "Interactive drag-and-drop Kanban boards with optimistic updates",
      "Fuzzy and Levenshtein lead deduplication algorithms",
      "Comprehensive activity timelines for emails, notes, and calls",
    ],
    deliverables: [
      "Complete multi-tenant web application",
      "Role-based tenant management admin console",
      "Data export and migration utilities",
    ],
    techStack: ["NestJS", "Next.js", "MongoDB", "Redux Toolkit", "PostgreSQL"],
    iconName: "Users",
    estimatedTimeline: "4–8 weeks",
  },
  {
    id: "email-campaign-tools",
    slug: "email-campaign-tools",
    title: "Smart Email & Campaign Tools",
    tagline: "Dynamic AI email generation and automated deliverability auditing.",
    description:
      "High-converting campaign studios enabling marketing and sales teams to generate hyper-personalized copy variants, segment audiences, and eliminate spam keywords.",
    features: [
      "Context-aware LLM email drafting based on recipient attributes",
      "Pre-send spam score audit engine analyzing email headers and text",
      "Dynamic visual template builder with instant device preview",
      "Reliable delivery infrastructure integrated with Resend or SMTP",
    ],
    deliverables: [
      "Campaign studio dashboard application",
      "Automated spam scoring engine",
      "Email delivery and event tracking webhook service",
    ],
    techStack: ["Next.js", "Node.js", "LangChain", "Resend", "PostgreSQL"],
    iconName: "Mail",
    estimatedTimeline: "2–4 weeks",
  },
  {
    id: "ecommerce-scrapers",
    slug: "ecommerce-scrapers",
    title: "E-commerce & Price Intelligence Scrapers",
    tagline: "Resilient headless scrapers and competitive catalog reconciliation.",
    description:
      "Automated Puppeteer scraping clusters that extract competitive pricing and inventory trends across marketplaces, reconciling mismatched product catalogs.",
    features: [
      "Headless Puppeteer cluster with proxy rotation and fingerprint cloaking",
      "Fuzzy catalog reconciliation matching titles, SKUs, and specifications",
      "Automated price variance calculations and margin alerts",
      "Historical pricing trends and competitor stock telemetry",
    ],
    deliverables: [
      "Headless scraper cluster deployment",
      "Catalog reconciliation engine",
      "Competitive pricing intelligence dashboard and API",
    ],
    techStack: ["Puppeteer", "Node.js", "PostgreSQL", "Docker", "Redis"],
    iconName: "Search",
    estimatedTimeline: "3–5 weeks",
  },
  {
    id: "backend-api-architecture",
    slug: "backend-api-architecture",
    title: "API & Backend Architecture",
    tagline: "High-throughput NestJS and Express services built for scale.",
    description:
      "Enterprise microservices, RESTful APIs, and real-time WebSocket servers built with clean layered architecture, dependency injection, and comprehensive validation.",
    features: [
      "Clean modular NestJS architecture with dependency injection",
      "Strict request/response DTO schemas validated with class-validator or Zod",
      "Rate-limiting, JWT authentication guards, and audit logging",
      "Low-latency caching with Redis",
    ],
    deliverables: [
      "NestJS or Express backend repository",
      "Interactive Swagger / OpenAPI documentation",
      "Unit and integration test suites",
    ],
    techStack: ["NestJS", "Express", "Node.js", "Redis", "TypeScript"],
    iconName: "Server",
    estimatedTimeline: "2–5 weeks",
  },
  {
    id: "database-design-optimization",
    slug: "database-design-optimization",
    title: "Database Design & Optimization",
    tagline: "Relational PostgreSQL and flexible MongoDB data modeling.",
    description:
      "Robust schema engineering, index optimization, connection pool tuning, and migration strategies for applications handling high transaction volumes.",
    features: [
      "Relational schema modeling in PostgreSQL with foreign keys and constraints",
      "Document schema design in MongoDB with index optimization",
      "Multi-tenant data partitioning and connection routing",
      "Query profiling, EXPLAIN ANALYZE debugging, and connection pooling",
    ],
    deliverables: [
      "Normalized schema definitions and migration scripts",
      "Optimized query indexes and execution benchmarks",
      "Backup, restore, and failover runbooks",
    ],
    techStack: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM", "Mongoose"],
    iconName: "Database",
    estimatedTimeline: "1–3 weeks",
  },
];
