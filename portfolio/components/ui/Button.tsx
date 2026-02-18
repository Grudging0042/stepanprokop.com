import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button Component
 * 
 * A flexible button component with multiple variants and sizes, styled using Figma design tokens.
 * 
 * @designTokens
 * **Default Variant:**
 * - `--theme-button-fill`: Background color
 * - `--theme-button-content`: Text color
 * - `--theme-button-border`: Border color
 * - `--theme-button-fill-hover`: Background on hover
 * - `--theme-button-fill-pressed`: Background when active/pressed
 * - `--theme-button-border-focus`: Focus outline color
 * - `--theme-button-shadow`: Box shadow color
 * 
 * **Outline Variant:**
 * - `--theme-button-outline-border`: Border color
 * - `--theme-button-outline-content`: Text color
 * - `--theme-button-outline-shadow`: Box shadow color
 * - `--theme-button-outline-fill-hover`: Background on hover
 * - `--theme-button-outline-fill-pressed`: Background when active/pressed
 * - `--theme-button-outline-border-focus`: Focus outline color
 * 
 * **Dimensions (from Figma):**
 * - Height: 36px (`h-9`)
 * - Padding: 12px vertical (`py-3`), 16px horizontal (`px-4`)
 * - Border radius: 6px (`rounded-md`, `--radius-l`)
 * - Icon gap: 6px (`gap-1.5`, `--spacing-xs`)
 * 
 * **Typography:**
 * - Font size: 14px (`text-sm`)
 * - Font weight: 500 (`font-medium`)
 * 
 * @example
 * ```tsx
 * <Button variant="default">Click me</Button>
 * <Button variant="outline" size="sm">Small button</Button>
 * ```
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--theme-button-border-focus)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-[0_1px_2px_0_var(--theme-button-shadow)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--theme-button-fill)] text-[var(--theme-button-content)] border border-[var(--theme-button-border)] hover:bg-[var(--theme-button-fill-hover)] active:bg-[var(--theme-button-fill-pressed)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[var(--theme-button-outline-border)] bg-transparent text-[var(--theme-button-outline-content)] shadow-[0_1px_2px_0_var(--theme-button-outline-shadow)] hover:bg-[var(--theme-button-outline-fill-hover)] active:bg-[var(--theme-button-outline-fill-pressed)] focus-visible:outline-[var(--theme-button-outline-border-focus)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-3 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 py-2 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 py-3 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Loading Spinner Icon Component
 * Simple animated spinner for loading state
 */
function LoadingSpinner() {
  return (
    <svg
      className="size-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled,
  children,
  loading,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const isDisabled = disabled || loading;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isDisabled}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
