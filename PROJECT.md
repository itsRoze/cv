# Project: elijahlewis.dev (Professional CV / Portfolio)

## Overview
The professional-facing personal site of Elijah Lewis, living at
[elijahlewis.dev](https://elijahlewis.dev). Where roze.dev (repo:
`~/dev/portfolio`) is the artful personal presence, this site is the one a
recruiter, hiring manager, or professional contact lands on. Its job: within
one screen, communicate who Elijah is (engineer at First Round Capital,
writer, researcher), surface featured essays and projects without requiring
clicks, and present an accurate, current CV. Success is a reviewer getting
the full picture fast — and the site feeling designed, not templated.
Currently undergoing a full revamp (design + content); content source of
truth is the July 2026 resume.

## Users
Recruiters, hiring managers, investors, and professional contacts doing
diligence. Secondary: fellow engineers who follow the writing. The site must
answer "what does this person do and how well" quickly, then reward deeper
reading.

## Lean
**prototype.** Personal site; iteration speed beats exhaustive rigor. Ship
rough, refine in the browser. Design quality still held to a high bar.

## Tech Stack
- **Astro 7** (upgraded from 5 during this revamp) — static output
- **Tailwind CSS 4** (CSS-first, `@tailwindcss/vite`) + `@tailwindcss/typography`
- Markdown content collections for essays (`astro-expressive-code` for code blocks)
- TypeScript, Prettier, pnpm
- Sibling repo: roze.dev at `~/dev/portfolio` (Astro 7, same toolchain) —
  reference for patterns and shared content (essays, publications)

## Deploy
**Vercel for now** (domain already there); planned move to **Cloudflare
Workers static assets** later, same playbook as roze.dev (`wrangler.jsonc`,
assets-only Worker). Keep `output: "static"` and zero Vercel-specific
dependencies so the move is config-only.

## Design Priority
**high.** It's a portfolio — the look is the product. Direction decided
2026-07-14: **toned-down sibling of roze.dev** — same editorial bones
(display type, mono metadata, hard rules, index rows) with a restrained
professional palette. See DESIGN.md.

## Decisions Log
- 2026-07-14 **No outbound links to roze.dev anywhere on this site** (user rule).
  The sibling relationship is design-level only; the two sites must not link to
  each other from elijahlewis.dev's side. Also removed: the "What is a Tech
  Cooperative" essay and the Human Rights Data Viz project card (the Inner File
  CV role stays); added smriti (github.com/itsRoze/smriti) as a featured project.
- 2026-07-14 Bootstrapped via /bootstrap (inside /begin revamp flow).
  Confirmed repo is already Astro 5 (Next.js → Astro migration merged as
  PR #1); "get off Next.js" already satisfied. Decided: upgrade Astro 5→7,
  keep Tailwind 4, toned-down-sibling design direction, prototype lean,
  Vercel now / Cloudflare later.
