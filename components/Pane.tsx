import type { CSSProperties, ReactNode } from "react";

export function Pane({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-surface p-6 sm:rounded-[32px] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
