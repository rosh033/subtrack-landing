"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[var(--radius-2xl)] overflow-hidden bg-[var(--color-foreground)] px-8 py-16 md:px-16 text-center flex flex-col items-center gap-8"
        >
          {/* Radial lime glow inside dark card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.76 0.20 122 / 0.20) 0%, transparent 65%)",
            }}
          />

          {/* Subtle dot pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, oklch(0.985 0 0) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight text-white max-w-xl"
            >
              Stop paying for things you
              <br />
              forgot you signed up for.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[oklch(0.7_0_0)] max-w-md leading-relaxed"
            >
              Takes 30 seconds to set up. Free to start. Your future self will
              thank you.
            </motion.p>
            <motion.a
              href="https://app.subparse.com"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="brand-gradient text-[oklch(0.25_0.10_122)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-base"
            >
              Start for free
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.46 }}
              className="text-sm text-[oklch(0.55_0_0)]"
            >
              No credit card needed. Free plan available forever.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
