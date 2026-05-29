"use client";

import { useEffect, type RefObject } from "react";
import {
  createHeroParallax,
  createHeroTimeline,
} from "@/lib/gsap/animations";
import { gsap, registerGsapPlugins } from "@/lib/gsap/register";

export function useGsapHero(sectionRef: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    registerGsapPlugins();
    ScrollTrigger.config({ ignoreMobileResize: true });
    const section = sectionRef.current;
    if (!section) return;

    const timeline = createHeroTimeline(section);
    const parallax = createHeroParallax(section);

    return () => {
      timeline.kill();
      parallax?.kill();
      gsap.killTweensOf(section.querySelector("[data-gsap-scroll-hint]"));
    };
  }, [sectionRef]);
}
