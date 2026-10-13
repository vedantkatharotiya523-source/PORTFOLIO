import type { InsightPost } from "@/types";

export const insightsData: InsightPost[] = [
  {
    slug: "how-ai-voice-calling-works-inside-an-ats",
    title: "How AI Voice Calling Works Inside an ATS: Architecture, Webhooks, and Low-Latency LLMs",
    excerpt:
      "A deep technical breakdown of integrating Twilio Voice with conversational LLMs to conduct automated candidate phone interviews while preventing call timeouts and latency bottlenecks.",
    datePublished: "2026-09-15",
    dateModified: "2026-10-10",
    readTime: "7 min read",
    category: "AI & Telephony",
    author: "Vedant Katharotiya",
    tags: ["Twilio", "LangChain", "ATS", "NestJS", "Voice AI"],
    relatedProjectSlugs: ["ai-powered-ats-twilio-calling"],
    answerSummary:
      "AI voice calling inside an ATS works by streaming Twilio audio via WebSockets to a speech-to-text service, generating conversational responses with a low-latency LLM, and streaming synthesized audio back. Latency is controlled using conversational filler buffers ('Let me check that...') and token streaming.",
    content: `
### Direct Answer: How Does Twilio Voice AI Screening Work?
An AI voice calling screening pipeline connects a telephony provider (Twilio Voice) to a backend WebSocket server. When a candidate answers, audio frames stream bidirectionally. Speech-to-text turns voice into tokens, an LLM evaluates the answer against rubrics and formulates the next question, and text-to-speech synthesizes the audio back into the phone line.

### The Architecture Pipeline
The end-to-end flow consists of five orchestrated stages:

1. **Trigger & Outbound Dispatch**: When an applicant reaches the 'Voice Screen' stage in the ATS pipeline, a NestJS worker creates an outbound call via Twilio REST API pointing to a TwiML WebSocket URL.
2. **Bidirectional Audio Streaming**: Twilio Media Streams send 8kHz mulaw audio chunks over a secure WebSocket connection directly to the server.
3. **Real-Time Transcription (STT)**: Deepgram or Whisper streaming models convert incoming voice packets into live transcript sentences with endpoint detection (silence thresholds).
4. **Conversational Engine (LLM)**: An orchestration node (LangChain or LangGraph) maintains conversation state, role instructions, and question checkpoints.
5. **Speech Synthesis (TTS) & Playback**: ElevenLabs or Cartesia streaming TTS converts generated tokens into audio buffers sent back to the Twilio stream.

### Handling the Slow AI Response Problem
The single biggest failure point in conversational voice systems is latency. While a user tolerates a 2-second delay in text chat, 1,500ms of dead air on a phone call feels like a broken connection or disconnect.

#### Strategies implemented:
- **Streaming Token Buffers**: We stream the very first sentence clause (first comma or period) directly to TTS without waiting for the full LLM completion.
- **Conversational Acoustic Fillers**: If the first token takes longer than 900ms, the system triggers pre-buffered natural acknowledgments like *"Got it, let's look at that..."* or *"I understand..."* to maintain psychological connection.
- **Twilio Webhook Timeout Prevention**: Twilio expects webhooks within 15 seconds. By using asynchronous WebSocket Media Streams rather than synchronous TwiML webhook polling, timeout errors are eliminated completely.

### Candidate Scorecard Generation
Once the conversation concludes, a background worker analyzes the complete transcript against the job description:
- Semantic keyword verification
- Communication clarity score
- Flagged concerns or discrepancies
- Structured recommendation (Advance / Reject / Review)
This structured JSON is stored in PostgreSQL and pushed to the ATS Kanban board via WebSockets.
`,
  },
  {
    slug: "langchain-vs-langgraph-when-to-use-which",
    title: "LangChain vs LangGraph: When to Use Chains vs Cyclical Multi-Agent State Graphs",
    excerpt:
      "Comparing LangChain and LangGraph for production AI systems: why linear chains fail for complex enterprise workflows and how cyclical graph state machines fix them.",
    datePublished: "2026-09-22",
    dateModified: "2026-10-10",
    readTime: "8 min read",
    category: "AI Architecture",
    author: "Vedant Katharotiya",
    tags: ["LangChain", "LangGraph", "AI Agents", "Python", "TypeScript"],
    relatedProjectSlugs: ["ai-rag-assistant-business", "ai-powered-ats-twilio-calling"],
    answerSummary:
      "Use LangChain for simple, linear prompt pipelines and single-turn document QA. Use LangGraph when your application requires multi-step reasoning, cyclical loops, error recovery, conditional branching, human-in-the-loop approvals, or multiple cooperating agents.",
    content: `
### Direct Answer: When Should You Choose LangChain vs LangGraph?
Choose **LangChain** for straightforward directed acyclic pipelines: text summarization, one-shot prompt templating, and basic RAG. Choose **LangGraph** whenever your workflow requires loops, retries, self-correction, branching state machines, tool-calling verification, or multi-agent collaboration.

### Core Architectural Differences

| Feature | LangChain (Chains / LCEL) | LangGraph |
|---|---|---|
| Flow Topology | Strictly Directed Acyclic Graph (DAG) | Cyclical Graph (Allows Loops & State Cycles) |
| State Management | Passed implicitly through pipeline | Explicit shared State TypedDict / Zod Schema |
| Error Recovery | Fails chain on unhandled tool error | Cycles back to revision node to self-correct |
| Human-in-the-Loop | Difficult to pause & resume state | Built-in checkpointers (Memory, Postgres) |
| Multi-Agent | Limited agent executor abstractions | Native multi-actor graph transitions |

### Why Linear Chains Break in Enterprise Apps
In a traditional LangChain sequential chain (e.g. Prompt -> LLM -> Tool -> Output), if a tool returns an unexpected database error or empty search result, the chain either terminates or returns a hallucinated fallback.

Real-world business logic requires reflection:
1. *Agent queries database tool.*
2. *Database returns zero rows.*
3. *Agent recognizes missing parameters.*
4. *Agent rewrites query and executes again.*
5. *Output verified against guardrails.*

This loop requires a cyclic graph, which is precisely what LangGraph's state machine provides with typed channels and persistence checkpointers.

### Production Recommendations
For modern enterprise web applications built on Next.js and NestJS, we implement LangGraph microservices with PostgreSQL persistence checkpointers, allowing long-running agent tasks to survive server restarts and support interactive human-in-the-loop approval gates.
`,
  },
  {
    slug: "building-a-multi-tenant-crm-with-nestjs",
    title: "Building a Multi-Tenant CRM with NestJS: Tenant Isolation Patterns in PostgreSQL and MongoDB",
    excerpt:
      "A comprehensive architectural guide to building enterprise multi-tenant software with zero data leakage: comparing schema-per-tenant, database-per-tenant, and shared collections.",
    datePublished: "2026-09-29",
    dateModified: "2026-10-10",
    readTime: "9 min read",
    category: "Backend Architecture",
    author: "Vedant Katharotiya",
    tags: ["NestJS", "Multi-Tenant", "MongoDB", "PostgreSQL", "CRM"],
    relatedProjectSlugs: ["multi-tenant-crm"],
    answerSummary:
      "Multi-tenant isolation in NestJS is implemented by extracting tenant identifiers from JWT claims in an authentication guard, storing the tenant in an AsyncLocalStorage context, and dynamically resolving the tenant's database connection or query filter on every request.",
    content: `
### Direct Answer: How to Guarantee Multi-Tenant Data Isolation?
Tenant isolation is guaranteed by enforcing tenant scoping at the framework middleware layer before any controller or service executes. By binding tenant IDs to verified JWT payloads and resolving database connection pools dynamically per request, cross-tenant data leakage is structurally impossible.

### Three Multi-Tenant Architecture Patterns

#### 1. Shared Database, Shared Schema (Discriminator Column)
- **Concept**: All tenants share tables/collections, differentiated by a 'tenantId' column.
- **Pros**: Simplest to migrate and lowest infrastructure footprint.
- **Cons**: High risk of developer error if a query omits the 'WHERE tenant_id = x' filter.

#### 2. Shared Database, Separate Schemas (PostgreSQL)
- **Concept**: A single PostgreSQL instance with isolated schemas ('tenant_acme', 'tenant_beta').
- **Pros**: Hard database boundary; SQL search_path switches per connection.
- **Cons**: Migrations must run across every tenant schema.

#### 3. Separate Database Per Tenant (MongoDB / PostgreSQL)
- **Concept**: Complete database isolation with individual connection strings or dynamically selected databases.
- **Pros**: Highest enterprise security, compliance, and individual tenant backup capability.
- **Cons**: Connection pool management overhead.

### Implementing Dynamic Connection Routing in NestJS
In our CRM implementation with NestJS and MongoDB, we utilize NestJS request-scoped dependency injection and custom Mongoose connection factories:

\`\`\`typescript
@Injectable({ scope: Scope.REQUEST })
export class TenantService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getTenantId(): string {
    const tenantId = this.request.user?.tenantId;
    if (!tenantId) {
      throw new UnauthorizedException("Missing tenant context");
    }
    return tenantId;
  }
}
\`\`\`

### Duplicate Lead Detection Algorithm
A common problem in multi-tenant sales operations is duplicate lead entry across multiple referral sources. We combine exact phone/email hashes with normalized Levenshtein string distance checks on company names to alert sales representatives before duplicate deals are created.
`,
  },
  {
    slug: "how-ecommerce-price-scrapers-and-catalog-matching-work",
    title: "How E-commerce Price Scrapers and Catalog Matching Work in Production",
    excerpt:
      "Engineering resilient web scrapers with Puppeteer: proxy rotation, fingerprint evasion, and fuzzy catalog matching across competing marketplaces.",
    datePublished: "2026-10-04",
    dateModified: "2026-10-10",
    readTime: "8 min read",
    category: "Automation & Scraping",
    author: "Vedant Katharotiya",
    tags: ["Puppeteer", "Node.js", "Web Scraping", "PostgreSQL", "Docker"],
    relatedProjectSlugs: ["ecommerce-scrapers-price-intelligence", "ecommerce-platform"],
    answerSummary:
      "Production scrapers extract competitor pricing using headless browser clusters with fingerprint spoofing and proxy rotation, followed by multi-attribute fuzzy matching (UPC, title tokens, brand) to reconcile disparate marketplace catalogs.",
    content: `
### Direct Answer: How Do Production Price Scrapers Work?
Production scrapers run headless Puppeteer browser instances behind rotating residential proxies, extracting raw product pricing and availability. The data is piped into an automated catalog matching engine that reconciles disparate competitor titles using tokenized string similarity, generating real-time price variance alerts.

### Overcoming Modern Anti-Bot Defenses
Modern e-commerce marketplaces deploy Cloudflare, DataDome, and perimeter firewalls. Scraping at scale requires:

1. **Browser Fingerprint Cloaking**: Injecting realistic WebGL vendor strings, canvas noise, and navigator properties using Puppeteer Extra Stealth.
2. **Rotating Residential Proxies**: Routing requests across residential IP pools to avoid IP subnet bans.
3. **Behavioral Emulation**: Randomizing mouse curves, scroll pauses, and keystroke intervals.
4. **Header Consistency**: Aligning user-agent versions with underlying TLS cipher suites.

### The Catalog Reconciliation Challenge
Competitors rarely use identical product titles:
- Store A: *"Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black"*
- Store B: *"Sony WH1000XM5/B Over-Ear ANC Bluetooth Headset"*

To match these without manual human intervention:
- **Identifier Extraction**: Prioritize matching UPC, EAN, or MPN codes when available in schema.org JSON-LD data.
- **Token Sort Ratio**: Tokenize words, strip stop words and brand names, and calculate Levenshtein distance on core model identifiers.
- **Attribute Verification**: Check color, storage capacity, and edition attributes to prevent false-positive matches across accessory variants.

### Storage & Pricing Intelligence
Matched prices are logged into time-series PostgreSQL tables. When a competitor adjusts price or drops below cost thresholds, automated webhooks notify merchant pricing engines for automated margin re-indexing.
`,
  },
  {
    slug: "rag-chatbot-for-business-data-knowledge-base-plus-user-answers",
    title: "RAG Chatbot for Business Data: Combining Static Knowledge Bases with User-Specific Live Data",
    excerpt:
      "How to architect enterprise RAG chatbots that answer company policy questions while simultaneously querying personal transactional database records using tool-calling.",
    datePublished: "2026-10-08",
    dateModified: "2026-10-10",
    readTime: "10 min read",
    category: "AI & RAG",
    author: "Vedant Katharotiya",
    tags: ["RAG", "pgvector", "LangGraph", "Next.js", "PostgreSQL"],
    relatedProjectSlugs: ["ai-rag-assistant-business", "multi-tenant-crm"],
    answerSummary:
      "A dual-source business RAG chatbot routes questions between vector search (for static documents and policies) and structured SQL tool-calling (for user-specific orders and account balances), unifying the responses into a single conversational interface.",
    content: `
### Direct Answer: How to Unify Knowledge Base & User Data in AI Chatbots?
Unifying knowledge bases and personal data requires a hybrid query router. The AI agent inspects incoming user queries, retrieves general documentation using vector similarity in pgvector, and calls authenticated SQL functions to query live transactional database records, synthesizing both into a cited response.

### The Two-Tier Data Challenge in Business Applications
Most enterprise queries fall into two distinct domains:

1. **Unstructured General Knowledge**: *"What is the refund policy for annual enterprise subscriptions?"*
2. **Structured User-Specific Data**: *"What was the invoice amount on my last payment, and when does it renew?"*

Standard RAG handles question #1. Standard SQL databases handle question #2. When a user asks:
*"Can I get a refund for my invoice #9401 based on our service terms?"*
the chatbot must combine both data sources in a single reasoning step.

### System Architecture
\`\`\`
User Query ──> Query Intent Classifier (LangGraph)
               ├──> Branch A: pgvector Hybrid Search (Policy Docs)
               └──> Branch B: SQL Tool Execution (User Account Database)
                         └──> Synthesizer Node ──> Streaming Response with Citations
\`\`\`

### Guardrails and Security
To prevent unauthorized data access:
- **Tenant & User Context Injection**: The user's verified session ID is injected at the server layer. The LLM is never given the ability to pass arbitrary user IDs into SQL queries.
- **Read-Only Database Roles**: Tools connect via restricted database credentials that prevent any modification queries (INSERT/UPDATE/DELETE).
- **Verifiable Citations**: Every factual statement regarding policy is decorated with an interactive citation referencing document title and section.
`,
  },
];
