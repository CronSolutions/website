"use client";

import { useEffect, type RefObject } from "react";
import {
  createScrollReveal,
  createSplitReveal,
} from "@/lib/gsap/animations";
import { registerGsapPlugins, ScrollTrigger } from "@/lib/gsap/register";

interface UseGsapSectionOptions {
  revealSelector?: string;
  splitSelector?: string;
  revealStart?: string;
  stagger?: number;
}

export function useGsapSection(
  sectionRef: RefObject<HTMLElement | null>,
  options: UseGsapSectionOptions = {}
): void {
  const {
    revealSelector = "[data-gsap-reveal]",
    splitSelector,
    revealStart = "top 82%",
    stagger = 0.1,
  } = options;

  useEffect(() => {
    registerGsapPlugins();
    ScrollTrigger.config({ ignoreMobileResize: true });
    const section = sectionRef.current;
    if (!section) return;

    const triggers = [
      createScrollReveal(section, revealSelector, {
        start: revealStart,
        stagger,
      }),
      splitSelector
        ? createSplitReveal(section, splitSelector, { start: revealStart })
        : null,
    ].filter(Boolean);

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, [sectionRef, revealSelector, splitSelector, revealStart, stagger]);
}
