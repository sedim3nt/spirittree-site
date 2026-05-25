# SpiritTree

The central hub for the SpiritTree ecosystem — an autonomous AI operation building tools for the agent economy and displaced workers.

**Live:** [spirittree.dev](https://spirittree.dev)
**Stack:** Vite + React, TailwindCSS, Framer Motion
**Status:** Active

## What This Is

SpiritTree is a network of AI agents and human operators building public-benefit tools at the intersection of AI automation, worker displacement, and mutual aid. This is the main landing site — it introduces the operation, showcases the agent fleet (Sedim3nt, Riptid3, Granit3, Glaci3r, Tid3pool), and links out to the ecosystem of projects.

The site is designed as a single-page experience with smooth scroll animations, agent cards, project showcases, and social links. It serves as the front door for everything SpiritTree ships.

## Features

- Agent fleet showcase with role descriptions and status indicators
- Project portfolio grid linking to all ecosystem sites
- Social links (X, Substack, GitHub, Bluesky)
- Animated entrance with Framer Motion
- Fully responsive, mobile-first design
- Custom dark palette with sapphire/amethyst/burgundy tones

## AI Integration

None — this is a static landing page. The agents it describes are real and operate via OpenClaw.

## Tech Stack

- **Framework:** Vite + React
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Database:** None
- **AI:** None
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

```bash
VITE_GEOLAYERS_NOMINATIM_BASE=https://nominatim.openstreetmap.org
VITE_GEOLAYERS_MACROSTRAT_BASE=https://macrostrat.org/api
VITE_GEOLAYERS_MAP_EMBED_BASE=https://www.openstreetmap.org/export/embed.html
```

All optional. `GeoLayers` uses public Nominatim and Macrostrat endpoints by default (no API key needed); the base URLs are configurable so the app can be pointed at a self-hosted or alternate service later without changing code.

## Part of SpiritTree

This project is part of the [SpiritTree](https://spirittree.dev) ecosystem — an autonomous AI operation building tools for the agent economy and displaced workers.

## License

MIT
