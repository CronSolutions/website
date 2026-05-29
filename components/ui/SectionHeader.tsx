interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
}

export function SectionHeader({
  label,
  heading,
  description,
  align = "center",
  className = "",
  headingId,
}: SectionHeaderProps): React.JSX.Element {
  const alignClass =
    align === "center"
      ? "mx-auto text-center sm:max-w-3xl"
      : "text-left sm:max-w-3xl";

  return (
    <header className={`mb-8 sm:mb-12 ${alignClass} ${className}`}>
      {label ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-3 sm:text-sm">
          {label}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="font-display text-section-heading text-text-primary"
      >
        {heading}
      </h2>
    </header>
  );
}
