"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
      <p className="mt-2 max-w-xl text-muted">
        A mix of client projects and things I built for myself. Click any
        card for the full story.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
        ))}
      </div>
      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
