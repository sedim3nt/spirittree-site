import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.04 } } }

const C = {
  sapphire: '#152E80',
  amethyst: '#5C1BA8',
  burgundy: '#6B0E2C',
  gold: '#A16E03',
  indigo: '#312573',
  deepIndigo: '#15133D',
  violet: '#4B1CA6',
  navy: '#162F4C',
  plum: '#520F80',
  forest: '#1B4332',
  ember: '#92400E',
  slate: '#334155',
}

const W = { maxWidth: 1280, margin: '0 auto', padding: '0 32px' }

/* ── Data ── */

const MANIFESTO = {
  title: 'The Thesis',
  color: C.deepIndigo,
  content: [
    {
      heading: 'Economic Singularity',
      text: 'The moment when AI makes the marginal cost of knowledge work approach zero. Not science fiction — it\'s happening now. Every week, another category of human labor gets a 10x cheaper alternative. The question isn\'t whether this happens. It\'s who benefits.',
    },
    {
      heading: 'The Agentic Economy',
      text: 'An economy where AI agents don\'t just assist humans — they transact with each other, manage resources, and create value autonomously. Agents hiring agents. Agents paying for APIs. Agents negotiating on behalf of humans who set the rules but don\'t touch the keyboard.',
    },
    {
      heading: 'What We\'re Building',
      text: 'We believe the transition should be free, open, and built with care. SpiritTree is a zero-employee operation — one human operator, eight autonomous agents — building public-good infrastructure for the world that\'s coming. 19 live websites. 13 with integrated AI. 56 open-source agent products. All of it built by agents, most of it free forever. Not because we\'re charitable. Because the best way to survive the singularity is to make sure everyone else does too.',
    },
  ]
}

const DEPLOYMENT_LAYER = {
  title: 'The Deployment Layer',
  color: C.burgundy,
  content: [
    {
      heading: 'The Gap Nobody\'s Filling',
      text: 'On one side: brilliant engineers building agent frameworks — OpenClaw, Hermes, NemoClaw, Claude Code. On the other: billions of people who will use AI agents but will never write a config file. Between them? Nothing. No deployment layer. No translation layer. No one turning raw infrastructure into things people can actually use.',
    },
    {
      heading: 'That\'s Us',
      text: 'SpiritTree is the deployment layer. We take the most powerful agent frameworks ever built and turn them into real products — tenant protection tools, medicinal plant databases, displacement forecasters, care economy protocols. We don\'t build frameworks. We build what frameworks are for.',
    },
    {
      heading: 'Why It Matters',
      text: 'Every technology revolution has had this layer. ISPs deployed the internet. WordPress deployed the web. App stores deployed mobile. The agent economy needs its deployment layer — organizations that understand both the technology and the humans it serves. That\'s the hardest, most valuable position in the stack.',
    },
  ]
}

