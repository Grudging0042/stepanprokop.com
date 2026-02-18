import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeStarryNight from "rehype-starry-night";
import { MDXComponents } from "@/components/mdx/MDXComponents";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="mdx-content max-w-none">
      <MDXRemote
        source={source}
        components={MDXComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeStarryNight],
          },
        }}
      />
    </article>
  );
}
