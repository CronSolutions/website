import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { COMPANY_NAME } from "@/lib/constants";

interface LegalPageShellProps {
  children: React.ReactNode;
}

export function LegalPageShell({
  children,
}: LegalPageShellProps): React.JSX.Element {
  return (
    <GsapProvider>
      <Navbar />
      <main className="min-h-screen bg-background pt-nav-offset">
        <Container className="py-10 sm:py-14 lg:py-16">
          <Link
            href="/"
            className="nav-touch-target mb-8 inline-flex items-center gap-2 text-nav-link text-text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            Back to {COMPANY_NAME}
          </Link>
          <div className="mx-auto max-w-legal">{children}</div>
        </Container>
      </main>
      <Footer />
    </GsapProvider>
  );
}
