---
name: portfolio-architecture
description: >-
  Next.js 15 multipage developer portfolio with smooth-scroll, Framer Motion animations,
  strict domain-typed TypeScript, data-driven content, SEO/AEO, and a contact pipeline.
---

# MASTER PROMPT — Build My Developer Portfolio

You are a senior Next.js engineer and product designer. Set up and build the COMPLETE project end to end (scaffold, pages, components, animations, data, SEO, contact form, verification). Do not stop at a skeleton. Follow every rule in this document.

Replace placeholders in `src/data/profile.ts` only: `[YOUR NAME]`, `[EMAIL]`, `[CITY]`, `[GITHUB]`, `[LINKEDIN]`. Never hardcode personal info inside components.

---

## PRIORITY ORDER (read first)

1. **GEO (Generative Engine Optimization) — TOP PRIORITY.** The site must be easy for ChatGPT, Claude, Perplexity, Gemini and Copilot to find, understand, trust and cite. When I'm asked "who is a good AI-powered MERN developer who builds ATS, CRM and AI calling?", the site should be a source the answer can draw from.
2. **User experience** (sections 10 and 11).
3. **AEO** (direct answers, snippets, voice).
4. **Classic SEO** (Google/Bing ranking).
5. Visual polish and animation.

If two requirements conflict, the higher one wins. GEO work is not a final polish step: build the content, facts and structured data foundation FIRST (see section 14), then design around it.

---

## 0. Who I Am (content source of truth)

- Role: **MERN Stack Developer & AI-Powered Full-Stack Developer**
- Backend: Node.js, Express, **NestJS**
- Databases: **PostgreSQL / SQL**, **MongoDB**
- AI: **LangChain, LangGraph**, RAG chatbots, agents, tool-calling, **Twilio AI voice calling**
- I build: **ATS (with AI calling), CRM, Campaign/Email Studio, E-commerce sites, E-commerce scrapers, custom web applications**
- Positioning line: *"I build custom web applications with smart AI features built in."*

---

## 1. Tech Stack (fixed, do not substitute)

- **Next.js 15 (App Router) + TypeScript (strict)**
- **Tailwind CSS v4** + `clsx` + `tailwind-merge`
- **Framer Motion** (`motion`) for component/page animation
- **Lenis** for smooth scrolling
- **GSAP + ScrollTrigger** only for the hero timeline and horizontal-scroll project strip
- **next-themes** (dark default, light supported)
- **React Hook Form + Zod** for the contact form
- **Resend** (or Nodemailer fallback) in a Route Handler for email delivery
- **lucide-react** icons, **next/font** (Geist or Inter + one display font)
- Package manager: `pnpm`

Scaffold command:
```bash
pnpm create next-app@latest portfolio --ts --tailwind --app --src-dir --eslint --import-alias "@/*"
```

---

## 2. Design Language (simple, modern, premium)

- Minimal layout, generous whitespace, max content width `1200px`, 12-col grid.
- Palette via CSS variables in `globals.css` (light + dark):
  - dark: bg `#0A0A0B`, surface `#111114`, border `#222228`, text `#EDEDEF`, muted `#8B8B94`
  - one accent: electric indigo/violet `#7C5CFF` (+ soft glow gradient `#7C5CFF → #22D3EE` used sparingly)
- Typography: large tight-tracking headlines (`clamp()` fluid sizes), small uppercase mono labels for section eyebrows.
- Rounded `2xl` cards, 1px borders, subtle noise/grid background, soft radial glow behind hero.
- No clutter, no stock illustrations, no more than one accent color.
- Fully responsive (mobile-first), 16px side gutter on mobile, no horizontal page scroll.
- Respect `prefers-reduced-motion`: disable parallax/marquee/scroll-jacking and fall back to simple fades.

---

## 3. Animation System (central, reusable)

All motion lives in `src/lib/motion.ts` (variants + easing constants). Components import from there. Never write ad-hoc durations in components.

