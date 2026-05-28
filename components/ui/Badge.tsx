import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps): React.JSX.Element {
  return (
    <span
      className={`inline-flex max-w-full flex-wrap items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium leading-snug tracking-wide text-primary sm:px-4 sm:justify-start ${className}`}
    >
      {children}
    </span>
  );
}
