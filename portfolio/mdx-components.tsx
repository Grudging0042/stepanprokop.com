import type { MDXComponents as MDXComponentsType } from "mdx/types";
import { MDXComponents } from "@/components/mdx/MDXComponents";

/**
 * This file is automatically picked up by Next.js for MDX content
 * We export our custom MDX components here
 */
export function useMDXComponents(components: MDXComponentsType): MDXComponentsType {
  return {
    ...MDXComponents,
    ...components,
  };
}