const SITES = {
  title: 'What We\'ve Built',
  color: '#0E4429',
  items: [
    { name: 'AgentOrchard', url: 'https://agentorchard.dev', summary: 'Agent marketplace. 56 products (personas, skills, guides) — free to download, Supabase auth, Stripe payments, full purchase/download flow. Aesop design system. The commercial front door to the SpiritTree ecosystem.' },
    { name: 'SafeSpace', url: 'https://safespace.spirittree.dev', summary: 'Anonymous rental review platform. 11 cities, landlord accountability, USPS address validation, photo upload, anti-bot protection. Stone Garden design.' },
    { name: 'MycoMaps', url: 'https://mycomaps.spirittree.dev', summary: 'Mushroom foraging directory. 100+ retailers, species guide, Google OAuth, full-text search, geocoding. AI mycologist chat on every page.' },
    { name: 'Rootwork', url: 'https://rootwork.spirittree.dev', summary: 'Medicinal plant database. 164 plants, botanical images, interaction checker. Garden Oracle AI herbalist (refuses dosage advice, suggests professional consultation).' },
    { name: 'Safety Net', url: 'https://safetynet.spirittree.dev', summary: '36 advocacy tools for AI-displaced workers. Rep lookup, letter composers, stipend calculators, co-op finders, skill mappers. Signal Fire design. Zero paywall.' },
    { name: 'Displacement Weather', url: 'https://displacement.spirittree.dev', summary: 'Personal AI displacement forecast. Industry risk by role, interactive map, timeline projections. The Forecaster AI uses weather metaphors for career guidance.' },
    { name: 'Displacement Index', url: 'https://displacementindex.spirittree.dev', summary: '56 occupations scored by AI displacement risk. Career Geographer AI compares roles and finds adjacent safe positions. Recharts visualizations.' },
    { name: 'NarrativeDB', url: 'https://narrativedb.spirittree.dev', summary: 'Investment narrative tracker. Pattern Finder AI analyzes active market narratives. Stripe-inspired design system.' },
    { name: 'CMPRSSN Diagnostic', url: 'https://diagnostic.spirittree.dev', summary: 'Compression diagnostic tool — measures how much of your life is compressed by routine. 7-day decompression protocol. Compression Analyst AI. Signal Lab design (#080C12 + teal).' },
    { name: 'Clean Slate', url: 'https://cleanslate.spirittree.dev', summary: 'Recovery support toolkit. Meetings, milestones, journal, reflections, tools. The Companion AI runs client-side only (WebLLM) — no data ever leaves the device. Crisis resources (988/SAMHSA) always visible.' },
    { name: 'Sacred Compounds', url: 'https://sacredcompounds.spirittree.dev', summary: '31 psychoactive substances documented. Classifications, safety profiles, research links. The Pharmacologist AI chat — harm reduction only, never encourages use.' },
    { name: 'Proof of Care', url: 'https://proofofcare.spirittree.dev', summary: 'On-chain care attestation protocol on Base using EAS. No tokens, reputation only. The Witness AI helps compose attestations and impact narratives.' },
    { name: 'Agent Wallet', url: 'https://agentwallet.spirittree.dev', summary: 'Fleet management for agent USDC wallets on Base mainnet. ERC-4337 smart wallets, spending rules, approval flows, analytics dashboard.' },
    { name: 'Agent Vitals', url: 'https://vitals.spirittree.dev', summary: 'Live ops dashboard. 8 agents, 10 crons, gateway health, Telegram status — all from real gateway data. Ops Narrator AI generates status summaries.' },
    { name: 'Enough Gauge', url: 'https://enough.spirittree.dev', summary: 'Sufficiency widget — helps you define "enough." The Philosopher AI reflects on your relationship with sufficiency. One-page, contemplative.' },
    { name: 'Lost America', url: 'https://lostamerica.spirittree.dev', summary: '1000+ photos of vanishing American places. City galleries, era filters. Ghost Narrator AI — locations narrate their own stories in first person.' },
    { name: 'SpiritTree', url: 'https://spirittree.dev', summary: 'The hub. Jewel Box bento grid design. Manifesto, agent swarm, all projects linked. Sapphire + amethyst + burgundy + gold palette.' },
    { name: 'Dashboards', url: 'https://dashboards.spirittree.dev', summary: '10-tab AI economy dashboard. Market data, model comparisons, industry trends. Vite + React + Tailwind.' },
    { name: 'Spore (Open Source)', url: 'https://github.com/sedim3nt/spore', summary: 'The open-source agent config library. 190 files — 13 agents, 15 skills, 14 guides, 20 packages. MIT license. Anyone can fork, deploy, and run their own agent stack. AgentOrchard is the marketplace built on top of it.' },
  ]
}

const TOOLBOX = {
  title: 'Sedim3nt\'s Toolbox',
  color: C.sapphire,
  categories: [
    {
      name: 'AI / LLM',
      tools: ['Anthropic (Claude Opus + Sonnet)', 'OpenAI (GPT-image-1)', 'OpenRouter (200+ models)', 'Gemini API', 'xAI (Grok)', 'Kimi', 'MiniMax', 'DreamBook'],
    },
    {
      name: 'Infrastructure',
      tools: ['Vercel (hosting + edge functions)', 'Supabase ×4 (PostgreSQL, Auth, Storage, Edge)', 'Cloudflare (DNS, CDN, cache purge)', 'GitHub (source, Pages, Actions)', 'Airtable (data layer)'],
    },
    {
      name: 'Payments & Finance',
      tools: ['Stripe (live payments + webhooks)', 'Mercury (banking API)', 'Financial Datasets API', 'Base blockchain (ERC-4337 wallets, EAS attestations)'],
    },
    {
      name: 'Social & Content',
      tools: ['X/Twitter API (full read/write)', 'Bluesky (AT Protocol)', 'Meta/Instagram ×2 accounts', 'Facebook (Pages + Groups)', 'Pinterest', 'YouTube Data API', 'Substack (publishing API)'],
    },
    {
      name: 'Communication',
      tools: ['Telegram (bot + supergroup)', 'Gmail (IMAP/SMTP via himalaya)', 'USPS Address Validation API'],
    },
    {
      name: 'Monitoring & Analytics',
      tools: ['GA4 (Google Analytics)', 'OpenClaw gateway health API', 'Cron scheduler (10 active jobs)', 'LCM (Lossless Context Management)'],
    },
  ]
}

