# Ravah.ai — Clean React Site (Vite + Netlify)

## Quick start
```bash
npm i
npm run dev
```
Open http://localhost:5173

## Build & Deploy (Netlify)
- Build: `npm run build`
- Output: `dist/`
- Netlify reads `netlify.toml` and uses `_redirects` for SPA routing.
- Ensure `public/FullLogo_Transparent.png` exists (logo referenced as `/FullLogo_Transparent.png`).

## Notes
- Animated visuals are **SVG-based** and sized responsively to avoid oversized figures.
- Calculator is compact with sliders; no heavy chart deps.
