export type ProjectContent = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  contentHtml: string;
};

export async function getExperience() {
  return [];
}

export async function getProjectBySlug(slug: string): Promise<ProjectContent | null> {
  return {
    id: slug,
    title: slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    summary: "Project details coming soon.",
    tech: [],
    contentHtml: ""
  };
}

export async function getProjectContent(slug: string): Promise<ProjectContent> {
  const base = await getProjectBySlug(slug);
  return base ?? { id: slug, title: "Untitled Project", summary: "", tech: [], contentHtml: "" };
}

export default {};
