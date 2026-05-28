import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps): React.JSX.Element {
  return (
    <Component
      className={`page-container mx-auto w-full max-w-screen-xl ${className}`}
    >
      {children}
    </Component>
  );
}
