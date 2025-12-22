# Via Auster — Minimal White Template (Vite + React + Tailwind)

Cloud-only workflow:
- Edit in GitHub web editor or Codespaces
- Deploy on Netlify from GitHub (no laptop dependency)

## Run (Codespaces)
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Netlify
`netlify.toml` pins Node to **20.19.0** and publishes `dist/`.
If Netlify still builds with the wrong Node version:
- Netlify Project configuration → Environment variables: set `NODE_VERSION=20.19.0`
- Then "Clear cache and deploy".
