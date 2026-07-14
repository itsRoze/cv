# Design System

Generated 2026-07-14 via `/design-consultation`. Source of truth for UI work in `/begin`.

## Product Context
**elijahlewis.dev** — the professional-facing site of Elijah Lewis: engineer at First Round Capital, writer, published researcher. The audience is recruiters, hiring managers, and professional contacts doing diligence; the homepage must deliver the full picture (who, tagline, featured essays, featured projects, publications) without clicks. The memorable feeling is **"quiet confidence."** It is the toned-down professional sibling of roze.dev (`~/dev/portfolio/DESIGN.md`) — same print shop, different job: roze.dev is the zine, elijahlewis.dev is the letterhead. Light mode only, print-first.

## Aesthetic Direction
**Editorial letterhead** — the well-set literary-index side of roze.dev without the poster theatrics. Reads like a beautifully typeset document, not a template. Reference points:

- **roze.dev's editorial spine** — hard ink rules, full-width bordered index rows with right-aligned mono metadata, asymmetric composition. Carried over intact; this is the structural sibling thread.
- **Shared spot ink** — roze.dev's indigo (`#1726ff`) is *the* accent here, used with conviction; marigold appears only in rare earned moments. Sibling by ink, not by volume.
- **One riso fingerprint** — a barely-there halftone-dot grain field behind the hero name (opacity ~0.07). The only texture on the site.
- **Print as a first-class medium** — recruiters save CVs to PDF; the paper-and-ink aesthetic degrades perfectly to print. Keep `print:` styles deliberate.
- **One-screen thesis** — the homepage is the resume teaser: hero + featured writing + featured work + publications in a single flowing, hard-ruled column.

## Typography
- **Display:** **Anton** — name/wordmark, section titles, and essay titles in the reading view. Uppercase, tight leading (0.95). Restrained scale: hero caps ~clamp(56–96px), section titles ~34px, essay titles ~clamp(36–60px). Never roze.dev's 232px poster sizes.
- **Body:** **Archivo** 400/500; 600–800 for emphasis and index-row titles.
- **UI / Meta:** **Space Mono** — kickers, dates, read times, tags, nav links, footer. Carries the "engineer" voice.
- **Data / numerals:** Space Mono (inherently tabular).
- **Code:** Space Mono via `astro-expressive-code`.

All Google-Fonts / `@fontsource` hosted. No Nastaliq signature, no pixel rose — those are roze.dev's personal marks.

Type scale:
| Token | Size | Weight | Use |
|-------|------|--------|-----|
| display | clamp(56–96px) | Anton 400, uppercase | hero name only |
| sec-title | 34px | Anton 400, uppercase | section headers |
| essay-title | clamp(36–60px) | Anton 400, uppercase | essay/article titles (reading view) |
| h1 | 40px | Archivo 800 | other non-hero page titles |
| list | clamp(18–26px) | Archivo 800, uppercase | index-row titles |
| tagline | 26px | Archivo 500 | hero tagline |
| body | 18px | Archivo 400 | default reading (19px in essays) |
| small/meta | 12–13px | Space Mono 400 | dates, tags, kickers, nav |
| code | 13px | Space Mono | code blocks |

## Color
**Approach:** monochrome ink-on-paper plus **one spot color used with conviction** (indigo — links, hovers, active nav, section labels) and a second (marigold) rationed to rare earned moments (pull quotes, publication journal names). Hard ink rules everywhere; the ink color doubles as the border color. **Light mode only.**

Palette (light):
| Token | Hex | Use |
|-------|-----|-----|
| bg | `#f6f5f0` | page background (gallery paper) |
| paper | `#fdfcf9` | raised surfaces, cards, inputs |
| ink | `#14151a` | text, borders, rules, footer/controls ground |
| text-muted | `#5c5e66` | secondary text, kickers |
| text-faint | `#8f8c84` | meta, row metadata |
| line | `#14151a` | borders/dividers (same as ink — hard rules: 3px section, 1px row) |
| indigo (spot) | `#1726ff` | links, hover states, active nav, section labels, focus rings |
| marigold (rare) | `#ff7d1a` | pull quotes, journal names — a few instances per page, max |
| danger | `#c81e3c` | form errors only |

No dark palette — light only (deliberate: print-first letterhead; avoids the unmotivated dark-mode toggle).

## Spacing Scale
4-base editorial rhythm: **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 90 px**. Section vertical padding 56–90px (airier than roze.dev). Content max-width **1100px** (chrome) / **720px** (reading column).

## Layout
Letterhead construction: a 1100px bordered column (3px ink frame) containing nav, asymmetric left-aligned hero (kicker → Anton name → tagline → mono contact line), then hard-ruled sections flowing downward — featured writing as full-width index rows (title left, mono date·read-time right), featured work as a 3-up bordered grid (rows on mobile), publications as a compact list strip, mono footer. Essays read at ~720px. Asymmetry comes from the left-weighted hero and generous right whitespace — never center-everything. Index rows nudge right 12px and turn indigo on hover; project cells invert to ink-on-ink.

## Motion
Restrained and print-like: color + small translate transitions, 120–200ms ease-out. Index rows nudge +12px; project cells invert; no scroll-triggered animation, no counters. **Respect `prefers-reduced-motion`** — disable transforms, keep color changes.

## Voice
First-person, plainspoken, specific — the professional register of the same writer. Short declarative sentences with real numbers ("used by every partner", "10,000+ opportunities") over adjectives. The tagline formula: what you build + who for, then the human texture ("Engineer building tools for small, mission-driven teams. Writer. Punk ukulele player."). No marketing gloss, no "passionate about crafting delightful experiences."

## Decisions Log
- 2026-07-14 (post-build review) Essay titles confirmed as Anton poster moments (clamp 36–60px), per the approved plan and the roze.dev sibling pattern; type scale updated to say so explicitly. Marigold scope reaffirmed: journal names only — not whole metadata lines.
- 2026-07-14 Initial design system via /design-consultation (inside /begin revamp). Memorable: **"quiet confidence."** Direction: editorial-letterhead sibling of roze.dev. User chose from live mockup comparison: palette **A · Ink+Indigo**, display **Anton (restrained)**, **hero grain whisper on**. Rejected: quiet-riso-trio and mono+pink palettes, Archivo Black and Instrument Serif display, pure-rules (no grain). Light only, print-first.
