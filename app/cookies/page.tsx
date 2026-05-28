import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { SITE_METADATA } from "@/lib/constants";
import { COOKIE_POLICY } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_METADATA.title.split("|")[0].trim()}`,
  description: COOKIE_POLICY.description,
  alternates: {
    canonical: `${SITE_METADATA.canonicalUrl}/cookies`,
  },
};

export default function CookiePolicyPage(): React.JSX.Element {
  return (
    <LegalPageShell>
      <LegalDocumentView document={COOKIE_POLICY} />
    </LegalPageShell>
  );
}
