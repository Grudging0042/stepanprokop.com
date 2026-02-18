"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { trackComponentView, trackComponentInteraction } from "@/lib/analytics";

interface ComponentPreviewProps {
  url: string;
  title: string;
  type?: string; // Component type for tracking
  isCard?: boolean; // If true, limit interactivity for card display
  className?: string;
}

/**
 * ComponentPreview - Wrapper for embedding interactive components
 * Displays components in an iframe with optional interactivity control
 */
export function ComponentPreview({
  url,
  title,
  type = "unknown",
  isCard = false,
  className,
}: ComponentPreviewProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasTrackedView, setHasTrackedView] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Load only once when in view
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Track component view when loaded and in view
  React.useEffect(() => {
    if (isLoaded && inView && !hasTrackedView) {
      trackComponentView(title, type);
      setHasTrackedView(true);
    }
  }, [isLoaded, inView, hasTrackedView, title, type]);

  // Track interaction when user interacts with iframe
  const handleInteraction = () => {
    if (!isCard) {
      trackComponentInteraction(title, "iframe_click");
    }
  };

  return (
    <div ref={ref} className={`relative h-full w-full ${className || ""}`}>
      {/* Loading state */}
      {!isLoaded && inView && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}

      {/* Iframe - only load when in view */}
      {inView && (
        <iframe
          src={url}
          title={title}
          className={`h-full w-full border-0 ${isCard ? "pointer-events-none" : ""}`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
          onLoad={handleLoad}
          onClick={handleInteraction}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      )}

      {/* Overlay for card to ensure click navigates */}
      {isCard && (
        <div className="absolute inset-0 cursor-pointer bg-transparent hover:bg-transparent" />
      )}
    </div>
  );
}
