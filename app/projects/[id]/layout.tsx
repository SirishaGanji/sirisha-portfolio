import type React from "react"
import type { Metadata } from "next"
import { getProjectBySlug } from '../../lib/mdx'

interface ProjectLayoutProps {
  children: React.ReactNode
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.id)

  if (!project) {
    return {
      title: "Project Not Found - Sirisha Ganji",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Sirisha Ganji`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Sirisha Ganji`,
      description: project.summary,
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  }
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children
}
