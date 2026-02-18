/**
 * Client-safe content utility functions
 * These functions don't use Node.js APIs and can run in the browser
 */

import type {
  Project,
  Component,
  BlogPost,
  ProjectFilters,
  ComponentFilters,
  BlogFilters,
  SortOrder,
} from "@/types/content";

/**
 * Filter projects
 */
export function filterProjects(projects: Project[], filters: ProjectFilters): Project[] {
  return projects.filter((project) => {
    if (filters.role && project.frontmatter.role !== filters.role) return false;
    if (filters.industry && project.frontmatter.industry !== filters.industry) return false;
    if (filters.year && project.frontmatter.year !== filters.year) return false;
    if (
      filters.tools &&
      !filters.tools.some((tool) => project.frontmatter.tools.includes(tool))
    ) {
      return false;
    }
    return true;
  });
}

/**
 * Filter components
 */
export function filterComponents(
  components: Component[],
  filters: ComponentFilters
): Component[] {
  return components.filter((component) => {
    if (filters.type && component.frontmatter.type !== filters.type) return false;
    if (filters.complexity && component.frontmatter.complexity !== filters.complexity)
      return false;
    if (
      filters.tags &&
      (!component.frontmatter.tags ||
        !filters.tags.some((tag) => component.frontmatter.tags?.includes(tag)))
    ) {
      return false;
    }
    return true;
  });
}

/**
 * Filter blog posts
 */
export function filterBlogPosts(posts: BlogPost[], filters: BlogFilters): BlogPost[] {
  return posts.filter((post) => {
    // Only show published posts by default
    if (post.frontmatter.published === false) return false;

    if (
      filters.tags &&
      !filters.tags.some((tag) => post.frontmatter.tags.includes(tag))
    ) {
      return false;
    }

    if (filters.year || filters.month) {
      const postDate = new Date(post.frontmatter.date);
      if (filters.year && postDate.getFullYear() !== filters.year) return false;
      if (filters.month && postDate.getMonth() + 1 !== filters.month) return false;
    }

    return true;
  });
}

/**
 * Sort content by specified order
 */
export function sortContent<T extends Project | Component | BlogPost>(
  items: T[],
  order: SortOrder
): T[] {
  const sorted = [...items];

  switch (order) {
    case "newest":
      return sorted.sort((a, b) => {
        const dateA = getContentDate(a);
        const dateB = getContentDate(b);
        return dateB.getTime() - dateA.getTime();
      });

    case "oldest":
      return sorted.sort((a, b) => {
        const dateA = getContentDate(a);
        const dateB = getContentDate(b);
        return dateA.getTime() - dateB.getTime();
      });

    case "alphabetical":
      return sorted.sort((a, b) =>
        a.frontmatter.title.localeCompare(b.frontmatter.title)
      );

    default:
      return sorted;
  }
}

/**
 * Get all unique tags from blog posts
 */
export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get all unique tools from projects
 */
export function getAllTools(projects: Project[]): string[] {
  const tools = new Set<string>();
  projects.forEach((project) => {
    project.frontmatter.tools.forEach((tool) => tools.add(tool));
  });
  return Array.from(tools).sort();
}

/**
 * Calculate reading time for blog posts (rough estimate)
 * @param content - Markdown content
 * @returns Reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Validate that all media items have alt text
 * @param project - Project to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateProjectAltText(project: Project): string[] {
  const errors: string[] = [];
  
  project.frontmatter.carousel?.forEach((item, index) => {
    if (item.type === "image" && !item.alt) {
      errors.push(
        `Project "${project.frontmatter.title}": carousel item ${index + 1} is missing alt text`
      );
    }
  });
  
  return errors;
}

/**
 * Validate that component preview has alt text
 * @param component - Component to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateComponentAltText(component: Component): string[] {
  const errors: string[] = [];
  
  if (component.frontmatter.previewType === "image" && 
      component.frontmatter.previewImage && 
      !component.frontmatter.previewAlt) {
    errors.push(
      `Component "${component.frontmatter.title}": preview image is missing alt text (use previewAlt or it will default to title)`
    );
  }
  
  return errors;
}

// Helper functions

function getContentDate(item: Project | Component | BlogPost): Date {
  const fm = item.frontmatter;

  if ("year" in fm && typeof fm.year === "number") {
    return new Date(fm.year, 0, 1);
  }

  if ("date" in fm && typeof fm.date === "string") {
    return new Date(fm.date);
  }

  return new Date();
}
