import React from "react";
import { Avatar } from "@/components/ui/Avatar";
import { HeroQuickLinks } from "./HeroQuickLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * Hero Component
 *
 * Minimal left-aligned hero section featuring:
 * - Small circular avatar
 * - Introduction paragraph
 * - Inline text quick links (Book a call / Download CV / Say Hi)
 *
 * Based on Figma node 0:4 (Desktop) and 5:15 (Mobile)
 */

export interface HeroProps {
  /** Profile image URL (light/day mode) */
  avatar: string;
  /** Profile image URL for dark/night mode */
  avatarDark?: string;
  /** Person's name — used for avatar alt text only */
  name: string;
  /** Introduction paragraph text (supports ReactNode for inline links) */
  introduction: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function Hero({ avatar, avatarDark, name, introduction, className }: HeroProps) {
  return (
    <section
      className={cn(
        "w-full px-6",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[644px] flex flex-col items-start pt-[var(--spacing-xl)] gap-[var(--spacing-lg)]">
        {/* Top row: Avatar left, ThemeToggle right */}
        <div className="flex w-full items-center justify-between py-6">
          <Avatar src={avatar} darkSrc={avatarDark} alt={name} size={100} priority />
          <ThemeToggle />
        </div>

        {/* Introduction paragraph — body-1: 18px / 400 / 24px */}
        <p className="pb-6 font-sans text-lg font-normal leading-6 tracking-[-0.01em] text-text-secondary">
          {introduction}
        </p>

        {/* Inline Quick Links */}
        <HeroQuickLinks />
      </div>
    </section>
  );
}
