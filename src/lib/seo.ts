import type { Metadata } from "next";
import { geoData } from "@/data/geo";
import { profileData } from "@/data/profile";
import { SITE_CONFIG } from "./constants";
import type { BreadcrumbItem, Project, InsightPost, FaqItem } from "@/types";

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og-default.png",
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
}): Metadata {
  const url = `${SITE_CONFIG.url}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: `${title} | ${profileData.name}`,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${profileData.name}`,
      description,
      url,
      siteName: `${profileData.name} - Portfolio`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${profileData.name}`,
        },
      ],
      type: type === "article" ? "article" : "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profileData.name}`,
      description,
      images: [image],
      creator: profileData.name,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: geoData.role,
    description: geoData.positioningSentence,
    url: SITE_CONFIG.url,
    email: `mailto:${profileData.email}`,
    sameAs: geoData.sameAsUrls,
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.city,
      addressCountry: profileData.country,
    },
    knowsAbout: [
      "MERN Stack",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "LangChain",
      "LangGraph",
      "Twilio Voice AI",
      "Retrieval-Augmented Generation (RAG)",
      "Applicant Tracking Systems (ATS)",
      "Customer Relationship Management (CRM)",
      "Web Scraping with Puppeteer",
    ],
  };
}

export function getWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profileData.name} Portfolio & AI Engineering Lab`,
    url: SITE_CONFIG.url,
    description: geoData.positioningSentence,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };
}

export function getProfessionalServiceJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profileData.name} - Full-Stack & AI Engineering Services`,
    url: SITE_CONFIG.url,
    telephone: "",
    email: profileData.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.city,
      addressCountry: profileData.country,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    serviceType: geoData.servicesList,
  };
}

export function getProjectJsonLd(project: Project): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.tagline,
    description: project.solution,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud / Web",
    keywords: project.stack.join(", "),
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };
}

export function getFaqJsonLd(faqs: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleJsonLd(post: InsightPost): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/insights/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}
