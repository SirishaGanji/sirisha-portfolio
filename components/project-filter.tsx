"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ProjectFilterProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  projectCounts: Record<string, number>
}

export function ProjectFilter({ categories, activeFilter, onFilterChange, projectCounts }: ProjectFilterProps) {
  const filters = ["All", ...categories]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-wrap gap-2 justify-center"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter
        const count =
          filter === "All" ? Object.values(projectCounts).reduce((a, b) => a + b, 0) : projectCounts[filter] || 0

        return (
          <Button
            key={filter}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter)}
            className="relative"
          >
            {filter}
            <Badge variant={isActive ? "secondary" : "outline"} className="ml-2 text-xs">
              {count}
            </Badge>
          </Button>
        )
      })}
    </motion.div>
  )
}
