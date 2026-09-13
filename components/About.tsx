export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl text-muted">
          I&apos;m a developer who likes finishing things end-to-end — from a
          client&apos;s database schema to the pixel details in the UI. Most
          of my recent work has been full-stack web (Next.js, Prisma,
          PostgreSQL) and Flutter mobile apps, and I keep a couple of
          personal projects going on the side, including some Arduino-based
          hardware tinkering.
        </p>
      </div>
    </section>
  );
}
