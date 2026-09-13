import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProjectGrid projects={projects} />
        <About />
        <Contact />
      </main>
    </>
  );
}
