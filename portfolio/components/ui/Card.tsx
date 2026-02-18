import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Card Component
 * 
 * A container component for grouping related content, styled using Figma design tokens.
 * Features smooth hover effects and theme-aware colors.
 * 
 * @designTokens
 * - `--theme-surface-fill`: Card background color
 * - `--theme-surface-stroke`: Card border color
 * - `--theme-button-shadow`: Hover shadow color
 * - `--spacing-l`: Internal padding and gap (16px)
 * - `--radius-xxl`: Border radius (16px)
 * 
 * **Dimensions (from Figma):**
 * - Padding: 16px all sides (`p-4`)
 * - Border radius: 16px (`rounded-2xl`, `--radius-xxl`)
 * - Gap: 16px between children (`gap-4`, `--spacing-l`)
 * - Border: 1px solid (`border`)
 * 
 * **Hover Effects:**
 * - Scale: 1.02x (`hover:scale-[1.02]`)
 * - Shadow: 0 4px 8px with token color
 * - Transition: 200ms cubic-bezier(0.4, 0, 0.2, 1)
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content here</CardContent>
 * </Card>
 * ```
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-[var(--theme-surface-fill)] text-card-foreground flex flex-col gap-4 rounded-2xl border border-[var(--theme-surface-stroke)] p-4 shadow-sm transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-[0_4px_8px_0_var(--theme-button-shadow)]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardTitle Component
 * 
 * Displays the card's title using headline-3 typography scale.
 * 
 * @designTokens
 * - Typography: `text-headline-3` (16px, 600 weight, 24px line-height)
 * - Color: Inherits from parent (typically `--text-primary`)
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-base", className)}
      {...props}
    />
  );
}

/**
 * CardDescription Component
 * 
 * Displays the card's description or subtitle text.
 * 
 * @designTokens
 * - `--theme-text-secondary`: Text color for descriptions
 * - Typography: `body-2` (16px, 400 weight, 24px line-height)
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[var(--theme-text-secondary)] text-base", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-4", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
