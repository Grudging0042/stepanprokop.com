"use client";

import { ContentError } from "@/components/shared/ContentError";

export default function ComponentError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ContentError
      title="Component not found"
      message="The component you're looking for could not be loaded. It may have been moved or deleted."
      reset={reset}
    />
  );
}
