/**
 * MDX Components for Blog Typography
 * 
 * Custom components for MDX content with Figma design system typography.
 * Based on Figma node 70:859 (Blog typography hierarchy)
 * 
 * @designTokens
 * - Headlines: headline-1, headline-2, headline-3 (600 weight)
 * - Body text: body-2 (16px, 400 weight)
 * - Code: body-code-4 (12px, 500 weight, Fira Code)
 * - `--text-primary`: Heading colors
 * - `--text-secondary`: Body text color
 * - `--theme-surface-fill`: Code block background
 * - `--theme-surface-stroke`: Borders
 * 
 * **Typography Hierarchy:**
 * - H1: headline-1 (24px/20px mobile, 600 weight, 28px line-height)
 * - H2: headline-2 (18px/16px mobile, 600 weight, 24px line-height)
 * - H3: headline-3 (16px, 600 weight, 24px line-height)
 * - H4-H6: body-3 (14px, 600 weight, 18px line-height)
 * - Paragraph: body-2 (16px, 400 weight, 24px line-height)
 * - Code: body-code-4 (12px, 500 weight, Fira Code)
 * 
 * @usage
 * Import and pass to MDX compiler or use in blog post pages
 */

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export const MDXComponents = {
  // Include UI components that might be used in MDX
  Badge,
  
  // Standard HTML elements
  // Headings
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mb-4 mt-6 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--headline-1-size,24px)] font-[var(--headline-1-weight,600)] leading-tight tracking-[-0.01em] text-[color:var(--text-primary)] first:mt-0 sm:text-[length:24px]",
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mb-3 mt-6 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--headline-2-size,18px)] font-[var(--headline-2-weight,600)] leading-tight tracking-[-0.01em] text-[color:var(--text-primary)] first:mt-0 sm:text-[length:18px]",
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mb-2 mt-4 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--headline-3-size,16px)] font-[var(--typography-600,600)] leading-snug tracking-[-0.16px] text-[color:var(--text-primary)]",
        className
      )}
      {...props}
    />
  ),

  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mb-2 mt-4 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-3-size,14px)] font-[var(--body-3-weight,600)] leading-snug tracking-[-0.14px] text-[color:var(--text-primary)]",
        className
      )}
      {...props}
    />
  ),

  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mb-2 mt-3 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-3-size,14px)] font-[var(--body-3-weight,600)] leading-snug tracking-[-0.14px] text-[color:var(--text-primary)]",
        className
      )}
      {...props}
    />
  ),

  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mb-2 mt-3 scroll-m-20 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-3-size,14px)] font-[var(--body-3-weight,600)] leading-snug tracking-[-0.14px] text-[color:var(--text-primary)]",
        className
      )}
      {...props}
    />
  ),

  // Paragraph
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mb-3 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-2-size,16px)] font-[var(--body-2-weight,400)] leading-relaxed tracking-[-0.16px] text-[color:var(--text-secondary)] [&:not(:first-child)]:mt-3",
        className
      )}
      {...props}
    />
  ),

  // Lists
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "mb-3 ml-6 list-disc space-y-1 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-2-size,16px)] font-[var(--body-2-weight,400)] leading-relaxed tracking-[-0.16px] text-[color:var(--text-secondary)]",
        className
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "mb-3 ml-6 list-decimal space-y-1 font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-2-size,16px)] font-[var(--body-2-weight,400)] leading-relaxed tracking-[-0.16px] text-[color:var(--text-secondary)]",
        className
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),

  // Blockquote
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mb-4 mt-4 border-l-4 border-[var(--theme-surface-stroke)] pl-4 italic text-[color:var(--text-secondary)]",
        className
      )}
      {...props}
    />
  ),

  // Inline code
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded-[4px] bg-[var(--theme-surface-fill)] px-[6px] py-[2px] font-[family-name:var(--typography-code,'Fira_Code',monospace)] text-[length:var(--body-code-4-size,12px)] font-[var(--body-code-4-weight,500)] tracking-[-0.12px]",
        className
      )}
      {...props}
    />
  ),

  // Code block (pre-formatted)
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-4 overflow-x-auto rounded-lg border border-[var(--theme-surface-stroke)] bg-[var(--theme-surface-fill)] p-4",
        className
      )}
      {...props}
    />
  ),

  // Links
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          "font-medium text-[color:var(--text-primary)] underline underline-offset-4 transition-colors hover:text-[color:var(--text-secondary)]",
          className
        )}
        {...props}
      />
    );
  },

  // Images
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="mb-4 mt-4 block">
      <img
        className={cn("rounded-lg border border-[var(--theme-surface-stroke)]", className)}
        alt={alt || ""}
        {...props}
      />
      {alt && (
        <span className="mt-2 block text-center font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-4-size,12px)] font-[var(--body-4-weight,500)] italic text-[color:var(--text-secondary)]">
          {alt}
        </span>
      )}
    </span>
  ),

  // Horizontal rule
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn("my-8 border-t border-[var(--theme-surface-stroke)]", className)}
      {...props}
    />
  ),

  // Table
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 w-full overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse font-[family-name:var(--typography-body,'Inter',sans-serif)] text-[length:var(--body-2-size,16px)]",
          className
        )}
        {...props}
      />
    </div>
  ),

  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("border-b-2 border-[var(--theme-surface-stroke)]", className)} {...props} />
  ),

  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={cn("", className)} {...props} />
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("border-b border-[var(--theme-surface-stroke)] transition-colors hover:bg-[var(--theme-surface-fill)]", className)}
      {...props}
    />
  ),

  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-[var(--body-3-weight,600)] text-[color:var(--text-primary)] [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),

  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "px-4 py-2 text-[color:var(--text-secondary)] [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),

  // Strong (bold)
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-[var(--body-3-weight,600)]", className)} {...props} />
  ),

  // Emphasis (italic)
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("italic", className)} {...props} />
  ),
};

export default MDXComponents;
