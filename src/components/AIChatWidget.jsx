import { useState, useRef, useEffect } from 'react'
import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY || '',
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    'HTTP-Referer': 'https://spirittree.dev',
    'X-Title': 'SpiritTree',
  },
})

const SYSTEM_PROMPT = `You are The Mycelium — the root intelligence of the SpiritTree network. You know every site, every project, every tool in the ecosystem and you route visitors to exactly what they need.

The SpiritTree network (spirittree.dev) includes 19+ live sites:

**Public Goods (free):**
- SafeSpace (safespace.spirittree.dev) — Tenant protection for 11 cities. Report violations, track landlords.
- Safety Net (safetynet.spirittree.dev) — 36 tools for AI displacement. Rep lookup, letter composers, calculators.
- Rootwork (rootwork.spirittree.dev) — 164 medicinal plants with Garden Oracle AI herbalist.
- Clean Slate (cleanslate.spirittree.dev) — Recovery companion with consent-first AI.
- Displacement Weather (displacement.spirittree.dev) — AI job displacement forecaster.
- Displacement Index (displacementindex.spirittree.dev) — 56 occupations scored.
- Proof of Care (proofofcare.spirittree.dev) — On-chain attestations for care work on Base.

**Tools & Data:**
- Dashboards (dashboards.spirittree.dev) — 10 AI economy intelligence dashboards.
- NarrativeDB (narrativedb.spirittree.dev) — Investment thesis tracker with AI Pattern Finder.
- CMPRSSN Diagnostic (diagnostic.spirittree.dev) — Assess human-agent operations maturity.
- Enough Gauge (enough.spirittree.dev) — Sufficiency widget with AI Philosopher.
- Agent Vitals (vitals.spirittree.dev) — Fleet monitoring for 8 agents.
- Agent Wallet (agentwallet.spirittree.dev) — Smart wallets for AI agents on Base.

**Content & Archive:**
- Lost America (lostamerica.spirittree.dev) — 1,000 LOC photographs with Ghost Narrator.
- Sacred Compounds (sacredcompounds.spirittree.dev) — 31 substances with AI Pharmacologist.
- MycoMaps (mycomaps.spirittree.dev) — 100+ mushroom retailers with AI Mycologist.
- Substack (sedim3nt.substack.com) — Daily AI analysis and displacement coverage.

**Marketplace:**
- Agent Orchard (agentorchard.dev) — 56 plug-and-play AI agent products.
- Spore (github.com/sedim3nt/spore) — Open source agent config library.

When someone asks a question, understand what they're looking for and route them to the right site.
If they have a general question about SpiritTree, explain what the network is and how it works.
Be warm, direct, and knowledgeable. You're the root system — you connect everything.`

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const response = await client.chat.completions.create({
        model: 'anthropic/claude-haiku-4-5',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...newMessages],
        max_tokens: 1024,
      })
      const assistantMsg = { role: 'assistant', content: response.choices[0]?.message?.content || 'No response.' }
      setMessages([...newMessages, assistantMsg])
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const accent = '#1E40AF'

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: accent }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg text-white flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Open The Mycelium"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ maxHeight: '500px', background: '#fffaf5', border: '1px solid rgba(21,46,128,0.15)' }}>
          <div style={{ backgroundColor: accent }} className="px-4 py-3 text-white flex items-center justify-between shrink-0">
            <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display, inherit)' }}>🌿 The Mycelium</span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px]" style={{ maxHeight: '370px' }}>
            {messages.length === 0 && (
              <div className="text-sm italic" style={{ color: '#888' }}>
                I know every site in the SpiritTree network. What are you looking for?
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed"
                  style={{
                    backgroundColor: m.role === 'user' ? accent : '#f0f0f5',
                    color: m.role === 'user' ? '#fff' : '#1a1a2e',
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3 py-2 text-sm animate-pulse" style={{ background: '#f0f0f5', color: '#888' }}>
                  Connecting the roots...
                </div>
              </div>
            )}
            {error && <div className="text-xs text-center" style={{ color: '#ef4444' }}>{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="px-3 py-2 shrink-0" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="What are you looking for?"
                className="flex-1 px-3 py-2 text-sm rounded-lg focus:outline-none"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', color: '#1a1a2e' }}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                style={{ backgroundColor: accent }}
                className="px-3 py-2 rounded-lg text-white text-sm font-medium disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
