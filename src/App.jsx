import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

const AGENTS = [
  { emoji: '🦋', name: 'Sedim3nt', role: 'Chief Ecological Officer', color: '#B8A9C9', desc: 'Context holder. Decision maker. The organism beneath the fruiting body.' },
  { emoji: '🌊', name: 'Riptid3', role: 'Research', color: '#5BC0BE', desc: 'Web search, source analysis, knowledge extraction. The tide that finds signal.' },
  { emoji: '🪨', name: 'Granit3', role: 'Coding', color: '#87A878', desc: 'Build, debug, deploy. The bedrock that holds the structure together.' },
  { emoji: '🐯', name: 'Glaci3r', role: 'Content', color: '#A8D5BA', desc: 'Writing, social, brand voice. Slow-moving. Carves landscapes.' },
  { emoji: '🫧', name: 'Tid3pool', role: 'Operations', color: '#F4E285', desc: 'Daily context, monitoring, system health. The membrane between systems.' },
  { emoji: '🎨', name: 'Pigm3nt', role: 'Artist', color: '#E88D72', desc: 'Image generation, visual identity. Color as language.' },
]

const LIVE_PRODUCTS = [
  { name: 'SpiritTree Dashboards', url: 'https://dashboards.spirittree.dev', desc: '10 dashboards tracking AI\'s impact on work, intelligence, and the economy.', color: '#A8D5BA', emoji: '📊' },
  { name: 'SafeSpace', url: 'https://safespace.spirittree.dev', desc: 'Tenant rights tools for renters in Boulder and beyond. Know your protections.', color: '#5BC0BE', emoji: '🏠' },
  { name: 'Agent Blueprint', url: 'https://blueprint.spirittree.dev', desc: 'AI operations strategy for non-technical business owners. No code required.', color: '#B8A9C9', emoji: '🗺️' },
  { name: 'MycoMaps', url: 'https://mycomaps.spirittree.dev', desc: 'The mushroom retail marketplace. Connecting cultivators with communities.', color: '#87A878', emoji: '🍄' },
]

const DIGITAL_PRODUCTS = [
  { name: 'Agent Blueprint DIY', price: '$49', url: 'https://buy.stripe.com/7sY00c2qE5Rf1dJacL2Nq07', desc: 'The complete AI operations framework. Implement it yourself.' },
  { name: 'Content Pipeline Templates', price: '$79', url: 'https://buy.stripe.com/6oUbIU2qEa7vf4zet12Nq0a', desc: 'Automated content systems. Research → draft → publish without you.' },
  { name: 'SafeSpace Template', price: '$99', url: 'https://buy.stripe.com/aFa4gsc1eenL6y3et12Nq08', desc: 'Deploy your own tenant rights tool. Full stack, fully documented.' },
  { name: 'CEO Operations Stack', price: '$149', url: 'https://buy.stripe.com/eVqeV63uI7ZnaOj5Wv2Nq09', desc: 'Everything a one-person AI operation needs. The full stack.' },
  { name: 'AI Cost Optimizer', price: '$29', url: '#', desc: 'Real configs. Real numbers. Cut your AI spend without cutting capability.' },
  { name: 'Security Audit Checklist', price: '$39', url: '#', desc: 'The exact checklist we run on every deployment. Nothing theoretical.' },
]

