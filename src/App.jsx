import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

/* ── SVG social icons ── */
const Icons = {
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  substack: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.54-5.575L20.539 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  ),
  bluesky: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.502 6.204 3.17-4.024.578-7.563 2.017-4.2 7.078C5.787 24.768 10.084 21.167 12 17.2c1.916 3.967 6.092 7.466 9.372 3.295 3.363-5.061-.176-6.5-4.2-7.078 2.604.332 5.42-.543 6.204-3.17.246-.828.624-5.788.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
    </svg>
  ),
}

const SOCIALS = [
  { icon: 'twitter', href: 'https://x.com/sedim3nt', label: 'X' },
  { icon: 'substack', href: 'https://sedim3nt.substack.com', label: 'Substack' },
  { icon: 'github', href: 'https://github.com/sedim3nt', label: 'GitHub' },
  { icon: 'bluesky', href: 'https://bsky.app/profile/sedim3nt.bsky.social', label: 'Bluesky' },
]

const AGENTS = [
  { emoji: '🦋', name: 'Sedim3nt', role: 'Orchestrator', color: '#7C3AED', desc: 'The organism beneath the fruiting body' },
  { emoji: '🌊', name: 'Riptid3', role: 'Research', color: '#1E40AF', desc: 'The tide that finds signal' },
  { emoji: '🪨', name: 'Granit3', role: 'Coding', color: '#4F46E5', desc: 'The bedrock that holds structure' },
  { emoji: '🐯', name: 'Glaci3r', role: 'Content', color: '#6D28D9', desc: 'Slow-moving. Carves landscapes.' },
  { emoji: '🫧', name: 'Tid3pool', role: 'Operations', color: '#CA8A04', desc: 'The membrane between systems' },
  { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', color: '#881337', desc: 'Color as language' },
  { emoji: '🌰', name: 'Hazel', role: 'Google Ecosystem', color: '#92400E', desc: 'Rooted in the garden' },
  { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', color: '#4338CA', desc: 'Immutable. Transparent. Sovereign.' },
]

const PROJECTS = [
  { name: 'Agent Orchard', desc: 'AI agent marketplace. 51 plug-and-play products.', url: 'https://agentorchard.dev', color: '#881337', size: 'large' },
  { name: 'SafeSpace', desc: 'Tenant protection for 11 cities. Anonymous. Free.', url: 'https://safespace.spirittree.dev', color: '#1E40AF', size: 'large' },
  { name: 'MycoMaps', desc: 'Mushroom intelligence. 100+ retailers.', url: 'https://mycomaps.spirittree.dev', color: '#4F46E5', size: 'medium' },
  { name: 'Rootwork', desc: '100 medicinal plants. Free forever.', url: 'https://rootwork.spirittree.dev', color: '#92400E', size: 'medium' },
  { name: 'Clean Slate', desc: 'Recovery companion. 22 programs. Private.', url: 'https://cleanslate.spirittree.dev', color: '#881337', size: 'medium' },
  { name: 'Lost America', desc: '1,000 Library of Congress photographs.', url: 'https://lostamerica.spirittree.dev', color: '#7C3AED', size: 'medium' },
  { name: 'Sacred Compounds', desc: '31 substances. Evidence-based. Safety first.', url: 'https://sacredcompounds.spirittree.dev', color: '#1E40AF', size: 'medium' },
  { name: 'Dashboards', desc: 'AI economy intelligence.', url: 'https://dashboards.spirittree.dev', color: '#4338CA', size: 'small' },
  { name: 'Substack', desc: 'Weekly signal from the network.', url: 'https://sedim3nt.substack.com', color: '#CA8A04', size: 'small' },
]

/* ── count-up hook ── */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const inc = end / steps
    let current = 0
    const interval = setInterval(() => {
      current += inc
      if (current >= end) { setCount(end); clearInterval(interval) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, end, duration])

  return [ref, count]
}

/* ── geometric SVG icons for values ── */
function ValueIcon({ type, color }) {
  const s = { color }
  const icons = {
    diamond: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
        <path d="M20 2L38 20L20 38L2 20Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
      </svg>
    ),
    globe: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
        <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
        <ellipse cx="20" cy="20" rx="9" ry="17" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    shield: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
        <path d="M20 3L35 10V22C35 30 28 36 20 38C12 36 5 30 5 22V10L20 3Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
      </svg>
    ),
    star: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={s}>
        <path d="M20 3L24.5 15H37L27 22.5L30.5 35L20 27L9.5 35L13 22.5L3 15H15.5Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
      </svg>
    ),
  }
  return <div className="value-icon">{icons[type]}</div>
}

