"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out before you commit.",
    features: [
      "3 AI-powered captures",
      "Up to 10 manual subscriptions",
      "Dashboard overview",
      "Day-before renewal reminders",
      "Calendar sync",
    ],
    cta: "Start for free",
    ctaHref: "#",
    highlighted: false,
  },
  {
    name: "Founders",
    price: "$20",
    period: "one time",
    description: "Buy it once, own it forever. No recurring fees, ever.",
    features: [
      "Unlimited AI captures",
      "Unlimited subscriptions",
      "Dashboard overview",
      "Day-before renewal reminders",
      "Calendar sync",
      "All future updates included",
      "Priority support",
    ],
    cta: "Get lifetime access",
    ctaHref: "#",
    highlighted: true,
    badge: "Best value",
    spotsTotal: 10,
    spotsTaken: 6,
  },
  {
    name: "Pro",
    price: "$30",
    period: "per year",
    description: "Everything in Founders, billed annually.",
    features: [
      "Unlimited AI captures",
      "Unlimited subscriptions",
      "Dashboard overview",
      "Day-before renewal reminders",
      "Calendar sync",
      "Priority support",
    ],
    cta: "Start Pro",
    ctaHref: "#",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="7" cy="7" r="6" fill="oklch(0.76 0.20 122 / 0.15)" />
      <path
        d="M4.5 7l2 2 3-3"
        stroke="oklch(0.35 0.14 122)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="py-28 px-6 bg-[var(--color-muted)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div ref={headerRef} className="text-center flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[oklch(0.55_0.14_122)]"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-tight text-[var(--color-foreground)]"
          >
            Simple, honest pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-[var(--color-muted-foreground)] max-w-md mx-auto"
          >
            Start free. Upgrade when it saves you more than it costs you.
          </motion.p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-[var(--radius-2xl)] border p-6 gap-6 ${
                tier.highlighted
                  ? "bg-[var(--color-foreground)] border-[var(--color-foreground)] shadow-[var(--shadow-lg)] md:-mt-4 md:mb-4"
                  : "bg-white border-[var(--color-border)] shadow-[var(--shadow-sm)]"
              }`}
            >
              {tier.highlighted && tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="brand-gradient text-[oklch(0.25_0.10_122)] text-xs font-bold px-3 py-1 rounded-full shadow-[var(--shadow-sm)] whitespace-nowrap">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name + price */}
              <div className="flex flex-col gap-1">
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.08em] ${tier.highlighted ? "text-[oklch(0.76_0.20_122)]" : "text-[var(--color-muted-foreground)]"}`}
                >
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`text-4xl font-bold tracking-[-0.03em] ${tier.highlighted ? "text-white" : "text-[var(--color-foreground)]"}`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${tier.highlighted ? "text-[oklch(0.7_0_0)]" : "text-[var(--color-muted-foreground)]"}`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-snug mt-1 ${tier.highlighted ? "text-[oklch(0.75_0_0)]" : "text-[var(--color-muted-foreground)]"}`}
                >
                  {tier.description}
                </p>
              </div>

              {/* Founders limited spots */}
              {tier.highlighted && tier.spotsTotal && tier.spotsTaken && (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[oklch(0.76_0.20_122)] font-semibold">
                      {tier.spotsTaken}/{tier.spotsTotal} spots taken
                    </span>
                    <span className="text-[oklch(0.65_0_0)]">
                      {tier.spotsTotal - tier.spotsTaken} left
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[oklch(0.3_0_0)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${(tier.spotsTaken / tier.spotsTotal) * 100}%` }
                          : {}
                      }
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full brand-gradient"
                    />
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href={tier.ctaHref}
                className={`flex items-center justify-center text-sm font-semibold py-3 rounded-[var(--radius-lg)] transition-all duration-150 active:scale-[0.98] ${
                  tier.highlighted
                    ? "brand-gradient text-[oklch(0.25_0.10_122)] hover:opacity-90 shadow-[var(--shadow-sm)]"
                    : "border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)] hover:border-[oklch(0.85_0_0)]"
                }`}
              >
                {tier.cta}
              </a>

              {/* Divider */}
              <div
                className={`h-px ${tier.highlighted ? "bg-[oklch(0.25_0_0)]" : "bg-[var(--color-border)]"}`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon />
                    <span
                      className={`text-sm leading-snug ${tier.highlighted ? "text-[oklch(0.85_0_0)]" : "text-[var(--color-muted-foreground)]"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--color-muted-foreground)]">
          All plans include calendar sync and day-before renewal reminders. No
          hidden fees.
        </p>
      </div>
    </section>
  );
}
