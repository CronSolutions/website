"use client";

import { useState } from "react";
import { useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useGsapSection } from "@/lib/hooks/useGsapSection";


const FORMSPREE_ID = "xdajbjar";

type Status = "idle" | "loading" | "success" | "error";

export function Contact(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    });

  useGsapSection(sectionRef, {
    revealSelector: "[data-gsap-reveal]",
    stagger: 0.1,
  });

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;
    if (digits.length >= 7) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length >= 4) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length >= 1) {
        formatted = `(${digits}`;
    }
    setForm((prev) => ({ ...prev, phone: formatted }));
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-scroll-mt section-padding bg-surface"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div data-gsap-reveal className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-section-heading text-text-primary"
            >
              Ready to Scale High?
            </h2>
            <p className="mt-4 text-xl text-text-muted leading-relaxed">
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          {status === "success" ? (
            <div
              data-gsap-reveal
              className="glass flex flex-col items-center gap-4 rounded-2xl p-12 text-center shadow-glass"
            >
              <CheckCircle className="h-14 w-14 text-primary" />
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Message Sent!
              </h3>
              <p className="text-lg text-text-muted">
                We&apos;ll be in touch shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-base text-primary underline underline-offset-4 hover:opacity-80"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-gsap-reveal
              className="glass rounded-2xl p-8 shadow-glass sm:p-10"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium uppercase tracking-wider text-text-muted"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium uppercase tracking-wider text-text-muted"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium uppercase tracking-wider text-text-muted"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc. (optional)"
                    className="rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium uppercase tracking-wider text-text-muted"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        placeholder="(555) 000-0000"
                        inputMode="numeric"
                        className="rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium uppercase tracking-wider text-text-muted"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="resize-none rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="mt-6">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-semibold text-background transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 w-full"
                    >
                    {status === "loading" ? (
                        "Sending..."
                    ) : (
                        <>
                        Send Message
                        <Send className="h-4 w-4" />
                        </>
                    )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}