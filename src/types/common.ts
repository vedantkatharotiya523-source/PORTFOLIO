import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react";
import type { Project } from "./project";
import type { Service } from "./service";
import type { InsightPost } from "./insight";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  keywords?: string[];
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export interface BaseComponentProps extends ClassNameProps {
  children?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean;
}

export interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "glow";
  size?: "sm" | "md";
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
  glow?: boolean;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export interface SplitTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "span" | "p";
  delay?: number;
}

export interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export interface JsonLdProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
  className?: string;
}

export interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export interface ProjectMetaProps {
  project: Project;
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export interface InsightCardProps {
  post: InsightPost;
  className?: string;
}

export interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export interface InsightPageProps {
  params: Promise<{ slug: string }>;
}
