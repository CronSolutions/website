import type { NavItem } from "./types";

export function resolveNavHref(href: string, isHomePage: boolean): string {
  if (!href.startsWith("#")) return href;
  return isHomePage ? href : `/${href}`;
}

export function resolveNavItems(
  items: NavItem[],
  isHomePage: boolean
): NavItem[] {
  return items.map((item) => ({
    ...item,
    href: resolveNavHref(item.href, isHomePage),
  }));
}

export function homePath(href: string): string {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}
