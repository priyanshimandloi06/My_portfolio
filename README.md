# Priyanshi Mandloi — Portfolio (Next.js)

A Next.js + Framer Motion rebuild of the portfolio, with light/dark mode,
a typewriter hero, scroll-reveals, tilt-on-hover project cards, a project
detail modal, and a coding-profiles section (LeetCode + HackerRank).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the page hot-reloads as you edit.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js        Fonts, theme-flash prevention, page metadata
  page.js           Assembles all sections
  globals.css       All styling (CSS variables drive light/dark theme)
components/
  Hero.js           Name, typewriter role line, photo with floating chips
  Marquee.js         Scrolling skills strip
  Skills.js          Bento grid of skill categories
  Projects.js         Project cards + tilt effect
  ProjectModal.js      Popup with Problem / Solution / Challenges / Tech / View
  Education.js        Animated timeline
  Certifications.js    8 certificate cards, each linking out
  CodingProfiles.js    LeetCode + HackerRank cards
  Connect.js          GitHub, LinkedIn (clickable), Email, Phone (static)
  Nav.js              Sticky pill nav with scroll-spy + theme toggle
  BackgroundFx.js      Blobs, grid, cursor glow
  IconSprite.js        All inline SVG icons as <symbol> defs
lib/
  data.js            ALL editable content lives here — name, bio, projects,
                      skills, education, certifications, coding profiles,
                      and contact links. Edit this file to change content
                      without touching any component.
public/
  profile.jpg         Your photo
```

## Editing content

Almost everything you'd want to change — text, links, project details,
tech stacks — is in **`lib/data.js`**. Open it and edit the plain
JavaScript objects; no component code needs to change for content edits.

To swap the photo, replace `public/profile.jpg` with a new image of the
same name (or update the `src` in `components/Hero.js`).

## Deploying

### Vercel (recommended, since you're already using it)

1. Push this project to your GitHub repo (`My_portfolio`), with these
   files at the **root** of the repo (not inside a subfolder).
2. In Vercel, make sure the project's Framework Preset is **Next.js**
   (Vercel auto-detects this from `next.config.mjs` + `package.json`).
3. Push to `main` — Vercel installs dependencies and builds automatically.

### Any other Node host

```bash
npm install
npm run build
npm start
```

This is a server-rendered Next.js app (not a static HTML export), so the
host needs to run `npm start`, not just serve static files.
