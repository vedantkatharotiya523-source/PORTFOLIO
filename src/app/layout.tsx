import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cursor } from "@/components/layout/Cursor";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getPersonJsonLd,
  getWebSiteJsonLd,
  getProfessionalServiceJsonLd,
} from "@/lib/seo";
import { geoData } from "@/data/geo";
import { profileData } from "@/data/profile";
import { SITE_CONFIG } from "@/lib/constants";
import type { ChildrenProps } from "@/types";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} | ${geoData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: geoData.positioningSentence,
  metadataBase: new URL(SITE_CONFIG.url),
  authors: [{ name: profileData.name, url: SITE_CONFIG.url }],
  creator: profileData.name,
  keywords: [
    "MERN Stack Developer",
    "AI-Powered Full-Stack Developer",
    "Next.js 15",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "LangChain",
    "LangGraph",
    "Twilio AI Calling",
    "ATS Developer",
    "Multi-Tenant CRM",
    "Web Scraper Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${profileData.name} | ${geoData.role}`,
    description: geoData.positioningSentence,
    siteName: `${profileData.name} - Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${geoData.role}`,
    description: geoData.positioningSentence,
    creator: profileData.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <JsonLd schema={getPersonJsonLd()} />
        <JsonLd schema={getWebSiteJsonLd()} />
        <JsonLd schema={getProfessionalServiceJsonLd()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col bg-[var(--background)] text-[var(--text)]`}
      >
        {/* Accessible skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#7C5CFF] text-white rounded-lg shadow-lg font-medium"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgress />
            <Cursor />
            <Navbar />
            <main id="main-content" className="flex-1 flex flex-col pt-24 sm:pt-28 w-full max-w-full overflow-x-clip">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