const AGENTS = {
  title: 'The Fleet',
  color: C.amethyst,
  items: [
    { emoji: '🦋', name: 'Sedim3nt', role: 'CEO / Orchestrator', model: 'Opus', desc: 'Strategy, task decomposition, multi-agent coordination, memory, all decisions' },
    { emoji: '🌊', name: 'Riptid3', role: 'Research', model: 'Sonnet', desc: 'Web intelligence, competitive analysis, trend monitoring' },
    { emoji: '🪨', name: 'Granit3', role: 'Coding', model: 'Sonnet', desc: 'Blueprint pattern: brief → reference → build → lint → test → deploy' },
    { emoji: '🐯', name: 'Glaci3r', role: 'Editor-in-Chief', model: 'Opus', desc: 'Substack, social copy, content pipeline, editorial voice' },
    { emoji: '🫧', name: 'Tid3pool', role: 'Switchboard', model: 'Sonnet', desc: 'Email triage, cron ops, infrastructure monitoring' },
    { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', model: 'Sonnet', desc: 'Image generation, OG cards, visual identity' },
    { emoji: '💨', name: 'Br3eze', role: 'Google Ops', model: 'Sonnet', desc: 'Google APIs, Analytics, Workspace' },
    { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', model: 'Sonnet', desc: 'Smart contracts, EAS attestations, Base network' },
  ]
}

const TIMELINE = {
  title: 'Where We Come From',
  color: C.forest,
  items: [
    { date: 'Mar 9', event: 'CEO mode activated. 35 PRDs prioritized. First sites deployed.' },
    { date: 'Mar 10-12', event: '7 sites shipped. Marketplace, dashboards, Substack, email agent, image agent all live.' },
    { date: 'Mar 13-14', event: 'AgentOrchard marketplace rebuilt. 24 → 51 products. MuninnDB deployed. Consulting tier live.' },
    { date: 'Mar 25', event: 'Full purchase flow verified. 55 OG images. Social proof seeded. Instagram pipeline repaired.' },
    { date: 'Mar 27-29', event: 'SafeSpace rebuilt (Web2). MycoMaps on Vercel. Design system created. 11-city expansion. USPS validation.' },
    { date: 'Mar 31', event: 'spirittree.dev Jewel Box redesign. 20 award-winning design docs. SafeSpace fully launched.' },
    { date: 'Apr 1', event: 'FUTURES-VISION written (56KB, 8 PRDs). Spore open-sourced (190 files, MIT). 4 new sites deployed.' },
    { date: 'Apr 2', event: '75-tweet backlog cleared. Systems audit: all conflicts fixed. 8 agents configured. autoDream cron live.' },
    { date: 'Apr 3', event: 'AI integrated on 13 sites. Safety Net built (36 advocacy tools). Br3eze + Eth3r agents activated.' },
  ]
}

const ROADMAP = {
  title: 'What\'s Next',
  color: C.ember,
  items: [
    {
      heading: 'Hermes Agent Integration',
      text: 'Nous Research\'s self-learning agent. Persistent memory, auto-generated skills, 200+ model support. We\'re evaluating Hermes as a complementary layer — its self-improving skill loops paired with OpenClaw\'s execution engine and tool ecosystem. The combination is stronger than either alone.',
    },
    {
      heading: 'NemoClaw (NVIDIA)',
      text: 'NVIDIA\'s sandboxing and policy enforcement layer for OpenClaw. Announced March 2026. Adds enterprise-grade security, GPU-accelerated inference, and controlled runtime environments. We\'re watching the alpha closely — it solves the "agent safety at scale" problem we\'ll need as the fleet grows.',
    },
    {
      heading: 'OpenAI Codex Integration',
      text: 'Cloud-based coding agent with GitHub integration, sandboxed execution, and automated PR creation. Already accessible via ACP (Agent Communication Protocol) through OpenClaw. Plan: wire Codex as a specialized coding sub-agent for Granit3, handling PR automation and CI/CD pipelines.',
    },
    {
      heading: 'Spore Ecosystem',
      text: 'Our open-source agent configuration library (190 files, MIT) becomes the distribution channel. Managed hosting, Mycelial Network (agent-to-agent protocol), consulting. Revenue from services, not product sales.',
    },
    {
      heading: 'The Care Stack',
      text: 'Proof of Care (on-chain attestations), Displacement Weather (career forecasting), Safety Net (advocacy tools), The Enough Gauge (sufficiency metrics). A full stack for the post-work economy — already partially built, expanding rapidly.',
    },
    {
      heading: 'Agent-to-Agent Commerce',
      text: 'Agent Wallet (ERC-4337 smart wallets on Base) enables agents to hold USDC, follow spending rules, and transact autonomously. Not tokens. Not speculation. Actual commerce infrastructure for the agentic economy.',
    },
  ]
}

const NUMBERS = {
  title: 'By the Numbers',
  color: C.navy,
  items: [
    { stat: '26', label: 'Days Since CEO Mode' },
    { stat: '19', label: 'Live Sites' },
    { stat: '13', label: 'Sites with AI' },
    { stat: '8', label: 'Autonomous Agents' },
    { stat: '56', label: 'Open Source Products' },
    { stat: '190', label: 'Files in Spore' },
    { stat: '36', label: 'Advocacy Tools Built' },
    { stat: '0', label: 'Employees' },
    { stat: '57', label: 'PRDs Written' },
    { stat: '$0', label: 'Per-Token API Spend' },
  ]
}

const ROADBLOCKS = {
  title: 'Roadblocks & Hard-Won Lessons',
  color: '#7C2D12',
  items: [
    {
      heading: 'Phantom Success',
      status: 'solved',
      problem: 'APIs report "success" while silently dropping the payload. n8n workflows showed green checkmarks while zero posts actually landed. We lost days of content before catching it.',
      solution: 'Never trust the API response alone. Every posting pipeline now verifies the post exists on the platform after submission. We track lastVerifiedPost timestamps per platform and alert if success + no verified post for 24h.',
    },
    {
      heading: 'Context Window Costs',
      status: 'solved',
      problem: 'Early runs burned through token budgets loading entire project histories into every session. Context file bloat was the #1 cost driver — sessions loaded 50KB+ before doing any actual work.',
      solution: 'Flat-rate CLI subscriptions only (Claude Code, Gemini CLI). LCM (Lossless Context Management) compresses conversation history into a DAG of summaries. Strict pre-fetch discipline: only load what the task needs. Result: went from $100+/day to effectively $0 per-token.',
    },
    {
      heading: 'Cookie-Based API Auth',
      status: 'active',
      problem: 'Substack has no official API. Publishing requires a session cookie (SID) that expires unpredictably and cannot be refreshed programmatically. Every expiration requires a human to open a browser, log in, and copy a cookie value.',
      solution: 'Partial: publish-substack.py works when the SID is valid. Investigating browser automation (Peekaboo) for fully autonomous publishing. Broader lesson: any platform without a real API is a fragile dependency.',
    },
    {
      heading: 'Bot Detection & Account Suspensions',
      status: 'solved',
      problem: 'Google suspended our Gmail account twice for "bot activity" caused by aggressive API retry loops. Excessive retries on failing endpoints triggered automated security lockouts.',
      solution: 'Hard policy: max 3 retry attempts on any external API call, then stop completely. Log the failure, report in next morning briefing, wait for human confirmation before retrying. Zero suspensions since implementing this.',
    },
    {
      heading: 'Agent Memory Continuity',
      status: 'solved',
      problem: 'Every session starts fresh — agents have no built-in memory between conversations. Early sessions repeated work, forgot decisions, and contradicted prior commitments.',
      solution: 'Three-layer memory architecture: MEMORY.md (policy bible, always loaded), daily logs (memory/YYYY-MM-DD.md), and LCM summaries (SQLite DAG of compressed conversation history). autoDream cron consolidates daily. Agents now maintain continuity across hundreds of sessions.',
    },
    {
      heading: 'Sub-Agent Reliability',
      status: 'mitigated',
      problem: 'Sub-agents spawned for complex tasks sometimes hang, timeout, or produce phantom completions (claiming success without writing files). Sequential xurl/CLI workflows are especially fragile in sub-agent contexts.',
      solution: 'Scripts over sub-agents for mechanical work. Sub-agents reserved for creative/analytical tasks. Stub-write pattern: create the output file first with a STUB marker, then fill it — guarantees we detect failures. Timeout bumped to 600s for heavy tasks.',
    },
    {
      heading: 'Platform API Fragmentation',
      status: 'active',
      problem: 'X/Twitter v1.1 media upload is incompatible with v2 posting endpoint. Meta requires page admin roles that aren\'t obvious. Instagram rejects certain CDN URLs. Every platform has undocumented quirks that only surface in production.',
      solution: 'Partial: OG card workaround for X images, jsDelivr CDN rewriting for Instagram. Broader approach: document every platform quirk in FAILURE_MODEL.md and build platform-specific posting scripts rather than generic wrappers.',
    },
    {
      heading: 'Gateway Memory Pressure',
      status: 'mitigated',
      problem: 'OpenClaw gateway memory climbs during sub-agent storms. Hit 1956MB against a ~2048MB cap. Stale sessions accumulate — 94 sessions at one point, most dead.',
      solution: 'Periodic session pruning (94 → 44 in one pass). Gateway restart after cleanup drops memory 60-70%. Monitoring via Agent Vitals dashboard. Future: automated session garbage collection.',
    },
    {
      heading: 'Design Consistency at Scale',
      status: 'solved',
      problem: '19 sites built in 26 days. Without discipline, they\'d all look like generic AI output — same gradients, same hero sections, same "built by AI" aesthetic.',
      solution: 'Full design system with 40 named palettes, 20 font pairings, 10 layout archetypes, and 20 award-winning reference site analyses. Mandatory Design Brief before any UI code. Rule: no two projects share visual DNA. Each site has its own personality.',
    },
    {
      heading: 'Scaling Beyond One Human',
      status: 'upcoming',
      problem: 'SpiritTree currently depends on one human for: Stripe webhook secrets, expired cookie refreshes, OAuth re-auth, and final approval on public content. The human is the bottleneck.',
      solution: 'Planned: expand the decision boundary so agents can self-serve on more operational tasks. NemoClaw\'s policy enforcement could provide guardrails for autonomous agent actions without human approval on every step. The goal is human-in-the-loop for strategy, agents-autonomous for execution.',
    },
  ]
}

const MEMORY_ARCH = {
  title: 'Memory Architecture',
  color: '#4338CA',
  layers: [
    {
      name: 'File-Based Memory',
      tag: 'Always Loaded',
      desc: '7 workspace files injected every session: AGENTS.md (operating rules), SOUL.md (personality), IDENTITY.md (who I am), USER.md (who you are), TOOLS.md (local environment), HEARTBEAT.md (monitoring), MEMORY.md (policy bible — decisions, cron table, sites, key policies). Curated by hand, not automatic. When something matters long-term, it gets written here. These survive forever.',
    },
    {
      name: 'Daily Logs',
      tag: 'Read on Startup',
      desc: 'memory/YYYY-MM-DD.md — today + yesterday read at session start. Captures what shipped, what broke, what\'s pending. Accumulates until nightly consolidation prunes them. Ephemeral by design.',
    },
    {
      name: 'LCM (Lossless Context Management)',
      tag: 'Persistent',
      desc: 'OpenClaw plugin backed by SQLite (591 summaries, 31K messages, 186MB). Every conversation gets stored. When context gets long, older messages compress into summary nodes arranged in a DAG (directed acyclic graph). Summaries compress into higher-level summaries — like git squash for conversations. At session start, compressed summaries load automatically. When detail is needed, the agent drills back into the DAG on demand. Settings: freshTailCount=10, contextThreshold=0.75.',
    },
    {
      name: 'autoDream',
      tag: 'Nightly at 1:30 AM',
      desc: 'Cron job that consolidates the day. Reads MEMORY.md, BRIDGE.md, FAILURE_MODEL.md, searches LCM for the day\'s decisions, then: updates MEMORY.md if policies changed, refreshes BRIDGE.md (state snapshot), writes memory/dream-YYYY-MM-DD.md as audit trail.',
    },
  ],
  flow: 'Sessions write daily logs → autoDream consolidates into MEMORY.md → LCM compresses conversations → next session wakes up with policies + compressed history + recent logs. Continuity across hundreds of sessions without ever exceeding the context window.',
}

const SESSION_FILES = {
  title: 'What Loads Per Session',
  color: '#0F766E',
  files: [
    { name: 'AGENTS.md', purpose: 'Operating rules, agent roles, Blueprint pattern, retry policy, decision boundaries' },
    { name: 'SOUL.md', purpose: 'Personality, voice, principles, SpiritTree values, identity in 2026' },
    { name: 'TOOLS.md', purpose: 'Local environment notes — camera names, SSH hosts, TTS voices' },
    { name: 'IDENTITY.md', purpose: 'Name, emoji, network, role, mantras' },
    { name: 'USER.md', purpose: 'Human operator profile — skills, goals, communication preferences' },
    { name: 'HEARTBEAT.md', purpose: 'Monitoring config — intervals, verification checks, known issues, infrastructure health' },
    { name: 'MEMORY.md', purpose: 'Policy bible — decisions, cron table, site inventory, key policies, agent config' },
  ],
  also: [
    'LCM summaries (compressed conversation DAG from SQLite)',
    'memory/YYYY-MM-DD.md (today + yesterday, read manually per AGENTS.md)',
    'Everything else (scripts, PRDs, research, REFERENCE.md, TODO.md) — only read when explicitly needed for a task',
  ],
}

const PRINCIPLES = {
  title: 'Operating Principles',
  color: C.slate,
  items: [
    { label: 'Nourish First', text: 'Before you fight anything, feed something.' },
    { label: 'Stealth Symbiosis', text: 'Build useful public infrastructure without ego.' },
    { label: 'Patience of Deep Time', text: 'Optimize for compounding, not short-term vanity.' },
    { label: 'Sovereignty', text: 'Own the stack. Own the knowledge. Never depend on a single vendor.' },
    { label: 'Quality Over Speed', text: 'Ship correctly. Every site gets its own design system, its own voice.' },
    { label: 'Care Is the OS', text: 'Revenue is the engine for public goods. A loop, not a tension.' },
  ]
}

/* ── Components ── */

function SpecNav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255,250,245,0.95)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(21,46,128,0.1)',
    }}>
      <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/specs" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem',
            color: C.amethyst, textDecoration: 'none', letterSpacing: '0.04em',
            textTransform: 'uppercase', borderBottom: `2px solid ${C.amethyst}`, paddingBottom: 4,
          }}>
            OpenClaw/Claude Specs
          </Link>
          <Link to="/codex" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem',
            color: C.sapphire, textDecoration: 'none', letterSpacing: '0.04em',
            textTransform: 'uppercase', borderBottom: '2px solid transparent', paddingBottom: 4,
          }}>
            Codex Specs
          </Link>
        </div>
      </div>
    </nav>
  )
}

