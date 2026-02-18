/**
 * Content Type Definitions
 * TypeScript interfaces for Projects, Components, and Blog content
 */

// Base frontmatter fields shared across all content types
export interface BaseFrontmatter {
  title: string;
  description: string;
  slug: string;
}

// Project content type
export interface ProjectFrontmatter extends BaseFrontmatter {
  client: string;
  year: number;
  role: string;
  tools: string[];
  carousel: MediaItem[];
  featured?: boolean;
  industry?: string;
  thumbnail?: string;
  icon?: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}

// Component content type
export interface ComponentFrontmatter extends BaseFrontmatter {
  type: "react" | "vue" | "web-component" | "other";
  previewType: "interactive" | "image" | "video";
  previewUrl?: string;
  previewImage?: string;
  previewVideo?: string;
  previewAlt?: string;
  code?: string;
  codeUrl?: string;
  complexity?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  date?: string;
}

export interface Component {
  frontmatter: ComponentFrontmatter;
  content: string;
  slug: string;
}

// Blog content type
export interface BlogFrontmatter extends BaseFrontmatter {
  date: string; // ISO date string (YYYY-MM-DD)
  tags: string[]; // Array of tags for filtering
  thumbnail: string; // Path to thumbnail image
  author?: string; // Optional: Author name (defaults to site owner)
  readingTime?: number; // Optional: Reading time in minutes
  published?: boolean; // Optional: Draft vs published status (default: true)
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
  slug: string;
}

// Media item for project carousels
export interface MediaItem {
  type: "image" | "video";
  url: string; // Path to media file or external URL
  alt: string; // Alt text for images (REQUIRED for accessibility)
  caption?: string; // Optional caption
  poster?: string; // Optional: Poster image for videos
}

// Helper type to validate MediaItem has alt text
export type ValidatedMediaItem = MediaItem & { alt: string };

// Union type for all content
export type ContentType = Project | Component | BlogPost;

// Utility type for content listings
export interface ContentListing<T extends ContentType> {
  items: T[];
  total: number;
  hasMore: boolean;
}

// Filter options for each content type
export interface ProjectFilters {
  role?: string;
  tools?: string[];
  industry?: string;
  year?: number;
}

export interface ComponentFilters {
  type?: ComponentFrontmatter["type"];
  complexity?: ComponentFrontmatter["complexity"];
  tags?: string[];
}

export interface BlogFilters {
  tags?: string[];
  year?: number;
  month?: number;
}

// Sort options
export type SortOrder = "newest" | "oldest" | "alphabetical";

export interface SortOptions {
  order: SortOrder;
}

// ============================================
// SIMPLIFIED CARD DATA INTERFACES
// For homepage card display (Work, Components, Variantblog)
// ============================================

/**
 * Portfolio Card Data (Work variant from Figma)
 * Simplified interface for displaying portfolio projects as cards
 */
export interface PortfolioCardData {
  id: string;
  slug: string;
  thumbnail: string;      // Cover image (210x210px square)
  icon?: string;          // Optional path to 24x24 icon SVG, defaults to placeholder
  headline: string;       // Label/title
  date: string;           // Display date (e.g., "Oct 2025")
}

/**
 * Component Card Data (Components variant from Figma)
 * Simplified interface for displaying UI components as cards
 */
export interface ComponentCardData {
  id: string;
  slug: string;
  thumbnail: string;      // Preview image (320x240px aspect)
  headline: string;       // Label/title
  description: string;    // Short description
  date: string;           // Display date (e.g., "Oct 2025")
}

/**
 * Blog Card Data (Variantblog from Figma)
 * Simplified interface for displaying blog posts as cards
 */
export interface BlogCardData {
  id: string;
  slug: string;
  thumbnail: string;      // Featured image (250x140px aspect)
  headline: string;       // Article title
  description: string;    // Excerpt/description
  date: string;           // Display date (e.g., "Nov 8, 2025")
}
