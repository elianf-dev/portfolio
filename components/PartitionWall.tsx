"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { Pane } from "./Pane";
import { ProjectPane } from "./ProjectPane";
import { ProjectDetail } from "./ProjectDetail";

const wallVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const paneVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0, duration: 0.5 },
  },
};

export function PartitionWall({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [origin, setOrigin] = useState<DOMRect | null>(null);

  function openProject(project: Project, originEl: HTMLElement) {
    setOrigin(originEl.getBoundingClientRect());
    setSelected(project);
  }

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={wallVariants}
        className="grid grid-cols-1 gap-5 sm:grid-cols-4 sm:auto-rows-[minmax(230px,auto)] sm:gap-6"
      >
        <motion.div variants={paneVariants} className="sm:col-span-2 sm:row-span-2">
          <Pane
            className="glass-pane"
            style={{ "--glass-depth": 0.6 } as CSSProperties}
          >
            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Elian Figueroa builds full-stack apps and sites, from client
                storefronts to hobby robotics.
              </p>
              <p className="mt-4 max-w-md text-muted">
                A mix of client work and personal projects across web, mobile,
                and a little hardware — mostly Next.js and Flutter, with some
                Flask and Arduino for fun. Five of them are behind this wall.
              </p>
            </div>
            <a
              href="#contact"
              className="focusable mt-6 inline-flex w-fit items-center gap-2 font-mono text-sm text-foreground underline decoration-muted underline-offset-4 transition-colors hover:decoration-foreground"
            >
              get in touch &rarr;
            </a>
          </Pane>
        </motion.div>

        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={paneVariants}
            className={project.featured ? "sm:col-span-2 sm:row-span-2" : ""}
          >
            <ProjectPane project={project} onOpen={openProject} />
          </motion.div>
        ))}
      </motion.div>

      <ProjectDetail
        project={selected}
        origin={origin}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
