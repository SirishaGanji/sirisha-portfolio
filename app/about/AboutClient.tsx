"use client"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Timeline } from "@/components/timeline"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getExperience } from '../lib/mdx'
import { Shield, Server, Brain, Award, Users, Zap } from "lucide-react"

const skills = [
  { name: "Network Security", level: "Expert", icon: Shield },
  { name: "Cloud Infrastructure", level: "Advanced", icon: Server },
  { name: "AI Integration", level: "Advanced", icon: Brain },
  { name: "Incident Response", level: "Expert", icon: Zap },
  { name: "Team Leadership", level: "Advanced", icon: Users },
  { name: "Compliance", level: "Expert", icon: Award },
]

const certifications = [
  "CISSP - Certified Information Systems Security Professional",
  "AWS Solutions Architect - Professional",
  "CompTIA Security+",
  "Certified Ethical Hacker (CEH)",
  "ITIL Foundation",
]

export default function AboutClient() {
  const experiences = getExperience()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="font-sans text-4xl font-bold text-foreground sm:text-5xl">About Sirisha Ganji</h1>
                  <p className="text-xl text-muted-foreground">
                    Cybersecurity Analyst · System Administrator · Prompt Engineer
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 4 years of experience in cybersecurity and system administration, I specialize in building
                    secure, scalable infrastructure solutions while leveraging cutting-edge AI technologies to enhance
                    operational efficiency.
                  </p>
                  <p>
                    My journey began in IT support, where I developed a deep understanding of system fundamentals. This
                    foundation led me to specialize in cybersecurity, where I now lead incident response teams and
                    design security architectures for enterprise environments.
                  </p>
                  <p>
                    Recently, I've expanded into prompt engineering and AI integration, developing intelligent
                    automation solutions that bridge the gap between traditional security practices and modern AI
                    capabilities.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Security Architecture</Badge>
                  <Badge variant="secondary">Cloud Security</Badge>
                  <Badge variant="secondary">DevSecOps</Badge>
                  <Badge variant="secondary">AI Automation</Badge>
                  <Badge variant="secondary">Incident Response</Badge>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="h-80 w-80 overflow-hidden rounded-2xl bg-card shadow-xl">
                    <Image
                      src="/cybersecurity-analyst-headshot.png"
                      alt="Sirisha Ganji - Professional headshot"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
                  <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-accent/10 blur-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8">Core Competencies</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="border-border hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-card-foreground">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8">Certifications</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Experience Timeline */}
          <section>
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8">Professional Experience</h2>
            <Timeline experiences={experiences} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
