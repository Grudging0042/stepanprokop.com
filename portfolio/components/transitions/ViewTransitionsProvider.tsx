"use client";

import * as React from "react";

/**
 * Provider that enables View Transitions API support
 * Handles feature detection and provides context for transitions
 */
export function ViewTransitionsProvider({ children }: { children: React.ReactNode }) {
  // Check if View Transitions API is supported
  const isSupported = React.useMemo(() => {
    if (typeof document === "undefined") return false;
    return "startViewTransition" in document;
  }, []);

  // Add support flag to window for other components
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__VIEW_TRANSITIONS_SUPPORTED__ = isSupported;
    }
  }, [isSupported]);

  return <>{children}</>;
}

/**
 * Check if View Transitions API is supported
 */
export function isViewTransitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return (window as any).__VIEW_TRANSITIONS_SUPPORTED__ ?? false;
}



