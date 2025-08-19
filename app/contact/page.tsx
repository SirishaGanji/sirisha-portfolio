import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Sirisha Ganji - Get In Touch",
  description:
    "Contact Sirisha Ganji for cybersecurity, system administration, or AI consultation. Available for projects, collaboration, and professional opportunities.",
  openGraph: {
    title: "Contact Sirisha Ganji - Get In Touch",
    description: "Contact Sirisha Ganji for cybersecurity, system administration, or AI consultation.",
    url: "/contact",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Contact Sirisha Ganji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sirisha Ganji - Get In Touch",
    description: "Contact Sirisha Ganji for cybersecurity, system administration, or AI consultation.",
    images: ["/og-default.png"],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
