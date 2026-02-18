"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Avatar Component
 * 
 * Displays a circular profile image with a subtle border outline.
 * Based on Figma node 5:234
 * 
 * @designTokens
 * - `--avatar-outline`: Border outline color (#2a2a2a with 10% opacity)
 * 
 * **Dimensions (from Figma):**
 * - Default size: 100x100px
 * - Border radius: 1000px (fully circular)
 * - Border: 1px solid with 10% opacity
 * 
 * **Usage:**
 * Simple image container with circular mask. No fallback states, status indicators, or initials.
 * 
 * @example
 * ```tsx
 * <Avatar
 *   src="/images/profile.jpg"
 *   alt="Profile photo"
 *   size={100}
 * />
 * ```
 */

export interface AvatarProps {
  /** Image source URL (light/day mode) */
  src: string;
  /** Image source URL for dark/night mode (optional, falls back to src) */
  darkSrc?: string;
  /** Alt text for accessibility (required) */
  alt: string;
  /** Avatar size in pixels (default: 100) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Priority loading for above-the-fold images */
  priority?: boolean;
}

export function Avatar({
  src,
  darkSrc,
  alt,
  size = 100,
  className,
  priority = false,
}: AvatarProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Profile Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: 1000,
        }}
      >
        {/* Day mode image */}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", darkSrc && "dark:hidden")}
          sizes={`${size}px`}
        />
        {/* Night mode image */}
        {darkSrc && (
          <Image
            src={darkSrc}
            alt={alt}
            fill
            priority={priority}
            className="object-cover hidden dark:block"
            sizes={`${size}px`}
          />
        )}
      </div>

      {/* Border Outline (10% opacity) */}
      <div
        className="pointer-events-none absolute left-0 top-0 border border-solid border-[var(--avatar-outline,#2a2a2a)] opacity-10"
        style={{
          width: size,
          height: size,
          borderRadius: 100,
        }}
      />
    </div>
  );
}
