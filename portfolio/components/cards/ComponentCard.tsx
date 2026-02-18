"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ComponentCardData } from "@/types/content";

export interface ComponentCardProps extends ComponentCardData {
  className?: string;
}

export function ComponentCard({
  thumbnail,
  headline,
  description,
  date,
  slug,
  className,
}: ComponentCardProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className={cn("group block w-full", className)}
    >
      <div className="flex flex-col items-start gap-2">
        {/* Thumbnail with overlay icon */}
        <div className="group/image relative w-full aspect-[4/3]">
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-surface-stroke bg-surface-fill transition-shadow duration-200 group-hover/image:shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
            <Image
              src={thumbnail}
              alt={headline}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
            />

            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md bg-button-fill">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-primary">
                <path d="M10.4167 7.58333V8.55C10.4167 9.67013 10.4167 10.2301 10.1987 10.658C10.0069 11.0343 9.701 11.3403 9.32467 11.532C8.8968 11.75 8.3368 11.75 7.21667 11.75H3.95C2.82989 11.75 2.26984 11.75 1.84202 11.532C1.46569 11.3403 1.15973 11.0343 0.967987 10.658C0.75 10.2301 0.75 9.67013 0.75 8.55V4.16667C0.75 4.08929 0.75 4.05061 0.751073 4.01789C0.785547 2.96467 1.63133 2.11888 2.68456 2.08441C2.71727 2.08333 2.75596 2.08333 2.83333 2.08333H4.41667M7.41667 0.75H11.75M11.75 0.75V5.08333M11.75 0.75L5.58333 6.91667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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
