# Repository Guidelines

## Project Structure & Module Organization

This is a React 19, TypeScript, and Vite portfolio application managed with
pnpm. Application entry and path-based route selection live in `src/main.tsx`.
The primary portfolio is under `src/field-manual-portfolio/`, the 3D experience
is under `src/explore/`, and arcade games are grouped in
`src/field-manual-portfolio/game/`. Reusable components belong in
`src/components/`; generated shadcn primitives live in `src/components/ui/`,
while application-specific composites use `src/components/ui/custom/`.
Shared utilities belong in `src/lib/`, bundled imports in `src/assets/`, and
static files copied as-is in `public/`. Build output is generated in `dist/`
and must not be edited manually.

## Build, Test, and Development Commands

- `pnpm install` installs the locked dependencies. Use Node 26.x.
- `pnpm dev` starts the Vite development server with hot reload.
- `pnpm typecheck` runs TypeScript validation without emitting files.
- `pnpm lint` checks all TypeScript and React code with ESLint.
- `pnpm format` formats all `.ts` and `.tsx` files with Prettier.
- `pnpm build` type-checks and creates the production bundle in `dist/`.
- `pnpm preview` serves the production bundle locally for final review.
- `pnpm deploy` builds and publishes `dist/` through `gh-pages`; run only when
  explicitly preparing a release.

## Coding Style & Naming Conventions

Use two-space indentation, double quotes, no semicolons, and an 80-character
print width, as defined in `.prettierrc`. Prettier also sorts Tailwind classes.
Use PascalCase for React components, camelCase for functions and variables, and
kebab-case for CSS files. Prefer the `@/` alias for imports across feature
boundaries. Keep components focused and place feature-specific assets and styles
beside their owning feature.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured.
Before submitting changes, run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
Manually verify affected paths, especially `/`, `/explore`, `/world`, and
`/games/void-patrol` or `/games/night-shift`. If tests are introduced, use
`*.test.ts` or `*.test.tsx` beside the code they cover and add a documented
`pnpm test` script.

## Commit & Pull Request Guidelines

Recent history uses short, lowercase summaries such as `fixes` and
`improvements`. Keep the concise style but make commits specific and imperative,
for example `fix explorer camera controls`. Pull requests should summarize the
change, list verification commands, link relevant issues, and include screenshots
or recordings for visual or interactive updates. Keep unrelated refactors out of
the same pull request.
