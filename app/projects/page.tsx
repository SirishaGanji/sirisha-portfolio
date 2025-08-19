import type { Metadata } from "next"
import ProjectsClient from "./ProjectsClient"

export const metadata: Metadata = {
  title: "Projects - Sirisha Ganji Portfolio",
  description:
    "Explore cybersecurity, system administration, and AI projects by Sirisha Ganji. Real-world solutions demonstrating technical expertise and problem-solving skills.",
  openGraph: {
    title: "Projects - Sirisha Ganji Portfolio",
    description: "Explore cybersecurity, system administration, and AI projects by Sirisha Ganji.",
    url: "/projects",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Sirisha Ganji - Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Sirisha Ganji Portfolio",
    description: "Explore cybersecurity, system administration, and AI projects by Sirisha Ganji.",
    images: ["/og-default.png"],
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
