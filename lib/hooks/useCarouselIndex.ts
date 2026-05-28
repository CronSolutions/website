"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

export function useCarouselIndex(
  itemCount: number,
  scrollRef: RefObject<HTMLElement | null>
): number {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = useCallback((): void => {
    const container = scrollRef.current;
    if (!container || itemCount === 0) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [itemCount, scrollRef]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateIndex();
    container.addEventListener("scroll", updateIndex, { passive: true });
    window.addEventListener("resize", updateIndex);

    return () => {
      container.removeEventListener("scroll", updateIndex);
      window.removeEventListener("resize", updateIndex);
    };
  }, [updateIndex, scrollRef]);

  return activeIndex;
}
