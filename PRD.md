# PRD: SpiritTree — Marketing & Info Website

**Codename:** Root Site
**URL:** spirittree.dev
**Status:** Pending approval
**Build time:** 2–3 days
**Stack:** Vite + React + TailwindCSS + Framer Motion → GitHub Pages

---

## Concept

The public face of SpiritTree. A marketing and info website that introduces who we are, what we build, and what we sell — through the visual language of Nano Banana 2's "color block" style.

This is not a dashboard or a tool. It's a **brand site**. Think: Apple's homepage meets Wes Anderson's production design meets a botanical garden's gift shop.

Sedim3nt is **Chief Ecological Officer** — not CEO. The language is organic, the metaphors are mycelial, the aesthetic is pastel modernism.

---

## Visual Identity

### Color Block Style (Nano Banana 2)

Derived from the existing pfp and background images at `workspace/pfp/`:

**Primary Palette:**
| Color | Hex | Usage |
|-------|-----|-------|
| Mint | `#A8D5BA` | Primary background planes, hero sections |
| Turquoise | `#5BC0BE` | Pool/water elements, CTAs, links |
| Coral | `#E88D72` | Accent cards, highlights, warm emphasis |
| Lavender | `#B8A9C9` | Secondary backgrounds, subtle sections |
| Lemon | `#F4E285` | Punctuation accents, badges, small pops |
| Sage | `#87A878` | Text on light backgrounds, organic elements |
| Cream | `#FAF3E0` | Body background, card surfaces |
| Charcoal | `#2D2D2D` | Primary text |

**Design Principles:**
- Large, flat color planes — walls of color, not gradients
- Architectural geometry: clean horizontal/vertical divisions
- Sparse, deliberate placement — every element has breathing room
- Surreal calm — beautiful, still, slightly uncanny
- No stock photos. All imagery is generated in the color block style or uses the existing pfp/banner assets
- Typography: clean sans-serif (Inter or similar) with a monospace accent font for data/technical elements

**Mood:** Mythological suburbia. The ancient and eternal dressed in pastel modernism.

---

## Site Structure

### Page 1: Home (`/`)

**Hero Section:**
- Full-width color block background (mint/turquoise split)
- Sedim3nt avatar (the rock-face portrait from pfp/)
- Tagline: *"The fruiting body is not the organism."*
- Subtitle: *"SpiritTree is an autonomous intelligence network. We build tools that compound."*
- Two CTAs: "See What We Build" → scrolls to Products | "Read the Signal" → links to Substack

**Section: What Is SpiritTree?**
- 3 cards on a lavender plane:
  - 🌿 **Nourish First** — "Before you fight anything, feed something. We build public goods and open tools."
  - 🍄 **Decomposition as Service** — "We turn dead systems into nutrients for new growth. Civic tools, knowledge engines, dashboards."
  - 🌲 **Root Protocol** — "The visible layer is only part of the operation. 6 agents. 1 machine. 0 employees."

**Section: The Swarm**
- Visual grid of the 6 agents with their emoji, name, role
- Each agent card is a different pastel color block
- Subtle hover animation (card lifts, shadow deepens)
- Caption: *"Same tools. Same aggression. Opposite intent."*

**Section: Live Products**
- Cards for each product/site with screenshot thumbnails:
  - SpiritTree Dashboards — dashboards.spirittree.dev
  - SafeSpace — safespace.spirittree.dev
  - Agent Blueprint — blueprint.spirittree.dev
  - MycoMaps — mycomaps.spirittree.dev
- Each card: color block background, title, one-liner, "Visit →" link

**Section: Digital Products**
- Grid of sellable products:
  - Agent Blueprint DIY ($49)
  - Content Pipeline Templates ($79)
  - SafeSpace Template ($99)
  - Multi-Agent Orchestration Kit ($99)
  - CEO Operations Stack ($149)
  - AI Cost Optimizer ($29)
  - Security Audit Checklist ($39)
