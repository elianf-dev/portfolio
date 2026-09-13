"use client";

import { useEffect, useId, useLayoutEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { statusLabel } from "@/data/projects";
import { glassBlur, useReducedTransparency } from "@/lib/glass";

export function ProjectDetail({
  project,
  origin,
  onClose,
}: {
  project: Project | null;
  origin: DOMRect | null;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedTransparency = useReducedTransparency();

  // Anchor the scale-in to where the visitor clicked, so the panel reads as
  // growing out of that pane rather than materializing at screen center.
  useLayoutEffect(() => {
    if (!project || !origin || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const originX = origin.left + origin.width / 2;
    const originY = origin.top + origin.height / 2;
    const xPct = ((originX - rect.left) / rect.width) * 100;
    const yPct = ((originY - rect.top) / rect.height) * 100;
    panelRef.current.style.transformOrigin = `${xPct}% ${yPct}%`;
  }, [project, origin]);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const panelTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, bounce: 0, duration: 0.4 };

  const panelInitial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.9, filter: "blur(6px)" };
  const panelAnimate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, scale: 1, filter: "blur(0px)" };
  const panelExit = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.95, filter: "blur(4px)" };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="presentation"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="glass-scrim fixed inset-0 z-50 flex items-center justify-center p-4"
          style={glassBlur(10, 100, reducedTransparency)}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={panelInitial}
            animate={panelAnimate}
            exit={panelExit}
            transition={panelTransition}
            className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-[28px] bg-surface text-foreground shadow-2xl sm:rounded-[32px]"
          >
            <div
              style={
                {
                  "--pane-accent": project.accent,
                  ...glassBlur(10, 160, reducedTransparency),
                  ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
                } as CSSProperties
              }
              className="glass-pane sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-[28px] p-6 sm:rounded-t-[32px] sm:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  {statusLabel[project.status]} &middot; {project.role}
                </span>
                <h3 id={titleId} className="mt-1 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="focusable glass-scrim-light shrink-0 rounded-full p-2 text-foreground transition-transform active:scale-90"
                style={{
                  ...glassBlur(20, 180, reducedTransparency),
                  ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
                }}
              >
                &#10005;
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="mt-6 space-y-6 text-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    Problem
                  </h4>
                  <p className="mt-1.5 text-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    What I built
                  </h4>
                  <ul className="mt-1.5 space-y-1.5">
                    {project.builtBullets.map((line) => (
                      <li key={line} className="flex gap-2 text-foreground">
                        <span aria-hidden className="text-muted">
                          &middot;
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    Outcome
                  </h4>
                  <p className="mt-1.5 text-base font-medium text-foreground">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="focusable mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
                >
                  view repo &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
