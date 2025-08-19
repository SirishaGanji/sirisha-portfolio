"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import projectsData from "@/content/projects.json"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProjectsClient() {
  const projects = projectsData
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((project) => project.category)))
  }, [projects])

  // Calculate project counts per category
  const projectCounts = useMemo(() => {
    return categories.reduce(
      (counts, category) => {
        counts[category] = projects.filter((project) => project.category === category).length
        return counts
      },
      {} as Record<string, number>,
    )
  }, [projects, categories])

  // Filter projects based on active filter and search query
  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (activeFilter !== "All") {
      filtered = filtered.filter((project) => project.category === activeFilter)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          project.tech.some((tech) => tech.toLowerCase().includes(query)),
      )
    }

    // Sort by featured first, then by date
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.dates.split(" to ")[0]).getTime() - new Date(a.dates.split(" to ")[0]).getTime()
    })
  }, [projects, activeFilter, searchQuery])

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
            className="text-center mb-12"
          >
            <h1 className="font-sans text-4xl font-bold text-foreground mb-4 sm:text-5xl">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my portfolio of cybersecurity, system administration, and AI projects. Each project demonstrates
              real-world problem-solving and technical expertise.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <ProjectFilter
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              projectCounts={projectCounts}
            />
          </motion.section>

          {/* Projects Grid */}
          <section>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-center py-16"
              >
                <h3 className="font-sans text-2xl font-semibold text-foreground mb-4">No projects found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search terms or filter selection.</p>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <button onClick={() => setSearchQuery("")} className="text-primary hover:underline">
                    Clear search
                  </button>
                  <button onClick={() => setActiveFilter("All")} className="text-primary hover:underline">
                    Show all projects
                  </button>
                </div>
              </motion.div>
            )}
          </section>

          {/* Stats Section */}
          {filteredProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{projects.length}</div>
                  <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">{categories.length}</div>
                  <div className="text-sm text-muted-foreground">Specializations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-chart-3">{projects.filter((p) => p.featured).length}</div>
                  <div className="text-sm text-muted-foreground">Featured Projects</div>
                </div>
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
