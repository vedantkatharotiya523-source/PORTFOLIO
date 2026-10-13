import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "ai-powered-ats-twilio-calling",
    title: "AI-Powered ATS with Twilio AI Calling",
    tagline:
      "Applicant tracking system with automated resume screening and AI voice calls that conduct phone interviews.",
    category: "AI",
    problem:
      "Recruiters spend over 20 hours per week scheduling and conducting repetitive 10-minute initial qualification calls, leading to hiring delays and candidate drop-off.",
    solution:
      "Engineered an autonomous ATS pipeline that scores inbound resumes against role criteria and triggers automated conversational Twilio voice calls to conduct preliminary screening interviews.",
    features: [
      "AI resume parser and semantic scoring against job requisitions",
      "Automated outbound voice calls via Twilio Voice API with conversational speech recognition",
      "Real-time transcript generation, candidate scoring, and key answer highlights",
      "Interactive recruitment Kanban board with drag-and-drop pipeline stages",
      "Low-latency streaming audio pipeline with conversational fallback fillers for slow LLM responses",
    ],
    stack: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "Twilio Voice API",
      "Tailwind CSS",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Screening Time Saved", value: "70%" },
      { label: "Call Qualification Rate", value: "92%" },
      { label: "Average Call Latency", value: "< 1.2s" },
      { label: "Candidates Processed", value: "1,500+" },
    ],
    images: [
      "/projects/ai-powered-ats-twilio-calling/cover.webp",
      "/projects/ai-powered-ats-twilio-calling/1.webp",
      "/projects/ai-powered-ats-twilio-calling/2.webp",
    ],
    links: [
      {
        label: "Live Demonstration",
        url: "/ai-lab",
        type: "demo",
      },
      {
        label: "Technical Architecture",
        url: "/insights/how-ai-voice-calling-works-inside-an-ats",
        type: "case-study",
      },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "multi-tenant-crm",
    title: "Multi-Tenant CRM",
    tagline:
      "Enterprise sales CRM with deal pipelines, duplicate detection, and per-tenant database isolation.",
    category: "CRM/ATS",
    problem:
      "B2B businesses required a dedicated CRM platform with strict data privacy across client organizations, avoiding shared table leaks and exorbitant SaaS costs.",
    solution:
      "Designed a multi-tenant CRM on NestJS and MongoDB featuring automated database connection switching per tenant, pre-leads triage, and employee-referral attribution.",
    features: [
      "Strict per-tenant database isolation preventing cross-organization leakage",
      "Pre-leads triage pipeline with automated status classification",
      "Fuzzy and Levenshtein duplicate lead detection to prevent duplicate outreach",
      "Interactive Deals pipeline board with revenue forecasting and stages",
      "Employee-referral attribution engine linking incoming leads to internal advocates",
      "Comprehensive activity timelines recording calls, meetings, and tasks",
    ],
    stack: [
      "Next.js 15",
      "Redux Toolkit",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Tenant Data Isolation", value: "100%" },
      { label: "Duplicate Leads Filtered", value: "35%" },
      { label: "Pipeline Load Speed", value: "< 250ms" },
      { label: "Daily Active Users", value: "300+" },
    ],
    images: [
      "/projects/multi-tenant-crm/cover.webp",
      "/projects/multi-tenant-crm/1.webp",
      "/projects/multi-tenant-crm/2.webp",
    ],
    links: [
      {
        label: "Case Study Breakdown",
        url: "/insights/building-a-multi-tenant-crm-with-nestjs",
        type: "case-study",
      },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "smart-campaign-email-studio",
    title: "Smart Email / Campaign Studio",
    tagline:
      "Campaign platform generating static and dynamic AI email variants with spam score auditing.",
    category: "Web Apps",
    problem:
      "Marketing teams waste countless hours drafting personalized email variants and frequently land in spam folders due to unmonitored keyword triggers.",
    solution:
      "Built a campaign studio utilizing LangChain to draft segmented email copy variants and execute pre-send spam heuristic checks before dispatching via Resend.",
    features: [
      "Dynamic AI-assisted email variant generation tailored to customer cohorts",
      "Automated spam score checker analyzing trigger words and HTML structure",
      "Visual template composer with real-time responsive email previews",
      "Audience segmentation based on purchase history and engagement metrics",
      "Transactional and bulk sending pipelines with webhook delivery tracking",
    ],
    stack: [
      "Next.js 15",
      "Node.js",
      "LangChain",
      "Resend",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Spam Score Reduction", value: "48%" },
      { label: "Open Rate Increase", value: "+24%" },
      { label: "Copy Drafting Time", value: "-65%" },
      { label: "Emails Delivered", value: "500k+" },
    ],
    images: [
      "/projects/smart-campaign-email-studio/cover.webp",
      "/projects/smart-campaign-email-studio/1.webp",
      "/projects/smart-campaign-email-studio/2.webp",
    ],
    links: [
      {
        label: "View Overview",
        url: "/projects/smart-campaign-email-studio",
        type: "case-study",
      },
    ],
    featured: true,
    order: 3,
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    tagline:
      "High-speed headless e-commerce storefront with cart, checkout, and inventory administration.",
    category: "E-commerce",
    problem:
      "Monolithic e-commerce storefronts exhibited slow mobile page loads, clunky checkout flows, and poor inventory management across multiple storage locations.",
    solution:
      "Engineered a Next.js 15 headless storefront with sub-second page transitions, optimistic cart management, PostgreSQL transactional safety, and admin controls.",
    features: [
      "Server-rendered catalog pages with Core Web Vitals optimization",
      "Optimistic client cart with local storage persistence and stock reservation",
      "Multi-warehouse inventory tracking with automated replenishment alerts",
      "Administrative dashboard for order lifecycle management and revenue charts",
      "Role-based access control for store managers and order fulfillers",
    ],
    stack: [
      "Next.js 15",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "TypeScript",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Checkout Conversion", value: "+18%" },
      { label: "Catalog Query Time", value: "< 45ms" },
      { label: "SKUs Managed", value: "10,000+" },
    ],
    images: [
      "/projects/ecommerce-platform/cover.webp",
      "/projects/ecommerce-platform/1.webp",
      "/projects/ecommerce-platform/2.webp",
    ],
    links: [
      {
        label: "Product Details",
        url: "/projects/ecommerce-platform",
        type: "case-study",
      },
    ],
    featured: true,
    order: 4,
  },
  {
    slug: "ecommerce-scrapers-price-intelligence",
    title: "E-commerce Scrapers & Price Intelligence",
    tagline:
      "Resilient Puppeteer scrapers monitoring competitive pricing with catalog reconciliation.",
    category: "Automation",
    problem:
      "Online merchants lose sales when competitors undercut prices, but manual monitoring across thousands of changing URLs is unsustainable.",
    solution:
      "Architected an automated Puppeteer scraping engine that crawls marketplace catalogs, matches equivalent items using fuzzy algorithms, and alerts on price changes.",
    features: [
      "Distributed Puppeteer cluster with proxy rotation and stealth browsing",
      "Fuzzy title and specification catalog matching algorithm",
      "Automated price variance and inventory stock diff calculations",
      "Scheduled cron execution with failure retry pipelines",
      "RESTful API delivering pricing intelligence to internal ERP systems",
    ],
    stack: [
      "Node.js",
      "Puppeteer",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Redis",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Catalog Match Accuracy", value: "96.4%" },
      { label: "Daily URLs Monitored", value: "45,000+" },
      { label: "Scraper Uptime", value: "99.8%" },
      { label: "Margin Optimization", value: "+8.5%" },
    ],
    images: [
      "/projects/ecommerce-scrapers-price-intelligence/cover.webp",
      "/projects/ecommerce-scrapers-price-intelligence/1.webp",
      "/projects/ecommerce-scrapers-price-intelligence/2.webp",
    ],
    links: [
      {
        label: "Architecture Article",
        url: "/insights/how-ecommerce-price-scrapers-and-catalog-matching-work",
        type: "case-study",
      },
    ],
    featured: true,
    order: 5,
  },
  {
    slug: "ai-rag-assistant-business",
    title: "AI Chatbot / RAG Assistant for Business Apps",
    tagline:
      "Enterprise RAG assistant grounding answers in internal documentation and tenant data.",
    category: "AI",
    problem:
      "Off-the-shelf AI models hallucinate answers when answering domain-specific inquiries and lack the ability to check live database records securely.",
    solution:
      "Constructed a multi-step LangGraph agent utilizing pgvector hybrid search for knowledge retrieval, alongside validated SQL tool execution for user-specific data queries.",
    features: [
      "LangGraph cyclical reasoning graph for query reformulation and validation",
      "Hybrid vector and lexical search with pgvector and reciprocal rank fusion",
      "Verifiable citation links pointing to source documents and timestamps",
      "Safe SQL tool-calling with read-only parameter validation",
      "Streaming SSE responses with real-time reasoning progress chips",
    ],
    stack: [
      "Next.js 15",
      "LangGraph",
      "LangChain",
      "pgvector",
      "PostgreSQL",
      "Node.js",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Citation Accuracy", value: "99.1%" },
      { label: "Query Resolution Rate", value: "86%" },
      { label: "Average First Token", value: "420ms" },
      { label: "Documents Indexed", value: "25,000+" },
    ],
    images: [
      "/projects/ai-rag-assistant-business/cover.webp",
      "/projects/ai-rag-assistant-business/1.webp",
      "/projects/ai-rag-assistant-business/2.webp",
    ],
    links: [
      {
        label: "Interactive Architecture",
        url: "/ai-lab",
        type: "demo",
      },
      {
        label: "RAG Technical Guide",
        url: "/insights/rag-chatbot-for-business-data-knowledge-base-plus-user-answers",
        type: "case-study",
      },
    ],
    featured: true,
    order: 6,
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    tagline:
      "Tailored high-performance web platforms engineered for bespoke client workflows.",
    category: "Web Apps",
    problem:
      "Generic SaaS products fail to support unique operational workflows, causing spreadsheet chaos and fragmented manual workarounds.",
    solution:
      "Develop purpose-built web applications combining clean modular NestJS backend services, relational PostgreSQL databases, and modern Next.js 15 interfaces.",
    features: [
      "End-to-end full-stack design from database schemas to reactive interfaces",
      "Strict TypeScript domain modeling across all endpoints and states",
      "Enterprise role-based authorization and session management",
      "Modern animations and accessible keyboard navigation",
      "Automated CI/CD testing and high-performance serverless deployments",
    ],
    stack: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    // TODO: replace with real numbers
    metrics: [
      { label: "Code Coverage", value: "90%+" },
      { label: "System Availability", value: "99.9%" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Deploy Time", value: "< 5m" },
    ],
    images: [
      "/projects/custom-web-applications/cover.webp",
      "/projects/custom-web-applications/1.webp",
      "/projects/custom-web-applications/2.webp",
    ],
    links: [
      {
        label: "Explore Services",
        url: "/services",
        type: "demo",
      },
    ],
    featured: false,
    order: 7,
  },
];
