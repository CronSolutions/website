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
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const NAV_CTA = {
  label: "Get a Free Audit",
  href: "#contact",
};

export const HERO_CONTENT = {
  badge: "🚀 Web & SEO Growth Agency",
  headline: "We Build Websites That Rank, Convert & Scale",
  subheadline:
    "Cron Solutions partners with ambitious businesses to launch fast, scalable websites and data-driven SEO programs that turn organic search into measurable revenue.",
  primaryCta: { label: "Start Your Project", href: "#contact" },
  secondaryCta: { label: "See Our Work", href: "#services" },
  scrollLabel: "Scroll to explore",
};

export const HERO_STATS: HeroStat[] = [
  { value: "200+", label: "Clients" },
  { value: "98%", label: "Retention" },
  { value: "#1", label: "Rankings" },
];

export const ABOUT_CONTENT = {
  headline: "Built by developers who understand growth",
  paragraphs: [
    "At Cron Solutions, we believe your website is your most valuable growth asset. We combine precision engineering with search-first architecture so every page loads fast, reads clearly, and earns its place in the SERPs.",
    "Our team has shipped products for startups and enterprises alike. We obsess over Core Web Vitals, crawlability, and conversion paths—because beautiful design only matters when it drives results.",
    "From technical audits to full redesigns, we stay transparent at every step. You get clear reporting, honest timelines, and strategies grounded in data—not guesswork.",
  ],
};

export const ABOUT_VALUES: ValueItem[] = [
  {
    iconName: "Code2",
    title: "Precision Engineering",
    description:
      "Clean, maintainable codebases built for speed, accessibility, and long-term scale.",
  },
  {
    iconName: "LineChart",
    title: "Data-Driven SEO",
    description:
      "Keyword research, competitive analysis, and ongoing optimization tied to real KPIs.",
  },
  {
    iconName: "FileBarChart",
    title: "Transparent Reporting",
    description:
      "Monthly dashboards and plain-language insights so you always know what's working.",
  },
];

export const SERVICES_SECTION = {
  label: "What We Do",
  heading: "Services that move the needle",
  description:
    "End-to-end web and SEO capabilities designed to grow your traffic, leads, and revenue.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-design",
    iconName: "Layout",
    title: "Web Design & Development",
    description:
      "Custom, responsive sites built on modern stacks with conversion-focused UX and blazing performance.",
  },
  {
    id: "technical-seo",
    iconName: "Search",
    title: "Technical SEO Audits",
    description:
      "Deep crawls, indexation fixes, schema markup, and site architecture recommendations that unlock rankings.",
  },
  {
    id: "on-page-seo",
    iconName: "FileText",
    title: "On-Page SEO Optimization",
    description:
      "Title tags, meta descriptions, heading structure, and content alignment with search intent.",
  },
  {
    id: "local-seo",
    iconName: "MapPin",
    title: "Local SEO & Google Business",
    description:
      "Local pack dominance through GBP optimization, citations, reviews, and geo-targeted landing pages.",
  },
  {
    id: "core-web-vitals",
    iconName: "Gauge",
    title: "Performance & Core Web Vitals",
    description:
      "LCP, INP, and CLS improvements via image optimization, caching, and lean JavaScript delivery.",
  },
  {
    id: "content-link-building",
    iconName: "Link",
    title: "Content Strategy & Link Building",
    description:
      "Editorial calendars, pillar content, and ethical outreach that builds authority and referral traffic.",
  },
];

export const TESTIMONIALS_SECTION = {
  heading: "Trusted by Growing Businesses",
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
  {
    id: "t4",
    name: "David Chen",
    role: "VP Growth",
    company: "ScaleForge SaaS",
    quote:
      "Technical SEO was a black box until Cron Solutions. Now we have dashboards, priorities, and month-over-month wins we can show the board.",
    initials: "DC",
  },
  {
    id: "t5",
    name: "Amanda Brooks",
    role: "Owner",
    company: "Brooks & Co. Realty",
    quote:
      "Local SEO used to feel impossible in our market. We're now consistently in the local pack and fielding more qualified leads than ever.",
    initials: "AB",
  },
];

export const FOOTER_TAGLINE =
  "High-performance websites and SEO that rank, convert, and scale.";

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

export const FOOTER_SERVICE_LINKS: FooterLink[] = [
  { label: "Web Development", href: "#services" },
  { label: "Technical SEO", href: "#services" },
  { label: "Local SEO", href: "#services" },
  { label: "Content Strategy", href: "#services" },
];

export const FOOTER_CONTACT = {
  email: "hello@cronsolutions.com",
  phone: "+1 (555) 012-3456",
  location: "San Francisco, CA",
};

export const FOOTER_SOCIAL: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com/cronsolutions", iconName: "Twitter" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cronsolutions",
    iconName: "Linkedin",
  },
  { label: "GitHub", href: "https://github.com/cronsolutions", iconName: "Github" },
];

export const LEGAL_ROUTES = {
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

export const FOOTER_LEGAL = {
  copyright: "© 2024 Cron Solutions. All rights reserved.",
  privacy: { label: "Privacy Policy", href: LEGAL_ROUTES.privacy },
  terms: { label: "Terms of Service", href: LEGAL_ROUTES.terms },
  cookies: { label: "Cookie Policy", href: LEGAL_ROUTES.cookies },
};

export const ABOUT_IMAGE = {
  src: "/images/team.png",
  alt: "Cron Solutions development team collaborating on a project",
};

export const HERO_IMAGE = {
  src: "/images/hero-bg.jpg",
  alt: "Abstract dark technology background representing digital growth",
};
