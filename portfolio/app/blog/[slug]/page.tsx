import { notFound } from "next/navigation";
import Image from "next/image";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { generateBlogMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/Badge";
import { ContentDetailLayout } from "@/components/shared/ContentDetailLayout";
import { MDXContent } from "@/components/shared/MDXContent";
import { calculateReadingTime } from "@/lib/content-utils";
import type { BlogPost } from "@/types/content";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug<BlogPost>("blog", slug);

  if (!post) return { title: "Article Not Found" };

  return generateBlogMetadata(
    post.frontmatter.title,
    post.frontmatter.description,
    slug,
    post.frontmatter.date,
    post.frontmatter.tags,
    post.frontmatter.thumbnail
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getContentBySlug<BlogPost>("blog", slug);

  if (!post) notFound();

  const { frontmatter, content } = post;
  const readingTime = frontmatter.readingTime || calculateReadingTime(content);
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ContentDetailLayout>
      <article>
        <header className="mb-8">
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {frontmatter.title}
          </h1>

          <p className="mb-4 text-xl text-muted-foreground">{frontmatter.description}</p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={frontmatter.date}>{formattedDate}</time>
            <span>·</span>
            <span>{readingTime} min read</span>
            {frontmatter.author && (
              <>
                <span>·</span>
                <span>{frontmatter.author}</span>
              </>
            )}
          </div>
        </header>

        {frontmatter.thumbnail && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={frontmatter.thumbnail}
              alt={frontmatter.title}
              width={1200}
              height={630}
              className="w-full"
              priority
            />
          </div>
        )}

        <MDXContent source={content} />

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <footer className="mt-12 border-t pt-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Tagged:</span>
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </footer>
        )}
      </article>
    </ContentDetailLayout>
  );
}
