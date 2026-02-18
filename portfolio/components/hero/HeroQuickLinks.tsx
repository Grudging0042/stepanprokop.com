import { cn } from "@/lib/utils";

/**
 * Hero Quick Links Component
 *
 * Inline text links styled as a single sentence:
 * "Book a quick cal, download CV or say hi!"
 *
 * Matches Figma design — NOT large buttons, but underlined text links.
 */

export interface HeroQuickLinksProps {
  className?: string;
}

export function HeroQuickLinks({ className }: HeroQuickLinksProps) {
  return (
    <p
      className={cn(
        "font-['Inter',sans-serif] text-base font-normal leading-6 tracking-[-0.01em] text-[color:var(--theme-text-secondary,#6b6b6b)]",
        className
      )}
    >
      <a
        href="https://cal.com/stepanprokop"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--theme-text-primary,#4d4d4d)] underline underline-offset-2 [text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)] hover:[text-decoration-color:var(--theme-text-primary,#4d4d4d)] transition-colors"
      >
        Book a quick cal
      </a>
      {", "}
      <a
        href="https://cloud.stepanprokop.com/s/stepanprokop-cv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--theme-text-primary,#4d4d4d)] underline underline-offset-2 [text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)] hover:[text-decoration-color:var(--theme-text-primary,#4d4d4d)] transition-colors"
      >
        download CV
      </a>
      {" or "}
      <a
        href="mailto:me@stepanprokop.com"
        className="text-[color:var(--theme-text-primary,#4d4d4d)] underline underline-offset-2 [text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)] hover:[text-decoration-color:var(--theme-text-primary,#4d4d4d)] transition-colors"
      >
        say hi!
      </a>
    </p>
  );
}