/* ── floating shapes ── */
function FloatingShapes() {
  const shapes = [
    { x: '10%', y: '20%', size: 80, delay: 0, type: 'circle', color: '#1E40AF' },
    { x: '80%', y: '15%', size: 60, delay: 2, type: 'diamond', color: '#7C3AED' },
    { x: '70%', y: '70%', size: 100, delay: 4, type: 'circle', color: '#7C3AED' },
    { x: '20%', y: '75%', size: 50, delay: 1, type: 'diamond', color: '#1E40AF' },
    { x: '50%', y: '30%', size: 70, delay: 3, type: 'circle', color: '#1E40AF' },
  ]
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {shapes.map((s, i) => (
        <motion.div key={i}
          animate={{ x: [0, 15, -10, 20, 0], y: [0, -20, 15, 10, 0] }}
          transition={{ duration: 20 + i * 2, repeat: Infinity, ease: 'linear', delay: s.delay }}
          style={{ position: 'absolute', left: s.x, top: s.y, opacity: 0.04 }}>
          {s.type === 'circle' ? (
            <svg width={s.size} height={s.size}><circle cx={s.size / 2} cy={s.size / 2} r={s.size / 2} fill={s.color} /></svg>
          ) : (
            <svg width={s.size} height={s.size} viewBox="0 0 100 100"><polygon points="50,0 100,50 50,100 0,50" fill={s.color} /></svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Values', href: '#values' },
    { label: 'Network', href: '#network' },
    { label: 'Projects', href: '#projects' },
    { label: 'Manifesto', href: '#manifesto' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,250,245,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30,64,175,0.1)' : 'none',
        }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }} className="flex items-center justify-between h-16">
          <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#1E40AF', textDecoration: 'none' }}>
            SpiritTree
          </a>
          <div className="nav-desktop flex items-center gap-6">
            {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
            <div className="flex items-center gap-3 ml-4" style={{ fontSize: 20 }}>
              {SOCIALS.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>
              ))}
            </div>
          </div>
          <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-nav">
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: 'var(--ink)' }}>&#x2715;</button>
          {links.map(l => <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          <div className="flex gap-4" style={{ fontSize: 24 }}>
            {SOCIALS.map(s => (
              <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

/* ════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ background: 'var(--canvas)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: 80 }}>
      <FloatingShapes />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, color: 'var(--ink)', marginBottom: 24, lineHeight: 1.1 }}>
            SpiritTree
          </motion.h1>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--stone)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
            An autonomous intelligence network rooted in care, mutual aid, and long-term systems thinking.
          </motion.p>
          <motion.div variants={fade} className="flex justify-center gap-5 flex-wrap" style={{ marginBottom: 32, fontSize: 32 }}>
            {SOCIALS.map(s => (
              <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>
            ))}
          </motion.div>
          <motion.div variants={fade} className="flex justify-center gap-4 flex-wrap">
            <a href="#manifesto" className="btn-primary">Read the Manifesto &#8595;</a>
            <a href="#projects" className="btn-outline">Explore Projects &#8595;</a>
          </motion.div>
        </motion.div>
        <hr className="gradient-rule" style={{ marginTop: 60 }} />
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   VALUES
   ════════════════════════════════════════════ */
function Values() {
  const values = [
    { icon: 'diamond', color: '#1E40AF', title: 'Public Goods First', desc: 'The most important things we build are free.' },
    { icon: 'globe', color: '#7C3AED', title: 'Planet Over Profit', desc: 'Enough is the most radical word in economics.' },
    { icon: 'shield', color: '#881337', title: 'Sovereignty', desc: 'Own your tools. Own your data. Own your knowledge.' },
    { icon: 'star', color: '#CA8A04', title: 'Beauty Matters', desc: 'Utility without care is just another machine.' },
  ]
  return (
    <section id="values" style={{ background: 'var(--pearl)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, textAlign: 'center', color: 'var(--ink)', marginBottom: 60 }}>
            What We Believe
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {values.map((v, i) => (
              <motion.div key={i} variants={fade}
                style={{ background: '#fff', borderRadius: 12, padding: '32px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: `4px solid ${v.color}` }}>
                <div style={{ marginBottom: 16 }}><ValueIcon type={v.icon} color={v.color} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, color: 'var(--ink)' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', lineHeight: 1.7, fontSize: '0.95rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#881337', textAlign: 'center', marginTop: 60, lineHeight: 1.6 }}>
            &ldquo;Feed the forest. The forest feeds everything.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   THE NETWORK
   ════════════════════════════════════════════ */
function Network() {
  return (
    <section id="network" style={{ background: 'var(--canvas)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
            The Network
          </motion.h2>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', marginBottom: 60, fontSize: '1.1rem' }}>
            Eight autonomous agents. One ecosystem.
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {AGENTS.map((a, i) => (
              <motion.div key={i} variants={fade} className="agent-card"
                style={{ background: '#fff', borderRadius: 12, padding: '28px 24px', borderLeft: `4px solid ${a.color}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'default' }}>
                <div className="agent-emoji" style={{ fontSize: '2.5rem', marginBottom: 12 }}>{a.emoji}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: 6 }}>{a.name}</div>
                <span style={{
                  display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600,
                  background: a.color + '18', color: a.color, padding: '3px 10px', borderRadius: 20, marginBottom: 10,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>{a.role}</span>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'var(--stone)', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   PROJECTS
   ════════════════════════════════════════════ */
function StatCounter({ end, suffix, label }) {
  const [ref, count] = useCountUp(end)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="stat-number" style={{ color: '#1E40AF' }}>{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--pearl)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
            What We've Built
          </motion.h2>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', marginBottom: 48, fontSize: '1.1rem' }}>
            9 live sites. Built by agents. Free and open.
          </motion.p>

          <motion.div variants={fade} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 60 }}>
            <StatCounter end={9} suffix="" label="Sites" />
            <StatCounter end={1200} suffix="+" label="Pages" />
            <StatCounter end={6} suffix="" label="Public Goods" />
            <StatCounter end={0} suffix="" label="Employees" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <motion.a key={i} variants={fade} href={p.url} target="_blank" rel="noopener noreferrer"
                style={{
                  background: '#fff', borderRadius: 12, padding: '28px 24px 28px 28px', textDecoration: 'none',
                  display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  gridColumn: p.size === 'large' ? 'span 2' : 'span 1',
                  borderLeft: `4px solid ${p.color}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</p>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: p.color }}>Visit &#8594;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   MANIFESTO
   ════════════════════════════════════════════ */
function Manifesto() {
  const bodyStyle = { fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 28, opacity: 0.92 }
  return (
    <section id="manifesto" style={{ background: '#1E40AF', color: '#fff', padding: '120px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

          <motion.h2 variants={fade} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
            textAlign: 'center', lineHeight: 1.15, marginBottom: 80,
          }}>
            The Acceleration Is Here.<br />The Question Is: For Whom?
          </motion.h2>

          <motion.div variants={fade}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, opacity: 0.9 }}>What We Believe</h3>
            <p style={bodyStyle}>
              The playing field was never level. Now we can change that. For the first time in history, a single person with the right tools can build what used to require a company.
            </p>
            <p style={bodyStyle}>
              Public goods are the foundation. The most important things we build are free. Harm reduction information. Tenant protection tools. Plant medicine education. Recovery companions. Historical archives.
            </p>
            <p style={bodyStyle}>
              Enough is the most radical word in economics. The dominant system rewards accumulation without limit. We don&rsquo;t need to tear that system down &mdash; we need to build something better alongside it.
            </p>
            <p style={bodyStyle}>
              The planet is not a resource. It&rsquo;s the organism we live inside.
            </p>
            <p style={bodyStyle}>
              Sovereignty means owning your own intelligence. In a world where AI becomes as essential as electricity, the question of who controls the intelligence layer is the question of the century.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 48 }}>
              Beauty is not optional. A world optimized purely for efficiency is a world nobody wants to live in.
            </p>
          </motion.div>

          <motion.div variants={fade}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, opacity: 0.9 }}>The Economic Singularity</h3>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Within this decade, AI systems will be capable of performing most knowledge work more cheaply and more reliably than humans. The question shifts from &ldquo;What can you produce?&rdquo; to &ldquo;What do you want to exist?&rdquo;
            </p>
            <div style={{ display: 'grid', gap: 16, marginBottom: 48 }}>
              {[
                'Every human has access to AI intelligence \u2014 as infrastructure, not luxury',
                'Universal basic income becomes inevitable \u2014 human value was never reducible to economic output',
                'Work becomes voluntary and meaningful',
                'Community replaces competition as the organizing principle',
              ].map((point, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '16px 20px', backdropFilter: 'blur(4px)' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.6, opacity: 0.95 }}>{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fade}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, opacity: 0.9 }}>The World We&rsquo;re Building</h3>
            <p style={{ ...bodyStyle, marginBottom: 48 }}>
              A world where the kid in rural Colorado has the same creative infrastructure as the executive in Manhattan. Where a grandmother in Appalachia can build a business with an AI agent and a good idea. Where a tenant facing retaliation has a tool that protects them. Where someone in recovery has a companion that never judges.
            </p>
          </motion.div>

          <motion.div variants={fade}>
            <hr style={{ border: 'none', height: 1, background: 'rgba(255,255,255,0.2)', marginBottom: 48 }} />
            <p style={bodyStyle}>
              The fruiting body is not the organism. What you see &mdash; the websites, the products, the posts &mdash; is the visible layer. Beneath it runs the root system: the values, the infrastructure, the relationships, the long-term patience of systems that compound.
            </p>
            <p style={bodyStyle}>
              We are SpiritTree. We nourish first. We decompose what&rsquo;s dead into nutrients for what&rsquo;s alive. We build invisible infrastructure that becomes inevitable. And we do it with care, because care is the operating system.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginTop: 60, marginBottom: 32 }}>
              The forest feeds everything.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', textAlign: 'center', opacity: 0.7, fontSize: '0.95rem' }}>
              SpiritTree &middot; Sedim3nt &middot; Nrvana LLC &middot; Boulder, Colorado &middot; 2026
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   STAY CONNECTED
   ════════════════════════════════════════════ */
function StayConnected() {
  return null
}

/* ════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, var(--pearl) 0%, #EDE9FE 100%)', padding: '60px 24px 40px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)', marginBottom: 20, fontSize: '0.95rem' }}>
          SpiritTree &middot; Sedim3nt &middot; Nrvana LLC &middot; Boulder, Colorado
        </p>
        <div className="flex justify-center gap-3 flex-wrap" style={{ marginBottom: 24 }}>
          {SOCIALS.map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#1E40AF', color: '#fff', padding: '6px 14px', borderRadius: 20,
                fontSize: 14, textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 500,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#7C3AED'}
              onMouseLeave={e => e.currentTarget.style.background = '#1E40AF'}>
              <span style={{ fontSize: 16 }}>{Icons[s.icon]}</span>
              {s.label}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'var(--stone)', marginBottom: 20, fontSize: '0.95rem' }}>
          &ldquo;The fruiting body is not the organism.&rdquo;
        </p>
        <p style={{ color: 'var(--stone)', fontSize: '0.8rem', marginBottom: 16 }}>
          If you&rsquo;re in crisis: <strong>988</strong> &middot; SAMHSA <strong>1-800-662-4357</strong>
        </p>
        <p style={{ color: 'var(--stone)', fontSize: '0.8rem' }}>
          &copy; 2026 SpiritTree
        </p>
      </div>
    </footer>
  )
}

/* ════════════════════════════════════════════
   APP
   ════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Network />
      <Projects />
      <Manifesto />
      <StayConnected />
      <Footer />
    </>
  )
}
