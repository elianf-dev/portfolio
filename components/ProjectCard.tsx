import type { Project } from "@/data/projects";
import { statusLabel } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "in-progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  prototype: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
};

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex flex-col items-start rounded-2xl border border-border bg-surface p-6 text-left transition-colors hover:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span
        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
      >
        {statusLabel[project.status]}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{project.oneLiner}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="mt-5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
        View case study &rarr;
      </span>
    </button>
  );
}
