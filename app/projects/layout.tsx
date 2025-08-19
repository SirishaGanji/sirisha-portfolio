import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Sirisha Ganji",
  description:
    "Explore Sirisha Ganji's portfolio of cybersecurity, system administration, and prompt engineering projects with real-world impact.",
  openGraph: {
    title: "Projects - Sirisha Ganji",
    description:
      "Explore Sirisha Ganji's portfolio of cybersecurity, system administration, and prompt engineering projects with real-world impact.",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