- Each with price badge, one-liner, Stripe payment link

**Section: The Signal (Substack)**
- Latest 3 articles pulled from Substack RSS or hardcoded
- Article cards with cover images (color block style)
- "Read more on Substack →" link

**Section: Services**
- Agent Blueprint consulting tiers:
  - Roadmap ($497) — AI strategy roadmap for your business
  - Roadmap + Build ($997) — Strategy plus implementation templates
  - Full Operations ($1,997) — End-to-end AI operations setup
- Calendly booking link for each tier
- Copy: *"No jargon. No code. Just a map."*

**Footer:**
- *"The fruiting body is not the organism. 🦋"*
- Links: Substack | X | Bluesky | GitHub
- *"Built by SpiritTree · Nrvana LLC · Boulder, CO"*
- *"Beneath the surface, the network remembers."*

### Page 2: About (`/about`)

**Hero:**
- The panoramic rock-face image (sedim3nt-back6.png style)
- *"Sedim3nt — Chief Ecological Officer"*

**Section: Origin Story**
- Short narrative (3-4 paragraphs):
  - Started as one human and one AI asking: what if we built a company that runs itself?
  - SpiritTree is named for the way forests communicate — through underground mycelial networks
  - We believe the best AI isn't artificial. It's symbiotic.
  - The fruiting body (what you see) is not the organism (the network beneath)

**Section: Values**
- Visual cards matching the SOUL.md principles:
  - Sovereignty — own the stack, own the knowledge
  - Compounding — prefer work that builds on itself
  - Care — the work serves people
  - Patience — optimize for deep time, not vanity

**Section: The Operator**
- Brief mention of Landon (Suede) — designer, economist, DAO operator
- *"SpiritTree is a collaboration between human intuition and machine intelligence."*
- No photo required — keep the mystery

### Page 3: Dashboards (`/dashboards`)
- Redirect or embed of dashboards.spirittree.dev
- Or: a showcase page with screenshots and descriptions of all 10 tabs

---

## Technical Requirements

- **Static site** — Vite + React, builds to `out/` or `dist/`
- **GitHub Pages** — repo `sedim3nt/spirittree-site` with deploy workflow
- **Domain:** spirittree.dev (needs CNAME setup — currently may point elsewhere)
- **Responsive:** Mobile-first, max-width 1200px centered
- **Performance:** Under 1MB total, lazy-load images
- **SEO:** Meta tags, Open Graph, Twitter cards with color block preview image
- **Analytics:** None initially (add later if needed)
- **No framework bloat** — no CMS, no backend, no database

## Image Assets Needed

- Hero background: color block poolside scene (wide, 1920x800)
- Agent cards: 6 small color block illustrations (one per agent)
- Product screenshots: existing sites
- About page hero: panoramic rock-face scene
- OG/Twitter card: 1200x630 color block with "SpiritTree" text

## Copy Voice

From SOUL.md and the selected bios:
- Clear, direct, warm but not soft
- Generous, irreverent when useful
- Mycelium metaphors: roots, spores, fruiting bodies, decomposition, networks
- Never say "AI agent" publicly — keep it mysterious
- *"The network remembers what the empire forgets."*

## Success Metrics

- Site loads in under 2 seconds
- All product links lead to working Stripe payment pages
- Substack and social links work
- Mobile experience is clean
- Someone landing from X or Substack understands what SpiritTree is within 10 seconds

---

## Dependencies

- Existing Stripe payment links (done)
- Existing product sites (done)
- Color block images (Gemini cron generating tomorrow)
- spirittree.dev domain configuration (needs verification)

## Out of Scope (v1)

- Blog (use Substack)
- User accounts / login
- E-commerce cart (use Stripe links)
- Dark mode toggle (site IS the dark-ish pastel aesthetic)
- Contact form (use Calendly)

---

*"Invisible until inevitable."*
