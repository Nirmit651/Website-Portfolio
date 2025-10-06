# Nirmit Bhoyar — Portfolio

A modern, motion-rich personal site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and a custom Hyperspeed-inspired hero background. Sections flow from hero → projects → about → contact with buttery transitions, responsive typography, and a dark-first visual system.

https://website-portfolio-nu-three.vercel.app/

## Features

- **Hyperspeed hero** with a performant canvas starfield that honours reduced-motion preferences and exposes `speed` / `density` props via `HeroBackground`.
- **Curated projects** fed by live GitHub tech stacks, Framer Motion hover states, tech badges with icons, and responsive, prefetched imagery.
- **Theme toggle** defaulting to dark mode, powered by `next-themes`, with noise overlay, soft shadows, and fluid type sizes.
- **Lazy-loaded sections** so non-critical content waits until hydration; optimised metadata, OpenGraph tags, robots, sitemap, and Vercel analytics baked in.
- **Accessible interactions** including skip-friendly anchors, keyboardable cards, and motion fallbacks.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the local dev server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000). Edits inside `app/` support fast refresh.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Lint with Next.js/ESLint config |
| `npm run build` | Production build + type check |
| `npm run start` | Launch the production server locally |

## Deployment (Vercel)

```bash
# One-step deploy (requires Vercel CLI login)
npx vercel --prod
```

Vercel will detect the Next.js project, run `npm install` + `npm run build`, and host the site globally with analytics enabled. Alternatively, connect the GitHub repo in the Vercel dashboard for zero-config CI/CD.

## Project Structure

- `app/` — App Router pages, metadata, and global layout
- `components/` — Reusable UI (sections, theme toggle, hero background)
- `data/` — Project metadata powering the Projects grid
- `public/` — Static assets, tech art, favicons
- `tailwind.config.ts` — Theme tokens and utility extensions
- `app/sitemap.ts` & `app/robots.ts` — SEO helpers for crawlers

## Environment Notes

- Hero background accepts `speed`, `density`, and `hue` props if you want to tweak vibe.
- Visual Crossing API key lives in the weather-app project only; this portfolio just links out.
- Update `metadataBase` in `app/layout.tsx` once a production URL is finalised.
