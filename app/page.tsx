import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Nav } from "@/components/Nav";
import { PartitionWall } from "@/components/PartitionWall";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <PartitionWall projects={projects} />
        <About />
        <Contact />
      </main>
    </>
  );
}
