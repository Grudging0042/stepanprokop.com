import type {
  Project,
  Component,
  BlogPost,
  PortfolioCardData,
  ComponentCardData,
  BlogCardData,
} from "@/types/content";

export function toPortfolioCard(project: Project): PortfolioCardData {
  const fm = project.frontmatter;
  return {
    id: project.slug,
    slug: project.slug,
    thumbnail:
      fm.thumbnail ??
      fm.carousel?.[0]?.url ??
      "/images/projects/placeholder-phone.png",
    icon: fm.icon ?? "/images/icons/icon-default.svg",
    headline: fm.title || project.slug,
    date: fm.year ? String(fm.year) : "",
  };
}

export function toComponentCard(component: Component): ComponentCardData {
  const fm = component.frontmatter;
  return {
    id: component.slug,
    slug: component.slug,
    thumbnail: fm.previewImage || "/images/components/placeholder-phone.png",
    headline: fm.title || component.slug,
    description: fm.description || "",
    date: fm.date
      ? new Date(fm.date).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      : "",
  };
}

export function toBlogCard(post: BlogPost): BlogCardData {
  const fm = post.frontmatter;
  return {
    id: post.slug,
    slug: post.slug,
    thumbnail: fm.thumbnail || "/images/blog/placeholder-phone.png",
    headline: fm.title || post.slug,
    description: fm.description || "",
    date: fm.date
      ? new Date(fm.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "",
  };
}
