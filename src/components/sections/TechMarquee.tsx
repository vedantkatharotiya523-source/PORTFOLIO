export function TechMarquee() {
  const technologies = [
    "Next.js 15",
    "NestJS",
    "TypeScript",
    "LangChain",
    "LangGraph",
    "Twilio Voice AI",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS v4",
    "Redis",
    "Docker",
    "Puppeteer",
    "RAG Embeddings",
    "Redux Toolkit",
  ];

  // Double array for infinite seamless looping
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div
      aria-label="Technology stack ticker"
      className="w-full overflow-hidden border-y border-[var(--border)] bg-[var(--surface)]/50 py-4 my-10"
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {marqueeItems.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-[var(--text-muted)] hover:text-[#7C5CFF] transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFF]/60" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
