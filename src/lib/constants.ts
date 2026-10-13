import type { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "Vedant Katharotiya",
  title: "Vedant Katharotiya | MERN Stack Developer & AI-Powered Full-Stack Developer",
  description:
    "Vedant Katharotiya is a MERN stack and AI-powered full-stack developer who builds ATS, CRM, campaign studio, e-commerce and scraper platforms with LangChain, LangGraph and Twilio AI calling.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.local",
  author: "Vedant Katharotiya",
  locale: "en_US",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "AI Lab", href: "/ai-lab", badge: "AI" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const FEATURE_FLAGS = {
  enableAskMyAiChat: false, // Default OFF as per prompt section 7
  enableAnalytics: true,
  enableLenisSmoothScroll: true,
};
