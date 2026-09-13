"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { statusLabel } from "@/data/projects";

export function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="w-full max-w-xl rounded-2xl border border-border bg-surface p-0 text-foreground backdrop:bg-transparent"
    >
      {project && (
        <div className="max-h-[80vh] overflow-y-auto p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-accent">
                {statusLabel[project.status]}
              </span>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.role}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 rounded-full border border-border p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              &#10005;
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="font-medium text-foreground">Problem</dt>
              <dd className="mt-1 text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">What I built</dt>
              <dd className="mt-1 text-muted">{project.whatIBuilt}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Outcome</dt>
              <dd className="mt-1 text-muted">{project.outcome}</dd>
            </div>
          </dl>

          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
            >
              View repo &rarr;
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
