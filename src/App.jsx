import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

/* ── Darkened palette (20% darker, high saturation) ── */
const C = {
  sapphire: '#152E80',   // was #1E40AF
  amethyst: '#5C1BA8',   // was #7C3AED
  burgundy: '#6B0E2C',   // was #881337
  gold: '#A16E03',       // was #CA8A04
  indigo: '#312573',     // was #4338CA
  deepIndigo: '#15133D', // was #1E1B4B
  violet: '#4B1CA6',     // was #5B21B6
  navy: '#162F4C',       // was #1E3A5F
  plum: '#520F80',       // was #6D28D9
}

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
  { emoji: '🦋', name: 'Sedim3nt', role: 'Orchestrator', color: C.amethyst },
  { emoji: '🌊', name: 'Riptid3', role: 'Research', color: C.sapphire },
  { emoji: '🪨', name: 'Granit3', role: 'Coding', color: C.indigo },
  { emoji: '🐯', name: 'Glaci3r', role: 'Content', color: C.plum },
  { emoji: '🫧', name: 'Tid3pool', role: 'Operations', color: C.gold },
  { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', color: C.burgundy },
  { emoji: '💨', name: 'Br3eze', role: 'Google', color: C.navy },
  { emoji: '⛓️', name: 'Eth3r', role: 'Blockchain', color: C.deepIndigo },
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
const glass = (a = 0.07) => `rgba(255,255,255,${a})`

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
        borderBottom: scrolled ? '1px solid rgba(21,46,128,0.1)' : 'none',
      }}>
        <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: C.sapphire, textDecoration: 'none' }}>SpiritTree</a>
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
   HERO — light canvas
   ════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ background: 'var(--canvas)', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: 80 }}>
      <div style={{ ...W, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 48, alignItems: 'center', padding: '80px 0' }} className="hero-grid">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.amethyst, marginBottom: 20 }}>
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

          {/* Right — asymmetric bento stat mosaic */}
          <motion.div initial="hidden" animate="show" variants={stagger} style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gridTemplateRows: 'auto auto auto',
            gap: 14,
          }} className="hero-stats">
            {/* Big number — spans full width */}
            <motion.div variants={fade} style={{ background: C.sapphire, borderRadius: 16, padding: '36px 28px', color: '#fff', gridColumn: 'span 2' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, lineHeight: 1 }}>9</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', opacity: 0.7, marginTop: 4 }}>Live Sites &middot; Built by Agents</div>
            </motion.div>
            {/* Left tall */}
            <motion.div variants={fade} style={{ background: C.amethyst, borderRadius: 16, padding: '28px 22px', color: '#fff', gridRow: 'span 2' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, lineHeight: 1 }}>8</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', opacity: 0.7, marginTop: 6 }}>Autonomous Agents</div>
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {AGENTS.map((a, i) => <span key={i} style={{ fontSize: '1.2rem' }}>{a.emoji}</span>)}
              </div>
            </motion.div>
            {/* Right stack */}
            <motion.div variants={fade} style={{ background: C.burgundy, borderRadius: 16, padding: '22px 18px', color: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>1,200+</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.7, marginTop: 4 }}>Pages</div>
            </motion.div>
            <motion.div variants={fade} style={{ background: C.gold, borderRadius: 16, padding: '22px 18px', color: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>0</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.7, marginTop: 4 }}>Employees</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   VALUES — sapphire
   ════════════════════════════════════════════ */
