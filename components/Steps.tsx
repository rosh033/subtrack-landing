"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Drop in a screenshot or email.",
    description:
      "Works with billing receipts, confirmation emails, and app screenshots. If it has a price and a date, SubParse can read it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 11l2.5 2.5L14 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 3v3M11 16v3M3 11h3M16 11h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    mockup: (
      <div className="relative w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-md)]">
        <div className="flex flex-col items-center justify-center gap-3 py-6 rounded-[var(--radius-lg)] border-2 border-dashed border-[oklch(0.76_0.20_122_/_0.35)] bg-[oklch(0.76_0.20_122_/_0.04)]">
          <div className="w-10 h-10 rounded-[var(--radius-lg)] brand-gradient flex items-center justify-center shadow-[var(--shadow-sm)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3v9M5 8l4-4 4 4"
                stroke="oklch(0.25 0.10 122)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 14h12"
                stroke="oklch(0.25 0.10 122)"
                strokeWidth="1.75"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-[var(--color-foreground)]">
            Drop your screenshot here
          </p>
          <p className="text-xs text-[var(--color-muted-foreground)]">
            or paste a billing email
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "AI reads it and fills in the details.",
    description:
      "Subscription name, cost, and renewal date — done in seconds. No typing, no copy-pasting. Just confirm and save.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7.5 11h7M11 7.5v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M8.5 9.5l5 3-5 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    mockup: (
      <div className="w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-md)] flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[oklch(0.76_0.20_122_/_0.2)] animate-pulse" />
          <span className="text-xs font-medium text-[oklch(0.35_0.12_122)]">
            AI is reading your screenshot...
          </span>
        </div>
        {[
          { label: "Service", value: "Netflix" },
          { label: "Amount", value: "$15.99 / mo" },
          { label: "Next renewal", value: "June 14, 2026" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-xs text-[var(--color-muted-foreground)]">
              {label}
            </span>
            <div className="flex items-center gap-2 h-9 px-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-muted)] text-sm font-medium">
              {value}
              <span className="ml-auto text-[oklch(0.55_0.16_122)] text-xs font-semibold">
                AI filled
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Everything lands in one dashboard.",
    description:
      "See all your subscriptions and your total monthly spend at a glance. Active subs, free trials, upcoming renewals — all in one view.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="12"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="12"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    mockup: (
      <div className="w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-md)] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide">
            Monthly spend
          </span>
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            $143.97
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Netflix", amount: "$15.99", trial: false },
            { name: "Spotify", amount: "$11.99", trial: false },
            { name: "Adobe CC", amount: "$59.99", trial: false },
            { name: "Notion Pro", amount: "Free trial", trial: true },
          ].map(({ name, amount, trial }) => (
            <div
              key={name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-lg)] border border-[var(--color-border)] hover:bg-[var(--color-muted)] transition-colors"
            >
              <div className="w-7 h-7 rounded-md bg-[oklch(0.93_0_0)] flex-shrink-0" />
              <span className="text-sm font-medium flex-1">{name}</span>
              <span
                className={`text-xs font-semibold ${trial ? "text-[oklch(0.45_0.14_122)]" : "text-[var(--color-foreground)]"}`}
              >
                {amount}
              </span>
              {trial && (
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-[oklch(0.76_0.20_122_/_0.15)] text-[oklch(0.35_0.12_122)] border border-[oklch(0.76_0.20_122_/_0.3)]">
                  Trial
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Sync to Apple or Google Calendar.",
    description:
      "One tap and your subscriptions show up where you already live. No extra apps, no extra setup. Your renewals become calendar events.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="5"
          width="16"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 3v4M15 3v4M3 10h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="7" y="13" width="3" height="3" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="12" y="13" width="3" height="3" rx="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    mockup: (
      <div className="w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-md)] flex flex-col gap-4">
        <p className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide">
          Add to calendar
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              name: "Apple Calendar",
              icon: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
            },
            {
              name: "Google Calendar",
              icon: "https://img.icons8.com/?size=100&id=WKF3bm1munsk&format=png&color=000000",
            },
          ].map(({ name, icon }) => (
            <button
              key={name}
              className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] hover:border-[oklch(0.76_0.20_122_/_0.5)] hover:bg-[oklch(0.76_0.20_122_/_0.04)] transition-all text-sm font-medium"
            >
              <Image src={icon} alt={name} width={20} height={20} className="w-5 h-5" />
              {name}
              <span className="ml-auto text-[var(--color-muted-foreground)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 11l4-4-4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
        <p className="text-xs text-[var(--color-muted-foreground)]">
          Renewals appear as all-day events with a reminder built in.
        </p>
      </div>
    ),
  },
  {
    number: "05",
    title: "Get a reminder the day before each renewal.",
    description:
      "No more surprise charges. SubParse notifies you 24 hours before any subscription renews so you have time to cancel if you want to.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3a1 1 0 0 1 1 1v1.07A6 6 0 0 1 17 11v4l1.5 1.5a.5.5 0 0 1-.35.85H3.85a.5.5 0 0 1-.35-.85L5 15v-4a6 6 0 0 1 5-5.93V4a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 17.5a2 2 0 0 0 4 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    mockup: (
      <div className="w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-md)] flex flex-col gap-3">
        {/* Push notification mockup */}
        <div className="flex items-start gap-3 p-3.5 rounded-[var(--radius-lg)] bg-[oklch(0.97_0_0)] border border-[var(--color-border)]">
          <div className="w-9 h-9 rounded-[var(--radius-md)] brand-gradient flex-shrink-0 flex items-center justify-center shadow-[var(--shadow-sm)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2a1 1 0 0 1 1 1v.7A4.5 4.5 0 0 1 12.5 8v3l1 1a.4.4 0 0 1-.28.68H2.78A.4.4 0 0 1 2.5 12l1-1V8A4.5 4.5 0 0 1 7 3.7V3a1 1 0 0 1 1-1Z"
                stroke="oklch(0.25 0.10 122)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-xs font-semibold text-[var(--color-foreground)]">
                SubParse
              </span>
              <span className="text-[10px] text-[var(--color-muted-foreground)]">
                now
              </span>
            </div>
            <p className="text-sm text-[var(--color-foreground)] leading-snug">
              <span className="font-medium">Adobe Creative Cloud</span> renews
              tomorrow for{" "}
              <span className="font-medium text-[oklch(0.35_0.12_122)]">
                $59.99
              </span>
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-muted-foreground)] text-center">
          Sent 24 hours before every renewal, automatically.
        </p>
      </div>
    ),
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold font-[family-name:var(--font-mono)] tracking-[0.1em] text-[oklch(0.65_0.12_122)] select-none">
            {step.number}
          </span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-[var(--radius-lg)] flex-shrink-0 flex items-center justify-center text-[oklch(0.35_0.12_122)] bg-[oklch(0.76_0.20_122_/_0.12)] border border-[oklch(0.76_0.20_122_/_0.2)]">
            {step.icon}
          </div>
          <h3 className="text-2xl font-bold tracking-[-0.025em] leading-tight text-[var(--color-foreground)] pt-1">
            {step.title}
          </h3>
        </div>
        <p className="text-base text-[var(--color-muted-foreground)] leading-relaxed pl-12">
          {step.description}
        </p>
      </motion.div>

      {/* Mockup side */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 w-full max-w-sm"
      >
        {step.mockup}
      </motion.div>
    </div>
  );
}

export default function Steps() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        {/* Section header */}
        <div ref={headerRef} className="text-center flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[oklch(0.55_0.14_122)]"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-tight text-[var(--color-foreground)]"
          >
            From screenshot to reminder
            <br />
            in under 30 seconds.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-[var(--color-muted-foreground)] max-w-xl mx-auto"
          >
            The whole point of SubParse is zero friction. The less you have to
            think about it, the more likely you are to actually use it.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
