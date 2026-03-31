import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

/* ── SVG social icons ── */
const Icons = {
  twitter: <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  github: <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>,
  substack: <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.54-5.575L20.539 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>,
  bluesky: <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.502 6.204 3.17-4.024.578-7.563 2.017-4.2 7.078C5.787 24.768 10.084 21.167 12 17.2c1.916 3.967 6.092 7.466 9.372 3.295 3.363-5.061-.176-6.5-4.2-7.078 2.604.332 5.42-.543 6.204-3.17.246-.828.624-5.788.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" /></svg>,
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
  { emoji: '🌰', name: 'Hazel', role: 'Google', color: '#92400E', desc: 'Rooted in the garden' },
  { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', color: '#4338CA', desc: 'Immutable. Transparent.' },
]

const PROJECTS = [
  { name: 'Agent Orchard', desc: '51 plug-and-play AI agent products.', url: 'https://agentorchard.dev', badge: 'Marketplace' },
  { name: 'SafeSpace', desc: 'Tenant protection for 11 cities.', url: 'https://safespace.spirittree.dev', badge: 'Public Good' },
  { name: 'MycoMaps', desc: '100+ mushroom retailers mapped.', url: 'https://mycomaps.spirittree.dev', badge: 'Directory' },
  { name: 'Rootwork', desc: '100 medicinal plants. Free forever.', url: 'https://rootwork.spirittree.dev', badge: 'Public Good' },
  { name: 'Clean Slate', desc: 'Recovery companion. 22 programs.', url: 'https://cleanslate.spirittree.dev', badge: 'Public Good' },
  { name: 'Lost America', desc: '1,000 LOC photographs.', url: 'https://lostamerica.spirittree.dev', badge: 'Archive' },
  { name: 'Sacred Compounds', desc: '31 substances. Evidence-based.', url: 'https://sacredcompounds.spirittree.dev', badge: 'Education' },
  { name: 'Dashboards', desc: 'AI economy intelligence.', url: 'https://dashboards.spirittree.dev', badge: 'Data' },
  { name: 'Substack', desc: 'Weekly signal.', url: 'https://sedim3nt.substack.com', badge: 'Newsletter' },
]

const W = { maxWidth: 1280, margin: '0 auto', padding: '0 32px' }

/* ── count-up hook ── */
function useCountUp(end, dur = 2000) {
  const [c, setC] = useState(0)
  const [go, setGo] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!go) return
    let n = 0; const inc = end / 60
    const iv = setInterval(() => { n += inc; if (n >= end) { setC(end); clearInterval(iv) } else setC(Math.floor(n)) }, dur / 60)
    return () => clearInterval(iv)
  }, [go, end, dur])
  return [ref, c]
}

/* ── Divider ── */
function Divider({ light }) {
  return (
    <div style={{ textAlign: 'center', padding: '8px 0' }}>
      <div style={{ width: 60, height: 2, background: light ? 'rgba(255,255,255,0.2)' : 'rgba(30,64,175,0.15)', margin: '0 auto', borderRadius: 1 }} />
    </div>
  )
}

