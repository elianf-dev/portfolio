# Design

<!-- impeccable:design-schema 1 -->

## World

Apple Liquid Glass, applied to a portfolio of floating project panels. The site is a set of translucent, rounded glass cards on a soft neutral canvas — nav, project panes, and info panels are all real glass surfaces (backdrop blur + saturation, a pointer-tracked specular highlight, a soft contact shadow), not flat color fills.

**Provenance:** this direction evolved twice. It started from a "Steel & Glass Workshop Partition" direction (sharp glazing-bar grid, seed key `203521ee`, recorded in `.impeccable/surfaces/app-page-tsx.md`) chosen via Impeccable's direction-roll process. The user then explicitly asked to reconcile the site with Apple's real Liquid Glass material — a deliberate, user-directed pivot from the sharp/rectilinear shape language to rounded/pill shapes, superseding the original direction contract's FORM. The material physics (translucency, depth, motion) carry over from both.

## Palette

- `--background` — soft neutral canvas (`#eeece7` light / `#08080a` dark) the glass panels float on.
- `--surface` / `--frost` — the glass "ground" color panels tint from. `--frost` is a duller variant for prototype-status panes.
- Per-project accent (`Project.accent` in `data/projects.ts`), one jewel tone per project, mixed into `--surface` at 16% at rest / 36% on hover:
  - FM Media (flagship, live) — amber `#C68A2E`
  - La Dulcería redesign — oxblood `#8C2F3B`
  - VitaMind — emerald `#1F6F54`
  - Pee Tracker — cobalt `#2C4E8C`
  - BroadIntern (prototype) — plum `#5B3A73` (rendered frosted/desaturated at rest)
  - Contact panel reuses the amber tone as the site's closing "warm" moment.

## Material (`.glass-pane`, `lib/glass.ts`)

Real translucency, not a flat tint:
- `backdrop-filter: blur(...) saturate(...)` — **applied via inline style, not a CSS class.** This build's CSS pipeline (Lightning CSS via Next.js/Turbopack) silently drops the unprefixed `backdrop-filter` property from stylesheet rules regardless of value complexity — confirmed by isolated testing, not an assumption — leaving only `-webkit-backdrop-filter`, which this environment's Chrome does not treat as equivalent for rendering. `lib/glass.ts`'s `glassBlur()` sets both properties inline, which bypasses the broken stylesheet pipeline. Any future glass surface must use this helper, not a hand-written CSS `backdrop-filter` rule.
- A pointer-tracked specular highlight: `--hx`/`--hy` custom properties updated on `pointermove` (see `ProjectPane.tsx`'s `trackPointer`), driving a `radial-gradient` on `.glass-pane::before` that shows on hover/focus — approximates Apple's "highlight reacts to movement," though it tracks pointer position within the element rather than device tilt.
- Depth-based thickness: `--glass-depth` scales blur radius and shadow strength. The flagship pane (FM Media) uses `1.6`, others `1` — a larger glass surface reads as materially "thicker," per Apple's actual spec.
- `useReducedTransparency()` (also in `lib/glass.ts`) reads `prefers-reduced-transparency` via `matchMedia` and, when active, every glass surface's inline style omits the blur and falls back to an opaque `var(--surface)` background. This is JS-driven rather than a CSS media query for the same pipeline-reliability reason as above — a stylesheet `!important` rule can't be trusted to override (or, per the same bug, may not even survive compilation as) an inline style.

**Known, disclosed gap:** true refraction/lensing (bending the backdrop content, not just blurring it) was attempted via an SVG `feDisplacementMap` filter referenced in `backdrop-filter: ... url(#glass-distortion)`. This made the *entire* `backdrop-filter` value invalid in this Chrome build (not a partial degradation — total loss of blur), so it was removed rather than shipped broken. Revisit only with a tested fallback path.

## Motion (`motion` npm package)

- Panes stagger in on load with a critically-damped spring (one authored entrance moment).
- Hover lifts a pane (`y: -4`) and darkens its glass tint; tap gives instant press feedback (`scale: 0.98`) — springs stay interruptible mid-gesture, unlike a fixed-duration CSS transition.
- The case-study dialog materializes anchored to the clicked pane: its `transform-origin` is computed from the actual click position (`ProjectDetail.tsx`'s `useLayoutEffect`), then it scales/blurs/fades in with a spring — not a plain center-screen fade.
- `useReducedMotion()` (from `motion/react`) swaps all spring/scale/blur transitions for a plain opacity cross-fade.

## Shape

Continuous rounded corners throughout (`rounded-[28px]`–`rounded-[32px]` on cards, `rounded-full` on the nav and small controls) — Apple's Liquid Glass vocabulary. Panels float with generous gaps (`gap-5`/`gap-6`) on a plain canvas rather than sitting flush in a bordered grid; the nav is a floating pill bar (`top-4`, `max-w-3xl`, centered) rather than a full-width toolbar.

## Components

- `lib/glass.ts` — `glassBlur()` + `useReducedTransparency()`. Load-bearing; see Material above.
- `Pane.tsx` — base rounded glass-surface shell.
- `ProjectPane.tsx` — interactive project pane: pointer-highlight tracking, hover/tap springs, depth-scaled blur, always-visible "view →" affordance.
- `PartitionWall.tsx` — the floating-panel grid + stagger entrance + dialog state + click-origin capture.
- `ProjectDetail.tsx` — the case-study modal (custom, not native `<dialog>`, to get spring-driven anchored open/close): bulleted "what I built," promoted outcome, sticky close button, `aria-labelledby`.
- `Nav.tsx`, `About.tsx`, `Contact.tsx` — same glass material and rounded shape language.

## Known open items

- Mobile-width visual verification (viewport ≤480px) still hasn't been independently re-confirmed in-browser this session (tooling limitation, not a known defect) — the layout uses the same `grid-cols-1 sm:...` responsive pattern verified earlier in the project.
- No true refraction/lensing (see Material above) — only blur+saturate+tint+highlight.
- No image generation was available this session; every surface is color/typography/motion only, no photography or device-frame assets.
