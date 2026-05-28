import Link from "next/link";
import { LEGAL_ROUTES } from "@/lib/constants";
import type { LegalDocument } from "@/lib/types";

interface LegalDocumentViewProps {
  document: LegalDocument;
}

export function LegalDocumentView({
  document,
}: LegalDocumentViewProps): React.JSX.Element {
  return (
    <article className="legal-prose">
      <header className="border-b border-white/10 pb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-section-heading text-text-primary">
          {document.title}
        </h1>
        <p className="mt-4 text-body text-text-muted">{document.description}</p>
        <p className="mt-2 text-body-sm text-text-muted">
          Last updated: {document.lastUpdated}
        </p>
      </header>

      {document.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-nav-offset">
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {section.listItems ? (
            <ul>
              {section.listItems.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <footer className="mt-12 border-t border-white/10 pt-8">
        <p className="text-body-sm text-text-muted">
          Related policies:{" "}
          <Link href={LEGAL_ROUTES.privacy}>Privacy Policy</Link>
          {" · "}
          <Link href={LEGAL_ROUTES.terms}>Terms of Service</Link>
          {" · "}
          <Link href={LEGAL_ROUTES.cookies}>Cookie Policy</Link>
        </p>
      </footer>
    </article>
  );
}
