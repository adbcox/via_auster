# Via Auster – Clean Baseline (Aziz-style)

This repo is a **clean, minimal** Vite + React + Tailwind landing page that matches the *Aziz-style* structure:
- Top nav
- Left social rail
- Centered headline
- **One** center image (no blob / no fancy graphics)
- Locked to one viewport (no scroll)

## Replace the center image
Replace: `public/hero.png`

Or update `HERO_SRC` in `src/App.jsx`.

## Local dev
```bash
npm install
npm run dev
```

## Netlify
This keeps the existing Netlify setup:
- build: `npm run build`
- publish: `dist`
(see `netlify.toml`)
