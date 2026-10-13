import type { FaqItem } from "@/types";

export const servicesFaqData: FaqItem[] = [
  {
    id: "faq-ai-voice-ats",
    question: "Can you add AI voice calling to an existing ATS or CRM?",
    answer:
      "Yes. Using Twilio Media Streams, Node.js or NestJS backend servers, and streaming speech-to-text with conversational LLMs, automated voice screening can be added to any web application via webhooks and REST APIs without rebuilding your core database.",
    category: "Services",
  },
  {
    id: "faq-slow-llm-calls",
    question: "How do you handle slow AI responses during phone calls?",
    answer:
      "Voice interactions require responses within 800–1200ms to feel natural. We use streaming LLM output buffers, early conversational fillers (e.g., 'Got it, let me check that...'), and optimized lightweight models to prevent dead air and Twilio webhook timeouts.",
    category: "Services",
  },
  {
    id: "faq-crm-timeline",
    question: "How long does a custom multi-tenant CRM take to build?",
    answer:
      "A production-ready custom CRM typically takes between 4 to 8 weeks depending on complexity. Core pipelines (leads, deals, per-tenant database isolation, activity logging) are delivered by week 4, followed by integrations, custom reporting, and security hardening.",
    category: "Services",
  },
  {
    id: "faq-langgraph-cost",
    question: "What does a LangGraph AI agent cost to build?",
    answer:
      "Development cost depends on the number of reasoning steps and external database tools required. Typical standalone agent microservices range from $2,500 to $6,000 for development, with ongoing model inference costs generally under $50–$200/month for moderate business usage.",
    category: "Services",
  },
  {
    id: "faq-nestjs-vs-express",
    question: "Why choose NestJS over plain Express for business backends?",
    answer:
      "NestJS introduces an opinionated modular architecture, dependency injection, and native TypeScript types. This makes multi-tenant connection routing, enterprise authentication guards, and DTO validation dramatically cleaner and less error-prone over time.",
    category: "Services",
  },
  {
    id: "faq-multi-tenant-isolation",
    question: "How is multi-tenant security enforced at the database level?",
    answer:
      "We implement database-level isolation: separate schemas or databases per tenant in PostgreSQL, or dedicated database connections per tenant in MongoDB. Requests are verified via signed JWT tokens containing the tenant identifier.",
    category: "Services",
  },
  {
    id: "faq-engagement-models",
    question: "What engagement models do you work with?",
    answer:
      "I work on both fixed-scope milestone projects (ideal for defined MVPs and platform launches) and monthly dedicated engineering retainers (ideal for ongoing feature shipping and AI experimentation).",
    category: "Services",
  },
  {
    id: "faq-code-ownership",
    question: "Do I retain 100% intellectual property and code ownership?",
    answer:
      "Yes. Upon project completion, all source code, database migration scripts, Docker configs, and documentation belong completely to you under standard commercial ownership terms.",
    category: "Services",
  },
];
