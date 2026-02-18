import type { Metadata } from "next";

export const siteConfig = {
  name: "Štěpán Prokop",
  title: "Štěpán Prokop - Product Designer",
  description:
    "Portfolio of Štěpán Prokop, a product designer based in Prague, Czechia. Showcasing design projects, interactive components, and blog articles.",
  url: "https://portfolio.ui-lab.cz",
  ogImage: "/images/placeholder.webp",
  author: {
    name: "Štěpán Prokop",
    email: "info@stepanprokop.com",
    twitter: "@stepanprokop",
  },
};

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function generatePageMetadata(options: PageMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = "",
    image = siteConfig.ogImage,
    type = "website",
    publishedTime,
    tags,
  } = options;

  const pageTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.title;
  const pageUrl = path ? `${siteConfig.url}/${path}` : siteConfig.url;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title || siteConfig.name }],
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime, authors: [siteConfig.author.name] }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
      creator: siteConfig.author.twitter,
    },
    ...(type === "website" && {
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
        },
      },
    }),
  };
}

// Convenience aliases to keep call-sites readable
export const generateHomeMetadata = () => generatePageMetadata();

export const generateProjectMetadata = (
  title: string,
  description: string,
  slug: string,
  image?: string
) =>
  generatePageMetadata({
    title,
    description,
    path: `projects/${slug}`,
    image,
    type: "article",
  });

export const generateComponentMetadata = (
  title: string,
  description: string,
  slug: string,
  image?: string
) =>
  generatePageMetadata({
    title: `${title} - Components`,
    description,
    path: `components/${slug}`,
    image,
    type: "article",
  });

export const generateBlogMetadata = (
  title: string,
  description: string,
  slug: string,
  date: string,
  tags?: string[],
  image?: string
) =>
  generatePageMetadata({
    title: `${title} - Blog`,
    description,
    path: `blog/${slug}`,
    image,
    type: "article",
    publishedTime: date,
    tags,
  });
