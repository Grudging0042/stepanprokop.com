import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { generateComponentMetadata } from "@/lib/metadata";
import { ComponentPreview } from "@/components/showcase/ComponentPreview";
import { VideoPlayer } from "@/components/carousel/VideoPlayer";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Badge } from "@/components/ui/Badge";
import { ContentDetailLayout } from "@/components/shared/ContentDetailLayout";
import { MDXContent } from "@/components/shared/MDXContent";
import type { Component } from "@/types/content";
import type { Metadata } from "next";

interface ComponentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("components").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const component = getContentBySlug<Component>("components", slug);

  if (!component) return { title: "Component Not Found" };

  return generateComponentMetadata(
    component.frontmatter.title,
    component.frontmatter.description,
    slug,
    component.frontmatter.previewImage
  );
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getContentBySlug<Component>("components", slug);

  if (!component) notFound();

  const { frontmatter, content } = component;

  return (
    <ContentDetailLayout>
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="capitalize">
            {frontmatter.type}
          </Badge>
          {frontmatter.complexity && (
            <Badge
              variant="outline"
              className={
                frontmatter.complexity === "beginner"
                  ? "border-green-500 text-green-700 dark:text-green-400"
                  : frontmatter.complexity === "intermediate"
                    ? "border-yellow-500 text-yellow-700 dark:text-yellow-400"
                    : "border-red-500 text-red-700 dark:text-red-400"
              }
            >
              {frontmatter.complexity}
            </Badge>
          )}
          {frontmatter.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-muted-foreground">{frontmatter.description}</p>
      </div>

      <div className="mb-12">
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="relative aspect-video w-full">
            {frontmatter.previewType === "interactive" && frontmatter.previewUrl && (
              <ComponentPreview
                url={frontmatter.previewUrl}
                title={frontmatter.title}
                type={frontmatter.type}
                isCard={false}
              />
            )}

            {frontmatter.previewType === "image" && frontmatter.previewImage && (
              <Image
                src={frontmatter.previewImage}
                alt={frontmatter.title}
                fill
                className="object-cover"
              />
            )}

            {frontmatter.previewType === "video" &&
              frontmatter.previewVideo &&
              frontmatter.previewImage && (
                <VideoPlayer
                  src={frontmatter.previewVideo}
                  poster={frontmatter.previewImage}
                  autoPlayOnView={true}
                />
              )}
          </div>
        </div>

        {frontmatter.codeUrl && (
          <div className="mt-4 flex gap-2">
            <a
              href={frontmatter.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              View Source
            </a>
          </div>
        )}
      </div>

      {frontmatter.code && (
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Code</h2>
          <CodeBlock code={frontmatter.code} language="typescript" />
        </div>
      )}

      {content && <MDXContent source={content} />}
    </ContentDetailLayout>
  );
}
