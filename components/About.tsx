"use client";

import { glassBlur, useReducedTransparency } from "@/lib/glass";

export function About() {
  const reducedTransparency = useReducedTransparency();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
      <div
        className="glass-pane rounded-[28px] px-6 py-10 sm:rounded-[32px] sm:px-10 sm:py-12"
        style={{
          ...glassBlur(10, 160, reducedTransparency),
          ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
        }}
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          About
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground">
          I&apos;m a developer who likes finishing things end-to-end — from
          a client&apos;s database schema to the pixel details in the UI.
          Most of my recent work has been full-stack web (Next.js, Prisma,
          PostgreSQL) and Flutter mobile apps, and I keep a couple of
          personal projects going on the side, including some Arduino-based
          hardware tinkering.
        </p>
      </div>
    </section>
  );
}
