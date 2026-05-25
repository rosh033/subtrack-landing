"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO_LIGHT =
  "https://akmymdvyoepbxaqmfgzd.supabase.co/storage/v1/object/public/assets/subparse-logo.png";
const LOGO_DARK =
  "https://akmymdvyoepbxaqmfgzd.supabase.co/storage/v1/object/public/assets/dark-subparse-logo.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowCTA(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-sm)] border-[var(--color-border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO_LIGHT}
            alt="SubParse"
            width={130}
            height={34}
            priority
            className="h-8 w-auto dark:hidden"
          />
          <Image
            src={LOGO_DARK}
            alt="SubParse"
            width={130}
            height={34}
            priority
            className="h-8 w-auto hidden dark:block"
          />
        </Link>

        {/* Mobile CTA */}
        <a
          href="https://app.subparse.com"
          aria-hidden={!showCTA}
          className={`md:hidden brand-gradient text-[oklch(0.25_0.10_122)] text-sm font-semibold px-4 py-2 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:opacity-90 active:scale-[0.98] transition-all duration-200 ${
            showCTA
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          Start
        </a>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="#how-it-works"
            className="inline-flex items-center leading-none text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center leading-none text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Pricing
          </Link>
          <a
            href="https://app.subparse.com"
            aria-hidden={!showCTA}
            className={`brand-gradient text-[oklch(0.25_0.10_122)] text-sm font-semibold px-4 py-2 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:opacity-90 active:scale-[0.98] transition-all duration-200 ${
              showCTA
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            Start for free
          </a>
        </div>
      </nav>
    </header>
  );
}
