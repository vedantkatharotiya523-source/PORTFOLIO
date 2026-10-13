import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FEATURE_FLAGS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { PhoneCall, GitFork, Database, ShieldAlert, Sparkles } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: `AI Architecture Lab & Interactive Pipelines | ${profileData.name}`,
  description:
    "Explore animated technical architecture diagrams for Twilio AI voice interviewers, LangGraph cyclical state graphs, and enterprise RAG systems.",
  path: "/ai-lab",
});

export default function AiLabPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <Breadcrumbs items={[{ label: "AI Lab", href: "/ai-lab" }]} />

      {/* Header & Answer First */}
      <div className="mt-4 mb-14">
        <Badge variant="glow" size="sm" className="mb-3">
          Interactive Architecture Systems
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          AI Engineering & Architecture Lab
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: What AI capabilities are showcased here?</strong>{" "}
            This lab demonstrates three production architectures designed by {profileData.name}:
            (1) Twilio conversational voice screening with async audio buffering,
            (2) LangGraph multi-step cyclical state agent loops, and
            (3) Dual-tier enterprise RAG with pgvector and verifiable citations.
          </p>
        </div>
      </div>

      {/* Diagram 1: Twilio Voice Call Pipeline */}
      <section aria-labelledby="diagram-voice-title" className="mb-16">
        <Card className="p-6 sm:p-10 border-[rgba(124,92,255,0.3)] bg-[var(--surface)] relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <PhoneCall className="w-5 h-5 text-[#7C5CFF]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#7C5CFF]">
              Architecture Pipeline 01
            </span>
          </div>

          <h2 id="diagram-voice-title" className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
            Twilio AI Voice Telephony Pipeline
          </h2>

          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed mb-8">
            How real-time candidate screening calls stream audio bidirectionally over WebSockets.
            Includes our proprietary async buffer handling that injects conversational fillers
            whenever LLM inference latency exceeds 800ms.
          </p>

          {/* Visual Step-by-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs text-[#7C5CFF] font-bold">Step 1</span>
              <h3 className="text-sm font-bold text-[var(--text)] mt-1">Twilio Media Stream</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Streams 8kHz raw mulaw audio frames over secure WebSocket to NestJS gateway.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs text-[#7C5CFF] font-bold">Step 2</span>
              <h3 className="text-sm font-bold text-[var(--text)] mt-1">Streaming STT</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Deepgram / Whisper converts audio frames into tokenized candidate transcripts.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#7C5CFF]/40 bg-[#7C5CFF]/5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7C5CFF] font-bold">Step 3 (Async Core)</span>
                <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF]" />
              </div>
              <h3 className="text-sm font-bold text-[var(--text)] mt-1">LLM Buffer & Fillers</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                If token arrival &gt; 800ms, plays natural filler (&apos;Got it, checking...&apos;) preventing dead air.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs text-[#7C5CFF] font-bold">Step 4</span>
              <h3 className="text-sm font-bold text-[var(--text)] mt-1">Streaming TTS to Caller</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Synthesizes first clause to audio packets sent back to Twilio stream in real time.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Diagram 2: LangGraph Cyclical Multi-Step Agent */}
      <section aria-labelledby="diagram-langgraph-title" className="mb-16">
        <Card className="p-6 sm:p-10 border-[rgba(34,211,238,0.3)] bg-[var(--surface)] relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <GitFork className="w-5 h-5 text-[#22D3EE]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#22D3EE]">
              Architecture Pipeline 02
            </span>
          </div>

          <h2 id="diagram-langgraph-title" className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
            LangGraph Cyclical Agent State Machine
          </h2>

          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed mb-8">
            Unlike linear LangChain prompt chains that crash on tool exceptions, this LangGraph
            state graph cycles through reasoning, tool execution, output verification, and self-correction
            persisted in PostgreSQL checkpointers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              {
                title: "1. State Input",
                desc: "Zod-validated query payload with user session context.",
              },
              {
                title: "2. Planner Node",
                desc: "LLM plans tool calls or direct answer route.",
              },
              {
                title: "3. Tool Execution",
                desc: "Executes read-only SQL queries or API lookups safely.",
              },
              {
                title: "4. Reflect & Verify",
                desc: "If tool fails or returns empty rows, loops back to revise parameters.",
              },
              {
                title: "5. State Commit",
                desc: "Commits final cited output and persists checkpoint.",
              },
            ].map((node, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]"
              >
                <span className="text-xs font-bold text-[#22D3EE] block mb-1">
                  {node.title}
                </span>
                <p className="text-xs text-[var(--text-muted)] m-0 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Diagram 3: Dual-Source RAG Knowledge Architecture */}
      <section aria-labelledby="diagram-rag-title" className="mb-16">
        <Card className="p-6 sm:p-10 border-[rgba(124,92,255,0.3)] bg-[var(--surface)] relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-[#7C5CFF]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#7C5CFF]">
              Architecture Pipeline 03
            </span>
          </div>

          <h2 id="diagram-rag-title" className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
            Dual-Tier Business RAG Architecture
          </h2>

          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed mb-8">
            Solving the enterprise dilemma: routing questions between static knowledge base
            documents (via vector embeddings in pgvector) and user-specific live database
            records (via validated SQL functions).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs uppercase text-[#7C5CFF] font-bold block mb-2">
                Unstructured Knowledge
              </span>
              <h3 className="text-base font-bold text-[var(--text)] mb-2">
                pgvector Hybrid Search
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Indexes company handbooks, policy terms, and product manuals using OpenAI
                text-embedding-3-small with reciprocal rank fusion for exact keyword recall.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs uppercase text-[#22D3EE] font-bold block mb-2">
                Structured Transactional
              </span>
              <h3 className="text-base font-bold text-[var(--text)] mb-2">
                Scoped Tool Execution
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Connects through read-only PostgreSQL role. Session tenant ID is injected
                server-side to prevent cross-tenant record leakage.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-xs uppercase text-emerald-400 font-bold block mb-2">
                Verifiable Response
              </span>
              <h3 className="text-base font-bold text-[var(--text)] mb-2">
                Grounded Citations
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Synthesizes the answer with clickable source citations referencing exact
                document section headings and live order status timestamps.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Feature Flag Notice */}
      {!FEATURE_FLAGS.enableAskMyAiChat && (
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-muted)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#7C5CFF]" />
            <span>
              Live chat playground currently set to OFF in <code>src/lib/constants.ts</code> (enableAskMyAiChat).
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase">Feature Flag Managed</span>
        </div>
      )}
    </div>
  );
}
