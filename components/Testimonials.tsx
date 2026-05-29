"use client";

import { Star } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  TESTIMONIALS,
  TESTIMONIALS_SECTION,
} from "@/lib/constants";
import { useCarouselIndex } from "@/lib/hooks/useCarouselIndex";
import { useGsapSection } from "@/lib/hooks/useGsapSection";
import type { TestimonialItem } from "@/lib/types";

const STAR_COUNT = 5;

function StarRating(): React.JSX.Element {
  return (
    <div
      className="flex gap-0.5 mt-2"
      role="img"
      aria-label={`${STAR_COUNT} out of ${STAR_COUNT} stars`}
    >
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-primary text-primary"
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
}: {
  item: TestimonialItem;
}): React.JSX.Element {
  return (
    <article className="glass flex h-full w-carousel-slide max-w-carousel-card flex-col rounded-2xl p-7 shadow-glass sm:p-9 md:w-full md:max-w-none">
      <StarRating/>
      <blockquote className="mt-8 flex-1 text-xl leading-relaxed text-text-primary">
        <p>&ldquo;{item.quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5 sm:mt-6">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-base font-bold text-text-primary"
          aria-hidden
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <cite className="block truncate not-italic text-lg font-semibold text-text-primary">
            {item.name}
          </cite>
          <p className="truncate text-base text-text-muted">
            {item.role}, {item.company}
          </p>
        </div>
      </footer>
    </article>
  );
}

function CarouselDots({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}): React.JSX.Element {
  return (
    <div
      className="mt-4 flex justify-center gap-2 md:hidden"
      role="tablist"
      aria-label="Testimonial slides"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={`dot-${i}`}
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Slide ${i + 1} of ${count}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === activeIndex
              ? "w-6 bg-primary"
              : "w-2 bg-white/25"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGsapSection(sectionRef, {
    revealSelector: "[data-gsap-reveal]",
    stagger: 0.1,
  });

  const activeIndex = useCarouselIndex(
    TESTIMONIALS.length,
    scrollRef
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-scroll-mt section-padding bg-background"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div data-gsap-reveal>
          <SectionHeader
            heading={TESTIMONIALS_SECTION.heading}
            description={TESTIMONIALS_SECTION.description}
            headingId="testimonials-heading"
          />
        </div>

        <p
          data-gsap-reveal
          className="-mt-4 mb-4 text-center text-xs text-text-muted md:hidden"
        >
          {TESTIMONIALS_SECTION.swipeHint}
        </p>

        <div className="relative md:static">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden bg-fade-edges md:hidden"
            aria-hidden
          />

          <div
            ref={scrollRef}
            className="carousel-track -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:px-0 lg:grid-cols-3 lg:gap-6"
            role="list"
          >
            {TESTIMONIALS.map((item: TestimonialItem) => (
              <div
                key={item.id}
                data-gsap-reveal
                className="shrink-0 snap-center md:shrink"
                role="listitem"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          <CarouselDots
            count={TESTIMONIALS.length}
            activeIndex={activeIndex}
          />
        </div>
      </Container>
    </section>
  );
}
