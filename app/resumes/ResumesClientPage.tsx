"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Shield, Server, Brain, ExternalLink } from "lucide-react"

const resumes = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst Resume",
    description:
      "Specialized resume highlighting security expertise, incident response experience, and compliance knowledge.",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
    downloadUrl: "/resume/cybersecurity.pdf",
    highlights: [
      "Security Architecture & Design",
      "Incident Response & Forensics",
      "Vulnerability Assessment",
      "Compliance (SOC 2, ISO 27001)",
      "Risk Management",
    ],
    certifications: ["CISSP", "CompTIA Security+", "CEH"],
    featured: true,
  },
  {
    id: "sysadmin",
    title: "System Administrator Resume",
    description: "Comprehensive resume showcasing infrastructure management, automation, and DevOps capabilities.",
    icon: Server,
    color: "text-accent",
    bgColor: "bg-accent/10",
    downloadUrl: "/resume/sysadmin.pdf",
    highlights: [
      "Cloud Infrastructure (AWS)",
      "Infrastructure as Code",
      "Automation & Scripting",
      "Container Orchestration",
      "Monitoring & Logging",
    ],
    certifications: ["AWS Solutions Architect", "ITIL Foundation"],
    featured: false,
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer Resume",
    description:
      "Cutting-edge resume focusing on AI integration, prompt engineering, and intelligent automation solutions.",
    icon: Brain,
    color: "text-chart-3",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    downloadUrl: "/resume/prompt-engineer.pdf",
    highlights: [
      "Large Language Models",
      "Prompt Design & Optimization",
      "AI Integration & APIs",
      "Conversational AI Systems",
      "Machine Learning Workflows",
    ],
    certifications: ["AI/ML Specialization", "OpenAI API Certified"],
    featured: false,
  },
]

export default function ResumesClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="font-sans text-4xl font-bold text-foreground mb-4 sm:text-5xl">Resume Downloads</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the resume that best matches your needs. Each version is tailored to highlight specific expertise
              and achievements in cybersecurity, system administration, or prompt engineering.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                <FileText className="mr-2 h-4 w-4" />
                PDF Format • Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </Badge>
            </div>
          </motion.section>

          {/* Resume Cards */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {resumes.map((resume, index) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full border-border hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                    {resume.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                      </div>
                    )}

                    <CardHeader className="space-y-4">
                      <div
                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${resume.bgColor}`}
                      >
                        <resume.icon className={`h-8 w-8 ${resume.color}`} />
                      </div>
                      <div className="text-center space-y-2">
                        <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors">
                          {resume.title}
                        </CardTitle>
                        <CardDescription className="text-center">{resume.description}</CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Key Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-card-foreground">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {resume.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`h-1.5 w-1.5 rounded-full ${resume.color.replace("text-", "bg-")}`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Certifications */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-card-foreground">Certifications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {resume.certifications.map((cert) => (
                            <Badge key={cert} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="pt-4">
                        <Button size="lg" className="w-full group" asChild>
                          <Link href={resume.downloadUrl} target="_blank">
                            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                            Download Resume
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {/* Resume Tips */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-sans text-xl">Resume Selection Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Choose Cybersecurity Resume for:</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Security analyst or engineer positions</li>
                    <li>Compliance and risk management roles</li>
                    <li>Incident response team positions</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Choose System Admin Resume for:</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Infrastructure and DevOps roles</li>
                    <li>Cloud architecture positions</li>
                    <li>Automation and scripting jobs</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Choose Prompt Engineer Resume for:</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>AI/ML engineering positions</li>
                    <li>Conversational AI development</li>
                    <li>AI integration and automation roles</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-sans text-xl">Need a Custom Resume?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Looking for a resume tailored to a specific role or industry? I can create a customized version that
                  highlights the most relevant experience and skills for your opportunity.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Request Custom Resume
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/projects">
                      <FileText className="mr-2 h-4 w-4" />
                      View Portfolio Projects
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-card-foreground mb-6">Professional Summary</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-chart-3">5</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
