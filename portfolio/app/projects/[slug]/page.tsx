import { notFound } from "next/navigation";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { generateProjectMetadata } from "@/lib/metadata";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { ContentDetailLayout } from "@/components/shared/ContentDetailLayout";
import { MDXContent } from "@/components/shared/MDXContent";
import type { Project } from "@/types/content";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getContentBySlug<Project>("projects", slug);

  if (!project) return { title: "Project Not Found" };

  const heroImage =
    project.frontmatter.carousel?.[0]?.type === "image"
      ? project.frontmatter.carousel[0].url
      : undefined;

  return generateProjectMetadata(
    project.frontmatter.title,
    project.frontmatter.description,
    slug,
    heroImage
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getContentBySlug<Project>("projects", slug);

  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <ContentDetailLayout>
      <PageViewTracker
        projectName={frontmatter.title}
        projectClient={frontmatter.client}
      />

      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-muted-foreground">{frontmatter.description}</p>
      </div>

      <div className="mb-12 rounded-lg border bg-card p-6">
        <ProjectMeta
          client={frontmatter.client}
          year={frontmatter.year}
          role={frontmatter.role}
          tools={frontmatter.tools}
          industry={frontmatter.industry}
        />
      </div>

      {frontmatter.carousel && frontmatter.carousel.length > 0 && (
        <div className="mb-12">
          <ProjectGallery items={frontmatter.carousel} columns={1} />
        </div>
      )}

      {content && <MDXContent source={content} />}
    </ContentDetailLayout>
  );
}
