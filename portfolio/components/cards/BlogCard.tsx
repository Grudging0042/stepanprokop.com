"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogCardData } from "@/types/content";

export interface BlogCardProps extends BlogCardData {
  className?: string;
}

export function BlogCard({
  thumbnail,
  headline,
  description,
  date,
  slug,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn("group block w-full", className)}
    >
      <div className="flex flex-col items-start gap-2">
        {/* Thumbnail */}
        <div className="group/image relative w-full aspect-[16/9]">
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-surface-stroke bg-surface-fill transition-shadow duration-200 group-hover/image:shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            <Image
              src={thumbnail}
              alt={headline}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="group/text flex w-full flex-col gap-0">
          <div className="flex w-full items-baseline justify-between gap-2">
            <p className="flex-1 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-text-primary underline underline-offset-2 [text-decoration-color:transparent] transition-[text-decoration-color] duration-200 group-hover/text:[text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)]">
              {headline}
            </p>

            <p className="shrink-0 mt-[5px] font-mono text-xs font-medium leading-6 tracking-[-0.01em] text-text-secondary whitespace-nowrap">
              {date}
            </p>
          </div>

          <p className="w-full font-sans text-base font-normal leading-6 tracking-[-0.01em] text-text-secondary">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
