"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import {
  ABOUT_CONTENT,
} from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";

export function About(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, {
    revealSelector: "[data-gsap-reveal]",
    splitSelector: "[data-gsap-split]",
    stagger: 0.12,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-scroll-mt section-padding bg-background"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-heading"
            data-gsap-reveal
            className="font-display text-section-heading text-text-primary"
          >
            {ABOUT_CONTENT.headline}
          </h2>

          <div className="mt-10 space-y-4 sm:mt-12">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                data-gsap-reveal
                className="text-xl leading-[2] text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}