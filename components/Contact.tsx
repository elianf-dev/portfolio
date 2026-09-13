"use client";

import type { CSSProperties } from "react";
import { glassBlur, useReducedTransparency } from "@/lib/glass";

const EMAIL = "elianfigueroa67@gmail.com";

export function Contact() {
  const reducedTransparency = useReducedTransparency();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-10 sm:pb-16">
      <div
        className="glass-pane rounded-[28px] px-6 py-16 text-center sm:rounded-[32px] sm:py-20"
        style={
          {
            "--pane-accent": "#C68A2E",
            ...glassBlur(10, 160, reducedTransparency),
            ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
          } as CSSProperties
        }
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want to work together?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          I&apos;m open to new projects and collaborations — drop me a line.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="focusable glass-scrim-light mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm text-foreground transition-transform duration-150 active:scale-95"
          style={
            {
              ...glassBlur(20, 180, reducedTransparency),
              ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
            } as CSSProperties
          }
        >
          {EMAIL}
        </a>
      </div>
      <footer className="py-6 text-center font-mono text-xs text-muted">
        &copy; {new Date().getFullYear()} Elian Figueroa
      </footer>
    </section>
  );
}