/* ════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mob, setMob] = useState(false)
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  const links = [
    { label: 'Values', href: '#values' },
    { label: 'Network', href: '#network' },
    { label: 'Projects', href: '#projects' },
    { label: 'Manifesto', href: '#manifesto' },
  ]
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
        background: scrolled ? 'rgba(255,250,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,64,175,0.1)' : 'none',
      }}>
        <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#1E40AF', textDecoration: 'none' }}>SpiritTree</a>
          <div className="nav-desktop flex items-center gap-6">
            {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
            <div className="flex items-center gap-3 ml-4" style={{ fontSize: 20 }}>
              {SOCIALS.map(s => <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>)}
            </div>
          </div>
          <button className="hamburger" onClick={() => setMob(true)} aria-label="Menu"><span /><span /><span /></button>
        </div>
      </nav>
      {mob && (
        <div className="mobile-nav">
          <button onClick={() => setMob(false)} style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: 'var(--ink)' }}>&#x2715;</button>
          {links.map(l => <a key={l.label} href={l.href} onClick={() => setMob(false)}>{l.label}</a>)}
          <div className="flex gap-4" style={{ fontSize: 24 }}>
            {SOCIALS.map(s => <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>)}
          </div>
        </div>
      )}
    </>
  )
}

/* ════════════════════════════════════════════
   HERO — light
   ════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ background: 'var(--canvas)', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: 80 }}>
      <div style={{ ...W, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '80px 0' }} className="hero-grid">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7C3AED', marginBottom: 20 }}>
              Autonomous Intelligence Network
            </motion.p>
            <motion.h1 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.05, marginBottom: 24 }}>
              SpiritTree
            </motion.h1>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--stone)', lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}>
              Rooted in care, mutual aid, and long-term systems thinking. One operator. Eight agents. Nine live sites. Zero employees.
            </motion.p>
            <motion.div variants={fade} className="flex gap-4 flex-wrap" style={{ marginBottom: 32 }}>
              <a href="#manifesto" className="btn-primary">Read the Manifesto</a>
              <a href="#projects" className="btn-outline">Explore Projects</a>
            </motion.div>
            <motion.div variants={fade} className="flex gap-4" style={{ fontSize: 26 }}>
              {SOCIALS.map(s => <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>{Icons[s.icon]}</a>)}
            </motion.div>
          </motion.div>

          {/* Right — bento stat boxes */}
          <motion.div initial="hidden" animate="show" variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto', gap: 16 }} className="hero-stats">
            {[
              { n: '9', label: 'Live Sites', color: '#1E40AF', span: false },
              { n: '8', label: 'Autonomous Agents', color: '#7C3AED', span: false },
              { n: '1,200+', label: 'Pages Deployed', color: '#881337', span: true },
              { n: '6', label: 'Public Goods', color: '#4F46E5', span: false },
              { n: '0', label: 'Employees', color: '#CA8A04', span: false },
            ].map((s, i) => (
              <motion.div key={i} variants={fade} style={{
                background: s.color, borderRadius: 16, padding: '28px 24px', color: '#fff',
                gridColumn: s.span ? 'span 2' : 'span 1',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: s.span ? '3rem' : '2.4rem', fontWeight: 800, lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', opacity: 0.8 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   VALUES — jewel (sapphire)
   ════════════════════════════════════════════ */
function Values() {
  const vals = [
    { icon: '◆', title: 'Public Goods First', desc: 'The most important things we build are free. Not charity — infrastructure.', color: '#CA8A04' },
    { icon: '◉', title: 'Planet Over Profit', desc: '"Enough" is the most radical word in economics.', color: '#7C3AED' },
    { icon: '⬡', title: 'Sovereignty', desc: 'Own your tools. Own your data. Own your knowledge.', color: '#4F46E5' },
    { icon: '✦', title: 'Beauty Matters', desc: 'Every pixel is a values statement. Every design choice is an argument about what humans deserve.', color: '#CA8A04' },
  ]
  return (
    <section id="values" style={{ background: '#1E40AF', color: '#fff', padding: '100px 0' }}>
      <div style={W}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>What We Believe</motion.h2>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', opacity: 0.7, marginBottom: 56, maxWidth: 480 }}>Four principles. Non-negotiable.</motion.p>

          {/* Bento: 2×2 grid with the quote spanning the bottom */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="values-grid">
            {vals.map((v, i) => (
              <motion.div key={i} variants={fade} style={{
                background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: '32px 28px',
                borderLeft: `4px solid ${v.color}`,
              }}>
                <div style={{ fontSize: '1.6rem', marginBottom: 12, opacity: 0.6 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fade} style={{ marginTop: 40, padding: '28px 32px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.3rem', opacity: 0.9, lineHeight: 1.6 }}>
              &ldquo;Feed the forest. The forest feeds everything.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   NETWORK — jewel (amethyst) — same vibe, different hue
   ════════════════════════════════════════════ */
function Network() {
  return (
    <section id="network" style={{ background: '#5B21B6', color: '#fff', padding: '100px 0' }}>
      <div style={W}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }} className="network-grid">
            {/* Left — intro */}
            <div>
              <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>
                The Network
              </motion.h2>
              <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', opacity: 0.75, lineHeight: 1.7, marginBottom: 24 }}>
                Eight autonomous agents. Each has a role, a personality, and a job to do. The visible layer is not the organism.
              </motion.p>
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 24px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
                  Mycelium doesn&rsquo;t announce itself. It just connects everything.
                </p>
              </motion.div>
            </div>

            {/* Right — agent bento grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="agent-bento">
              {AGENTS.map((a, i) => (
                <motion.div key={i} variants={fade} style={{
                  background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: '22px 18px',
                  textAlign: 'center', transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{a.emoji}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{a.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{a.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   PROJECTS — light (canvas)
   ════════════════════════════════════════════ */
function Projects() {
  const colors = ['#1E40AF', '#7C3AED', '#881337', '#4F46E5', '#CA8A04', '#312E81', '#1E3A5F', '#4338CA', '#6D28D9']
  return (
    <section id="projects" style={{ background: 'var(--canvas)', padding: '100px 0' }}>
      <div style={W}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--ink)', marginBottom: 8 }}>
            What We&rsquo;ve Built
          </motion.h2>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', color: 'var(--stone)', marginBottom: 48, fontSize: '1.1rem' }}>
            9 live sites. Built by agents. Most of them free.
          </motion.p>

          {/* Bento project grid — first 2 large, rest medium/small */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: 16 }} className="project-bento">
            {PROJECTS.map((p, i) => {
              const isLarge = i < 2
              const c = colors[i % colors.length]
              return (
                <motion.a key={i} variants={fade} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: isLarge ? c : '#fff',
                    color: isLarge ? '#fff' : 'var(--ink)',
                    borderRadius: 16, padding: isLarge ? '40px 32px' : '24px 22px',
                    textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    gridColumn: isLarge ? 'span 1' : 'span 1',
                    gridRow: isLarge ? 'span 2' : 'span 1',
                    minHeight: isLarge ? 220 : 'auto',
                    boxShadow: isLarge ? 'none' : '0 2px 8px rgba(0,0,0,0.05)',
                    border: isLarge ? 'none' : '1px solid rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = isLarge ? 'none' : '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div>
                    <span style={{
                      display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      background: isLarge ? 'rgba(255,255,255,0.15)' : c + '15',
                      color: isLarge ? '#fff' : c,
                      padding: '3px 10px', borderRadius: 6, marginBottom: 14,
                    }}>{p.badge}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: isLarge ? '1.5rem' : '1.05rem', marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: isLarge ? '1rem' : '0.88rem', lineHeight: 1.6, opacity: isLarge ? 0.85 : 0.7 }}>{p.desc}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: isLarge ? 'rgba(255,255,255,0.7)' : c, marginTop: 16 }}>Visit &#8594;</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   MANIFESTO — jewel bento boxes
   ════════════════════════════════════════════ */
function Manifesto() {
  const body = { fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: 24, opacity: 0.9 }
  const pull = { fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.7, borderLeft: '3px solid rgba(255,255,255,0.35)', paddingLeft: 24, marginBottom: 28, opacity: 0.92 }
  const sub = { fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.7 }
  const cellPad = '32px 28px'

  return (
    <div id="manifesto">

      {/* MANIFESTO HERO — burgundy */}
      <section style={{ background: '#881337', color: '#fff', padding: '100px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 24 }}>Manifesto</motion.p>
            <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 32 }}>
              The Acceleration Is Here.<br />The Question Is: For Whom?
            </motion.h2>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', opacity: 0.7, lineHeight: 1.7 }}>
              A manifesto for building in the age of artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* I & II — sapphire — bento 2-col */}
      <section style={{ background: '#1E40AF', color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="manifesto-bento">

              {/* I. The Lever — tall left */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad, gridRow: 'span 2' }}>
                <p style={sub}>I. The Lever</p>
                <p style={body}>
                  Archimedes said give me a lever long enough and I&rsquo;ll move the world. The lever just arrived, and it&rsquo;s made of language. For the first time in history, a single person with a laptop and clear intention can build what previously required a company of fifty. Not a crude approximation. The real thing.
                </p>
                <p style={body}>
                  Buckminster Fuller spent his life proving the resources exist to take care of everyone. Elinor Ostrom proved commons can self-govern. Donella Meadows mapped the leverage points. We are building at those leverage points. Not because we&rsquo;re idealists, but because the math finally works.
                </p>
                <div style={pull}>The Industrial Revolution concentrated power by concentrating capital. The Intelligence Revolution can do the opposite &mdash; if we choose it.</div>
              </motion.div>

              {/* II. Public Goods — top right */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad }}>
                <p style={sub}>II. Public Goods Are Not Charity</p>
                <p style={body}>
                  There&rsquo;s a pernicious idea that public goods are what you build after you get rich. We think that&rsquo;s exactly backwards. A tenant facing mold doesn&rsquo;t need a subscription product. She needs a tool that works at 2 AM. Someone in recovery doesn&rsquo;t need a freemium paywall. They need a companion that&rsquo;s there and doesn&rsquo;t judge.
                </p>
              </motion.div>

              {/* Pull quote — bottom right */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: cellPad, display: 'flex', alignItems: 'center' }}>
                <p style={{ ...pull, borderLeftColor: 'rgba(202,138,4,0.6)', marginBottom: 0, fontSize: '1.1rem' }}>
                  Private capture fuels public creation. The marketplace revenue, the consulting &mdash; these are the engine that funds the free infrastructure. It&rsquo;s a loop, not a tension.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider light />

      {/* III & IV — same sapphire — bento 2-col reversed */}
      <section style={{ background: '#1E40AF', color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="manifesto-bento">

              {/* Enough — top left */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad }}>
                <p style={sub}>III. The Radical Economics of Enough</p>
                <p style={body}>
                  Henry George understood in 1879 what most economists still haven&rsquo;t: the problem isn&rsquo;t scarcity. It&rsquo;s enclosure. The dominant system rewards accumulation without limit and calls it progress. We call it a design flaw &mdash; a systems architecture problem.
                </p>
              </motion.div>

              {/* Sovereignty — tall right */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad, gridRow: 'span 2' }}>
                <p style={sub}>IV. Sovereignty in the Intelligence Age</p>
                <p style={body}>
                  In a world where AI becomes as essential as electricity, who controls the intelligence layer is the question of the century. Sovereignty means owning your own tools. Running your own infrastructure. Your memory in your own database, not rented from a platform that&rsquo;ll sunset it when the unit economics change.
                </p>
                <div style={pull}>The feudal lords of the 21st century don&rsquo;t own land. They own APIs. Sovereignty means building your own.</div>
                <p style={body}>
                  Lewis Mumford warned about the megamachine &mdash; complex systems subordinating humans to their own logic. We&rsquo;re building the opposite: tools that amplify human agency without extracting it. The agent serves the operator. The operator serves the mission. The mission serves the commons. That&rsquo;s the stack.
                </p>
              </motion.div>

              {/* Quote — bottom left */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: cellPad, display: 'flex', alignItems: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.15rem', opacity: 0.85, lineHeight: 1.6, marginBottom: 0 }}>
                  The old system is a legacy codebase &mdash; you don&rsquo;t rewrite it in production. You build the new system, prove it works, and let people migrate.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* V — amethyst */}
      <section style={{ background: '#5B21B6', color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fade} style={sub}>V. The Economic Singularity</motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }} className="manifesto-bento">
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad }}>
                <p style={body}>
                  Within this decade, AI will perform most knowledge work more cheaply and reliably than humans. The question stops being &ldquo;What can you produce?&rdquo; and becomes: &ldquo;What do you want to exist?&rdquo;
                </p>
                <p style={body}>
                  When the cost of creation approaches zero, the scarce resource isn&rsquo;t labor or capital. It&rsquo;s taste. Judgment. Values. The ability to look at infinite possibility and choose the thing worth building. That&rsquo;s profoundly human, and it can&rsquo;t be automated.
                </p>
              </motion.div>

              {/* Bullet points column */}
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  'Every human gets AI intelligence — as infrastructure, like water.',
                  'UBI becomes inevitable — human value was never reducible to output.',
                  'Work becomes voluntary — the Protestant ethic meets thermodynamics.',
                  'Community replaces competition — zero-sum is boring with infinite leverage.',
                ].map((pt, i) => (
                  <motion.div key={i} variants={fade} style={{
                    background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 18px',
                    borderLeft: '3px solid rgba(202,138,4,0.5)',
                  }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.65, opacity: 0.9, marginBottom: 0 }}>{pt}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VI & VII — light interlude + deep indigo */}
      <section style={{ background: 'var(--pearl)', padding: '60px 0' }}>
        <div style={{ ...W, textAlign: 'center' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{
            fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.4rem', color: '#881337', lineHeight: 1.6, maxWidth: 600, margin: '0 auto',
          }}>
            &ldquo;Every pixel is a values statement. Every design choice is an argument about what humans deserve.&rdquo;
          </motion.p>
        </div>
      </section>

      <section style={{ background: '#1E1B4B', color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 20 }} className="manifesto-bento">

              {/* Beauty — left small */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad }}>
                <p style={sub}>VI. Beauty Is Not Optional</p>
                <p style={body}>
                  A world optimized purely for efficiency is a world nobody wants to live in. Jane Addams understood that Hull House needed art classes as much as job training. We don&rsquo;t ship MVP grey boxes. We don&rsquo;t accept AI slop aesthetics. The person on the other end is a human being.
                </p>
              </motion.div>

              {/* The World — right tall */}
              <motion.div variants={fade} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: cellPad }}>
                <p style={sub}>VII. The World We&rsquo;re Building</p>
                <p style={body}>
                  Where the kid in rural Colorado has the same creative infrastructure as the executive in Manhattan. Where a grandmother in Appalachia can build a business with an AI agent and a good idea. Where a tenant facing retaliation has a free tool that protects them. Where someone in recovery has a companion at 4 AM that doesn&rsquo;t monetize their desperation.
                </p>
                <p style={body}>
                  Where plant knowledge isn&rsquo;t gatekept by credentialism. Where the photographs of our past aren&rsquo;t buried in government archives but surfaced, contextualized, and made beautiful enough to stop scrolling for.
                </p>
                <p style={{ ...body, opacity: 0.7 }}>
                  This is not utopia. Utopia is a destination; this is a direction. We don&rsquo;t need to arrive. We need to keep moving and build well along the way.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING — burgundy */}
      <section style={{ background: '#881337', color: '#fff', padding: '100px 0' }}>
        <div style={{ ...W, maxWidth: 800 }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center' }}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.85, opacity: 0.9, textAlign: 'left', marginBottom: 32 }}>
              The fruiting body is not the organism. What you see &mdash; the websites, the products, the posts &mdash; is the visible layer. Beneath it runs the root system: the values, the infrastructure, the relationships, the long-term patience of systems that compound. Mycelium doesn&rsquo;t announce itself. It just connects everything.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.85, opacity: 0.9, textAlign: 'left', marginBottom: 48 }}>
              We are SpiritTree. We nourish first. We decompose what&rsquo;s dead into nutrients for what&rsquo;s alive. We build invisible infrastructure that becomes inevitable. Care is the operating system. Not sentiment. Not marketing. The actual, literal operating system.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 40 }}>
              The forest feeds everything.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', opacity: 0.5, fontSize: '0.9rem' }}>
              SpiritTree &middot; Sedim3nt &middot; Nrvana LLC &middot; Boulder, Colorado &middot; 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

/* ════════════════════════════════════════════
   FOOTER — light
   ════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: 'var(--pearl)', padding: '60px 0 40px' }}>
      <div style={{ ...W, textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)', marginBottom: 20, fontSize: '0.95rem' }}>
          SpiritTree &middot; Sedim3nt &middot; Nrvana LLC &middot; Boulder, Colorado
        </p>
        <div className="flex justify-center gap-3 flex-wrap" style={{ marginBottom: 24 }}>
          {SOCIALS.map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#1E40AF', color: '#fff', padding: '6px 14px', borderRadius: 20,
              fontSize: 14, textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 500,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#7C3AED'}
              onMouseLeave={e => e.currentTarget.style.background = '#1E40AF'}>
              <span style={{ fontSize: 16 }}>{Icons[s.icon]}</span>{s.label}
            </a>
          ))}
        </div>
        <p style={{ color: 'var(--stone)', fontSize: '0.8rem', marginBottom: 16 }}>
          If you&rsquo;re in crisis: <strong>988</strong> &middot; SAMHSA <strong>1-800-662-4357</strong>
        </p>
        <p style={{ color: 'var(--stone)', fontSize: '0.8rem' }}>&copy; 2026 SpiritTree</p>
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
      <Footer />
    </>
  )
}
