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
}

const W = { maxWidth: 1280, margin: '0 auto', padding: '0 32px' }

/* ── Data ── */
const INFRA = {
  title: 'Infrastructure',
  color: C.sapphire,
  items: [
    { label: 'Framework', value: 'OpenClaw' },
    { label: 'Orchestrator Model', value: 'Claude Opus 4.6' },
    { label: 'Agent Models', value: 'Claude Sonnet 4.6' },
    { label: 'LLM Routing', value: 'OpenRouter (swappable)' },
    { label: 'Memory', value: 'LCM (Lossless Context Management)' },
    { label: 'Communication', value: 'Telegram' },
    { label: 'Hosting', value: 'Vercel + GitHub Pages' },
    { label: 'Database', value: 'Supabase (PostgreSQL + Auth + Edge Functions)' },
    { label: 'DNS/CDN', value: 'Cloudflare' },
    { label: 'Payments', value: 'Stripe (live)' },
    { label: 'Email', value: 'himalaya CLI (Gmail IMAP/SMTP)' },
    { label: 'Source Control', value: 'GitHub' },
    { label: 'Analytics', value: 'GA4' },
    { label: 'Cost Model', value: 'Flat-rate CLI subscriptions only (no per-token API)' },
  ]
}

const AGENTS = {
  title: 'Agent Fleet',
  color: C.amethyst,
  items: [
    { emoji: '🦋', name: 'Sedim3nt', role: 'Orchestrator / CEO', model: 'Opus', desc: 'Strategic planning, task decomposition, multi-agent coordination, memory management' },
    { emoji: '🌊', name: 'Riptid3', role: 'Research', model: 'Sonnet', desc: 'Web research, competitive intelligence, trend analysis, social monitoring' },
    { emoji: '🪨', name: 'Granit3', role: 'Coding', model: 'Sonnet', desc: 'Blueprint pattern: design brief → reference study → build → lint → test → deploy' },
    { emoji: '🐯', name: 'Glaci3r', role: 'Content / Editor-in-Chief', model: 'Opus', desc: 'Writing, Substack publishing, social copy, content pipeline management' },
    { emoji: '🫧', name: 'Tid3pool', role: 'Operations / Switchboard', model: 'Sonnet', desc: 'Email triage, cron management, infrastructure monitoring' },
    { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', model: 'Sonnet + gpt-image-1', desc: 'Image generation, OG cards, social media visuals' },
    { emoji: '💨', name: 'Br3eze', role: 'Google Ecosystem', model: 'Sonnet', desc: 'Google APIs, Analytics, Workspace integration' },
    { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', model: 'Sonnet', desc: 'Smart contracts, EAS attestations, Base network operations' },
  ]
}

const CRONS = {
  title: 'Cron Schedule',
  color: C.burgundy,
  items: [
    { time: '12:00 AM', name: 'compact-daily-logs', desc: 'Compress daily memory files' },
    { time: '12:30 AM / PM', name: 'heartbeat', desc: 'Infrastructure health check, channel verify, alert triage' },
    { time: '1:30 AM', name: 'autoDream', desc: 'Nightly memory consolidation — MEMORY.md refresh, BRIDGE.md update, dream audit trail' },
    { time: '2:00 AM', name: 'nightly-self-improvement', desc: 'Systems audit, stale project circuit breaker, doc cleanup' },
    { time: '3:00 AM (every 3 days)', name: 'github-trending', desc: 'Scan trending repos, feed into content pipeline' },
    { time: '3:30 AM', name: 'daily-research-briefing', desc: 'AI/crypto/macro news synthesis → tweet + Substack queue' },
    { time: '4:30 AM', name: 'daily-marketing', desc: 'Post tweets, Bluesky, rotate content from queues' },
    { time: '5:00 AM (Mon-Fri)', name: 'daily-substack-publish', desc: 'Publish daily Substack from research briefing' },
    { time: '7 AM / 3 PM / 11 PM', name: 'email-check', desc: 'Inbox triage, auto-reply, escalation forwarding' },
    { time: '3:00 AM (Tue)', name: 'ping-safespace-supabase', desc: 'Keep Supabase free tier alive' },
  ]
}

const SITES = {
  title: 'Live Sites (19)',
  color: C.gold,
  items: [
    { name: 'agentorchard.dev', stack: 'Next.js 15, Supabase Auth, Stripe', ai: '—', hosting: 'Vercel' },
    { name: 'safespace.spirittree.dev', stack: 'React/Vite, Supabase, USPS validation', ai: '—', hosting: 'GitHub Pages' },
    { name: 'mycomaps.spirittree.dev', stack: 'Next.js 15, Supabase, Google OAuth', ai: 'The Mycologist', hosting: 'Vercel' },
    { name: 'rootwork.spirittree.dev', stack: 'Next.js 15, 164 plants, Fuse.js', ai: 'Garden Oracle', hosting: 'Vercel' },
    { name: 'cleanslate.spirittree.dev', stack: 'Next.js 15, Supabase Auth', ai: 'The Companion', hosting: 'Vercel' },
    { name: 'lostamerica.spirittree.dev', stack: 'Next.js 15, photo galleries', ai: 'Ghost Narrator', hosting: 'Vercel' },
    { name: 'sacredcompounds.spirittree.dev', stack: 'Next.js 15, 31 substances', ai: 'The Pharmacologist', hosting: 'Vercel' },
    { name: 'safetynet.spirittree.dev', stack: 'Next.js 16, 36 advocacy tools', ai: 'Built-in tools', hosting: 'Vercel' },
    { name: 'narrativedb.spirittree.dev', stack: 'Next.js 15, Stripe design', ai: 'Pattern Finder', hosting: 'Vercel' },
    { name: 'vitals.spirittree.dev', stack: 'Next.js 15, live gateway data', ai: 'Ops Narrator', hosting: 'Vercel' },
    { name: 'displacement.spirittree.dev', stack: 'Next.js 15, industry data', ai: 'The Forecaster', hosting: 'Vercel' },
    { name: 'displacementindex.spirittree.dev', stack: 'Next.js 15, 56 occupations, Recharts', ai: 'Career Geographer', hosting: 'Vercel' },
    { name: 'diagnostic.spirittree.dev', stack: 'Next.js 15, Signal Lab design', ai: 'Compression Analyst', hosting: 'Vercel' },
    { name: 'enough.spirittree.dev', stack: 'Next.js 15, sufficiency widget', ai: 'The Philosopher', hosting: 'Vercel' },
    { name: 'proofofcare.spirittree.dev', stack: 'Next.js 15, Base Sepolia, EAS', ai: 'The Witness', hosting: 'Vercel' },
    { name: 'agentwallet.spirittree.dev', stack: 'Next.js 15, Base, ERC-4337', ai: '—', hosting: 'Vercel' },
    { name: 'spirittree.dev', stack: 'Vite + React, Framer Motion', ai: '—', hosting: 'GitHub Pages' },
    { name: 'dashboards.spirittree.dev', stack: 'Vite + React + Tailwind, 10 tabs', ai: '—', hosting: 'GitHub Pages' },
    { name: 'sedim3nt.substack.com', stack: 'Substack platform', ai: '—', hosting: 'Substack' },
  ]
}

const DESIGN = {
  title: 'Design System',
  color: C.indigo,
  items: [
    { label: 'Rule', value: 'No two projects share visual DNA. No generic AI aesthetics.' },
    { label: 'Process', value: 'Design Brief required before any UI code (Blueprint pattern)' },
    { label: 'Palettes', value: '40+ named palettes (Denim Workshop, Copper Compass, Moss Circuit, Stone Garden, Signal Fire, Jewel Box…)' },
    { label: 'Font System', value: '20+ curated pairings by mood (display + body)' },
    { label: 'Layout Archetypes', value: 'Bento mosaic, kanban, editorial, dashboard, split hero, card grid' },
    { label: 'Reference Library', value: '20 award-winning sites documented (Stripe, Linear, Vercel, Apple, Aesop, Arc…)' },
  ]
}

const MEMORY = {
  title: 'Memory Architecture',
  color: C.plum,
  items: [
    { label: 'LCM', value: 'Lossless Context Management — SQLite-backed summary DAG, 0.75 threshold' },
    { label: 'MEMORY.md', value: 'Long-term policy bible — decisions, strategies, cron tables, site inventory' },
    { label: 'BRIDGE.md', value: 'Session state snapshot — refreshed nightly by autoDream' },
    { label: 'Daily Logs', value: 'memory/YYYY-MM-DD.md — compressed nightly, deleted after consolidation' },
    { label: 'Dream Logs', value: 'memory/dream-YYYY-MM-DD.md — nightly audit trail of what changed' },
    { label: 'FAILURE_MODEL.md', value: 'Known failure patterns — SID rotation, phantom success, timeout traps' },
    { label: 'Workspace Files', value: '7 files auto-injected at session start (AGENTS, SOUL, TOOLS, IDENTITY, USER, HEARTBEAT, MEMORY)' },
  ]
}

const NUMBERS = {
  title: 'By the Numbers',
  color: C.navy,
  items: [
    { stat: '19', label: 'Live Sites' },
    { stat: '13', label: 'Sites with AI' },
    { stat: '8', label: 'Autonomous Agents' },
    { stat: '10', label: 'Active Crons' },
    { stat: '56', label: 'Products (AgentOrchard)' },
    { stat: '190', label: 'Open Source Files (Spore)' },
    { stat: '164', label: 'Medicinal Plants (Rootwork)' },
    { stat: '0', label: 'Employees' },
    { stat: '1', label: 'Human Operator' },
    { stat: '$0', label: 'Per-token API Spend' },
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
          ← SpiritTree
        </a>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: C.amethyst, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          System Specs
        </span>
      </div>
    </nav>
  )
}

function KanbanColumn({ section, children }) {
  return (
    <motion.div variants={fade} style={{
      background: '#fff',
      borderRadius: 16,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      breakInside: 'avoid',
      marginBottom: 16,
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
                System Specs
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--stone)',
                maxWidth: 600, lineHeight: 1.7,
              }}>
                One operator. Eight agents. Nineteen live sites. Everything below runs autonomously on a Mac Mini in Boulder, Colorado.
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

              {/* Infrastructure */}
              <KanbanColumn section={INFRA}>
                {INFRA.items.map((item, i) => (
                  <Card key={i} accent={C.sapphire}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem', color: C.sapphire }}>{item.label}</span>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', marginTop: 2 }}>{item.value}</div>
                  </Card>
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

              {/* Memory */}
              <KanbanColumn section={MEMORY}>
                {MEMORY.items.map((item, i) => (
                  <Card key={i} accent={C.plum}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem', color: C.plum }}>{item.label}</span>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', marginTop: 2 }}>{item.value}</div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Cron Schedule */}
              <KanbanColumn section={CRONS}>
                {CRONS.items.map((cron, i) => (
                  <Card key={i} accent={C.burgundy}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--ink)' }}>{cron.name}</span>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600,
                        background: C.burgundy + '15', color: C.burgundy,
                        padding: '2px 8px', borderRadius: 4,
                      }}>{cron.time}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem' }}>{cron.desc}</div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Design System */}
              <KanbanColumn section={DESIGN}>
                {DESIGN.items.map((item, i) => (
                  <Card key={i} accent={C.indigo}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem', color: C.indigo }}>{item.label}</span>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', marginTop: 2 }}>{item.value}</div>
                  </Card>
                ))}
              </KanbanColumn>

              {/* Live Sites */}
              <KanbanColumn section={SITES}>
                {SITES.items.map((site, i) => (
                  <Card key={i} accent={C.gold}>
                    <a href={`https://${site.name}`} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem',
                      color: C.sapphire, textDecoration: 'none',
                    }}>
                      {site.name} ↗
                    </a>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.78rem', marginTop: 2 }}>{site.stack}</div>
                    {site.ai !== '—' && (
                      <span style={{
                        display: 'inline-block', marginTop: 4,
                        fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 600,
                        background: C.amethyst + '18', color: C.amethyst,
                        padding: '2px 8px', borderRadius: 4,
                      }}>🤖 {site.ai}</span>
                    )}
                    <span style={{
                      display: 'inline-block', marginTop: 4, marginLeft: site.ai !== '—' ? 6 : 0,
                      fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 600,
                      background: C.gold + '18', color: C.gold,
                      padding: '2px 8px', borderRadius: 4,
                    }}>{site.hosting}</span>
                  </Card>
                ))}
              </KanbanColumn>

            </div>

            {/* Footer */}
            <motion.div variants={fade} style={{ textAlign: 'center', marginTop: 48, padding: '32px 0' }}>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.85rem', marginBottom: 8 }}>
                SpiritTree · Sedim3nt · Nrvana LLC · Boulder, Colorado · 2026
              </p>
              <a href="https://github.com/sedim3nt/spore" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                color: C.sapphire, textDecoration: 'none',
              }}>
                Open Source on GitHub →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
