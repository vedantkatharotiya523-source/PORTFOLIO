"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, CheckCircle, RefreshCw, Cpu } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AiFlowHighlight() {
  const flowNodes = [
    {
      id: "node-1",
      icon: Bot,
      title: "Query & Intent Routing",
      desc: "LangGraph state router categorizes user intent and verifies auth scope.",
      color: "#7C5CFF",
    },
    {
      id: "node-2",
      icon: Cpu,
      title: "Cyclical Agent Reasoning",
      desc: "Multi-step reasoning loops decompose problem and select parameters.",
      color: "#22D3EE",
    },
    {
      id: "node-3",
      icon: Database,
      title: "Tool Execution & DB Check",
      desc: "Safe read queries execute against pgvector and PostgreSQL tables.",
      color: "#F59E0B",
    },
    {
      id: "node-4",
      icon: RefreshCw,
      title: "Self-Correction & Reflection",
      desc: "Validates retrieved facts against hallucinations; rewrites if empty.",
      color: "#EC4899",
    },
    {
      id: "node-5",
      icon: CheckCircle,
      title: "Streaming Verified Answer",
      desc: "Emits low-latency tokens with citations and updates state checkpoints.",
      color: "#10B981",
    },
  ];

  return (
    <section
      aria-labelledby="ai-highlight-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 my-20"
    >
      <Card className="border-[rgba(124,92,255,0.3)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-hover)]/40 p-6 sm:p-10 relative overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#7C5CFF]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="glow" size="sm" className="mb-3">
              Core Architectural Advantage
            </Badge>
            <h2
              id="ai-highlight-title"
              className="text-headline-section font-bold tracking-tight text-[var(--text)]"
            >
              Smart AI Built Directly Inside Every Product
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
              We do not bolt generic wrappers onto web apps. We embed cyclical,
              tool-calling LangGraph state agents that query private databases safely
              and conduct real-time phone screening.
            </p>
          </div>

          <Button
            href="/ai-lab"
            variant="primary"
            size="md"
            className="rounded-xl shrink-0 font-semibold"
          >
            <span>Explore AI Lab Diagrams</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        {/* Animated Flow Nodes Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {flowNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative flex flex-col justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md"
              >
                <div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 shadow-sm"
                    style={{ backgroundColor: `${node.color}15`, color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    Phase 0{index + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[var(--text)] mt-1">
                    {node.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-snug">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
