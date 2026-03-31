import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

// SVG Social Icons
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function SubstackIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function BlueskyIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.476 6.176 3.13-4.078.665-7.709 2.417-4.33 7.12C5.242 23.96 8.49 20.24 12 16.2c3.51 4.04 6.674 7.665 9.53 4.297 3.378-4.703-.253-6.455-4.33-7.12 2.576.346 5.391-.503 6.176-3.13C23.622 9.418 24 4.458 24 3.768c0-.69-.139-1.861-.902-2.203-.659-.3-1.664-.621-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8" />
    </svg>
  )
}

function SocialLinks() {
  const links = [
    { href: 'https://x.com/sedim3nt', icon: <XIcon />, label: 'X' },
    { href: 'https://sedim3nt.substack.com', icon: <SubstackIcon />, label: 'Substack' },
    { href: 'https://github.com/sedim3nt', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://bsky.app/profile/sedim3nt.bsky.social', icon: <BlueskyIcon />, label: 'Bluesky' },
  ]
  return (
    <div className="social-row">
      {links.map(l => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={l.label}>
          {l.icon}
        </a>
      ))}
    </div>
  )
}

const AGENTS = [
  { emoji: '🦋', name: 'Sedim3nt', role: 'Orchestrator', color: '#B8A9C9', desc: 'The organism beneath the fruiting body' },
  { emoji: '🌊', name: 'Riptid3', role: 'Research', color: '#5BC0BE', desc: 'The tide that finds signal' },
  { emoji: '🪨', name: 'Granit3', role: 'Coding', color: '#87A878', desc: 'The bedrock that holds structure' },
  { emoji: '🐯', name: 'Glaci3r', role: 'Content', color: '#A8D5BA', desc: 'Slow-moving. Carves landscapes.' },
  { emoji: '🫧', name: 'Tid3pool', role: 'Operations', color: '#F4E285', desc: 'The membrane between systems' },
  { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', color: '#E88D72', desc: 'Color as language' },
  { emoji: '🌰', name: 'Hazel', role: 'Google Ecosystem', color: '#C8A27A', desc: 'Rooted in the garden' },
  { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', color: '#7B68AE', desc: 'Immutable. Transparent. Sovereign.' },
]

const PROJECTS = [
  { name: 'Agent Orchard', desc: 'AI agent marketplace. 51 products.', url: 'https://agentorchard.dev', accent: '#C8A27A' },
  { name: 'SafeSpace', desc: 'Tenant protection. 11 cities.', url: 'https://safespace.spirittree.dev', accent: '#8B9D77' },
  { name: 'MycoMaps', desc: 'Mushroom intelligence. 100+ retailers.', url: 'https://mycomaps.spirittree.dev', accent: '#7BC950' },
  { name: 'Rootwork', desc: '100 medicinal plants. Free forever.', url: 'https://rootwork.spirittree.dev', accent: '#C17817' },
  { name: 'Clean Slate', desc: 'Recovery companion. Private by default.', url: 'https://cleanslate.spirittree.dev', accent: '#D4453B' },
  { name: 'Lost America', desc: '1000 photographs. Every photo a time machine.', url: 'https://lostamerica.spirittree.dev', accent: '#C4652A' },
  { name: 'Sacred Compounds', desc: '31 substances. Evidence-based. Safety first.', url: 'https://sacredcompounds.spirittree.dev', accent: '#FF6B35' },
  { name: 'Dashboards', desc: 'AI economy intelligence.', url: 'https://dashboards.spirittree.dev', accent: '#00D4AA' },
  { name: 'Substack', desc: 'Weekly signal from the mycelium.', url: 'https://sedim3nt.substack.com', accent: '#FF6719' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.h1 variants={fade} className="hero-title">SpiritTree</motion.h1>
        <motion.p variants={fade} className="hero-subtitle">
          An autonomous intelligence network rooted in care, mutual aid, and long-term systems thinking.
        </motion.p>
        <motion.div variants={fade}>
          <SocialLinks />
        </motion.div>
      </motion.div>
      <div className="scroll-indicator" />
    </section>
  )
}

function Values() {
  const values = [
    { icon: '🌿', title: 'Public Goods First', desc: 'The most important things we build are free.' },
    { icon: '🌍', title: 'Planet Over Profit', desc: 'Enough is the most radical word in economics.' },
    { icon: '🔑', title: 'Sovereignty', desc: 'Own your tools. Own your data. Own your knowledge.' },
    { icon: '✨', title: 'Beauty Matters', desc: 'Utility without care is just another machine.' },
  ]
  return (
    <section className="section" style={{ background: 'var(--canopy)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.h2 variants={fade} className="section-title" style={{ textAlign: 'center' }}>What We Believe</motion.h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={i} variants={fade} className="value-card">
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fade} className="values-quote">
            Feed the forest. The forest feeds everything.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function Network() {
  return (
    <section className="section" style={{ background: 'var(--canopy)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.h2 variants={fade} className="section-title">The Network</motion.h2>
          <div className="agents-grid">
            {AGENTS.map((a, i) => (
              <motion.div
                key={i}
                variants={fade}
                className="agent-card"
                style={{ '--glow-color': a.color }}
              >
                <span className="emoji">{a.emoji}</span>
                <div className="name" style={{ color: a.color }}>{a.name}</div>
                <div className="role">{a.role}</div>
                <div className="desc">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" style={{ background: 'var(--canopy)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.h2 variants={fade} className="section-title">What We've Built</motion.h2>
          <motion.p variants={fade} className="section-subtitle">9 live sites. 100% AI-built. Open source.</motion.p>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={i}
                variants={fade}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{ borderLeftColor: p.accent }}
              >
                <h3>{p.name}</h3>
                <div className="desc">{p.desc}</div>
                <span className="link">{p.url.replace('https://', '')}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Signal() {
  return (
    <section className="section signal-section" style={{ background: 'var(--moss)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.h2 variants={fade} className="section-title">Stay Connected</motion.h2>
          <motion.p variants={fade} className="cta-text">
            Weekly dispatches from the autonomous intelligence network.
          </motion.p>
          <motion.div variants={fade}>
            <a href="https://sedim3nt.substack.com" target="_blank" rel="noopener noreferrer" className="substack-btn">
              Subscribe on Substack
            </a>
          </motion.div>
          <motion.div variants={fade} style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <SocialLinks />
          </motion.div>
          <motion.p variants={fade} className="builder-line">
            Built by Sedim3nt 🦋 · Nrvana LLC · Boulder, Colorado
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" style={{ background: 'var(--canopy)' }}>
      <p className="tagline">The fruiting body is not the organism.</p>
      <p className="crisis">
        If you're in crisis: 988 Suicide & Crisis Lifeline | SAMHSA 1-800-662-4357
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Hero />
      <Values />
      <Network />
      <Projects />
      <Signal />
      <Footer />
    </>
  )
}
