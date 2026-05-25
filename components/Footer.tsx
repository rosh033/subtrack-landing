"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="border-t border-[var(--color-border)] py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="https://akmymdvyoepbxaqmfgzd.supabase.co/storage/v1/object/public/assets/subparse-logo.png"
          alt="SubParse"
          width={110}
          height={28}
          className="h-7 w-auto dark:hidden"
        />
        <Image
          src="https://akmymdvyoepbxaqmfgzd.supabase.co/storage/v1/object/public/assets/dark-subparse-logo.png"
          alt="SubParse"
          width={110}
          height={28}
          className="h-7 w-auto hidden dark:block"
        />

        <div className="flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Pricing
          </Link>
          <a
            href="#"
            className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Terms
          </a>
        </div>

        <p className="text-xs text-[var(--color-muted-foreground)]">
          &copy; {new Date().getFullYear()} SubParse. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
