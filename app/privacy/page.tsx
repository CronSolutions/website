import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { SITE_METADATA } from "@/lib/constants";
import { PRIVACY_POLICY } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_METADATA.title.split("|")[0].trim()}`,
  description: PRIVACY_POLICY.description,
  alternates: {
    canonical: `${SITE_METADATA.canonicalUrl}/privacy`,
  },
};

export default function PrivacyPage(): React.JSX.Element {
  return (
    <LegalPageShell>
      <LegalDocumentView document={PRIVACY_POLICY} />
    </LegalPageShell>
  );
}
