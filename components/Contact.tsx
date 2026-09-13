const EMAIL = "elianfigueroa67@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="rounded-2xl bg-accent px-8 py-12 text-center text-accent-foreground sm:px-12">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want to work together?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-accent-foreground/80">
          I&apos;m open to new projects and collaborations — drop me a line.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
        >
          {EMAIL}
        </a>
      </div>
      <footer className="mt-12 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Elian Figueroa
      </footer>
    </section>
  );
}
