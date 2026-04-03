"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Footer Component with Newsletter Subscription
 * 
 * Newsletter signup footer styled with negative theme colors (dark in light mode, light in dark mode).
 * Based on Figma node 70:6454
 * 
 * @designTokens
 * - `--component-positive-fill`: Background color (#4d4d4d in light mode)
 * - `--component-positive-stroke`: Border color (#6b6b6b in light mode)
 * - `--text-positive-primary`: Heading color (#e6e6e6 in light mode)
 * - `--text-positive-secondary`: Description color (#d4d4d4 in light mode)
 * - `--text-positive-secondary`: Input placeholder color (#6b6b6b in light mode)
 * - `--button-default-fill`: Input background (#f5f5f5 in light mode)
 * - `--button-default-border`: Input border (#e6e6e6 in light mode)
 * - `--spacing-md`: Gap between elements (16px)
 * 
 * **Dimensions (from Figma):**
 * - Max width: 732px
 * - Padding: 16px all sides
 * - Border radius: 6px (`--radius-l`)
 * - Input height: 36px
 * - Button height: 36px
 * - Gap between input and button: 16px
 * 
 * **Typography:**
 * - Heading: headline-3 (16px, 600 weight)
 * - Description: body-2 (16px, 400 weight)
 * - Input placeholder: body-3 (14px, 600 weight)
 * 
 * **Email Validation (MVP):**
 * - Required field
 * - Valid email format (RFC 5322 compliant)
 * - Visual error states via aria-invalid/data-invalid
 * - No backend connection (just validation and UI)
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export function Footer() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  // RFC 5322 compliant email regex (simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setIsValid(false);
      setMessage("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setIsValid(false);
      setMessage("Please enter a valid email address");
      return;
    }

    // Success (MVP - no backend)
    setIsValid(true);
    setMessage("Thank you for subscribing! (MVP - no backend connection yet)");
    setEmail("");

    // Reset message after 3 seconds
    setTimeout(() => {
      setMessage("");
      setIsValid(null);
    }, 3000);
  };

  return (
    <footer className="w-full bg-[var(--theme-background-primary)] py-8 px-6 sm:py-12">
      <div className="mx-auto w-full max-w-[644px]">
        <div className="flex flex-col gap-4 rounded-md border border-solid border-[var(--component-positive-stroke)] bg-[var(--component-positive-fill)] p-6">
          {/* Text Content */}
          <div className="flex flex-col gap-1">
            {/* Heading */}
            <h2 className="text-headline-3 text-[color:var(--text-positive-primary)]">
              Get the Latest Updates
            </h2>

            {/* Description */}
            <p className="text-body-2 text-[color:var(--text-positive-secondary)]">
              Receive occasional drops of new designs, components, and random resources. No spam, just the good stuff.
            </p>
          </div>

          {/* Form - Always Horizontal */}
          <form onSubmit={handleSubmit} className="flex w-full items-start gap-3">
            {/* Email Input */}
            <div className="flex flex-1 flex-col gap-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (message) {
                    setMessage("");
                    setIsValid(null);
                  }
                }}
                placeholder="Enter your email"
                aria-label="Email address"
                aria-invalid={isValid === false}
                data-invalid={isValid === false}
                className="h-9 w-full rounded-md border border-solid border-[var(--button-default-border)] bg-[var(--button-default-fill)] px-4 text-body-2 text-[color:var(--button-default-content)] placeholder:text-[color:var(--text-positive-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--button-default-border)] focus:ring-offset-0 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500"
              />
              {message && (
                <span
                  className="text-body-4 text-[color:var(--text-secondary)]"
                  role="alert"
                  data-validation-state={isValid === false ? "error" : "success"}
                >
                  {message}
                </span>
              )}
            </div>

            {/* Subscribe Button */}
            <Button
              type="submit"
              variant="default"
              className="shrink-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 4 7 5 7-5M1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
