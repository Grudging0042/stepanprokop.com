import { generateHomeMetadata } from "@/lib/metadata";
import { Hero } from "@/components/hero/Hero";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { ComponentCard } from "@/components/cards/ComponentCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { HomeSection } from "@/components/shared/HomeSection";
import { getAllProjects, getAllComponents, getAllBlogPosts } from "@/lib/content";
import { toPortfolioCard, toComponentCard, toBlogCard } from "@/lib/content-mappers";

export const metadata = generateHomeMetadata();

export default function Home() {
  const projects = getAllProjects().map(toPortfolioCard);
  const components = getAllComponents().map(toComponentCard);
  const blogPosts = getAllBlogPosts().map(toBlogCard);

  return (
    <div className="flex min-h-screen flex-col bg-background-primary">
      <Hero
        avatar="/images/profile-day.png"
        avatarDark="/images/profile-night.png"
        name="Štěpán Prokop"
        introduction={
          <>
            Product designer with a background in building products, engineering,
            and intuitive digital experience. Currently crafting meaningful
            e-commerce at{" "}
            <a
              href="https://knihobot.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-2 [text-decoration-color:color-mix(in_srgb,var(--theme-text-primary,#4d4d4d)_25%,transparent)] transition-colors hover:[text-decoration-color:var(--theme-text-primary,#4d4d4d)]"
            >
              Knihobot
            </a>
            . Oh! I redesigned a typeface used in 3 million cars worldwide.
          </>
        }
      />

      <main className="flex w-full flex-col">
        <HomeSection title="Work">
          {projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </HomeSection>

        <HomeSection title="Components">
          {components.map((component) => (
            <ComponentCard key={component.id} {...component} />
          ))}
        </HomeSection>

        <HomeSection title="Blog">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </HomeSection>
      </main>
    </div>
  );
}
