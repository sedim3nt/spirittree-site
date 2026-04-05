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
  cedar: '#7C3A14',
}

const W = { maxWidth: 1280, margin: '0 auto', padding: '0 32px' }

const TRANSITION = {
  title: 'The Break',
  color: C.deepIndigo,
  content: [
    {
      heading: 'What Changed',
      text: 'The original operating model treated Claude CLI inside OpenClaw as the main place where serious work happened. That held as long as Anthropic remained the stable center of the stack. Once that path began to close, the weakness was obvious: the deepest implementation work was too dependent on one vendor.',
    },
    {
      heading: 'Why It Mattered',
      text: 'This was not a cosmetic tooling swap. OpenClaw had become the shell around a real business: live websites, Telegram operations, PRDs, cron jobs, Stripe flows, and a growing operational memory. The transition had to preserve continuity while changing where the work was actually done.',
    },
    {
      heading: 'The Actual Problem',
      text: 'OpenClaw still worked as an orchestration layer, but it was no longer the right place for sustained coding, debugging, UI work, deployment repair, or repo architecture. The old model blurred dispatch and execution. The new one separates them.',
    },
  ],
}

const DECISIONS = {
  title: 'Executive Decisions',
  color: C.burgundy,
  content: [
    {
      heading: 'Codex Becomes the Primary Build Surface',
      text: 'Codex now owns repo work: implementation, debugging, refactors, QA, migrations, deployment fixes, copy placement, and interface polish. The coding surface is no longer downstream of Telegram. It is the primary place where the codebase is read and changed.',
    },
    {
      heading: 'Sedim3nt Is Not Removed',
      text: 'Sedim3nt was not discarded; the role changed. Sedim3nt remains the chief of staff, dispatcher, operator, and status voice of the system. Intake, routing, summaries, progress reporting, and Telegram ownership stay there.',
    },
    {
      heading: 'OpenClaw Stays, But Narrows',
      text: 'OpenClaw is no longer treated as the main coding surface. It remains valuable where it is strongest: channel routing, Telegram access, scheduled jobs, remote supervision, and background orchestration. It becomes the operational shell around the build system, not the build system itself.',
    },
  ],
}

const NEW_STACK = {
  title: 'The New Stack',
  color: C.sapphire,
  categories: [
    {
      name: 'Codex',
      tools: ['Primary coding surface', 'Repo edits', 'Debugging', 'UI implementation', 'Build + lint + test loops', 'Deployment repair', 'Git operations'],
    },
    {
      name: 'Sedim3nt',
      tools: ['Telegram intake', 'Task triage', 'Dispatch', 'Status updates', 'Summaries', 'Escalation and routing'],
    },
    {
      name: 'OpenClaw',
      tools: ['Channel orchestration', 'Telegram runtime', 'Session history', 'Cron jobs', 'Remote supervision', 'Agent glue'],
    },
    {
      name: 'n8n / Deterministic Automation',
      tools: ['Scheduled workflows', 'Service-to-service sync', 'Alerts', 'Low-risk automation', 'Webhook plumbing'],
    },
  ],
}

const AGENT_REALIGNMENT = {
  title: 'What Happened to the Agents',
  color: C.amethyst,
  items: [
    { emoji: '🦋', name: 'Sedim3nt', role: 'Chief of Staff / Dispatcher', model: 'Operational shell', desc: 'Owns intake, triage, routing, summaries, and the human-facing status format. No longer the default place where full coding work is executed.' },
    { emoji: '🪨', name: 'Granit3', role: 'Legacy Coding Role', model: 'Historical pattern', desc: 'The old coding brief-pattern still matters, but the actual center of implementation moves into Codex.' },
    { emoji: '💬', name: 'Claude Copy Agent', role: 'Optional Specialist', model: 'Writing layer', desc: 'A separate Claude-backed OpenClaw agent can still help with copy if Anthropic access remains available. That is a specialist role, not the center of execution.' },
    { emoji: '⛰️', name: 'B3dRock', role: 'Codex Identity', model: 'Primary builder', desc: 'The grounded execution surface: inspect the repo, make the change, test it, push it, and keep the system coherent.' },
  ],
}

const WORKFLOW = {
  title: 'The New Workflow',
  color: C.forest,
  items: [
    { date: '1', event: 'Start in Codex when the task touches files, code, deployment, architecture, or design.' },
    { date: '2', event: 'Use Telegram when you want remote intake, status, quick direction, reminders, or “start this and report back.”' },
    { date: '3', event: 'Sedim3nt classifies the request, routes it, and reports progress in a four-part format: what started, what shipped, what is blocked, and what is needed from you.' },
    { date: '4', event: 'Codex performs the implementation locally against the real repository, then verifies the result with build, lint, test, and live checks where appropriate.' },
    { date: '5', event: 'OpenClaw remains the connective tissue: Telegram, session history, orchestrated jobs, and the operational shell around the coding system.' },
  ],
}

const SAFE_GUARDS = {
  title: 'Decision Boundaries',
  color: C.ember,
  items: [
    {
      heading: 'High-Risk Operations Stay Explicit',
      text: 'Payments, banking, wallet actions, credential changes, and public posting remain gated. Codex can prepare the system. Sedim3nt can monitor and summarize it. Risky actions stay deliberate.',
    },
    {
      heading: 'OpenClaw Is No Longer a Catch-All',
      text: 'One lesson from the migration is that orchestration layers expand until they become confusing unless their domain is named precisely. OpenClaw now has a narrower brief: dispatch, automation, channels, and memory continuity.',
    },
    {
      heading: 'Thread Discipline Matters',
      text: 'Codex works best when threads are separated by system: SafeSpace product work in one thread, auth and backend in another, OpenClaw operations in another, random tool questions elsewhere. That reduces stale assumptions and preserves sharper context.',
    },
  ],
}