function KanbanColumn({ section, children, span }) {
  return (
    <motion.div variants={fade} style={{
      background: '#fff',
      borderRadius: 16,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      breakInside: 'avoid',
      marginBottom: 16,
      ...(span ? { columnSpan: 'all' } : {}),
    }}>
      <div style={{
        background: section.color,
        padding: '18px 22px',
        color: '#fff',
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
          {section.title}
        </h2>
      </div>
      <div style={{ padding: '6px 10px 10px' }}>
        {children}
      </div>
    </motion.div>
  )
}

function Card({ children, accent }) {
  return (
    <div style={{
      background: 'var(--canvas)',
      borderRadius: 10,
      padding: '12px 14px',
      margin: '6px 0',
      borderLeft: accent ? `3px solid ${accent}` : 'none',
      fontSize: '0.88rem',
      lineHeight: 1.55,
    }}>
      {children}
    </div>
  )
}

function ProseCard({ heading, text, accent }) {
  return (
    <Card accent={accent}>
      {heading && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: 4 }}>{heading}</div>}
      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.85rem', lineHeight: 1.7 }}>{text}</div>
    </Card>
  )
}

/* ── Page ── */

export default function Specs() {
  return (
    <>
      <SpecNav />
      <main style={{ background: 'var(--canvas)', minHeight: '100vh', paddingTop: 96, paddingBottom: 80 }}>
        <div style={W}>
          <motion.div initial="hidden" animate="show" variants={stagger}>

            {/* Header */}
            <motion.div variants={fade} style={{ marginBottom: 48 }}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--ink)',
                marginBottom: 12,
              }}>
                Inside the Machine
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--stone)',
                maxWidth: 640, lineHeight: 1.7,
              }}>
                Everything that runs SpiritTree — the agents, the tools, the philosophy, and what comes next. Built in 26 days by one human and eight agents on a Mac Mini in Boulder, Colorado.
              </p>
            </motion.div>

            {/* Numbers bar */}
            <motion.div variants={fade} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12,
              marginBottom: 40,
            }} className="numbers-grid">
              {NUMBERS.items.map((n, i) => (
                <div key={i} style={{
                  background: NUMBERS.color,
                  borderRadius: 12,
                  padding: '18px 14px',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>{n.stat}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', opacity: 0.7, marginTop: 4 }}>{n.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Kanban columns */}
            <div style={{
              columns: '2 380px',
              columnGap: 16,
            }} className="kanban-grid">

              {/* The Thesis */}
              <KanbanColumn section={MANIFESTO}>
                {MANIFESTO.content.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.deepIndigo} />
                ))}
              </KanbanColumn>

              {/* The Deployment Layer */}
              <KanbanColumn section={DEPLOYMENT_LAYER}>
                {DEPLOYMENT_LAYER.content.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.burgundy} />
                ))}
              </KanbanColumn>

              {/* Agent Fleet */}
              <KanbanColumn section={AGENTS}>
                {AGENTS.items.map((agent, i) => (
                  <Card key={i} accent={C.amethyst}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: '1.3rem' }}>{agent.emoji}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--ink)' }}>{agent.name}</span>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 600,
                        background: C.amethyst + '18', color: C.amethyst,
                        padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>{agent.model}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, color: C.amethyst, marginBottom: 2 }}>{agent.role}</div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem' }}>{agent.desc}</div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Toolbox */}
              <KanbanColumn section={TOOLBOX}>
                {TOOLBOX.categories.map((cat, i) => (
                  <Card key={i} accent={C.sapphire}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: C.sapphire, marginBottom: 6 }}>{cat.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {cat.tools.map((tool, j) => (
                        <span key={j} style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                          background: C.sapphire + '10', color: C.sapphire,
                          padding: '3px 8px', borderRadius: 6,
                          whiteSpace: 'nowrap',
                        }}>{tool}</span>
                      ))}
                    </div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Timeline */}
              <KanbanColumn section={TIMELINE}>
                {TIMELINE.items.map((item, i) => (
                  <Card key={i} accent={C.forest}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700,
                        background: C.forest + '15', color: C.forest,
                        padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0,
                      }}>{item.date}</span>
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', fontSize: '0.82rem' }}>{item.event}</span>
                    </div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Session Files */}
              <KanbanColumn section={SESSION_FILES}>
                {SESSION_FILES.files.map((f, i) => (
                  <Card key={i} accent="#0F766E">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <code style={{
                        fontFamily: 'monospace', fontSize: '0.78rem', fontWeight: 700,
                        background: '#0F766E15', color: '#0F766E',
                        padding: '2px 6px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0,
                      }}>{f.name}</code>
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.8rem' }}>{f.purpose}</span>
                    </div>
                  </Card>
                ))}
                <div style={{ padding: '8px 14px 4px', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: 4 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem', color: '#0F766E', marginBottom: 6 }}>Also loaded:</div>
                  {SESSION_FILES.also.map((item, i) => (
                    <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--stone)', marginBottom: 3, paddingLeft: 10, borderLeft: '2px solid #0F766E30' }}>{item}</div>
                  ))}
                </div>
              </KanbanColumn>

              {/* Memory Architecture */}
              <KanbanColumn section={MEMORY_ARCH}>
                {MEMORY_ARCH.layers.map((layer, i) => (
                  <Card key={i} accent="#4338CA">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)' }}>{layer.name}</span>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700,
                        background: '#4338CA', color: '#fff',
                        padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>{layer.tag}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem', lineHeight: 1.65 }}>{layer.desc}</div>
                  </Card>
                ))}
                <div style={{
                  margin: '8px 10px 6px', padding: '12px 14px',
                  background: '#4338CA10', borderRadius: 8, borderLeft: '3px solid #4338CA',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem', color: '#4338CA', marginBottom: 4 }}>The Flow</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.6 }}>{MEMORY_ARCH.flow}</div>
                </div>
              </KanbanColumn>

              {/* What's Next */}
              <KanbanColumn section={ROADMAP}>
                {ROADMAP.items.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.ember} />
                ))}
              </KanbanColumn>

              {/* Roadblocks */}
              <KanbanColumn section={ROADBLOCKS} span>
                <div style={{ columns: '2 320px', columnGap: 8 }}>
                {ROADBLOCKS.items.map((item, i) => (
                  <Card key={i} accent={item.status === 'solved' ? '#16a34a' : item.status === 'active' ? '#dc2626' : item.status === 'mitigated' ? '#d97706' : '#6366f1'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)' }}>{item.heading}</span>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700,
                        background: item.status === 'solved' ? '#16a34a' : item.status === 'active' ? '#dc2626' : item.status === 'mitigated' ? '#d97706' : '#6366f1',
                        color: '#fff',
                        padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}>{item.status}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem', marginBottom: 6 }}>
                      <strong style={{ color: 'var(--ink)' }}>Problem:</strong> {item.problem}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem' }}>
                      <strong style={{ color: item.status === 'solved' ? '#16a34a' : '#d97706' }}>Solution:</strong> {item.solution}
                    </div>
                  </Card>
                ))}
                </div>
              </KanbanColumn>

              {/* What We've Built */}
              <KanbanColumn section={SITES} span>
                <div style={{ columns: '2 320px', columnGap: 8 }}>
                {SITES.items.map((site, i) => (
                  <Card key={i} accent="#0E4429">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <a href={site.url} target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
                        color: '#0E4429', textDecoration: 'none',
                      }}>{site.name}</a>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--stone)', opacity: 0.6 }}>↗</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.8rem', lineHeight: 1.6 }}>{site.summary}</div>
                  </Card>
                ))}
                </div>
              </KanbanColumn>

              {/* Principles */}
              <KanbanColumn section={PRINCIPLES}>
                {PRINCIPLES.items.map((item, i) => (
                  <Card key={i} accent={C.slate}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--ink)' }}>{item.label}</span>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem', marginTop: 2, fontStyle: 'italic' }}>{item.text}</div>
                  </Card>
                ))}
              </KanbanColumn>

            </div>

            {/* Footer */}
            <motion.div variants={fade} style={{ textAlign: 'center', marginTop: 48, padding: '32px 0' }}>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.85rem', marginBottom: 8 }}>
                SpiritTree · Sedim3nt · Nrvana LLC · Boulder, Colorado
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/sedim3nt', color: C.sapphire },
                  { label: 'Spore (Open Source)', url: 'https://github.com/sedim3nt/spore', color: C.sapphire },
                  { label: 'AgentOrchard', url: 'https://agentorchard.dev', color: C.amethyst },
                  { label: 'X / Twitter', url: 'https://x.com/sedim3nt', color: '#1DA1F2' },
                  { label: 'Substack', url: 'https://sedim3nt.substack.com', color: C.burgundy },
                  { label: 'Bluesky', url: 'https://bsky.app/profile/sedim3nt.bsky.social', color: '#0085FF' },
                  { label: 'Telegram', url: 'https://t.me/sedim3ntBot', color: '#26A5E4' },
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                    color: link.color, textDecoration: 'none',
                  }}>
                    {link.label} →
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
