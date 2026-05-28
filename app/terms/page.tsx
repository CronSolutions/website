import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { SITE_METADATA } from "@/lib/constants";
import { TERMS_OF_SERVICE } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_METADATA.title.split("|")[0].trim()}`,
  description: TERMS_OF_SERVICE.description,
  alternates: {
    canonical: `${SITE_METADATA.canonicalUrl}/terms`,
  },
};

export default function TermsPage(): React.JSX.Element {
  return (
    <LegalPageShell>
      <LegalDocumentView document={TERMS_OF_SERVICE} />
    </LegalPageShell>
  );
}
