"use client";

import { ContentError } from "@/components/shared/ContentError";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ContentError
      title="Something went wrong!"
      message="An unexpected error occurred. Our team has been notified."
      reset={reset}
      showBackNav={false}
    />
  );
}
