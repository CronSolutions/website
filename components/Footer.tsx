"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_NAME,
  FOOTER_COMPANY_LINKS,
  FOOTER_CONTACT,
  FOOTER_LEGAL_LINKS,
  FOOTER_TAGLINE,
} from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";
import type { FooterLink } from "@/lib/types";

export function Footer(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, {
    revealSelector: "[data-gsap-reveal]",
    stagger: 0.06,
    revealStart: "top 92%",
  });

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="section-scroll-mt border-t border-white/10 bg-background safe-bottom"
      aria-labelledby="footer-heading"
    >
      <Container className="py-12 sm:py-16">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1" data-gsap-reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label={`${COMPANY_NAME} home`}
            >
              <span className="font-display text-2xl font-bold text-text-primary">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-xl text-text-muted">
              {FOOTER_TAGLINE}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:gap-12">
            <div data-gsap-reveal>
              <h3 className="text-base font-semibold uppercase tracking-wider text-text-primary sm:text-lg">
                Company
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_COMPANY_LINKS.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="touch-target inline-flex items-center text-xl text-text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div data-gsap-reveal>
              <h3 className="text-base font-semibold uppercase tracking-wider text-text-primary sm:text-lg">
                Legal
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_LEGAL_LINKS.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="touch-target inline-flex items-center text-xl text-text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1" data-gsap-reveal>
            <h3 className="text-base font-semibold uppercase tracking-wider text-text-primary sm:text-lg">
              Contact
            </h3>
            <ul className="mt-4 space-y-4" role="list">
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="touch-target flex items-center gap-3 break-all text-xl text-text-muted transition-colors hover:text-primary"
                  aria-label={`Email ${FOOTER_CONTACT.email}`}
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{FOOTER_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_CONTACT.phone.replace(/\D/g, "")}`}
                  className="touch-target flex items-center gap-3 text-xl text-text-muted transition-colors hover:text-primary"
                  aria-label={`Phone ${FOOTER_CONTACT.phone}`}
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {FOOTER_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-xl text-text-muted">
                <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                {FOOTER_CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div
          data-gsap-reveal
          className="mt-20 flex flex-col items-center gap-4 border-t border-white/10 pt-10 text-center text-sm text-text-muted sm:mt-24 sm:flex-row sm:justify-between sm:text-left"
        />
      </Container>
    </footer>
  );
}