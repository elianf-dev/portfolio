"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { statusLabel } from "@/data/projects";
import { Pane } from "./Pane";
import { glassBlur, useReducedTransparency } from "@/lib/glass";

export function ProjectPane({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project, originEl: HTMLElement) => void;
}) {
  const isPrototype = project.status === "prototype";
  const btnRef = useRef<HTMLButtonElement>(null);
  const reducedTransparency = useReducedTransparency();
  const depth = project.featured ? 1.6 : 1;
  const blurPx = (isPrototype ? 16 : 10) * depth;
  const saturatePct = isPrototype ? 70 : 160;

  function trackPointer(event: PointerEvent<HTMLButtonElement>) {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--hx", `${x}%`);
    el.style.setProperty("--hy", `${y}%`);
  }

  return (
    <Pane className="rounded-[28px] p-0 sm:rounded-[32px]">
      <motion.button
        ref={btnRef}
        type="button"
        data-pane={project.slug}
        onClick={(event) => onOpen(project, event.currentTarget)}
        onPointerMove={trackPointer}
        style={
          {
            "--pane-accent": project.accent,
            "--glass-depth": depth,
            ...glassBlur(blurPx, saturatePct, reducedTransparency),
            ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
          } as CSSProperties
        }
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.35 }}
        className={`focusable glass-pane group flex h-full w-full flex-col justify-between rounded-[28px] p-6 text-left sm:rounded-[32px] sm:p-8 ${
          isPrototype ? "is-frost" : ""
        }`}
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {statusLabel[project.status]}
          </span>
          <h3
            className={`mt-3 font-semibold tracking-tight ${
              project.featured ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-2 text-muted ${project.featured ? "max-w-md" : "text-sm"}`}
          >
            {project.oneLiner}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
            {project.stack.slice(0, project.featured ? 5 : 2).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <span className="shrink-0 font-mono text-xs text-muted transition-colors group-hover:text-foreground">
            view &rarr;
          </span>
        </div>
      </motion.button>
    </Pane>
  );
}
