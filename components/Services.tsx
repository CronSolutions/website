"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES, SERVICES_SECTION } from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";
import { useGsapServiceCards } from "@/lib/hooks/useGsapServiceCards";
import { getIcon } from "@/lib/icons";
import type { ServiceItem } from "@/lib/types";

export function Services(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, {
    revealSelector: "[data-gsap-reveal]",
    stagger: 0.08,
  });
  useGsapServiceCards(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-scroll-mt section-padding bg-surface"
      aria-labelledby="services-heading"
    >
      <Container>
        <div data-gsap-reveal>
          <SectionHeader
            label={SERVICES_SECTION.label}
            heading={SERVICES_SECTION.heading}
            description={SERVICES_SECTION.description}
            headingId="services-heading"
          />
        </div>

        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          role="list"
        >
          {SERVICES.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <li key={service.id} data-gsap-reveal>
                <article
                  data-gsap-service-card
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-background p-8 sm:p-10 sm:hover:border-primary/30 sm:hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                  </span>
                  <h3
                    id={`service-${service.id}`}
                    className="mt-3 text-base font-bold text-text-primary sm:mt-4 sm:text-lg"
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-text-muted">
                    {service.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
