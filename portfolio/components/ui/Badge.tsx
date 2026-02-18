import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Badge Component
 * 
 * A compact label component for displaying tags, categories, or status indicators,
 * styled using Figma design tokens.
 * 
 * @designTokens
 * **Default Variant:**
 * - `--theme-surface-fill`: Background color
 * - `--theme-surface-stroke`: Border color
 * - `--theme-text-secondary`: Text color
 * 
 * **Outline Variant:**
 * - `--theme-surface-stroke`: Border color
 * - `text-foreground`: Text color (inherits from theme)
 * 
 * **Dimensions (from Figma):**
 * - Height: 24px (`h-6`, `--size-size-6`)
 * - Padding: 12px horizontal (`px-3`, `--spacing-m`)
 * - Border radius: 6px (`rounded-md`, `--radius-l`)
 * - Icon gap: 4px (`gap-1`)
 * 
 * **Typography:**
 * - Font size: 12px (`text-xs`)
 * - Font weight: 500 (`font-medium`)
 * - Letter spacing: -0.01em (from body-4 scale)
 * 
 * @example
 * ```tsx
 * <Badge>React</Badge>
 * <Badge variant="outline">TypeScript</Badge>
 * ```
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-3 h-6 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[var(--theme-surface-fill)] text-[var(--theme-text-secondary)] border-[var(--theme-surface-stroke)] [a&]:hover:bg-[var(--theme-surface-fill)]/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "bg-transparent text-foreground border-[var(--theme-surface-stroke)] [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
