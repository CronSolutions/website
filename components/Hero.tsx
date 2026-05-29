"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WovenCanvas } from "@/components/ui/woven-canvas";
import {
  HERO_CONTENT,
  HERO_IMAGE,
  HERO_STATS,
} from "@/lib/constants";
import { useGsapHero } from "@/lib/hooks/useGsapHero";
import type { HeroStat } from "@/lib/types";

function HeroStatItem({
  stat,
  compact = false,
}: {
  stat: HeroStat;
  compact?: boolean;
}): React.JSX.Element {
  return (
    <div className={compact ? "text-center" : ""}>
      <p
        className={`font-display font-bold text-primary ${
          compact ? "text-5xl sm:text-6xl" : "text-6xl lg:text-7xl"
        }`}
      >
        {stat.value}
      </p>
      <p className="mt-3 text-lg font-medium uppercase tracking-wider text-text-muted sm:text-lg">
        {stat.label}
      </p>
    </div>
  );
}

export function Hero(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);

  useGsapHero(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen-dynamic flex-col overflow-hidden justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background image layer */}
        <div
          data-gsap-hero="bg"
          className="absolute inset-0 will-change-transform"
        >
          {!imageError ? (
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              priority
              className="object-cover object-center scale-105"
              sizes="100vw"
              onError={() => setImageError(true)}
            />
          ) : null}
        </div>

        {/* ✦ Woven particle effect — sits above image, below overlays */}
        <WovenCanvas />

        {/* Overlay gradients — unchanged, keep them above the particles */}
        <div
          data-gsap-hero="overlay"
          className={`absolute inset-0 z-10 ${
            imageError
              ? "bg-hero-noise bg-hero-radial bg-background"
              : "bg-background/30"
          }`}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/85 to-background/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <Container className="relative z-10 w-full pb-12 pt-nav-offset sm:pb-16 lg:pb-20">
        <div className="flex flex-col items-center text-center">
          <h1
            id="hero-heading"
            data-gsap-hero-item="headline"
            className="max-w-5xl font-display text-display text-text-primary"
          >
            {HERO_CONTENT.headline}
          </h1>

          <p
            data-gsap-hero-item="subheadline"
          />

          {/* Stats row */}
          <div
            className="mt-16 grid grid-cols-3 gap-x-10 sm:mt-12 sm:gap-x-16 lg:gap-x-20"
            role="list"
            aria-label="Company statistics"
          >
            {HERO_STATS.map((stat: HeroStat) => (
              <div
                key={stat.label}
                data-gsap-stat
                role="listitem"
                className="flex flex-col items-center"
              >
                <HeroStatItem stat={stat} compact />
              </div>
            ))}
          </div>

          <div
            data-gsap-hero-item="cta"
            className="mt-12 flex w-full flex-col gap-3 sm:mt-14 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Button href={HERO_CONTENT.primaryCta.href} size="lg" className="px-10 py-4 text-lg">
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button href={HERO_CONTENT.secondaryCta.href} variant="ghost" size="lg" className="px-10 py-4 text-lg">
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      <div
        data-gsap-scroll-hint
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 safe-bottom lg:block"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary"
          aria-label={HERO_CONTENT.scrollLabel}
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            {HERO_CONTENT.scrollLabel}
          </span>
          <ChevronDown className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}