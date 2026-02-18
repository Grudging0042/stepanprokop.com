"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackButton } from "./BackButton";

interface ContentErrorProps {
  title: string;
  message: string;
  reset: () => void;
  showBackNav?: boolean;
}

export function ContentError({
  title,
  message,
  reset,
  showBackNav = true,
}: ContentErrorProps) {
  return (
    <div className="container-narrow py-12">
      <div className="space-y-8">
        {showBackNav && <BackButton />}

        <div className="space-y-6 text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{message}</p>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button onClick={reset}>Try again</Button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
