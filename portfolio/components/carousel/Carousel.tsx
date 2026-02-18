"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import type { MediaItem } from "@/types/content";

const CAPTION_OVERLAY_GRADIENT =
  "linear-gradient(to top, color-mix(in srgb, var(--theme-background-primary) 70%, transparent) 0%, transparent 70%)";

export interface CarouselProps {
  items: MediaItem[];
  className?: string;
  onSlideChange?: (index: number) => void;
}

export function Carousel({ items, className, onSlideChange }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={cn("relative", className)}>
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%]"
              style={{ aspectRatio: "16/9" }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={item.alt || `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <video
                  src={item.url}
                  poster={item.poster}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay={index === selectedIndex}
                />
              )}
              {item.caption && (
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: CAPTION_OVERLAY_GRADIENT }}
                >
                  <p className="text-sm text-foreground">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      {items.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200",
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
