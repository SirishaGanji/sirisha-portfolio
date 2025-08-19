"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, CheckCircle } from "lucide-react"
import type { ExperienceData } from "@/lib/mdx"

interface TimelineProps {
  experiences: ExperienceData[]
}

export function Timeline({ experiences }: TimelineProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <CalendarDays className="h-6 w-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <Card className="border-border hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="font-sans text-xl text-card-foreground">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 sm:items-end">
                      <Badge variant={experience.current ? "default" : "secondary"} className="w-fit">
                        {experience.current ? "Current" : "Previous"}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {formatDate(experience.startDate)} -{" "}
                      {experience.current ? "Present" : formatDate(experience.endDate!)}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

                  {experience.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
