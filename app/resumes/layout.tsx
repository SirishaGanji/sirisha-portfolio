import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume Downloads - Sirisha Ganji",
  description:
    "Download specialized resumes for cybersecurity, system administration, and prompt engineering positions. Each resume is tailored to highlight relevant expertise and achievements.",
  openGraph: {
    title: "Resume Downloads - Sirisha Ganji",
    description:
      "Download specialized resumes for cybersecurity, system administration, and prompt engineering positions. Each resume is tailored to highlight relevant expertise and achievements.",
  },
}

export default function ResumesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
