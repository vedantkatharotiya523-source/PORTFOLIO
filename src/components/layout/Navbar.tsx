"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Check, Copy, CircleDot } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
    const previous = lastScrollY.current;
    if (latest > previous && latest > 160) {
      setHidden(true);
      setStatusOpen(false);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  // Close mobile menu and status popover on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setStatusOpen(false);
  }

  // Handle escape key and lock body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (statusOpen) setStatusOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (statusRef.current && !statusRef.current.contains(e.target as Node)) {
        setStatusOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, statusOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -90, opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between gap-1.5 sm:gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 dark:bg-[var(--surface)]/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/25 w-full max-w-5xl xl:max-w-6xl transition-all duration-300",
            isScrolled ? "py-1.5 px-3 sm:px-4 shadow-xl border-[#7C5CFF]/20" : "py-2 px-3 sm:px-4"
          )}
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredHref(null)}
        >
          {/* Subtle top specular reflection */}
          <div
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/15 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Left Zone: Brand & Interactive Status Popover */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            <Link
              href="/"
              className="group flex items-center gap-2 pl-1 py-1 text-sm font-bold tracking-tight text-[var(--text)] hover:text-[#7C5CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded-full shrink-0"
            >
              <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#5A38EC] text-white shadow-sm shadow-[#7C5CFF]/30 group-hover:scale-105 transition-transform">
                <span className="font-mono text-xs font-black">V</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[var(--surface)]" />
              </div>

            </Link>

            {/* Live Availability Status Pill ("Something Different" Interactive Element) */}
            <div className="relative hidden xl:block shrink-0" ref={statusRef}>


              <AnimatePresence>
                {statusOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-3 w-64 p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-2xl shadow-2xl shadow-black/20 z-50 text-left"
                    role="tooltip"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-[var(--text)]">Available for Hire</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-3">
                      Accepting freelance contracts & engineering roles. Specialized in MERN, Next.js, and AI voice pipelines.
                    </p>
                    <div className="flex items-center gap-2">
                      <Link
                        href="/contact"
                        onClick={() => setStatusOpen(false)}
                        className="flex-1 py-1.5 px-3 rounded-xl bg-[#7C5CFF] text-white text-[11px] font-bold text-center hover:bg-[#6A47FA] transition-colors shadow-sm"
                      >
                        Hire Me
                      </Link>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1 py-1.5 px-2.5 rounded-xl border border-[var(--border)] text-[var(--text)] text-[11px] font-medium hover:bg-[var(--surface-hover)] transition-colors"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 opacity-60" />
                            <span>Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Center Zone: Desktop Nav Items with Spring Hover Spotlight */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const isHovered = hoveredHref === item.href;
              const isAiLab = item.href === "/ai-lab";

              return (
                <li
                  key={item.href}
                  className="relative shrink-0"
                  onMouseEnter={() => setHoveredHref(item.href)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-2.5 xl:px-3 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]",
                      isActive
                        ? "text-[var(--text)] font-semibold"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]",
                      isAiLab && !isActive && "text-[#7C5CFF] dark:text-[#9B82FF] font-semibold"
                    )}
                  >
                    {isAiLab ? (
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#7C5CFF] animate-pulse" />
                        <span>{item.label}</span>
                        <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-xs">
                          AI
                        </span>
                      </span>
                    ) : (
                      <span>{item.label}</span>
                    )}

                    {/* Spring Hover Spotlight Pill */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-[var(--text)]/[0.06] -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}

                    {/* Active Route Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 rounded-full bg-[#7C5CFF]/12 border border-[#7C5CFF]/25 -z-10 shadow-xs"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Zone: Actions Suite (Integrated Circular ThemeToggle & Magnetic CTA) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />

            <div className="hidden sm:inline-flex">
              <MagneticButton
                href="/contact"
                variant="primary"
                size="sm"
                className="group relative rounded-full px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#5A38EC] hover:from-[#6B47FA] hover:to-[#4F2FD4] text-white shadow-sm hover:shadow-[0_0_18px_rgba(124,92,255,0.45)] transition-all duration-300 flex items-center gap-1.5 shrink-0"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden items-center justify-center w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] shrink-0 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Full-Screen Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-[var(--background)]/98 backdrop-blur-2xl px-6 pt-24 pb-8 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Live Availability Badge inside Mobile Drawer */}
            <div className="flex items-center justify-between p-3 mb-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Available for New Projects
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Q2/Q3 2026</span>
            </div>

            <nav className="flex-1 flex flex-col justify-center space-y-1.5 my-auto">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                const isAiLab = item.href === "/ai-lab";

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-2.5 px-4 rounded-xl text-lg font-bold tracking-tight transition-colors min-h-[46px]",
                        isActive
                          ? "bg-[rgba(124,92,255,0.12)] text-[#7C5CFF]"
                          : "text-[var(--text)] hover:bg-[var(--surface)]"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {isAiLab ? (
                          <Sparkles className="w-4 h-4 text-[#7C5CFF]" />
                        ) : (
                          <CircleDot className="w-3.5 h-3.5 opacity-40" />
                        )}
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-[#7C5CFF] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="pt-5 border-t border-[var(--border)] mt-auto flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#5A38EC] text-white text-sm font-bold shadow-lg shadow-[#7C5CFF]/20"
              >
                <span>Hire Me for Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
                <span>{profileData.email}</span>
                <span>{profileData.country}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Bottom CTA Bar (hides on desktop) */}
      <aside
        aria-label="Mobile Quick Action"
        className="fixed bottom-3 left-4 right-4 z-20 sm:hidden pointer-events-auto"
      >
        <div className="flex items-center justify-between gap-3 p-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md shadow-lg shadow-black/10">
          <div className="flex flex-col pl-2">
            <span className="text-xs font-semibold text-[var(--text)]">Open for Work</span>
            <span className="text-[10px] text-[var(--text-muted)]">ATS · CRM · AI Calling</span>
          </div>
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 bg-[#7C5CFF] text-white font-bold text-xs shadow-sm hover:bg-[#6B47FA] transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </aside>
    </>
  );
}
