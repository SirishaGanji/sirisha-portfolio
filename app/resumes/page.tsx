import type { Metadata } from "next"
import ResumesClient from "./ResumesClient"

export const metadata: Metadata = {
  title: "Resume Downloads - Sirisha Ganji",
  description:
    "Download specialized resumes for cybersecurity, system administration, and prompt engineering roles. Tailored for different career opportunities and expertise areas.",
  openGraph: {
    title: "Resume Downloads - Sirisha Ganji",
    description: "Download specialized resumes for cybersecurity, system administration, and prompt engineering roles.",
    url: "/resumes",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Sirisha Ganji - Resume Downloads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Downloads - Sirisha Ganji",
    description: "Download specialized resumes for cybersecurity, system administration, and prompt engineering roles.",
    images: ["/og-default.png"],
  },
}

export default function ResumesPage() {
  return <ResumesClient />
}
