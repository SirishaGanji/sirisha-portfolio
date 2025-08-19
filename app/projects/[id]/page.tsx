import type { Metadata } from "next"
import projectsData from "@/content/projects.json"
import ProjectDetailClient from "./ProjectDetailClient"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  const ogImageUrl = `/api/og?title=${encodeURIComponent(project.title)}&tags=${encodeURIComponent(project.tags.join(", "))}&category=${encodeURIComponent(project.category)}`

  return {
    title: `${project.title} - Sirisha Ganji`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Sirisha Ganji`,
      description: project.summary,
      url: `/projects/${project.id}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} Project`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Sirisha Ganji`,
      description: project.summary,
      images: [ogImageUrl],
    },
    keywords: [...project.tags, ...project.tech, project.category],
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return <ProjectDetailClient params={params} />
}