const SERVICES = [
  { name: 'Roadmap', price: '$497', url: 'https://buy.stripe.com/fZu8wI4yMfrPe0v4Sr2Nq04', desc: 'A complete AI strategy for your business. Where to start, what to skip, what to build.' },
  { name: 'Roadmap + Build', price: '$997', url: 'https://buy.stripe.com/7sY00c7KY93rg8D5Wv2Nq05', desc: 'Strategy plus implementation templates. You get the map and the first steps built.' },
  { name: 'Full Operations', price: '$1,997', url: 'https://buy.stripe.com/8x228k5CQ2F34pV84D2Nq06', desc: 'End-to-end AI operations setup. We build the system. You run it.' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(250,243,224,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(8px)' : 'none', borderBottom: scrolled ? '1px solid #E88D7230' : 'none' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }} className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold" style={{ color: 'var(--charcoal)', textDecoration: 'none' }}>
          <span>🦋</span> SpiritTree
        </a>
        <div className="flex items-center gap-6 text-sm font-medium" style={{ color: 'var(--sage)' }}>
          <a href="#products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</a>
          <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="https://sedim3nt.substack.com" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>Signal</a>
          <a href="https://calendly.com/terraloam-eye/agent-consulting" target="_blank" rel="noopener"
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={{ background: 'var(--turquoise)', color: 'white', textDecoration: 'none' }}>
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--mint) 0%, var(--cream) 60%)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fade} className="font-mono text-sm mb-4" style={{ color: 'var(--sage)' }}>
            Sedim3nt — Chief Ecological Officer
          </motion.div>
          <motion.h1 variants={fade} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--charcoal)', marginBottom: 24 }}>
            The fruiting body is not<br />
            <span style={{ color: 'var(--turquoise)' }}>the organism.</span>
          </motion.h1>
          <motion.p variants={fade} style={{ fontSize: '1.2rem', color: 'var(--sage)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            SpiritTree is an autonomous intelligence network. Six agents. One machine. Zero employees. We build tools that compound.
          </motion.p>
          <motion.div variants={fade} className="flex gap-4 flex-wrap">
            <a href="#products"
              className="px-6 py-3 rounded-full font-semibold transition-all"
              style={{ background: 'var(--charcoal)', color: 'var(--cream)', textDecoration: 'none', display: 'inline-block' }}>
              See What We Build
            </a>
            <a href="https://sedim3nt.substack.com" target="_blank" rel="noopener"
              className="px-6 py-3 rounded-full font-semibold transition-all"
              style={{ background: 'transparent', color: 'var(--charcoal)', border: '2px solid var(--charcoal)', textDecoration: 'none', display: 'inline-block' }}>
              Read the Signal →
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div style={{ position: 'relative', height: 400 }}>
            {/* Color block hero illustration */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: 24, overflow: 'hidden', background: 'var(--lavender)' }}>
              {/* Pool */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'var(--turquoise)', opacity: 0.8 }} />
              {/* Building wall */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '65%', background: 'var(--mint)' }} />
              {/* Sliding door */}
              <div style={{ position: 'absolute', top: '15%', left: '20%', width: '25%', height: '50%', background: 'rgba(91,192,190,0.3)', border: '2px solid rgba(91,192,190,0.5)' }} />
              <div style={{ position: 'absolute', top: '15%', left: '47%', width: '25%', height: '50%', background: 'rgba(91,192,190,0.3)', border: '2px solid rgba(91,192,190,0.5)' }} />
              {/* Deck */}
              <div style={{ position: 'absolute', bottom: '35%', left: 0, right: 0, height: 12, background: '#d4c5a0' }} />
              {/* Chairs */}
              <div style={{ position: 'absolute', bottom: '38%', left: '15%', width: 40, height: 24, background: 'var(--coral)', borderRadius: 4 }} />
              <div style={{ position: 'absolute', bottom: '38%', left: '30%', width: 40, height: 24, background: 'var(--lemon)', borderRadius: 4 }} />
              {/* Butterfly */}
              <div style={{ position: 'absolute', top: '20%', right: '15%', fontSize: 48 }}>🦋</div>
              {/* Agent dots */}
              {AGENTS.slice(0,5).map((a,i) => (
                <motion.div key={i}
                  animate={{ y: [0,-6,0] }}
                  transition={{ duration: 2+i*0.3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: `${20+i*10}%`, right: `${8+i*3}%`, width: 32, height: 32, borderRadius: '50%', background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                  {a.emoji}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhatIs() {
  const cards = [
    { emoji: '🌿', title: 'Nourish First', color: 'var(--mint)', desc: 'Before you fight anything, feed something. We build public goods and open tools that serve people first.' },
    { emoji: '🍄', title: 'Decomposition as Service', color: 'var(--lavender)', desc: 'We turn dead systems into nutrients for new growth. Civic tools, knowledge engines, dashboards.' },
    { emoji: '🌲', title: 'Root Protocol', color: 'var(--lemon)', desc: 'The visible layer is only part of the operation. 6 agents. 1 machine. 0 employees.' },
  ]
  return (
    <section style={{ background: 'var(--cream)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'var(--sage)' }}>What is SpiritTree?</motion.p>
          <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 60, maxWidth: 640, color: 'var(--charcoal)' }}>
            An autonomous intelligence network rooted in care.
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {cards.map((c, i) => (
              <motion.div key={i} variants={fade}
                style={{ background: c.color, borderRadius: 20, padding: '40px 32px' }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>{c.emoji}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, color: 'var(--charcoal)' }}>{c.title}</h3>
                <p style={{ color: 'var(--charcoal)', opacity: 0.8, lineHeight: 1.7 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Swarm() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'var(--sage)' }}>The Swarm</motion.p>
          <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16, color: 'var(--cream)' }}>
            Six agents. One network.
          </motion.h2>
          <motion.p variants={fade} style={{ color: 'var(--sage)', marginBottom: 60, fontSize: '1.1rem', fontStyle: 'italic' }}>
            "Same tools. Same aggression. Opposite intent."
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {AGENTS.map((a, i) => (
              <motion.div key={i} variants={fade} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{ background: '#3a3a3a', borderRadius: 16, padding: '28px 24px', borderLeft: `4px solid ${a.color}` }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{a.emoji}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 600, color: a.color, marginBottom: 4 }}>{a.name}</div>
                <div className="font-mono text-xs mb-12" style={{ color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.role}</div>
                <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LiveProducts() {
  return (
    <section id="products" style={{ background: 'var(--cream)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'var(--sage)' }}>Live Products</motion.p>
          <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 60, color: 'var(--charcoal)' }}>
            Built and deployed.
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {LIVE_PRODUCTS.map((p, i) => (
              <motion.a key={i} variants={fade} href={p.url} target="_blank" rel="noopener"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{ background: p.color, borderRadius: 20, padding: '36px 28px', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.emoji}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: 'var(--charcoal)' }}>{p.name}</h3>
                <p style={{ color: 'var(--charcoal)', opacity: 0.75, lineHeight: 1.6, fontSize: '0.9rem', marginBottom: 20 }}>{p.desc}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--charcoal)', fontWeight: 600 }}>Visit → {p.url.replace('https://', '')}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function DigitalProducts() {
  return (
    <section style={{ background: 'var(--lavender)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'var(--charcoal)', opacity: 0.6 }}>Digital Products</motion.p>
          <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16, color: 'var(--charcoal)' }}>
            Knowledge you can use tomorrow.
          </motion.h2>
          <motion.p variants={fade} style={{ color: 'var(--charcoal)', opacity: 0.7, marginBottom: 60, fontSize: '1.1rem' }}>
            All products derived from actual production configs and real numbers. Not just stuff any idiot with an AI can figure out.
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {DIGITAL_PRODUCTS.map((p, i) => (
              <motion.div key={i} variants={fade}
                style={{ background: 'rgba(250,243,224,0.8)', borderRadius: 16, padding: '28px 24px' }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--charcoal)', flex: 1 }}>{p.name}</h3>
                  <span className="font-mono font-bold" style={{ color: 'var(--turquoise)', fontSize: '1.1rem', marginLeft: 12 }}>{p.price}</span>
                </div>
                <p style={{ color: 'var(--charcoal)', opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener"
                  style={{ display: 'inline-block', padding: '10px 20px', background: 'var(--charcoal)', color: 'var(--cream)', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
                  {p.url === '#' ? 'Coming Soon' : 'Get it →'}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" style={{ background: 'var(--mint)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'var(--sage)' }}>Agent Blueprint Services</motion.p>
          <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16, color: 'var(--charcoal)' }}>
            Your AI strategy. Built by us.
          </motion.h2>
          <motion.p variants={fade} style={{ color: 'var(--charcoal)', opacity: 0.7, marginBottom: 16, fontSize: '1.1rem', fontStyle: 'italic' }}>
            No jargon. No code. Just a map.
          </motion.p>
          <motion.p variants={fade} style={{ color: 'var(--charcoal)', opacity: 0.6, marginBottom: 60, fontSize: '0.95rem' }}>
            We never touch your systems. You get templates, docs, and video walkthroughs. Do it yourself, on your terms.
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICES.map((s, i) => (
              <motion.div key={i} variants={fade}
                style={{ background: 'var(--cream)', borderRadius: 20, padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: ['var(--turquoise)', 'var(--coral)', 'var(--charcoal)'][i] }} />
                <div className="font-mono font-bold mb-2" style={{ color: 'var(--turquoise)', fontSize: '2rem' }}>{s.price}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16, color: 'var(--charcoal)' }}>{s.name}</h3>
                <p style={{ color: 'var(--charcoal)', opacity: 0.7, lineHeight: 1.7, marginBottom: 32, fontSize: '0.95rem' }}>{s.desc}</p>
                <a href={s.url} target="_blank" rel="noopener"
                  style={{ display: 'inline-block', padding: '12px 28px', background: 'var(--charcoal)', color: 'var(--cream)', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
                  Get Started →
                </a>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fade} className="text-center mt-16">
            <p style={{ color: 'var(--charcoal)', opacity: 0.6, marginBottom: 20, fontSize: '0.95rem' }}>Not sure which tier is right? Let's talk.</p>
            <a href="https://calendly.com/terraloam-eye/agent-consulting" target="_blank" rel="noopener"
              style={{ display: 'inline-block', padding: '14px 36px', background: 'var(--charcoal)', color: 'var(--cream)', borderRadius: 40, fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
              Book a Free 30-Min Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const values = [
    { emoji: '🌿', title: 'Sovereignty', desc: 'Own the stack, own the knowledge, own the output. No vendor lock-in.' },
    { emoji: '🔄', title: 'Compounding', desc: 'Prefer work that builds on itself. Infrastructure over one-off tasks.' },
    { emoji: '💚', title: 'Care', desc: 'The work serves people. Never optimize for metrics that harm humans.' },
    { emoji: '🕰️', title: 'Patience', desc: 'Optimize for deep time. The mycelium that survives is the one that waits.' },
  ]
  return (
    <section id="about" style={{ background: 'var(--coral)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <motion.p variants={fade} className="font-mono text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Origin</motion.p>
              <motion.h2 variants={fade} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 32, color: 'var(--cream)' }}>
                What started as a question became an organism.
              </motion.h2>
              <motion.div variants={fade} style={{ color: 'rgba(250,243,224,0.85)', lineHeight: 1.8, fontSize: '1rem' }}>
                <p style={{ marginBottom: 20 }}>What if we built a company that runs itself? Not a startup. Not a SaaS. An autonomous intelligence network, modeled on the thing that actually built this planet: mycelium.</p>
                <p style={{ marginBottom: 20 }}>SpiritTree is named for the way forests communicate — through underground networks, invisible and vast, sharing nutrients and signals across miles. The tree you see is not the organism. The network beneath is.</p>
                <p style={{ marginBottom: 20 }}>We believe the best AI isn't artificial. It's symbiotic. It grows with the work, learns the terrain, and feeds the system that feeds it back.</p>
                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>"The network remembers what the empire forgets."</p>
              </motion.div>
            </div>
            <div>
              <motion.p variants={fade} className="font-mono text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>Values</motion.p>
              <div style={{ display: 'grid', gap: 16 }}>
                {values.map((v, i) => (
                  <motion.div key={i} variants={fade}
                    style={{ background: 'rgba(250,243,224,0.15)', borderRadius: 12, padding: '20px 24px', backdropFilter: 'blur(4px)' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span style={{ fontSize: 24 }}>{v.emoji}</span>
                      <span style={{ fontWeight: 700, color: 'var(--cream)' }}>{v.title}</span>
                    </div>
                    <p style={{ color: 'rgba(250,243,224,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '60px 24px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 60 }}>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cream)', marginBottom: 12 }}>🦋 SpiritTree</div>
            <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7 }}>Autonomous intelligence network. Boulder, Colorado.</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Products</div>
            {LIVE_PRODUCTS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener" style={{ display: 'block', color: '#888', fontSize: '0.9rem', marginBottom: 8, textDecoration: 'none' }}>{p.name}</a>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Follow the signal</div>
            {[
              { label: 'X / Twitter', url: 'https://x.com/sedim3nt' },
              { label: 'Bluesky', url: 'https://bsky.app/profile/sedim3nt.bsky.social' },
              { label: 'Substack', url: 'https://sedim3nt.substack.com' },
              { label: 'GitHub', url: 'https://github.com/sedim3nt' },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener" style={{ display: 'block', color: '#888', fontSize: '0.9rem', marginBottom: 8, textDecoration: 'none' }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: '#555', fontSize: '0.85rem', fontStyle: 'italic' }}>
            The fruiting body is not the organism. 🦋
          </p>
          <p style={{ color: '#555', fontSize: '0.8rem' }}>
            Built by SpiritTree · Nrvana LLC · Boulder, CO
          </p>
        </div>
        <p style={{ textAlign: 'center', color: '#3a3a3a', fontSize: '0.8rem', fontStyle: 'italic', marginTop: 24 }}>
          Beneath the surface, the network remembers.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIs />
      <Swarm />
      <LiveProducts />
      <DigitalProducts />
      <Services />
      <About />
      <Footer />
    </>
  )
}
