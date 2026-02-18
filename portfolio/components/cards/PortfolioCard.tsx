"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PortfolioCardData } from "@/types/content";

export interface PortfolioCardProps extends PortfolioCardData {
  className?: string;
}

export function PortfolioCard({
  thumbnail,
  icon,
  headline,
  date,
  slug,
  className,
}: PortfolioCardProps) {
  const iconSrc = icon || "/images/icons/icon-default.svg";

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn("group block w-full", className)}
    >
      <div className="flex flex-col items-start gap-3">
        {/* Thumbnail */}
        <div className="group/image relative w-full aspect-square">
          <div className="relative w-full h-full rounded-2xl border border-surface-stroke bg-surface-fill overflow-hidden transition-shadow duration-200 group-hover/image:shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            <Image
              src={thumbnail}
              alt={headline}
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 340px"
            />
          </div>
        </div>

        {/* Content row: icon + headline | date */}
        <div className="group/text flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-[10px] min-w-0 pt-px">
            <div className="relative shrink-0 h-6 w-6 overflow-hidden">
              <Image
                src={iconSrc}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-cover"
                aria-hidden="true"
                unoptimized
              />
            </div>

            <p className="flex-1 min-w-0 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-text-primary underline underline-offset-2 [text-decoration-color:transparent] transition-[text-decoration-color] duration-200 group-hover/text:[text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)]">
              {headline}
            </p>
          </div>

          <p className="shrink-0 mt-[5px] font-mono text-xs font-medium leading-6 tracking-[-0.01em] text-text-secondary whitespace-nowrap">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
}
