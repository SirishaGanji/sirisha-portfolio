import type React from "react";

/** --- Types you may already use elsewhere --- */
export type MDXComponents = Record<string, React.ComponentType<any>>;
export type ExperienceItem = {
  company?: string;
  role?: string;
  dates?: string;
  summary?: string;
  tech?: string[];
};
export type ProjectContent = {
  id: string;
  title: string;
  summary?: string;
  tech?: string[];
  contentHtml?: string; // render-ready HTML if you ever add MDX later
};

/** --- Minimal no-op MDX component map (kept for compatibility) --- */
export const mdxComponents: MDXComponents = {};
export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...(components || {}) };
}

/** --- Safe helpers used by your pages/components --- */
export async function getExperience(): Promise<ExperienceItem[]> {
  // Return an empty list (or add a couple of sample items if you prefer)
  return [];
}

export async function getProjectBySlug(slug: string): Promise<ProjectContent | null> {
  // Return a minimal placeholder so the page can render
  return {
    id: slug,
    title: slug.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    summary: "Project details coming soon.",
    tech: [],
    contentHtml: "",
  };
}

export async function getProjectContent(slug: string): Promise<ProjectContent> {
  // Same placeholder data; later you can swap to real MDX/DB/file reads
  const base = await getProjectBySlug(slug);
  return base ?? { id: slug, title: "Untitled Project", summary: "", tech: [], contentHtml: "" };
}

export default mdxComponents;
