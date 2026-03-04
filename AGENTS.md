# Repository Guidelines

## General Instructions
- ALWAYS run `bun run lint` after making any changes => fix any linting errors you get
- ALWAYS check for type errors via `bun tsc --noEmit`
- ALWAYS run `bun run format` AFTER you're done with your task and you edited all files that needed editing

## Project Structure & Module Organization
This repository is a Next.js App Router project using TypeScript + Tailwind v4 and Bun.
- `app/`: route tree and route-group layouts (`(public)`, `(auth)`, `(app)`), plus route files like `page.tsx`, `layout.tsx`, `loading.tsx`, and `error.tsx`.
- `src/components/`: reusable UI and layout components, grouped by concern (`layout/`, `ui/`, `placeholders/`).
- `public/`: static assets served directly.
- Root config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- Product requirements/spec: `SPEC.MD`.

## Build, Test, and Development Commands
- `bun install`: install dependencies.
- `bun run dev`: start local dev server (http://localhost:3000).
- `bun run build`: create production build.
- `bun run start`: run production build locally.
- `bun run lint`: run `oxlint` checks.
- `bun run format`: format code with `oxfmt`.

There is no dedicated test script yet; use lint + build as required pre-PR checks.

## Coding Style & Naming Conventions
- Language: TypeScript with `strict` mode enabled.
- Formatting: 2-space indentation, semicolons, and double quotes (follow existing files).
- Components: `PascalCase` file and export names (example: `AppShell.tsx`).
- Route files: Next.js conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`).
- Imports: prefer the alias `@/*` from `tsconfig.json` when it improves clarity.
- Keep page/route orchestration in `app/`; keep reusable presentation in `src/components/`.

## Commit & Pull Request Guidelines
- Commit style in history is short, imperative, and descriptive (example: `Created all base pages and layouts for tinynote app`).
- Keep commits focused on one change set; avoid mixed refactor + feature commits.
- PRs should include:
  - Clear summary of user-visible and technical changes.
  - Linked issue/ticket (if available).
  - Verification steps run locally.
  - Screenshots or short recordings for UI changes.

## Security & Configuration Tips
- Do not commit secrets or local env files.
- Review auth-, routing-, and data-handling changes carefully; validate public vs authenticated route behavior before merge.