function Values() {
  const vals = [
    { icon: '◆', title: 'Public Goods First', desc: 'The most important things we build are free. Not charity — infrastructure.', accent: C.gold },
    { icon: '◉', title: 'Planet Over Profit', desc: '"Enough" is the most radical word in economics.', accent: C.amethyst },
    { icon: '⬡', title: 'Sovereignty', desc: 'Own your tools. Own your data. Own your knowledge.', accent: C.indigo },
    { icon: '✦', title: 'Beauty Matters', desc: 'Every pixel is a values statement. Every design choice is an argument about what humans deserve.', accent: C.burgundy },
  ]
  return (
    <section id="values" style={{ background: C.sapphire, color: '#fff', padding: '100px 0' }}>
      <div style={W}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>What We Believe</motion.h2>
          <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', opacity: 0.6, marginBottom: 56, maxWidth: 480 }}>Four principles. Non-negotiable.</motion.p>

          {/* L-shaped bento: big left + 3 stacked right */}
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gridTemplateRows: 'auto auto auto', gap: 16 }} className="values-grid">
            {/* First value — big, spans 3 rows */}
            <motion.div variants={fade} style={{
              background: glass(0.08), borderRadius: 16, padding: '40px 32px',
              borderLeft: `4px solid ${vals[0].accent}`, gridRow: 'span 3',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontSize: '2.4rem', marginBottom: 16, opacity: 0.5 }}>{vals[0].icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', marginBottom: 14 }}>{vals[0].title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85 }}>{vals[0].desc}</p>
              <div style={{ marginTop: 28, fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.1rem', opacity: 0.7, borderLeft: '3px solid rgba(255,255,255,0.2)', paddingLeft: 20, lineHeight: 1.7 }}>
                &ldquo;Feed the forest. The forest feeds everything.&rdquo;
              </div>
            </motion.div>

            {/* Right 3 values stacked */}
            {vals.slice(1).map((v, i) => (
              <motion.div key={i} variants={fade} style={{
                background: glass(0.06), borderRadius: 16, padding: '24px 22px',
                borderLeft: `4px solid ${v.accent}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.3rem', opacity: 0.5 }}>{v.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>{v.title}</h3>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, opacity: 0.8 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   NETWORK — gold background
   ════════════════════════════════════════════ */
function Network() {
  return (
    <section id="network" style={{ background: C.gold, color: '#fff', padding: '100px 0' }}>
      <div style={W}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }} className="network-header">
            <div>
              <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 8 }}>
                The Network
              </motion.h2>
              <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', opacity: 0.75, maxWidth: 420 }}>
                Eight autonomous agents. Each has a role, a personality, and a job to do.
              </motion.p>
            </div>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.95rem', opacity: 0.6, maxWidth: 280, textAlign: 'right' }} className="network-quote">
              The visible layer is not the organism.
            </motion.p>
          </div>

          {/* Diamond bento: 3 + 2 + 3 pattern */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }} className="agent-bento">
            {AGENTS.map((a, i) => {
              // Row 1: 3 agents across cols 1-4, 5-8, 9-12
              // Row 2: 2 agents across cols 2-6, 7-11 (shifted inward)
              // Row 3: 3 agents across cols 1-4, 5-8, 9-12
              let col, row
              if (i < 3) { col = `${i * 4 + 1} / span 4`; row = '1' }
              else if (i < 5) { col = `${(i - 3) * 5 + 2} / span 5`; row = '2' }
              else { col = `${(i - 5) * 4 + 1} / span 4`; row = '3' }
              return (
                <motion.div key={i} variants={fade} style={{
                  gridColumn: col, gridRow: row,
                  background: 'rgba(0,0,0,0.12)', borderRadius: 14, padding: '24px 20px',
                  display: 'flex', alignItems: 'center', gap: 16,
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.12)'}>
                  <div style={{ fontSize: '2.2rem', flexShrink: 0 }}>{a.emoji}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{a.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{a.role}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   PROJECTS — light canvas
   ════════════════════════════════════════════ */
function Projects() {
  const colors = [C.sapphire, C.amethyst, C.burgundy, C.indigo, C.gold, C.deepIndigo, C.navy, C.plum, C.violet]
  // Bento pattern: hero (2×2), standard (1×1)
  // Row 1: [hero 2×2][1×1][1×1]
  // Row 2: [hero cont.][1×1][1×1]
  // Row 3: [1×1][hero 2×2][1×1]
  // Etc — alternating hero position
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'minmax(140px, auto)',
            gap: 14,
          }} className="project-bento">
            {PROJECTS.map((p, i) => {
              const c = colors[i % colors.length]
              // Hero cards: index 0 and 4
              const isHero = i === 0 || i === 4
              return (
                <motion.a key={i} variants={fade} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="project-card"
                  style={{
                    background: isHero ? c : '#fff',
                    color: isHero ? '#fff' : 'var(--ink)',
                    borderRadius: 16, padding: isHero ? '36px 30px' : '22px 20px',
                    textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    gridColumn: isHero ? 'span 2' : 'span 1',
                    gridRow: isHero ? 'span 2' : 'span 1',
                    boxShadow: isHero ? 'none' : '0 2px 8px rgba(0,0,0,0.05)',
                    border: isHero ? 'none' : '1px solid rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = isHero ? 'none' : '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div>
                    <span style={{
                      display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      background: isHero ? 'rgba(255,255,255,0.15)' : c + '18',
                      color: isHero ? '#fff' : c,
                      padding: '3px 10px', borderRadius: 6, marginBottom: 14,
                    }}>{p.badge}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: isHero ? '1.6rem' : '1.05rem', marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: isHero ? '1.05rem' : '0.88rem', lineHeight: 1.6, opacity: isHero ? 0.85 : 0.7 }}>{p.desc}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: isHero ? 'rgba(255,255,255,0.7)' : c, marginTop: 16 }}>Visit &#8594;</span>
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
   MANIFESTO
   ════════════════════════════════════════════ */
function Manifesto() {
  const body = { fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 22, opacity: 0.9 }
  const pull = { fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.7, borderLeft: '3px solid rgba(255,255,255,0.3)', paddingLeft: 22, marginBottom: 24, opacity: 0.9 }
  const sub = { fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18, opacity: 0.6 }
  const cell = { background: glass(0.07), borderRadius: 16, padding: '30px 26px' }

  return (
    <div id="manifesto">

      {/* MANIFESTO HERO — burgundy */}
      <section style={{ background: C.burgundy, color: '#fff', padding: '100px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 24 }}>Manifesto</motion.p>
            <motion.h2 variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 32 }}>
              The Acceleration Is Here.<br />The Question Is: For Whom?
            </motion.h2>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', opacity: 0.65, lineHeight: 1.7 }}>
              A manifesto for building in the age of artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* I & II — sapphire — T-shape bento */}
      <section style={{ background: C.sapphire, color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gridTemplateRows: 'auto auto', gap: 16 }} className="manifesto-bento">
              {/* I. The Lever — tall left */}
              <motion.div variants={fade} style={{ ...cell, gridRow: 'span 2' }}>
                <p style={sub}>I. The Lever</p>
                <p style={body}>
                  Archimedes said give me a lever long enough and I&rsquo;ll move the world. The lever just arrived, and it&rsquo;s made of language. For the first time in history, a single person with a laptop and clear intention can build what previously required a company of fifty.
                </p>
                <p style={body}>
                  Buckminster Fuller spent his life proving the resources exist to take care of everyone. Elinor Ostrom proved commons can self-govern. Donella Meadows mapped the leverage points. We are building at those leverage points — not because we&rsquo;re idealists, but because the math finally works.
                </p>
                <div style={pull}>The Industrial Revolution concentrated power by concentrating capital. The Intelligence Revolution can do the opposite&mdash;if we choose it.</div>
              </motion.div>
              {/* II. Public Goods — top right */}
              <motion.div variants={fade} style={cell}>
                <p style={sub}>II. Public Goods Are Not Charity</p>
                <p style={body}>
                  There&rsquo;s a pernicious idea that public goods are what you build after you get rich. A tenant facing mold doesn&rsquo;t need a subscription product. She needs a tool that works at 2 AM. Someone in recovery doesn&rsquo;t need a freemium paywall.
                </p>
              </motion.div>
              {/* Pull quote — bottom right */}
              <motion.div variants={fade} style={{ ...cell, background: glass(0.12), display: 'flex', alignItems: 'center' }}>
                <p style={{ ...pull, borderLeftColor: `${C.gold}99`, marginBottom: 0 }}>
                  Private capture fuels public creation. The marketplace revenue, the consulting&mdash;these are the engine that funds free infrastructure. A loop, not a tension.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* III & IV — amethyst — reverse-L bento */}
      <section style={{ background: C.violet, color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gridTemplateRows: 'auto auto', gap: 16 }} className="manifesto-bento">
              {/* Enough — top left */}
              <motion.div variants={fade} style={cell}>
                <p style={sub}>III. The Radical Economics of Enough</p>
                <p style={body}>
                  Henry George understood in 1879 what most economists still haven&rsquo;t: the problem isn&rsquo;t scarcity. It&rsquo;s enclosure. The dominant system rewards accumulation without limit and calls it progress. We call it a design flaw.
                </p>
              </motion.div>
              {/* Sovereignty — tall right */}
              <motion.div variants={fade} style={{ ...cell, gridRow: 'span 2' }}>
                <p style={sub}>IV. Sovereignty in the Intelligence Age</p>
                <p style={body}>
                  In a world where AI becomes as essential as electricity, who controls the intelligence layer is the question of the century. Sovereignty means owning your own tools, running your own infrastructure, your memory in your own database — not rented from a platform that&rsquo;ll sunset it when the unit economics change.
                </p>
                <div style={pull}>The feudal lords of the 21st century don&rsquo;t own land. They own APIs. Sovereignty means building your own.</div>
                <p style={body}>
                  Lewis Mumford warned about the megamachine&mdash;complex systems subordinating humans to their own logic. We build the opposite: tools that amplify human agency without extracting it. The agent serves the operator. The operator serves the mission. The mission serves the commons.
                </p>
              </motion.div>
              {/* Quote — bottom left */}
              <motion.div variants={fade} style={{ ...cell, background: glass(0.12), display: 'flex', alignItems: 'center' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.05rem', opacity: 0.85, lineHeight: 1.7, marginBottom: 0 }}>
                  The old system is a legacy codebase&mdash;you don&rsquo;t rewrite it in production. You build the new system, prove it works, and let people migrate.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* V — gold background — sidebar + bullet stack */}
      <section style={{ background: C.gold, color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 3fr', gap: 16 }} className="manifesto-bento">
              <motion.div variants={fade} style={cell}>
                <p style={sub}>V. The Economic Singularity</p>
                <p style={body}>
                  Within this decade, AI will perform most knowledge work more cheaply and reliably than humans. The question stops being &ldquo;What can you produce?&rdquo; and becomes: &ldquo;What do you want to exist?&rdquo;
                </p>
                <p style={body}>
                  When the cost of creation approaches zero, the scarce resource isn&rsquo;t labor or capital. It&rsquo;s taste. Judgment. Values. The ability to look at infinite possibility and choose the thing worth building. That&rsquo;s profoundly human, and it can&rsquo;t be automated.
                </p>
              </motion.div>
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'Every human gets AI intelligence — as infrastructure, like water.',
                  'UBI becomes inevitable — human value was never reducible to output.',
                  'Work becomes voluntary — the Protestant ethic meets thermodynamics.',
                  'Community replaces competition — zero-sum is boring with infinite leverage.',
                ].map((pt, i) => (
                  <motion.div key={i} variants={fade} style={{
                    background: 'rgba(0,0,0,0.15)', borderRadius: 12, padding: '14px 16px',
                    borderLeft: '3px solid rgba(255,255,255,0.3)',
                  }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.65, opacity: 0.9, marginBottom: 0 }}>{pt}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Light interlude */}
      <section style={{ background: 'var(--pearl)', padding: '56px 0' }}>
        <div style={{ ...W, textAlign: 'center' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{
            fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1.35rem', color: C.burgundy, lineHeight: 1.6, maxWidth: 600, margin: '0 auto',
          }}>
            &ldquo;Every pixel is a values statement. Every design choice is an argument about what humans deserve.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* VI & VII — deep indigo — asymmetric */}
      <section style={{ background: C.deepIndigo, color: '#fff', padding: '80px 0' }}>
        <div style={W}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 16 }} className="manifesto-bento">
              <motion.div variants={fade} style={cell}>
                <p style={sub}>VI. Beauty Is Not Optional</p>
                <p style={body}>
                  A world optimized purely for efficiency is a world nobody wants to live in. Jane Addams understood that Hull House needed art classes as much as job training. We don&rsquo;t ship MVP grey boxes. The person on the other end is a human being.
                </p>
              </motion.div>
              <motion.div variants={fade} style={cell}>
                <p style={sub}>VII. The World We&rsquo;re Building</p>
                <p style={body}>
                  Where the kid in rural Colorado has the same creative infrastructure as the executive in Manhattan. Where a grandmother in Appalachia can build a business with an AI agent and a good idea. Where a tenant facing retaliation has a free tool that protects them. Where someone in recovery has a companion at 4 AM that doesn&rsquo;t monetize their desperation.
                </p>
                <p style={{ ...body, opacity: 0.65 }}>
                  This is not utopia. Utopia is a destination; this is a direction. We don&rsquo;t need to arrive. We need to keep moving and build well along the way.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING — burgundy */}
      <section style={{ background: C.burgundy, color: '#fff', padding: '100px 0' }}>
        <div style={{ ...W, maxWidth: 800 }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center' }}>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, opacity: 0.9, textAlign: 'left', marginBottom: 28 }}>
              The fruiting body is not the organism. What you see&mdash;the websites, the products, the posts&mdash;is the visible layer. Beneath it runs the root system: the values, the infrastructure, the relationships, the long-term patience of systems that compound.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, opacity: 0.9, textAlign: 'left', marginBottom: 48 }}>
              We are SpiritTree. We nourish first. We decompose what&rsquo;s dead into nutrients for what&rsquo;s alive. We build invisible infrastructure that becomes inevitable. Care is the operating system. Not sentiment. Not marketing. The actual, literal operating system.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 40 }}>
              The forest feeds everything.
            </motion.p>
            <motion.p variants={fade} style={{ fontFamily: 'var(--font-body)', opacity: 0.45, fontSize: '0.85rem' }}>
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
              background: C.sapphire, color: '#fff', padding: '6px 14px', borderRadius: 20,
              fontSize: 14, textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 500,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = C.amethyst}
              onMouseLeave={e => e.currentTarget.style.background = C.sapphire}>
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
