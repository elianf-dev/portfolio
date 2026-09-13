export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sm font-medium text-accent">Software developer</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        I build full-stack apps and sites, from client storefronts to hobby
        robotics.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        A mix of client work and personal projects across web, mobile, and a
        little bit of hardware — mostly Next.js and Flutter, with some Flask
        and Arduino for fun.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          See the work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
