# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS — user's explicit choice when scoping the build (matches the stack used on other recent projects, FM Media and La Dulcería).

## Users

Two audiences, weighted roughly equally:

- **Potential freelance/contract clients** evaluating whether to hire the owner for a project, similar in scope to the FM Media or La Dulcería engagements.
- **Recruiters/hiring managers** assessing the owner's skills for a full-time or contract role.

Both are quickly scanning to judge technical range, credibility, and follow-through rather than reading deeply on a first pass.

## Product Purpose

A personal portfolio for Elian Figueroa that showcases full-stack development work to generate both freelance client leads and job/interview opportunities. Success is a visitor understanding what he can build and reaching out via the contact email.

## Positioning

Differentiated by breadth combined with follow-through: shipped, production client work with real business constraints (booking flows, admin CMS, e-commerce configurators) shown alongside self-directed personal projects that span mobile (Flutter), native Android, and hardware/robotics (Flask + Arduino) — not a single narrow stack or only tutorial-level projects.

## Operating Context

A single scrolling page. A visitor browses a project grid, clicks a card to open a case-study dialog (problem / what was built / outcome), reads a short About section, and reaches out via a `mailto:` contact link. No backend, CMS, or analytics is wired up.

## Capabilities and Constraints

- Showcases 5 projects total. Two are client work (FM Media, La Dulcería redesign) and are shown **anonymized** — no client name, no link to the live/production site — since they are client-owned. Three are personal work (VitaMind, Pee Tracker, BroadIntern) and are shown normally, with a repo link where relevant.
- No contact form or backend — `mailto:` only, by design, to keep this a static-first personal site.
- Project content lives in `data/projects.ts`; adding a new project means adding an entry there following the existing `Project` type shape.
- Undecided: whether/when to add more projects; whether the anonymized client entries should eventually link to a live demo if the client gives permission.

## Brand Commitments

Name "Elian Figueroa," tagline "Software developer." No logo or other visual brand assets exist yet.

## Evidence on Hand

Real case-study descriptions for all 5 listed projects (problem, what was built, outcome), sourced from the actual project repos/history. No testimonials, press, or client quotes exist — future work must not fabricate any.

## Product Principles

1. Show real, verifiable work — no fabricated metrics, testimonials, or client names for confidential engagements.
2. Serve both freelance and employment audiences without the tone or content favoring either.
3. Keep the site static and low-maintenance — no backend to operate beyond the mailto contact link.
4. Every project entry tells a story (problem → what was built → outcome), not just a stack/tech list.
