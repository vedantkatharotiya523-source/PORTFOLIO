import type { ProcessStep } from "@/types";

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Scope",
    duration: "Week 1",
    description:
      "Deep dive into business goals, user personas, technical constraints, data schemas, and AI integration feasibility. Defining measurable KPIs before writing any code.",
    deliverables: [
      "Technical architecture blueprint",
      "Domain model & database schema draft",
      "Milestone roadmap & fixed estimate",
    ],
  },
  {
    step: "02",
    title: "Design & Prototype",
    duration: "Week 1–2",
    description:
      "Creating modern, accessible UI layouts with clear user journeys. Prototyping prompt chains, agent tool schemas, and Twilio voice call conversation scripts.",
    deliverables: [
      "Interactive component mockups",
      "AI conversation flow diagram",
      "API request/response contracts",
    ],
  },
  {
    step: "03",
    title: "Build & Integrate",
    duration: "Week 2–5",
    description:
      "Iterative sprints with clean TypeScript code. Building NestJS backend microservices, Next.js frontend pages, database migrations, and LangChain/LangGraph pipelines.",
    deliverables: [
      "Weekly staging deployment builds",
      "Test suites (unit & integration)",
      "Continuous progress demos",
    ],
  },
  {
    step: "04",
    title: "Test & Launch",
    duration: "Week 5–6",
    description:
      "Rigorous quality assurance: end-to-end user flows with Playwright, accessibility audits with axe-core, Core Web Vitals profiling, and production environment setup.",
    deliverables: [
      "Production deployment on Vercel / Cloud",
      "Lighthouse 90+ performance report",
      "Automated CI/CD workflows",
    ],
  },
  {
    step: "05",
    title: "Support & Optimize",
    duration: "Ongoing",
    description:
      "Post-launch monitoring, real-time error tracking, AI token cost optimization, and feature enhancements based on live user analytics.",
    deliverables: [
      "30-day post-launch warranty",
      "System administration documentation",
      "Performance and telemetry review",
    ],
  },
];
