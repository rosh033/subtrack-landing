"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSkipEntry } from "@/lib/useSkipEntry";
import { FOUNDERS_CAP } from "@/lib/foundersConstants";

export default function Hero({ foundersTaken }: { foundersTaken: number | null }) {
  const spotsLeft =
    foundersTaken === null ? null : Math.max(0, FOUNDERS_CAP - foundersTaken);
  const showFoundersBadge = spotsLeft !== null && spotsLeft > 0;
  const mockupRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.88]);
  const skipEntry = useSkipEntry();
  const entryInitial = (value: Record<string, number>) =>
    skipEntry ? false : value;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16">

      {/* Subtle grid overlay — extends below section so fade bleeds into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 opacity-[0.025]"
        style={{
          bottom: "-8rem",
          backgroundImage:
            "linear-gradient(oklch(0.145 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.145 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5 sm:gap-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={entryInitial({ opacity: 0, y: 8 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {showFoundersBadge ? (
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[oklch(0.76_0.20_122_/_0.35)] bg-[oklch(0.76_0.20_122_/_0.10)] hover:bg-[oklch(0.76_0.20_122_/_0.18)] hover:border-[oklch(0.76_0.20_122_/_0.55)] transition-all duration-200 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.55_0.18_122)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.50_0.18_122)]" />
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-[oklch(0.32_0.12_122)]">
                Only {spotsLeft} founder spot{spotsLeft === 1 ? "" : "s"} left
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-[oklch(0.45_0.14_122)] group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path
                  d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[oklch(0.76_0.20_122_/_0.12)] text-[oklch(0.35_0.12_122)] border border-[oklch(0.76_0.20_122_/_0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.18_122)] inline-block" />
              AI-powered subscription tracking
            </span>
          )}
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={entryInitial({ opacity: 0, y: 12 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="flex flex-col items-center gap-3"
        >
          {/* Mobile headline */}
          <h1 className="sm:hidden text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-[var(--color-foreground)]">
            Losing{" "}
            <span
              className="relative inline-block px-2"
              style={{
                background:
                  "linear-gradient(135deg, #E8FF80 0%, #D4EE58 100%)",
                borderRadius: "0.35em",
                paddingLeft: "0.25em",
                paddingRight: "0.25em",
              }}
            >
              $205 a year
            </span>
            <br />
            to forgotten renewals?
          </h1>
          {/* Desktop headline */}
          <h1 className="hidden sm:block sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.1] text-[var(--color-foreground)]">
            The average person
            <br />
            <span className="relative inline-block">
              loses{" "}
              <span
                className="relative inline-block px-2"
                style={{
                  background:
                    "linear-gradient(135deg, #E8FF80 0%, #D4EE58 100%)",
                  borderRadius: "0.35em",
                  paddingLeft: "0.25em",
                  paddingRight: "0.25em",
                }}
              >
                $205 a year
              </span>
            </span>
            <br />
            to forgotten renewals.
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={entryInitial({ opacity: 0, y: 12 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-lg sm:text-xl text-[var(--color-muted-foreground)] leading-relaxed max-w-2xl font-[450]"
        >
          Add any subscription in seconds. Screenshot or manual, we&apos;ll
          remind you before every renewal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={entryInitial({ opacity: 0, y: 12 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            id="hero-cta"
            href="https://app.subparse.com/signup"
            className="brand-gradient text-[oklch(0.25_0.10_122)] font-semibold px-7 py-3.5 rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-base"
          >
            Start for free
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors flex items-center gap-1.5 py-3.5 px-4"
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 11l4-4-4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* App UI Mockup */}
        <motion.div
          initial={entryInitial({ opacity: 0, y: 24 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36 }}
          className="w-full max-w-3xl mt-4"
        >
          <motion.div
            ref={mockupRef}
            style={{ scale }}
          >
          <div className="rounded-[var(--radius-2xl)] overflow-hidden border border-[var(--color-border)] shadow-[0_4px_12px_oklch(0_0_0_/_0.06),0_16px_40px_oklch(0_0_0_/_0.12),0_32px_80px_oklch(0_0_0_/_0.10)]">
            <video
              src="https://akmymdvyoepbxaqmfgzd.supabase.co/storage/v1/object/public/assets/aiupload-v3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full block"
            />
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
