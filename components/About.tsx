"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  ABOUT_CONTENT,
  ABOUT_IMAGE,
} from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";

export function About(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);

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
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
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
                  className="text-2xl leading-[2] text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            
          </div>

          <div data-gsap-split className="relative order-1 lg:order-2">
            <div className="glass relative aspect-team-mobile max-h-80 overflow-hidden rounded-2xl shadow-glass sm:aspect-team-tablet sm:max-h-none sm:rounded-3xl lg:aspect-portrait lg:max-h-[550px]">
              {!imageError ? (
                <Image
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center bg-hero-radial p-8 text-center"
                  role="img"
                  aria-label={ABOUT_IMAGE.alt}
                >
                  <div className="font-display text-display-sm font-bold text-gradient">
                    CS
                  </div>
                  <p className="mt-4 text-body-sm text-text-muted">
                    {ABOUT_IMAGE.alt}
                  </p>
                </div>
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <div
              className="absolute -bottom-3 -left-3 hidden h-20 w-20 rounded-2xl border border-primary/30 bg-primary/10 blur-xl sm:block lg:-bottom-4 lg:-left-4 lg:h-24 lg:w-24"
              aria-hidden
            />
            <div
              className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-full border border-secondary/30 bg-secondary/10 blur-2xl sm:block lg:-right-4 lg:-top-4 lg:h-32 lg:w-32"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
