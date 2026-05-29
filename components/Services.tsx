"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES, SERVICES_SECTION } from "@/lib/constants";
import { useGsapSection } from "@/lib/hooks/useGsapSection";
import { useGsapServiceCards } from "@/lib/hooks/useGsapServiceCards";
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

        {/* Feature rows */}
        <ul role="list" className="divide-y divide-white/10">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <li key={service.id} data-gsap-reveal>
                <div className={`group flex flex-col gap-8 py-20 sm:py-24 lg:flex-row lg:items-center lg:gap-20 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}>

                  <div className={`flex flex-1 items-center gap-10 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    <span className="font-display text-7xl font-bold text-white/10 transition-colors group-hover:text-primary/25 select-none leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={`flex flex-col ${isEven ? "items-start lg:items-end" : "items-start"}`}>
                      <h3 className="text-3xl font-bold text-text-primary leading-snug sm:text-4xl">
                        {service.title}
                      </h3>
                      <div className="mt-4 h-1.5 w-28 bg-primary/60" />
                    </div>
                  </div>

                  <div className={`flex flex-1 items-center gap-8 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    <p className="flex-1 text-xl text-text-muted leading-[1.9]">
                      {service.description}
                    </p>
                   
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
