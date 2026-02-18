import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, Component, BlogPost } from "@/types/content";

type ContentType = "projects" | "components" | "blog";

const CONTENT_DIR = path.join(process.cwd(), "content");

const DIRS: Record<ContentType, string> = {
  projects: path.join(CONTENT_DIR, "projects"),
  components: path.join(CONTENT_DIR, "components"),
  blog: path.join(CONTENT_DIR, "blog"),
};

function resolveFilePath(dir: string, slug: string): string | null {
  const mdxPath = path.join(dir, `${slug}.mdx`);
  if (fs.existsSync(mdxPath)) return mdxPath;

  const mdPath = path.join(dir, `${slug}.md`);
  if (fs.existsSync(mdPath)) return mdPath;

  return null;
}

/**
 * Get all slugs for a content type (for static generation).
 */
export function getContentSlugs(contentType: ContentType): string[] {
  const dir = DIRS[contentType];
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Get a single content item by slug.
 * Returns null when the file doesn't exist.
 */
export function getContentBySlug<T extends Project | Component | BlogPost>(
  contentType: ContentType,
  slug: string
): T | null {
  const fullPath = resolveFilePath(DIRS[contentType], slug);
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: { ...data, slug } as T["frontmatter"],
    content,
    slug,
  } as T;
}

/**
 * Get all content of a specific type, sorted by date descending.
 */
export function getAllContent<T extends Project | Component | BlogPost>(
  contentType: ContentType
): T[] {
  return getContentSlugs(contentType)
    .map((slug) => getContentBySlug<T>(contentType, slug))
    .filter((item): item is T => item !== null);
}

// Convenience accessors — keep call-sites concise

export function getAllProjects(): Project[] {
  return getAllContent<Project>("projects").sort(
    (a, b) => (b.frontmatter.year ?? 0) - (a.frontmatter.year ?? 0)
  );
}

export function getAllComponents(): Component[] {
  return getAllContent<Component>("components");
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllContent<BlogPost>("blog")
    .filter((p) => p.frontmatter.published !== false)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
