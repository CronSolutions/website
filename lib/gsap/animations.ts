import type { RefObject } from "react";
import { GSAP_EASE } from "./ease";
import { prefersReducedMotion, setVisible } from "./prefers-reduced-motion";
import { gsap, ScrollTrigger } from "./register";

interface ScrollRevealOptions {
  trigger?: Element | string;
  start?: string;
  stagger?: number;
  y?: number;
  scale?: number;
  duration?: number;
}

const HERO_ITEM_SELECTOR =
  "[data-gsap-hero-item], [data-gsap-stat], [data-gsap-scroll-hint]";

export function createHeroTimeline(scope: Element): gsap.core.Timeline {
  const reduced = prefersReducedMotion();

  if (reduced) {
    setVisible(scope.querySelectorAll(HERO_ITEM_SELECTOR));
    setVisible("[data-gsap-hero='bg']", { scale: 1, yPercent: 0 });
    return gsap.timeline();
  }

  gsap.set("[data-gsap-hero-item]", { opacity: 0, y: 36 });
  gsap.set("[data-gsap-stat]", { opacity: 0, x: 28, scale: 0.94 });
  gsap.set("[data-gsap-scroll-hint]", { opacity: 0, y: -8 });
  gsap.set("[data-gsap-hero='bg']", { scale: 1.12 });

  const tl = gsap.timeline({ defaults: { ease: GSAP_EASE.out } });

  tl.to("[data-gsap-hero='bg']", {
    scale: 1,
    duration: 1.6,
    ease: GSAP_EASE.inOut,
  })
    .from(
      "[data-gsap-hero='overlay']",
      { opacity: 0, duration: 1.1 },
      0
    )
    .to(
      "[data-gsap-hero-item='headline']",
      { opacity: 1, y: 0, duration: 0.75 },
      0.28
    )
    .to(
      "[data-gsap-hero-item='subheadline']",
      { opacity: 1, y: 0, duration: 0.65 },
      0.42
    )
    .to(
      "[data-gsap-hero-item='cta']",
      { opacity: 1, y: 0, duration: 0.6 },
      0.54
    )
    .to(
      "[data-gsap-stat]",
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.12,
      },
      0.88
    )
    .to("[data-gsap-scroll-hint]", { opacity: 1, y: 0, duration: 0.5 }, 1.18);

  const hint = scope.querySelector("[data-gsap-scroll-hint]");
  if (hint) {
    gsap.to(hint, {
      y: 8,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5,
    });
  }

  return tl;
}

export function createHeroParallax(scope: Element): ScrollTrigger | null {
  if (prefersReducedMotion()) return null;

  const bg = scope.querySelector("[data-gsap-hero='bg']");
  if (!bg) return null;

  // Disable parallax on mobile entirely — it's barely visible anyway
  if (window.innerWidth < 768) return null;

  return ScrollTrigger.create({
    trigger: scope,
    start: "top top",
    end: "bottom top",
    scrub: 1.2,
    animation: gsap.to(bg, {
      yPercent: 14,
      ease: "none",
    }),
  });
}

export function createScrollReveal(
  scope: Element,
  selector: string,
  options: ScrollRevealOptions = {}
): ScrollTrigger | null {
  const targets = scope.querySelectorAll(selector);
  if (targets.length === 0) return null;

  const reduced = prefersReducedMotion();
  if (reduced) {
    setVisible(targets);
    return null;
  }

  const {
    trigger = scope,
    start = "top 82%",
    stagger = 0.1,
    y = 40,
    scale = 0.96,
    duration = 0.7,
  } = options;

  gsap.set(targets, { opacity: 0, y, scale });

  return ScrollTrigger.create({
    trigger,
    start,
    once: true,
    onEnter: () => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: GSAP_EASE.out,
        overwrite: "auto",
      });
    },
  });
}

export function createSplitReveal(
  scope: Element,
  selector: string,
  options: ScrollRevealOptions = {}
): ScrollTrigger | null {
  const targets = scope.querySelectorAll(selector);
  if (targets.length === 0) return null;

  const reduced = prefersReducedMotion();
  if (reduced) {
    setVisible(targets);
    return null;
  }

  const { trigger = scope, start = "top 80%", duration = 0.85 } = options;

  gsap.set(targets, { opacity: 0, x: 56 });

  return ScrollTrigger.create({
    trigger,
    start,
    once: true,
    onEnter: () => {
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        duration,
        ease: GSAP_EASE.out,
      });
    },
  });
}

export function createHoverLift(
  scope: Element,
  selector: string
): (() => void) | null {
  if (prefersReducedMotion()) return null;

  const cards = scope.querySelectorAll(selector);
  if (cards.length === 0) return null;

  const cleanups: Array<() => void> = [];

  cards.forEach((card) => {
    const onEnter = (): void => {
      gsap.to(card, {
        y: -6,
        scale: 1.02,
        duration: 0.35,
        ease: GSAP_EASE.out,
        overwrite: "auto",
      });
    };
    const onLeave = (): void => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: GSAP_EASE.out,
        overwrite: "auto",
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}

export function runInGsapContext(
  scope: RefObject<Element | null>,
  setup: (root: Element) => (() => void) | void
): () => void {
  const root = scope.current;
  if (!root) return () => undefined;

  const ctx = gsap.context(() => {
    setup(root);
  }, root);

  return () => ctx.revert();
}
