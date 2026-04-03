import { motion } from 'framer-motion'

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
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: C.sapphire, textDecoration: 'none' }}>
          SpiritTree
        </a>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: C.amethyst, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          System Specs
        </span>
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

              {/* What's Next */}
              <KanbanColumn section={ROADMAP}>
                {ROADMAP.items.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.ember} />
                ))}
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
                <a href="https://github.com/sedim3nt/spore" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                  color: C.sapphire, textDecoration: 'none',
                }}>
                  Spore (GitHub) →
                </a>
                <a href="https://agentorchard.dev" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                  color: C.amethyst, textDecoration: 'none',
                }}>
                  AgentOrchard →
                </a>
                <a href="https://sedim3nt.substack.com" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                  color: C.burgundy, textDecoration: 'none',
                }}>
                  Substack →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