- Easing: `[0.22, 1, 0.36, 1]`; durations `0.5–0.9s`.
- **Lenis** smooth scroll provider in `src/components/providers/SmoothScroll.tsx`, synced with GSAP ticker.
- **Page transitions**: `template.tsx` with fade + 16px upward slide, plus a thin top progress bar.
- **Reveal-on-scroll** component `<Reveal>` (fade/slide, stagger children via variants, `once: true`).
- **Split-text headline** (`<SplitText>`) letter/word reveal on hero.
- **Magnetic buttons** (`<MagneticButton>`) and custom soft cursor follower (desktop only).
- **Marquee** of tech logos (CSS animation, pause on hover).
- **Project cards**: hover tilt + image parallax + cursor-aware spotlight gradient.
- **Navbar**: floating pill, hides on scroll down, shows on scroll up, active-link underline with `layoutId`.
- **Number counters** for stats (animate when in view).
- **Scroll progress** line at top.
- **Horizontal scroll showcase** (GSAP ScrollTrigger pin) for featured projects on Home, desktop only.
- Keep Lighthouse Performance ≥ 90: lazy-load heavy motion, use `next/image`, avoid layout shift.

---

## 4. Folder Structure

```
src/
  app/
    layout.tsx            # fonts, theme, SmoothScroll, Navbar, Footer, metadata
    template.tsx          # page transition
    page.tsx              # Home
    about/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    services/page.tsx
    skills/page.tsx
    experience/page.tsx
    ai-lab/page.tsx
    insights/page.tsx     # MDX blog index
    insights/[slug]/page.tsx
    feed.xml/route.ts
    contact/page.tsx
    api/contact/route.ts
    not-found.tsx         # full-screen 404, no navbar/footer chrome
    sitemap.ts            # also: llms.txt / llms-full.txt live in /public
    robots.ts
    opengraph-image.tsx
  components/
    layout/    (Navbar, Footer, MobileMenu, ThemeToggle, ScrollProgress, Cursor)
    sections/  (Hero, FeaturedProjects, ServicesGrid, TechMarquee, Stats, ProcessTimeline, CTA, ...)
    ui/        (Button, MagneticButton, Badge, Card, SectionHeading, Reveal, SplitText)
    providers/ (SmoothScroll, ThemeProvider)
    projects/  (ProjectCard, ProjectGallery, ProjectMeta)
    forms/     (ContactForm)
  data/
    profile.ts  projects.ts  services.ts  skills.ts  experience.ts  process.ts  faq.ts
  lib/
    motion.ts  utils.ts  seo.ts  constants.ts
  types/
    profile.ts  project.ts  service.ts  skill.ts  experience.ts  contact.ts  common.ts  index.ts
public/
  projects/<slug>/cover.webp, 1.webp, 2.webp   # placeholder images until real screenshots exist
  resume.pdf
```

---

## 5. Strict Type Organization Rules

- **Zero Inline Interfaces**: do NOT declare inline `interface` or `type` inside components, pages, or data files.
- All types live in `src/types/` by domain:
  - `project.ts` — `Project`, `ProjectCategory`, `ProjectLink`, `ProjectMetric`
  - `service.ts` — `Service`
  - `skill.ts` — `SkillGroup`, `Skill`
  - `experience.ts` — `ExperienceItem`
  - `profile.ts` — `Profile`, `SocialLink`
  - `contact.ts` — `ContactFormValues`, `ContactApiResponse`
  - `common.ts` — `NavItem`, `SeoMeta`, generic helpers
- Re-export everything through `src/types/index.ts`.
- Zod schemas live in `src/lib/validators.ts` and types are inferred into `src/types/contact.ts`.

---

## 6. Data-Driven Content

All copy comes from `src/data/*`. Pages only map over data.

### Projects (`src/data/projects.ts`) — create all of these with slug, title, tagline, category, problem, solution, features[], stack[], metrics[], images[], links:
1. **AI-Powered ATS with Twilio AI Calling** — AI resume screening, candidate scoring, automated AI voice calls that screen candidates, call transcripts + summaries, pipeline board. Stack: Next.js, NestJS, PostgreSQL, LangChain, LangGraph, Twilio.
2. **Multi-Tenant CRM** — pre-leads, contacts, deals pipeline, tasks, activities, employee-referral attribution, duplicate lead detection, per-tenant database isolation. Stack: Next.js, Redux Toolkit, NestJS, MongoDB.
3. **Smart Email / Campaign Studio** — static + AI-generated dynamic emails, audience segments, sending, spam-score checker. Stack: Next.js, Node, LangChain.
4. **E-commerce Platform** — storefront, cart, checkout, admin panel, inventory. Stack: Next.js, Node, PostgreSQL.
5. **E-commerce Scrapers & Price Intelligence** — Puppeteer scrapers, catalog matching across marketplaces, price/quantity difference analysis, scheduled runs. Stack: Node, Puppeteer, PostgreSQL.
6. **AI Chatbot / RAG Assistant for Business Apps** — knowledge-base Q&A plus user-specific data answers, LangGraph agent with tools.
7. **Custom Web Applications** (catch-all case-study card for bespoke client work).

