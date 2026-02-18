"use client";

import { ContentError } from "@/components/shared/ContentError";

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ContentError
      title="Article not found"
      message="The article you're looking for could not be loaded. It may have been moved or deleted."
      reset={reset}
    />
  );
}
