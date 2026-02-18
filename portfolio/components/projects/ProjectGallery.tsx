"use client";

import * as React from "react";
import Image from "next/image";
import { VideoPlayer } from "@/components/carousel/VideoPlayer";
import type { MediaItem } from "@/types/content";
import { cn } from "@/lib/utils";

export interface ProjectGalleryProps {
  items: MediaItem[];
  className?: string;
  columns?: 1 | 2 | 3;
}

export function ProjectGallery({ items, className, columns = 2 }: ProjectGalleryProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-6",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
        },
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg border">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.alt || `Gallery item ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <VideoPlayer
                src={item.url}
                poster={item.poster}
                alt={item.alt}
                className="transition-transform duration-300 group-hover:scale-105"
                autoPlayOnView={true}
              />
            )}
          </div>

          {item.caption && (
            <div className="bg-muted p-3">
              <p className="text-sm text-muted-foreground">{item.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
