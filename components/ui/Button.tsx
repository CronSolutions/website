import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  size?: ButtonSize;
  fullWidth?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: () => void;
}

export type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-[0.98]",
  ghost:
    "border border-white/20 bg-transparent text-text-primary hover:border-primary/50 hover:bg-white/5 active:scale-[0.98]",
  outline:
    "border border-primary/40 bg-transparent text-primary hover:bg-primary/10 active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-touch px-4 py-2 text-xs sm:text-sm",
  md: "min-h-touch px-6 py-3 text-sm",
  lg: "min-h-touch px-8 py-3.5 text-base",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  ariaLabel,
  href,
  type = "button",
  onClick,
}: ButtonProps): React.JSX.Element {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const widthClass = fullWidth ? "w-full sm:w-auto" : "";
  const combined = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combined}
        aria-label={ariaLabel ?? undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combined}
      onClick={onClick}
      aria-label={ariaLabel ?? undefined}
    >
      {children}
    </button>
  );
}
