"use client";

import { useEffect, useState, type CSSProperties } from "react";

/**
 * The build's CSS pipeline drops the unprefixed `backdrop-filter` property
 * from stylesheet rules (only `-webkit-backdrop-filter` survives), and this
 * browser doesn't treat that prefix as equivalent for computed style /
 * rendering purposes. Setting it inline sidesteps the stylesheet pipeline
 * entirely. Also handles the prefers-reduced-transparency fallback here,
 * since a stylesheet !important rule can't reliably override an inline style.
 */
export function useReducedTransparency() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-transparency: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function glassBlur(
  px: number,
  saturatePct: number,
  reduced: boolean,
): CSSProperties {
  if (reduced) return {};
  const value = `blur(${px}px) saturate(${saturatePct}%)`;
  return {
    backdropFilter: value,
    WebkitBackdropFilter: value,
  } as CSSProperties;
}
