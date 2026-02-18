"use client";

import { ContentError } from "@/components/shared/ContentError";

export default function ProjectError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ContentError
      title="Project not found"
      message="The project you're looking for could not be loaded. It may have been moved or deleted."
      reset={reset}
    />
  );
}
