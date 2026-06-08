import type {
  FooterLink,
  HeroStat,
  NavItem,
  OrganizationJsonLd,
  ServiceItem,
  SiteMetadata,
  SocialLink,
  TestimonialItem,
  ValueItem,
} from "./types";

export const SITE_METADATA: SiteMetadata = {
  title: "Cron Solutions | Web Development & SEO Agency",
  description:
    "Cron Solutions builds high-performance websites and delivers data-driven SEO strategies that drive traffic, rankings, and revenue.",
  keywords: [
    "web development",
    "SEO agency",
    "technical SEO",
    "Core Web Vitals",
    "local SEO",
    "content strategy",
    "Cron Solutions",
  ],
  canonicalUrl: "https://cronsolutions.com",
  ogImage: "https://cronsolutions.com/og-image.jpg",
};

export const ORGANIZATION_JSON_LD: OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cron Solutions",
  url: "https://cronsolutions.com",
  logo: "https://cronsolutions.com/logo.png",
  description: SITE_METADATA.description,
  sameAs: [
    "https://twitter.com/cronsolutions",
    "https://linkedin.com/company/cronsolutions",
    "https://github.com/cronsolutions",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@cronsolutions.com",
    telephone: "+1-555-0123",
  },
};

export const COMPANY_NAME = "Cron Solutions";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const NAV_CTA = {
  label: "Get a Free Audit",
  href: "#contact",
};

export const HERO_CONTENT = {
  headline: "We Build Websites That Rank, Convert & Scale",
  subheadline:
    "Cron Solutions partners with ambitious businesses to launch fast, scalable websites and data-driven SEO programs that turn organic search into measurable revenue.",
  primaryCta: { label: "Start Your Project", href: "#contact" },
  secondaryCta: { label: "See Our Work", href: "/" },
  scrollLabel: "Scroll to explore",
};

export const HERO_STATS: HeroStat[] = [
  { value: "20+", label: "Clients" },
  { value: "98%", label: "Retention" },
  { value: "#1", label: "Rankings" },
];

export const ABOUT_CONTENT = {
  headline: "About Us",
  paragraphs: [
    "We're a web development studio based just outside Worcester, MA — built to help local businesses compete online. Whether you're a service business, retail shop, or growing startup, we build the kind of web presence that actually gets found.",
    "We combine clean, fast development with SEO-first thinking from day one. That means your site doesn't just look good — it loads fast, ranks for the right searches, and turns visitors into real customers.",
    "We keep things simple: honest timelines, clear reporting, and work you can see. No black boxes, no jargon.",
  ],
};

export const SERVICES_SECTION = {
  label: "What We Do",
  heading: "Services that move the needle",
  description:
    "End-to-end web and SEO capabilities designed to grow your traffic, leads, and revenue.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    iconName: "Layout",
    title: "Web Development",
    description:
      "Custom, fast websites built to convert. We handle everything from design to launch — responsive, accessible, and built on modern stacks that won't slow you down.",
  },
  {
    id: "seo",
    iconName: "Search",
    title: "SEO & Local Search",
    description:
      "Get found by people in your area. We handle on-page optimization, Google Business, local citations, and the technical fixes that actually move rankings.",
  },
  {
    id: "performance",
    iconName: "Gauge",
    title: "Performance & Audits",
    description:
      "Slow sites lose customers. We audit Core Web Vitals, fix crawl issues, and tighten site architecture — so your site earns its place at the top.",
  },
];

export const TESTIMONIALS_SECTION = {
  heading: "Trusted by Businesses",
  description: "Hear from teams who turned search visibility into sustainable growth.",
  swipeHint: "Swipe to read more",
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "BrightPath Health",
    quote:
      "Cron Solutions rebuilt our site and doubled organic traffic in six months. Their SEO roadmap was clear, actionable, and actually delivered.",
    initials: "SM",
  },
  {
    id: "t2",
    name: "James Okonkwo",
    role: "Marketing Director",
    company: "Vertex Legal",
    quote:
      "We went from page three to top-three rankings for our core practice areas. The team communicates like partners, not vendors.",
    initials: "JO",
  },
  {
    id: "t3",
    name: "Elena Vasquez",
    role: "Founder",
    company: "Nova Commerce",
    quote:
      "Core Web Vitals went green across the board and our conversion rate jumped 34%. Best investment we've made in our digital presence.",
    initials: "EV",
  },
];

export const FOOTER_TAGLINE =
  "High-performance websites and SEO that rank, convert, and scale.";

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const FOOTER_CONTACT = {
  email: "ryan@cronsolutions.com",
  phone: "+1 (860) 597-0221",
  location: "Worcester, MA",
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export const LEGAL_ROUTES = {
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

export const ABOUT_IMAGE = {
  src: "/images/team.png",
  alt: "Cron Solutions development team collaborating on a project",
};

export const HERO_IMAGE = {
  src: "/images/hero-bg.jpg",
  alt: "Abstract dark technology background representing digital growth",
};
