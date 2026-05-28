"use client";

import { Clock, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_NAME,
  FOOTER_COMPANY_LINKS,
  FOOTER_CONTACT,
  FOOTER_LEGAL,
  FOOTER_SERVICE_LINKS,
  FOOTER_SOCIAL,
  FOOTER_TAGLINE,
} from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";
import type { FooterLink, SocialLink } from "@/lib/types";

const SOCIAL_ICONS = {
  Twitter,
  Linkedin,
  Github,
} as const;

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
      id="contact"
      className="section-scroll-mt border-t border-white/10 bg-surface safe-bottom"
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
              <span className="font-display text-lg font-bold text-text-primary">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-body-sm text-text-muted">
              {FOOTER_TAGLINE}
            </p>
           
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:gap-12">
            <div data-gsap-reveal>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary sm:text-sm">
                Company
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_COMPANY_LINKS.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="touch-target inline-flex items-center text-body-sm text-text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div data-gsap-reveal>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary sm:text-sm">
                Services
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {FOOTER_SERVICE_LINKS.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="touch-target inline-flex items-center text-body-sm text-text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1" data-gsap-reveal>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary sm:text-sm">
              Contact
            </h3>
            <ul className="mt-4 space-y-4" role="list">
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="touch-target flex items-start gap-3 break-all text-body-sm text-text-muted transition-colors hover:text-primary"
                  aria-label={`Email ${FOOTER_CONTACT.email}`}
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{FOOTER_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_CONTACT.phone.replace(/\D/g, "")}`}
                  className="touch-target flex items-center gap-3 text-body-sm text-text-muted transition-colors hover:text-primary"
                  aria-label={`Phone ${FOOTER_CONTACT.phone}`}
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {FOOTER_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-body-sm text-text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {FOOTER_CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div
          data-gsap-reveal
          className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs text-text-muted sm:mt-12 sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="max-w-xs sm:max-w-none">{FOOTER_LEGAL.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4">
            <Link
              href={FOOTER_LEGAL.privacy.href}
              className="touch-target inline-flex items-center transition-colors hover:text-primary"
            >
              {FOOTER_LEGAL.privacy.label}
            </Link>
            <span className="text-white/20" aria-hidden>
              |
            </span>
            <Link
              href={FOOTER_LEGAL.terms.href}
              className="touch-target inline-flex items-center transition-colors hover:text-primary"
            >
              {FOOTER_LEGAL.terms.label}
            </Link>
            <span className="text-white/20" aria-hidden>
              |
            </span>
            <Link
              href={FOOTER_LEGAL.cookies.href}
              className="touch-target inline-flex items-center transition-colors hover:text-primary"
            >
              {FOOTER_LEGAL.cookies.label}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
