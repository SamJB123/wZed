# AGENTS.md

## Cursor Cloud specific instructions

### Overview

wZed is a browser-based IDE (Zed-inspired) built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4. It is a single-package frontend-only app — no backend, no database, no Docker. All state lives in the browser (localStorage / IndexedDB).

### Commands

Standard scripts are in `package.json` and documented in `README.md`:

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` |

### Notes

- **No test suite**: The project has no automated tests. Validation is manual via the browser UI.
- **Lint has pre-existing errors**: `npm run lint` exits with code 1 due to existing `react-hooks/set-state-in-effect` errors in several components. These are pre-existing, not introduced by agent changes.
- **SharedArrayBuffer**: The dev server sets COOP/COEP headers via `next.config.ts`. These headers are required for the Nodepod in-browser runtime to work.
- **No secrets required**: The app needs no server-side secrets. Optional API keys (OpenRouter, GitHub token) are entered by the user in the browser Settings UI.
- **Package manager**: Use `npm` (matches `package-lock.json`). A `bun.lock` also exists but `npm` is the primary workflow.
