"use client";

import { useEffect } from "react";
import { trackProjectView } from "@/lib/analytics";

interface PageViewTrackerProps {
  projectName: string;
  projectClient?: string;
}

/**
 * Client component for tracking project page views
 * Must be used inside a client component boundary
 */
export function PageViewTracker({ projectName, projectClient }: PageViewTrackerProps) {
  useEffect(() => {
    // Track the page view when component mounts
    trackProjectView(projectName, projectClient);
  }, [projectName, projectClient]);

  // This component doesn't render anything
  return null;
}