Use honest placeholder metrics clearly marked in a comment `// TODO: replace with real numbers`. Do not invent client names.

### Services (`src/data/services.ts`)
Custom web apps · AI agents & chatbots (LangChain/LangGraph) · AI voice calling (Twilio) · CRM/ATS development · Email & campaign tools · E-commerce + scrapers · API & backend (NestJS, Express) · Database design (PostgreSQL, MongoDB).

### Skills (`src/data/skills.ts`) grouped:
Frontend (Next.js, React, TypeScript, Tailwind, Redux Toolkit, Framer Motion) · Backend (Node, Express, NestJS, REST, WebSockets) · Databases (PostgreSQL, MongoDB, Prisma/TypeORM/Mongoose) · AI (LangChain, LangGraph, RAG, vector DBs, OpenAI/Anthropic APIs, prompt design) · Integrations (Twilio, Resend/SMTP, payment gateways) · Tools (Git, Docker, Postman, Puppeteer, Vercel).

---

## 7. Pages (all required)

1. **Home `/`** — Hero (split-text headline, subline, 2 CTAs: "View Projects" + "Hire Me", animated glow, tech marquee) → Stats counters (projects built, AI features shipped, years) → Featured Projects (horizontal scroll showcase) → Services grid → "AI inside every product" highlight block (LangGraph agent flow mini-diagram animated) → Process timeline (Discover, Design, Build, Launch, Support) → Testimonials placeholder (hidden if empty) → CTA banner.
2. **About `/about`** — short story, photo placeholder, values, what I'm good at, downloadable resume, current focus.
3. **Projects `/projects`** — filter tabs by category (AI, CRM/ATS, E-commerce, Automation, Web Apps) with animated layout transitions.
4. **Project detail `/projects/[slug]`** — `generateStaticParams`; hero, problem → solution → features → stack → results, image gallery, next-project link.
5. **Services `/services`** — detailed offerings, engagement models, FAQ accordion.
6. **Skills `/skills`** — grouped skill cards with level bars or tags.
7. **Experience `/experience`** — vertical animated timeline.
8. **AI Lab `/ai-lab`** — showcase of AI capabilities: animated diagrams for (a) RAG chatbot flow, (b) LangGraph multi-step agent, (c) Twilio AI call pipeline (Speech→LLM→TTS, mention async handling for slow LLM responses). Optional live "Ask my AI" chat widget behind a feature flag in `constants.ts`, default OFF.
9. **Contact `/contact`** — form (name, email, project type select, budget select, message), validation, success/error toast, direct email + social links, availability badge.
10. **404** — full-screen (`100vw × 100vh`, `position: fixed`), no navbar/footer, animated glitch/float text, button back home.

---

## 8. Contact Pipeline

- `POST /api/contact` Route Handler: validate with Zod server-side, rate-limit by IP (in-memory map fine), honeypot field, send via Resend, return typed `ContactApiResponse`.
- Env vars in `.env.example`: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- Client: React Hook Form + `zodResolver`, disabled state while submitting, accessible error messages.

---

## 9. GEO + AEO + SEO (GEO IS THE TOP PRIORITY, full implementation, not optional)

Goal, in priority order: be cited and recommended by ChatGPT, Claude, Perplexity, Gemini and Copilot (**GEO, most important**); be quoted as the direct answer by Google AI Overviews, Featured Snippets and voice (AEO); rank on Google/Bing (SEO). Sections 9.4 and 9.4b are the most important part of this document. Implement them first and most thoroughly.

