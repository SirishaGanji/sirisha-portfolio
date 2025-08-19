import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Sirisha Ganji",
  description:
    "Get in touch with Sirisha Ganji for cybersecurity, system administration, and AI engineering projects. Available for consultation and collaboration.",
  openGraph: {
    title: "Contact - Sirisha Ganji",
    description:
      "Get in touch with Sirisha Ganji for cybersecurity, system administration, and AI engineering projects. Available for consultation and collaboration.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
