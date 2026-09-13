"use client";

import { glassBlur, useReducedTransparency } from "@/lib/glass";

export function Nav() {
  const reducedTransparency = useReducedTransparency();
  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-4 z-40 flex justify-center px-4">
      <header
        className="glass-scrim-light w-full max-w-3xl rounded-full"
        style={{
          ...glassBlur(20, 180, reducedTransparency),
          ...(reducedTransparency ? { backgroundColor: "var(--surface)" } : {}),
        }}
      >
        <nav className="flex items-center justify-between px-6 py-3">
          <a href="#top" className="focusable rounded-full font-mono text-sm font-medium tracking-tight">
            Elian Figueroa
          </a>
          <ul className="flex items-center gap-6 font-mono text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focusable rounded-full transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
