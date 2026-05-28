import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ValueItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: "Twitter" | "Linkedin" | "Github";
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
}

export interface OrganizationJsonLd {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    contactType: string;
    email: string;
    telephone: string;
  };
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export type IconMapEntry = LucideIcon;
