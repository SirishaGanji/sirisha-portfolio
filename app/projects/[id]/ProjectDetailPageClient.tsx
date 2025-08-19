"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { mdxComponents } from "@/components/mdx-components"
import projectsData from "@/content/projects.json"
import { getProjectContent } from "@/lib/mdx"
import fs from "fs"
import path from "path"
import { ArrowLeft, User, CalendarDays, Clock, Download, Github } from "lucide-react"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPageClient({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const mdxPath = path.join(process.cwd(), "content/projects", project.detailFile)
  let frontmatter = {}
  let content = ""
  let readingTime = "5 min read"

  try {
    const mdxContent = fs.readFileSync(mdxPath, "utf8")
    const { frontmatter: fm, content: c, readingTime: rt } = getProjectContent(project.detailFile)
    frontmatter = fm
    content = c
    readingTime = rt
  } catch (error) {
    console.error("Error reading MDX file:", error)
    content = `# ${project.title}\n\n${project.summary}`
  }

  const formatDateRange = (dateString: string) => {
    const [start, end] = dateString.split(" to ")
    const startDate = new Date(start).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    const endDate = new Date(end).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    return `${startDate} - ${endDate}`
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return "bg-primary text-primary-foreground"
      case "SysAdmin":
        return "bg-accent text-accent-foreground"
      case "Prompt Eng":
        return "bg-chart-3 text-white"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="mb-12"
          >
            <div className="space-y-6">
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                </div>
              </div>

              {/* Project Meta */}
              <div className="space-y-4">
                <h1 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.summary}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{formatDateRange(project.dates)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="prose prose-gray max-w-none">
                    <MDXRemote source={content} components={mdxComponents} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="space-y-6"
            >
              {/* Download/Source Section */}
              {(frontmatter.download || frontmatter.repo || project.downloadUrl || project.githubUrl) && (
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-sans text-lg">Download Source</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {(frontmatter.download || project.downloadUrl) && (
                      <Button size="sm" className="w-full" asChild>
                        <Link href={frontmatter.download || project.downloadUrl} target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          Download Source Code
                        </Link>
                      </Button>
                    )}
                    {(frontmatter.repo || project.githubUrl) && (
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={frontmatter.repo || project.githubUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Technologies */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-lg">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-lg">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-card-foreground">Category</div>
                    <div className="text-muted-foreground">{project.category}</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-medium text-card-foreground">Role</div>
                    <div className="text-muted-foreground">{project.role}</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-medium text-card-foreground">Duration</div>
                    <div className="text-muted-foreground">{formatDateRange(project.dates)}</div>
                  </div>
                  {project.featured && (
                    <>
                      <Separator />
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="text-xs">
                          Featured Project
                        </Badge>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Share Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-lg">Share Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Link className="mr-2 h-4 w-4" />
                      Copy Link
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Related Projects CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-card-foreground mb-4">Explore More Projects</h3>
                <p className="text-muted-foreground mb-6">
                  Discover other cybersecurity, system administration, and AI projects in my portfolio.
                </p>
                <Button asChild>
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
