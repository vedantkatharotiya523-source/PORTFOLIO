"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { servicesFaqData } from "@/data/faq";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([servicesFaqData[0].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 w-full">
      {servicesFaqData.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        return (
          <Card
            key={faq.id}
            id={faq.id}
            className="p-0 border-[var(--border)] overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-[var(--text)] hover:text-[#7C5CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
            >
              <h3 className="m-0 text-base sm:text-lg font-semibold pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 text-[var(--text-muted)] transition-transform duration-200",
                  isOpen && "transform rotate-180 text-[#7C5CFF]"
                )}
              />
            </button>

            {/* Answer always present in the DOM for SEO, toggled visually via max-height / opacity */}
            <div
              id={`faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={faq.id}
              className={cn(
                "px-5 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed",
                isOpen
                  ? "max-h-96 pb-5 sm:pb-6 opacity-100 border-t border-[var(--border)]/60 pt-4"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <p className="m-0">{faq.answer}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
