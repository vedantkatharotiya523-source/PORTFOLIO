import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-[var(--background)] px-6 text-center"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute w-96 h-96 rounded-full bg-[#7C5CFF]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <span className="font-mono text-sm tracking-widest uppercase text-[#7C5CFF]">
          HTTP 404 Error
        </span>

        <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-[var(--text)]">
          404
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          The requested route does not exist or has been relocated to another endpoint.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7C5CFF] text-white font-bold text-sm hover:bg-[#6A47FA] transition-all shadow-lg shadow-[#7C5CFF]/25"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] font-semibold text-sm hover:bg-[var(--surface-hover)] transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