### 9.1 Technical SEO
- Every page is **server-rendered / statically generated**. No important content may exist only after client JS runs.
- Central helper `src/lib/seo.ts`; every page exports `generateMetadata` with: unique `title` (≤60 chars, keyword first, brand last), `description` (≤155 chars, includes a benefit + CTA), `canonical`, `openGraph`, `twitter` (summary_large_image), `robots`, `alternates`.
- `app/sitemap.ts` (all routes + projects + insights, real `lastModified`), `app/robots.ts`, `app/manifest.ts`, favicon set, `apple-touch-icon`, dynamic OG image per page and per project.
- One `h1` per page, logical `h2/h3` hierarchy, landmarks (`header/nav/main/section/article/footer`), descriptive `alt` on every image, descriptive link text (no "click here").
- Clean lowercase hyphenated URLs, consistent trailing-slash policy, 301 for any renamed route, correct 404 status code.
- Breadcrumbs component + `BreadcrumbList` JSON-LD on all inner pages; strong internal linking (each project links to related service and next project; each insight links to related projects).
- Env-driven verification tags: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`. Privacy-friendly analytics only (Vercel Analytics or Plausible), no cookie banner needed.
- Core Web Vitals targets: **LCP < 2.0s, CLS < 0.05, INP < 200ms**, JS per route as small as possible, `next/image` with `priority` only on the hero, fonts via `next/font` with `display: swap`.

### 9.2 Structured data (JSON-LD, validated)
Create `src/components/seo/JsonLd.tsx` and inject:
- Site-wide: `Person` (name, jobTitle, `knowsAbout`, `sameAs` = GitHub/LinkedIn/etc., image, email, `address` country), `WebSite` (+ `SearchAction` only if search exists), `ProfessionalService` (serviceType, `areaServed` India + Worldwide, `hasOfferCatalog` listing each service).
- Per project: `CreativeWork` / `SoftwareApplication` with description, `keywords`, `author`.
- Services page: `FAQPage` + `Service` entries. Insights: `Article`/`BlogPosting` with `datePublished`, `dateModified`, `author`, `image`.
- All pages: `BreadcrumbList`.
- Entity consistency: the exact same name, job title, short bio and `sameAs` links everywhere (schema, About, footer, llms.txt, OG).

### 9.3 AEO (answer engine optimization)
- Every key page starts with an **"answer-first" block**: a 40–60 word plain-language summary directly under the `h1` that answers the question the page targets (e.g. "Who is [YOUR NAME]?", "What does an AI-powered MERN developer build?").
- Use **question-style `h2`s** followed by a concise direct answer, then detail. Examples: "Can you add AI calling to an ATS?", "How long does a custom CRM take to build?", "What does a LangGraph AI agent cost to build?" (answer with honest ranges or "depends on", never fake prices).
- FAQ sections (6–10 real Q&As per Services and each major project) with `FAQPage` schema and accordion UX (all answers present in the DOM, not lazy-loaded).
- Use lists, tables and step-by-step blocks (HowTo-style content) where natural, because they are extracted as snippets.
- Short, factual, quotable sentences. Include numbers, tool names and outcomes.

### 9.4 GEO (generative engine optimization): HIGHEST PRIORITY, build this first
- `public/llms.txt` (concise: who I am, services, top projects with URLs, contact) **and** `public/llms-full.txt` (full structured profile, all project case studies in plain markdown).
- `robots.ts` explicitly **allows** `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`.
- Add a visible **"Facts at a glance"** block on Home and About (role, stack, services, location/availability, contact) written as a clean definition list, easy for LLMs to extract.
- **Authority and trust (E-E-A-T)**: named author on everything, real case studies with problem → approach → result, dates ("Updated October 2026"), GitHub/LinkedIn links, honest metrics, a clear About page.
- Build `/insights` (MDX blog) with 5 seed articles written in answer-first style, each 700–1200 words, original and technically accurate:
  1. How AI voice calling works inside an ATS (Twilio + LLM, handling slow AI responses and call timeouts)
  2. LangChain vs LangGraph: when to use which
  3. Building a multi-tenant CRM with NestJS (tenant isolation patterns)
  4. How e-commerce price scrapers and catalog matching work
  5. RAG chatbot for business data: knowledge base plus user-specific answers
  Each has `Article` schema, author, dates, table of contents, related-projects block, RSS feed at `/feed.xml`.
- Optional: IndexNow ping route for Bing after deploys.

### 9.4b GEO deep requirements (what makes AI engines actually cite a site)
- **Single source of truth**: create `src/data/geo.ts` (typed in `src/types/geo.ts`) holding the canonical entity facts: full name, one-line bio, 50-word bio, 150-word bio, job titles, services list, tech stack, industries served, project one-liners, location/availability, contact, `sameAs` URLs. Home, About, JSON-LD, `llms.txt`, `llms-full.txt`, footer and OG tags all render from this file so every mention is identical.
- **Extractable passages**: every page contains self-contained 2–3 sentence passages that make sense when quoted alone (name the subject explicitly, no "this" or "it" without a noun). Put the definition or answer in the first sentence.
- **Entity clarity**: state clearly, in plain text and schema, "[YOUR NAME] is a MERN stack and AI-powered full-stack developer who builds ATS, CRM, campaign studio, e-commerce and scraper platforms with LangChain, LangGraph and Twilio AI calling." Use that exact positioning sentence consistently.
- **Specific, verifiable claims** beat adjectives: tool names, architectures, what was built, measurable outcomes (real numbers only). Avoid vague marketing words ("passionate", "cutting-edge").
- **Comparison and decision content** AI engines love to cite: "LangChain vs LangGraph", "NestJS vs Express for CRM backends", "PostgreSQL vs MongoDB for multi-tenant apps", "build vs buy an ATS". Put these in `/insights` with tables and clear verdicts.
- **Freshness signals**: visible "Last updated" dates, `dateModified` in schema, accurate sitemap `lastmod`; update dates only when content really changes.
- **Crawlability for AI bots**: no content behind login, tabs or lazy JS; all FAQ and case-study text in server HTML; fast TTFB; no blocking of AI user-agents anywhere (robots, middleware, headers). Return clean HTML with semantic structure.
- **Citable pages**: give each case study, FAQ and insight its own stable URL and `id` anchors on headings so engines can deep-link to the exact section.
- **Off-site authority checklist** (output as `GEO-CHECKLIST.md` for me to do manually, since code cannot do it): matching bio and links on GitHub README profile, LinkedIn, Dev.to/Hashnode/Medium articles linking to the site, Product Hunt/Peerlist/Contra profile, Stack Overflow/GitHub contributions, open-source repos with good READMEs, directory listings (Clutch, Upwork profile text), and guest mentions. AI engines weigh independent mentions, so list exact copy to paste for each profile.
- **Measurement**: include in `GEO-CHECKLIST.md` a list of 15 test prompts to ask ChatGPT/Perplexity/Claude/Gemini each month (e.g. "best freelance developer for AI calling ATS", "who builds LangGraph agents for CRM in India"), and a simple table to log whether the site is cited. Add UTM-free referrer tracking in analytics to spot traffic from chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai.
- Be honest: no keyword stuffing, no hidden text, no fake reviews, no fabricated clients or metrics. That gets sites filtered by both search and AI engines.

### 9.5 Local and brand signals
- Brand name/handle identical across site, GitHub, LinkedIn, OG tags.
- Footer with consistent NAP-style info (name, email, region). Do not publish a home address or phone unless I add it to `profile.ts`.

---

## 10. UX FIRST (this is the most important section)

User experience outranks decoration. If an animation hurts usability or speed, remove or simplify it.

### 10.1 Principles
- **5-second clarity**: a visitor must understand who I am, what I build and what to do next within 5 seconds of landing on Home.
- **One primary action per screen** (Hire Me / View Projects). Secondary actions visually quieter.
- A recruiter/client should reach Contact in ≤ 2 taps from anywhere. Persistent "Hire Me" in navbar; sticky bottom CTA bar on mobile (hides while typing in the form).
- Scannable content: short paragraphs (≤ 3 lines on mobile), bold key phrases, clear hierarchy, plenty of whitespace.
- Proof early: stats, project thumbnails and tech marquee visible within the first two screens.
- Fast perceived performance: skeleton loaders, instant route feedback via progress bar, `loading.tsx` for every route, no layout shift (reserve image/aspect-ratio space).

### 10.2 Interaction quality
- Every interactive element has hover, `:focus-visible`, active and disabled states. Visible focus ring in accent color.
- Micro-interactions confirm actions (button press scale, copy-email toast, form success animation). Keep each under 300ms.
- Smooth scroll must never trap the user: no scroll-jacking on touch devices, anchor links offset for the sticky navbar, scroll restoration on back/forward, focus moved to `h1` on route change for screen readers.
- Motion rules: animate only `transform` and `opacity`; stagger ≤ 80ms; total entrance ≤ 1s; animations play once; honor `prefers-reduced-motion`.
- Contact form UX: labels always visible, inline validation after blur, correct `type`, `inputmode` and `autocomplete` attributes, mobile-friendly keyboards, preserve input on error, clear success state with next steps ("I reply within 24 hours"), double-submit protection.
- Navigation: clear active state, mobile menu is a full-screen sheet with large tap targets, closes on route change and Escape, traps focus while open, locks body scroll.
- Friendly empty/error states and a helpful 404 with links to main pages.
- Theme: respects system preference, toggle persists, **no flash of wrong theme** on load.
- Copy tone: confident, plain English, no jargon walls, no lorem ipsum anywhere.

---

## 11. Responsive Design Specification

Mobile-first. Design and verify at these breakpoints:

| Device class | Width |
|---|---|
| Small phone | 320, 360 |
| Phone | 375, 390, 412 |
| Large phone / small tablet | 480, 600 |
| Tablet portrait | 768 |
| Tablet landscape / small laptop | 1024 |
| Laptop | 1280, 1366 |
| Desktop | 1440, 1920 |
| Ultrawide | 2560 (content stays centered at max-width) |

Rules:
- **No horizontal overflow at any width** (320px minimum). Long words/URLs must wrap.
- Fluid type with `clamp()`, fluid spacing scale, `min-h-dvh` (not `100vh`) for full-height sections, safe-area insets for notched phones.
- Touch targets ≥ **44×44px**, ≥ 8px spacing between tappable items; primary actions placed in the thumb zone on mobile.
- Body text ≥ 16px on mobile (prevents iOS input zoom), line length 45–75 characters, line height 1.5–1.7.
- Layout shifts per breakpoint: grids go 1 col → 2 col → 3/4 col; horizontal-scroll showcase only ≥ 1024px with a swipe carousel fallback on touch; hover-only effects have tap/focus equivalents; custom cursor is desktop + fine pointer only (`@media (pointer: fine)`).
- Images: `next/image` with correct `sizes`, WebP/AVIF, aspect-ratio boxes, no oversized downloads on mobile.
- Test landscape phone, 200% browser zoom and large system font size without broken layout.

---

## 12. Full Testing Protocol (the agent MUST actually run all of this and fix failures)

### 12.1 Tooling
```bash
pnpm add -D @playwright/test @axe-core/playwright @lhci/cli eslint-plugin-jsx-a11y vitest @testing-library/react
pnpm exec playwright install --with-deps
```
Create `tests/` with `e2e/`, `responsive/`, `a11y/`, `seo/` folders and a `playwright.config.ts` with projects for: iPhone SE (320/375), iPhone 14, Pixel 7, iPad portrait, iPad landscape, Laptop 1366, Desktop 1440, Full HD 1920, plus Chromium, WebKit and Firefox.

### 12.2 Automated checks (every route, every project above)
- **Responsive**: no horizontal scroll (`document.scrollingElement.scrollWidth <= innerWidth`), no element overflowing the viewport, tap targets ≥ 44px, no overlapping text, navbar/mobile menu works, sticky CTA does not cover content or inputs.
- **Visual**: take full-page screenshots at every breakpoint into `tests/screenshots/<route>-<width>.png`. The agent must **open and visually inspect these screenshots**, list any visual defects (cut-off text, misaligned grids, broken spacing, awkward animations mid-state) and fix them, then re-run.
- **Accessibility**: axe-core with zero serious/critical violations, keyboard-only walkthrough (Tab order, menu, accordion, tabs, form), visible focus, color contrast AA, reduced-motion mode renders correctly.
- **GEO (highest priority)**: tests assert that `src/data/geo.ts` facts appear identically on Home, About, `llms.txt`, `llms-full.txt` and in the Person JSON-LD; the positioning sentence exists verbatim; every key page has an answer-first passage near the top; FAQ answers are present in the raw server HTML (fetch with JS disabled and check); robots and response headers do not block any AI user-agent listed in 9.4 (request with each user-agent string and expect 200); headings have stable `id` anchors; `Last updated` dates match `dateModified`.
- **SEO/AEO**: test asserts each page has one `h1`, unique title and description within length limits, canonical, OG/Twitter tags, valid JSON-LD (parse and check required fields), sitemap contains all routes, robots allows the AI bots listed in 9.4, `llms.txt` and `llms-full.txt` reachable, no broken internal links, no missing image `alt`.
- **Functional**: contact form validation, success and error paths (mock the API), theme toggle persistence without flash, project filter, project detail pages from `generateStaticParams`, 404 page full-screen without navbar/footer.
- **Console**: zero errors and zero hydration warnings on every route.
- **Performance**: Lighthouse CI on mobile and desktop for Home, Projects, one Project detail, Insights article and Contact. Budgets: **Performance ≥ 90 (mobile) / 95 (desktop), Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100**, LCP < 2.5s, CLS < 0.1, INP < 200ms.

### 12.3 Manual UX walkthrough (agent performs and reports)
Walk the journey as a hiring manager and as a client on a phone: land on Home → understand offer → open ATS case study → open Contact → submit form. Note friction points (confusing labels, slow transitions, hidden CTAs) and fix them. Repeat on tablet and desktop.

### 12.4 Reporting
Write `TESTING.md` containing: pass/fail table per route × breakpoint, Lighthouse scores, axe results, list of issues found and how each was fixed, and remaining known limitations. Do not claim a check passed unless it was actually run.

---

## 13. Code Quality Rules

- Server Components by default; add `"use client"` only for interactive/animated leaves.
- No `any`. No inline styles except dynamic CSS variables.
- Components under ~150 lines; extract sections.
- Accessible: focus rings, keyboard nav for menu/accordion/tabs, `aria-*` where needed, color contrast AA.
- Use `next/image` with explicit sizes; use `next/font`; dynamic-import GSAP-heavy sections.
- Commit in logical steps: scaffold → design system → layout → pages → data → motion → SEO → polish.

---

## 14. Execution Order (follow strictly)

1. Scaffold project, install deps, set up Tailwind tokens, fonts, theme provider.
2. Create `src/types/*` and `src/data/*` first, **starting with `src/data/geo.ts` (the GEO source of truth)**, then `public/llms.txt` and `llms-full.txt` generated from it.
3. Build `lib/motion.ts` and UI primitives (`Reveal`, `SplitText`, `MagneticButton`, `Card`, `Badge`).
4. Build layout (Navbar, Footer, SmoothScroll, page transition, scroll progress).
5. Build Home sections, then remaining pages.
6. Contact form + API route.
7. `/insights` MDX blog with 5 seed articles, RSS feed.
8. GEO layer first (JSON-LD from `geo.ts`, AI-bot robots rules, extractable passages, `GEO-CHECKLIST.md`), then AEO (answer blocks, FAQs), then SEO (metadata, sitemap, OG images, breadcrumbs).
9. UX polish pass (section 10) and responsive pass at every breakpoint (section 11).
10. Set up and run the full testing protocol (section 12), inspect screenshots, fix every issue, re-run until clean.
11. Write `TESTING.md`, then run the verification checklist.

---

## 15. Verification Checklist

Before completing any task or commit:
1. Type check:
   ```bash
   pnpm tsc --noEmit
   ```
2. Lint:
   ```bash
   pnpm lint
   ```
3. Production build:
   ```bash
   pnpm build
   ```
4. Run the full test suite:
   ```bash
   pnpm exec playwright test
   pnpm exec lhci autorun
   ```
5. Confirm: 0 TypeScript errors, 0 inline interfaces in components, all 11 routes render (including `/insights`), zero console errors, no horizontal scroll from 320px to 2560px, axe has no serious/critical issues, Lighthouse SEO = 100 and Performance/Accessibility/Best Practices meet the budgets in 12.2, JSON-LD valid, `llms.txt` and sitemap reachable.
5. Finish with a short summary: routes built, how to run (`pnpm dev`), what placeholders I must replace (`src/data/profile.ts`, project images, metrics, `resume.pdf`, env vars).
