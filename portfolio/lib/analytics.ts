/**
 * Analytics helper functions for Umami tracking
 * These functions provide a simple interface for tracking custom events
 */

// Umami tracking function types
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * Track a custom event with Umami
 * @param eventName - Name of the event to track
 * @param eventData - Optional data to include with the event
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window !== "undefined" && window.umami) {
    try {
      window.umami.track(eventName, eventData);
    } catch (error) {
      console.error("Failed to track event:", error);
    }
  }
}

/**
 * Track component preview view
 * @param componentName - Name of the component being viewed
 * @param componentType - Type/framework of the component
 */
export function trackComponentView(componentName: string, componentType: string): void {
  trackEvent("component_view", {
    component: componentName,
    type: componentType,
  });
}

/**
 * Track component interaction
 * @param componentName - Name of the component being interacted with
 * @param interactionType - Type of interaction (click, hover, etc.)
 */
export function trackComponentInteraction(
  componentName: string,
  interactionType: string
): void {
  trackEvent("component_interaction", {
    component: componentName,
    interaction: interactionType,
  });
}

/**
 * Track project view
 * @param projectName - Name of the project being viewed
 * @param projectClient - Client for the project
 */
export function trackProjectView(projectName: string, projectClient?: string): void {
  trackEvent("project_view", {
    project: projectName,
    client: projectClient,
  });
}

/**
 * Track code copy action
 * @param language - Programming language of the copied code
 * @param source - Source of the code (component, blog, etc.)
 */
export function trackCodeCopy(language: string, source: string): void {
  trackEvent("code_copy", {
    language,
    source,
  });
}

/**
 * Track external link click
 * @param url - URL of the external link
 * @param context - Context where the link was clicked
 */
export function trackExternalLink(url: string, context: string): void {
  trackEvent("external_link", {
    url,
    context,
  });
}

/**
 * Track filter usage
 * @param filterType - Type of filter applied
 * @param filterValue - Value of the filter
 * @param section - Section where filter was applied
 */
export function trackFilterUsage(
  filterType: string,
  filterValue: string,
  section: string
): void {
  trackEvent("filter_usage", {
    type: filterType,
    value: filterValue,
    section,
  });
}
