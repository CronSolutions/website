import type { LegalDocument } from "./types";

const LAST_UPDATED = "December 1, 2024";
const CONTACT_EMAIL = "hello@cronsolutions.com";

export const PRIVACY_POLICY: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How Cron Solutions collects, uses, stores, and protects your personal information.",
  lastUpdated: LAST_UPDATED,
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        `Cron Solutions ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our services, or communicate with us.`,
        "By using our website or services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our services.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We may collect information that you provide directly, information collected automatically, and information from third parties where permitted by law.",
      ],
      listItems: [
        "Contact details such as name, email address, phone number, and company name",
        "Project and business information submitted through forms, email, or consultations",
        "Billing and transaction information when you purchase our services",
        "Technical data including IP address, browser type, device identifiers, and usage data",
        "Communications you send to us, including support requests and feedback",
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      paragraphs: ["We use personal information for legitimate business purposes, including:"],
      listItems: [
        "Delivering web development, SEO, and related professional services",
        "Responding to inquiries and providing customer support",
        "Processing payments and managing accounts",
        "Improving our website, services, and user experience",
        "Sending service-related notices and, where permitted, marketing communications",
        "Complying with legal obligations and protecting our rights",
      ],
    },
    {
      id: "legal-bases",
      title: "Legal Bases for Processing",
      paragraphs: [
        "Where applicable under GDPR or similar laws, we process personal data based on one or more of the following: performance of a contract, legitimate interests, consent, and legal obligation.",
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share data with trusted service providers who assist us in operating our business (such as hosting, analytics, email, and payment processors), subject to confidentiality obligations.",
        "We may also disclose information if required by law, to protect rights and safety, or in connection with a merger, acquisition, or asset sale.",
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal data, and to data portability. You may also withdraw consent where processing is based on consent.",
        `To exercise these rights, contact us at ${CONTACT_EMAIL}. We will respond within the timeframe required by applicable law.`,
      ],
    },
    {
      id: "international",
      title: "International Transfers",
      paragraphs: [
        "If we transfer personal data across borders, we take steps to ensure appropriate safeguards are in place consistent with applicable data protection laws.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date. Material changes may be communicated through additional notice where appropriate.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        `If you have questions about this Privacy Policy or our data practices, email us at ${CONTACT_EMAIL} or write to Cron Solutions, San Francisco, CA.`,
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "Terms and conditions governing your use of Cron Solutions websites and services.",
  lastUpdated: LAST_UPDATED,
  sections: [
    {
      id: "agreement",
      title: "Agreement to Terms",
      paragraphs: [
        'These Terms of Service ("Terms") govern your access to and use of the Cron Solutions website and services. By accessing or using our services, you agree to be bound by these Terms.',
        "If you are entering into these Terms on behalf of an organization, you represent that you have authority to bind that organization.",
      ],
    },
    {
      id: "services",
      title: "Services",
      paragraphs: [
        "Cron Solutions provides web development, search engine optimization, consulting, and related digital services. Specific deliverables, timelines, and fees are defined in separate proposals, statements of work, or service agreements.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice where practicable.",
      ],
    },
    {
      id: "accounts",
      title: "Client Responsibilities",
      paragraphs: ["You agree to:"],
      listItems: [
        "Provide accurate and complete information needed for project delivery",
        "Respond to requests for feedback, assets, and approvals in a timely manner",
        "Ensure you have rights to any content, trademarks, or materials you supply",
        "Comply with applicable laws in your use of our deliverables",
      ],
    },
    {
      id: "payment",
      title: "Fees and Payment",
      paragraphs: [
        "Fees are due as specified in your agreement or invoice. Late payments may incur interest or suspension of work. You are responsible for applicable taxes unless otherwise stated in writing.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual Property",
      paragraphs: [
        "Upon full payment, ownership of final deliverables created specifically for you will transfer as defined in your project agreement, excluding our pre-existing tools, frameworks, and general know-how.",
        "We retain the right to display non-confidential work in our portfolio unless you request otherwise in writing before project completion.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "Each party agrees to protect the other's confidential information and use it only for purposes related to the engagement, except as required by law.",
      ],
    },
    {
      id: "warranties",
      title: "Disclaimer of Warranties",
      paragraphs: [
        'Our website and services are provided "as is" and "as available" to the fullest extent permitted by law. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
        "We do not guarantee specific SEO rankings, traffic levels, or revenue outcomes, as search algorithms and market conditions are outside our control.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Cron Solutions shall not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill.",
        "Our total liability for any claim arising from these Terms or our services shall not exceed the amounts paid by you to us for the specific service giving rise to the claim during the twelve months preceding the claim.",
      ],
    },
    {
      id: "indemnity",
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Cron Solutions from claims arising from your content, your misuse of our services, or your violation of these Terms or applicable law.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "Either party may terminate an engagement according to the terms of the applicable service agreement. We may suspend or terminate access to our website for conduct that violates these Terms or harms our business or users.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Disputes shall be resolved in the state or federal courts located in San Francisco County, California, unless otherwise agreed in writing.",
      ],
    },
    {
      id: "contact-terms",
      title: "Contact",
      paragraphs: [
        `Questions about these Terms may be sent to ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalDocument = {
  slug: "cookies",
  title: "Cookie Policy",
  description:
    "Information about how Cron Solutions uses cookies and similar technologies on our website.",
  lastUpdated: LAST_UPDATED,
  sections: [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. Similar technologies include pixels, local storage, and session storage. They help websites function, remember preferences, and understand how visitors interact with content.",
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Cookies",
      paragraphs: [
        "Cron Solutions uses cookies and similar technologies to operate our website, improve performance, analyze traffic, and enhance your experience. The specific cookies in use may change as our site evolves.",
      ],
    },
    {
      id: "types",
      title: "Types of Cookies We Use",
      paragraphs: ["We may use the following categories of cookies:"],
      listItems: [
        "Strictly necessary cookies — required for core site functionality and security",
        "Preference cookies — remember settings such as language or region",
        "Analytics cookies — help us understand how visitors use our site so we can improve it",
        "Marketing cookies — used to measure campaign effectiveness where applicable",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Cookies",
      paragraphs: [
        "Some cookies may be set by third-party services we use, such as analytics or embedded content providers. These parties have their own privacy and cookie policies governing their use of data.",
      ],
    },
    {
      id: "managing",
      title: "Managing Cookies",
      paragraphs: [
        "You can control cookies through your browser settings, including blocking or deleting cookies. Note that disabling certain cookies may affect site functionality.",
        "Where required by law, we will request your consent before placing non-essential cookies. You may withdraw consent at any time by adjusting your browser settings or cookie preferences if we provide a consent tool.",
      ],
    },
    {
      id: "do-not-track",
      title: "Do Not Track",
      paragraphs: [
        "Some browsers offer a Do Not Track signal. There is no uniform industry standard for responding to these signals, and our site may not respond to them consistently across all services.",
      ],
    },
    {
      id: "updates-cookies",
      title: "Updates",
      paragraphs: [
        "We may update this Cookie Policy periodically. Changes will be posted on this page with a revised last updated date.",
      ],
    },
    {
      id: "contact-cookies",
      title: "Contact",
      paragraphs: [
        `For questions about our use of cookies, contact ${CONTACT_EMAIL}. For broader privacy matters, see our Privacy Policy.`,
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_OF_SERVICE,
  cookies: COOKIE_POLICY,
} as const;
