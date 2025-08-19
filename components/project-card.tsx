"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ExternalLink, Download, Github } from "lucide-react"
import type { ProjectData } from "@/lib/mdx"

interface ProjectCardProps {
  project: ProjectData
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const formatDateRange = (dateString: string) => {
    const [start, end] = dateString.split(" to ")
    const startDate = new Date(start).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    const endDate = new Date(end).toLocaleDateString("en-US", { month: "short", year: "numeric" })
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full border-border hover:shadow-lg transition-all duration-200 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">Featured</Badge>
            </div>
          )}
        </div>

        <CardHeader className="space-y-3">
          <div className="space-y-2">
            <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{project.role}</CardDescription>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{formatDateRange(project.dates)}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.summary}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-card-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button size="sm" asChild className="flex-1">
              <Link href={`/projects/${project.id}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Details
              </Link>
            </Button>

            {project.downloadUrl ? (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.downloadUrl} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            ) : project.githubUrl ? (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </Link>
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
