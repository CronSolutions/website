import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#111118",
        primary: "#00E5A0",
        secondary: "#7B61FF",
        "text-primary": "#F4F4F5",
        "text-muted": "#A1A1AA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2rem, 5.5vw + 0.75rem, 6rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "clamp(1.75rem, 4vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "section-heading": [
          "clamp(1.75rem, 2.8vw + 0.75rem, 3.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        body: [
          "clamp(1rem, 0.35vw + 0.9rem, 1.125rem)",
          { lineHeight: "1.75" },
        ],
        "body-sm": [
          "clamp(0.875rem, 0.2vw + 0.82rem, 0.9375rem)",
          { lineHeight: "1.65" },
        ],
        "nav-link": [
          "1.0625rem",
          { lineHeight: "1.5", fontWeight: "500" },
        ],
      },
      spacing: {
        "section-y": "clamp(4rem, 8vw, 7rem)",
        "nav-offset": "clamp(5.75rem, 14vw, 8.25rem)",
        "nav-bar": "clamp(4.5rem, 10vw, 5.5rem)",
      },
      maxWidth: {
        "carousel-card": "min(100%, 22rem)",
        legal: "48rem",
      },
      width: {
        "carousel-slide": "min(88vw, 22rem)",
      },
      minHeight: {
        touch: "2.75rem",
        "nav-touch": "3.25rem",
      },
      minWidth: {
        touch: "2.75rem",
        "nav-touch": "3.25rem",
      },
      backgroundImage: {
        "hero-noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 229, 160, 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(123, 97, 255, 0.1) 0%, transparent 50%)",
        "fade-edges":
          "linear-gradient(90deg, #0A0A0F 0%, transparent 8%, transparent 92%, #0A0A0F 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 20px 40px rgba(0, 229, 160, 0.08)",
      },
      aspectRatio: {
        portrait: "4 / 5",
        "team-mobile": "16 / 11",
        "team-tablet": "4 / 3",
      },
      animation: {
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
