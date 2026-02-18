"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  autoPlayOnView?: boolean; // Auto-play when visible in viewport
}

export function VideoPlayer({
  src,
  poster,
  alt,
  className,
  muted = true,
  loop = true,
  controls = false,
  autoPlayOnView = true,
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Video must be 50% visible to trigger
    triggerOnce: false, // Re-trigger when scrolling back
  });

  // Handle auto-play when video comes into view
  React.useEffect(() => {
    if (!videoRef.current || !autoPlayOnView) return;

    if (inView) {
      videoRef.current.play().catch((error) => {
        // Auto-play was prevented (e.g., browser policy)
        console.warn("Auto-play prevented:", error);
      });
    } else {
      videoRef.current.pause();
    }
  }, [inView, autoPlayOnView]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="h-full w-full object-cover"
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        aria-label={alt || "Video player"}
      />
    </div>
  );
}
