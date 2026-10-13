import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import type { BreadcrumbsProps } from "@/types";

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd schema={getBreadcrumbJsonLd(allItems)} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)] py-4 ${className || ""}`}
      >
        <ol className="flex items-center space-x-2 list-none p-0 m-0">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center space-x-2">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="text-[var(--text)] font-semibold truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[var(--text)] transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
