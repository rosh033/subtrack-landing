"use client";

import { useState } from "react";

/**
 * Returns true when the page is loaded via a back/forward navigation
 * (browser Back button or bfcache restore). Used to skip mount-time entry
 * animations that would otherwise leave content invisibly stuck at their
 * `initial` state due to a Next.js 16 hydration race on Back navigation.
 */
export function useSkipEntry() {
  const [skip] = useState(() => {
    if (typeof window === "undefined") return false;
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    return nav?.type === "back_forward";
  });
  return skip;
}
