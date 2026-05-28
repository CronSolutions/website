"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY_NAME, NAV_CTA, NAV_ITEMS } from "@/lib/constants";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { homePath, resolveNavItems } from "@/lib/navigation";
import type { NavItem } from "@/lib/types";

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => resolveNavItems(NAV_ITEMS, isHomePage),
    [isHomePage]
  );

  const ctaHref = isHomePage ? NAV_CTA.href : homePath(NAV_CTA.href);
  const logoHref = "/";

  useBodyScrollLock(mobileOpen);

  const closeMobile = useCallback((): void => {
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback((): void => {
    setMobileOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:pt-0" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <nav
        className={`transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-white/10 bg-background/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <Container className="flex min-h-nav-bar items-center justify-between gap-4 py-4 lg:py-5">
          <Link
            href={logoHref}
            onClick={closeMobile}
            className="group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:gap-4"
            aria-label={`${COMPANY_NAME} home`}
          >
            <span className="truncate font-display text2xl font-bold tracking-tight text-text-primary lg:text-2xl">
              {COMPANY_NAME}
            </span>
          </Link>

          <ul
            className="hidden items-center gap-16 xl:gap-20 md:flex"
            role="list"
          >
            {navItems.map((item: NavItem) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg xl:text-xl text-text-muted transition-colors hover:text-text-primary"
              >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 md:block">
            <Button href={ctaHref} size="lg" ariaLabel={NAV_CTA.label}>
              {NAV_CTA.label}
            </Button>
          </div>

          <button
            type="button"
            className="nav-touch-target flex shrink-0 items-center justify-center rounded-xl border border-white/10 text-text-primary md:hidden"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </Container>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-label="Close menu overlay"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 top-0 z-40 flex flex-col bg-background pt-nav-offset md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <Container className="flex flex-1 flex-col py-8 safe-bottom">
                <ul className="flex flex-col gap-2" role="list">
                  {navItems.map((item: NavItem, index: number) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="nav-touch-target flex items-center rounded-xl px-3 font-display text-3xl font-semibold text-text-primary transition-colors active:bg-surface"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4 pt-10">
                  <Button
                    href={ctaHref}
                    fullWidth
                    size="lg"
                    onClick={closeMobile}
                    ariaLabel={NAV_CTA.label}
                  >
                    {NAV_CTA.label}
                  </Button>
                </div>
              </Container>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
