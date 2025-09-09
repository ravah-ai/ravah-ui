
# Ravah.ai — Netlify-ready React site (Vite + Tailwind)

## Local Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
# Output goes to dist/
```

## Netlify
- Includes `netlify.toml` to run `npm run build` and publish `dist`.
- SPA fallback via both `netlify.toml` and `public/_redirects`.

## Logo
A logo is already included under `public/` as:
- `FullLogo_Transparent (1).png` (and `FullLogo_Transparent.png` as fallback)
You can replace these with your own.
