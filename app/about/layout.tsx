import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Sirisha Ganji",
  description:
    "Learn about Sirisha Ganji's background, experience, and expertise in cybersecurity, system administration, and prompt engineering.",
  openGraph: {
    title: "About - Sirisha Ganji",
    description:
      "Learn about Sirisha Ganji's background, experience, and expertise in cybersecurity, system administration, and prompt engineering.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
