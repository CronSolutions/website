import { gsap } from "./register";

type GsapTarget = string | Element | Element[] | NodeListOf<Element>;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setVisible(
  targets: GsapTarget,
  vars: gsap.TweenVars = {}
): gsap.core.Tween {
  return gsap.set(targets, {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotation: 0,
    ...vars,
  });
}
