"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

    if (!contactEndpoint) {
      const subject = encodeURIComponent(`Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      window.location.href = `mailto:sirishaganji@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="font-bold text-xl">
            Sirisha Ganji
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="/projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </a>
            <a href="/resumes" className="text-sm font-medium hover:text-primary">
              Resumes
            </a>
            <a href="/contact" className="text-sm font-medium text-primary">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <section className="text-center mb-16">
            <h1 className="font-sans text-4xl font-bold text-foreground mb-4 sm:text-5xl">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your cybersecurity, infrastructure, or AI projects? I'd love to hear from you and explore
              how we can work together.
            </p>
          </section>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or how I can help..."
                        rows={6}
                      />
                    </div>

                    <div aria-live="polite" aria-atomic="true">
                      {submitStatus === "success" && (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Message sent successfully! I'll get back to you soon.</span>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          <span>Failed to send message. Please try again or email me directly.</span>
                        </div>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-xl">Contact Information</CardTitle>
                  <CardDescription>Prefer to reach out directly? Here are my contact details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-card-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">sirishaganji@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-card-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-card-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-xl">How I Can Help</CardTitle>
                  <CardDescription>Areas where I can provide expertise and consultation.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Badge className="mb-2">Cybersecurity</Badge>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Security architecture and design</li>
                        <li>• Incident response and forensics</li>
                        <li>• Compliance and risk assessment</li>
                      </ul>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        System Administration
                      </Badge>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cloud infrastructure setup</li>
                        <li>• DevOps and automation</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        AI Integration
                      </Badge>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Prompt engineering and optimization</li>
                        <li>• AI system security</li>
                        <li>• Intelligent automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="font-sans text-lg font-semibold text-card-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours during business days. For urgent matters, please
                    mention it in your message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Sirisha Ganji</div>
        </div>
      </footer>
    </div>
  )
}
