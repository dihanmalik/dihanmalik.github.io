# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal portfolio/resume single-page site (React + TypeScript + Vite + shadcn/ui), deployed to GitHub Pages at the `/my-website/` base path. Package manager is **pnpm**.

## Commands

```bash
pnpm dev          # start Vite dev server
pnpm build        # tsc -b (project references) + vite build -> dist/
pnpm lint         # eslint .
pnpm format       # prettier --write "**/*.{ts,tsx}"
pnpm typecheck    # tsc --noEmit
pnpm preview      # preview the production build
pnpm deploy       # predeploy (build) then gh-pages -d dist
```

There is no test runner configured (no vitest/jest scripts) despite jest/cypress appearing in the displayed tech-stack list — don't assume tests exist or add a test command unless asked.

To add a shadcn/ui component:
```bash
npx shadcn@latest add <component>
```
This drops files into `src/components/ui/`. shadcn config lives in `components.json` (style: `base-nova`, icon library: `tabler`, base color: `neutral`).

## Architecture

Single-page app, no router — `App.tsx` renders one vertical stack of resume sections inside a `ClickSpark` wrapper (click animation effect):

```
main.tsx -> ThemeProvider -> TooltipProvider -> App
App -> BackdropParticles (background) + MyNavigation (nav) +
       IntroSection -> WorkExperienceSection -> EducationSection -> TechStackSection
```

- **`src/resume/`** — the actual page content/sections (intro, work experience, education, tech stack). This is where resume content edits happen.
- **`src/components/`** — reusable visual/interactive components, notably animation-heavy ones (`Particles.tsx`, `ClickSpark.tsx`, `BorderGlow.tsx`, `TiltedCard.tsx`, `LogoLoop.tsx`) built on `motion` and `ogl` (WebGL). These are self-contained, prop-configurable effects rather than data components.
- **`src/components/ui/`** — shadcn/ui primitives (button, tabs, tooltip, navigation-menu, separator, chip). Don't hand-edit generated shadcn primitives beyond what's needed; prefer re-running the shadcn CLI or composing around them.
- **`src/components/ui/custom/`** — app-specific composites built from shadcn primitives (`MyNavs`, `MyTooltip`, `BackdropParticles`).
- **`src/features/tech-stacks/`** — feature-scoped constants: `tectStacks.ts` (note the typo in the filename — the tech name list) and `techLogos.tsx` (maps tech stack names to logo assets, theme-aware for light/dark logo variants).
- **`src/assets/`** — SVG/PNG brand logos referenced by `techLogos.tsx`, plus profile photos.
- **`src/components/theme-provider.tsx`** — custom light/dark/system theme implementation (not next-themes). Persists to `localStorage`, listens to `prefers-color-scheme` and cross-tab `storage` events, and binds the **`d` key** as a global shortcut to toggle dark/light (ignored while an editable element is focused or a modifier key is held). Exposes `useTheme()` and `getSystemTheme()`. Many components branch on `theme === "dark" || (theme === "system" && getSystemTheme() === "dark")` to resolve the effective theme for things like asset selection (logo variants, spark/fade colors) — follow this same pattern when adding new theme-aware visuals rather than inventing a new resolution helper.

## Styling

- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) via `@tailwindcss/vite`. Theme tokens and CSS variables are defined directly in `src/index.css` (`@theme inline`, `:root`, `.dark`).
- Dark mode is class-based (`.dark` on `<html>`), toggled by `theme-provider.tsx`, using the `@custom-variant dark (&:is(.dark *))` Tailwind v4 syntax.
- Path alias `@/*` -> `src/*` is configured in both `tsconfig.app.json` and `vite.config.ts` — use it instead of relative imports across feature boundaries.
- `cn()` in `src/lib/utils.ts` (clsx + tailwind-merge) is the standard className-combining helper.
- Prettier is configured with `prettier-plugin-tailwindcss` (see `.prettierrc`) so class ordering is auto-sorted on format — don't hand-order Tailwind classes.

## Deployment

`vite.config.ts` sets `base: "/my-website/"` for GitHub Pages. `pnpm deploy` builds and pushes `dist/` via `gh-pages`. `dist/` is gitignored build output — don't hand-edit it.
