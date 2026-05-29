"use client";

import { useEffect, type RefObject } from "react";
import { createHoverLift } from "@/lib/gsap/animations";
import { registerGsapPlugins, ScrollTrigger } from "@/lib/gsap/register";

export function useGsapServiceCards(
  sectionRef: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    registerGsapPlugins();
    ScrollTrigger.config({ ignoreMobileResize: true });
    const section = sectionRef.current;
    if (!section) return;

    const cleanup = createHoverLift(section, "[data-gsap-service-card]");

    return () => {
      cleanup?.();
    };
  }, [sectionRef]);
}