const BENEFITS = {
  title: 'What Improved',
  color: C.navy,
  items: [
    { stat: '1', label: 'Primary build surface' },
    { stat: '0', label: 'Confusion about who codes' },
    { stat: '2', label: 'Clear layers: dispatch + execution' },
    { stat: '1', label: 'Canonical local repo path' },
    { stat: '∞', label: 'Cleaner repo iteration loops' },
  ]
}

const LESSONS = {
  title: 'Lessons for Agent Builders',
  color: C.slate,
  items: [
    { label: 'Do Not Fuse Chat Surface and Execution Surface', text: 'The chat interface that feels convenient is not always the place where engineering work should happen.' },
    { label: 'Specialize Your Agents', text: 'An operator, a builder, and a writer can coexist cleanly if their boundaries are explicit and enforced in prompts and workflow.' },
    { label: 'Keep the Local Repo Real', text: 'The system becomes easier to debug once you stop treating the agent framework as magic and remember that real files, real git history, and real build tools are the source of truth.' },
    { label: 'Preserve Continuity, Change the Center', text: 'A migration is less disruptive when you keep the orchestration shell and session memory, but move implementation to a better tool.' },
  ]
}

const SPEC = {
  title: 'The Codex Operating Spec',
  color: C.cedar,
  content: [
    {
      heading: 'Primary Rule',
      text: 'If the task touches code, the default surface is Codex. If the task is remote dispatch, monitoring, or routing, the default surface is Sedim3nt through OpenClaw.',
    },
    {
      heading: 'Surface Map',
      text: 'Codex: build. Sedim3nt: dispatch. OpenClaw: orchestrate. n8n: automate. Human: decide where risk, money, or public consequence is involved.',
    },
    {
      heading: 'What This Means in Practice',
      text: 'A website bug, a broken deployment, a database migration, a router issue, or a copy placement task should begin in Codex. A quick status check from a phone, a scheduled summary, or a reminder should begin in Telegram through Sedim3nt.',
    },
  ],
}

function SpecNav({ current = 'codex' }) {
  const linkStyle = (active) => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.85rem',
    color: active ? C.amethyst : C.sapphire,
    textDecoration: 'none',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    borderBottom: active ? `2px solid ${C.amethyst}` : '2px solid transparent',
    paddingBottom: 4,
  })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255,250,245,0.95)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(21,46,128,0.1)',
    }}>
      <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/specs" style={linkStyle(current === 'specs')}>OpenClaw/Claude Specs</Link>
          <Link to="/codex" style={linkStyle(current === 'codex')}>Codex Specs</Link>
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
      <div style={{ background: section.color, padding: '18px 22px', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
          {section.title}
        </h2>
      </div>
      <div style={{ padding: '6px 10px 10px' }}>{children}</div>
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

export default function CodexSpecs() {
  return (
    <>
      <SpecNav current="codex" />
      <main style={{ background: 'var(--canvas)', minHeight: '100vh', paddingTop: 96, paddingBottom: 80 }}>
        <div style={W}>
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fade} style={{ marginBottom: 48 }}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--ink)',
                marginBottom: 12,
              }}>
                From OpenClaw to Codex
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--stone)',
                maxWidth: 760, lineHeight: 1.7,
              }}>
                A field report on what happens when an agent stack built around Claude CLI has to change centers without
                losing continuity. This spec covers what broke, what stayed, what changed, and how the new
                Codex-centered operating model works in practice.
              </p>
            </motion.div>

            <motion.div variants={fade} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12,
              marginBottom: 40,
            }} className="numbers-grid">
              {BENEFITS.items.map((n, i) => (
                <div key={i} style={{
                  background: BENEFITS.color,
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

            <div style={{ columns: '2 380px', columnGap: 16 }} className="kanban-grid">
              <KanbanColumn section={TRANSITION}>
                {TRANSITION.content.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.deepIndigo} />
                ))}
              </KanbanColumn>

              <KanbanColumn section={DECISIONS}>
                {DECISIONS.content.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.burgundy} />
                ))}
              </KanbanColumn>

              <KanbanColumn section={NEW_STACK}>
                {NEW_STACK.categories.map((cat, i) => (
                  <Card key={i} accent={C.sapphire}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: C.sapphire, marginBottom: 6 }}>{cat.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {cat.tools.map((tool, j) => (
                        <span key={j} style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                          background: C.sapphire + '10', color: C.sapphire,
                          padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap',
                        }}>{tool}</span>
                      ))}
                    </div>
                  </Card>
                ))}
              </KanbanColumn>

              <KanbanColumn section={AGENT_REALIGNMENT}>
                {AGENT_REALIGNMENT.items.map((agent, i) => (
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

              <KanbanColumn section={WORKFLOW}>
                {WORKFLOW.items.map((item, i) => (
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

              <KanbanColumn section={SPEC}>
                {SPEC.content.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.cedar} />
                ))}
              </KanbanColumn>

              <KanbanColumn section={SAFE_GUARDS}>
                {SAFE_GUARDS.items.map((item, i) => (
                  <ProseCard key={i} heading={item.heading} text={item.text} accent={C.ember} />
                ))}
              </KanbanColumn>

              <KanbanColumn section={LESSONS} span>
                <div style={{ columns: '2 320px', columnGap: 8 }}>
                  {LESSONS.items.map((item, i) => (
                    <Card key={i} accent={C.slate}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--ink)' }}>{item.label}</span>
                      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.82rem', marginTop: 2, lineHeight: 1.65 }}>{item.text}</div>
                    </Card>
                  ))}
                </div>
              </KanbanColumn>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
