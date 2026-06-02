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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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

        {/* Mobile CTAs */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://app.subparse.com/login"
            className="inline-flex items-center leading-none text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Log in
          </a>
          <a
            href="https://app.subparse.com/signup"
            className="brand-gradient text-[oklch(0.25_0.10_122)] text-sm font-semibold px-4 py-2 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            Start
          </a>
        </div>

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
            href="https://app.subparse.com/login"
            className="inline-flex items-center leading-none text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Log in
          </a>
          <a
            href="https://app.subparse.com/signup"
            className="brand-gradient text-[oklch(0.25_0.10_122)] text-sm font-semibold px-4 py-2 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            Start for free
          </a>
        </div>
      </nav>
    </header>
  );
}
