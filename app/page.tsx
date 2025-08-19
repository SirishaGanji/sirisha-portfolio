
"use client"

import React, { useEffect, useRef, useState } from "react";

type Category = "Cybersecurity" | "SysAdmin" | "Prompt Eng";

interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  dates: string;
  category: Category;
  tags: string[];
  tech: string[];
  githubUrl?: string;
  downloadUrl?: string;
  coverImage?: string;
  detailFile?: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: "threat-log-analyzer",
    title: "Threat Log Analyzer (AI‑Powered Tagging)",
    summary:
      "Python tool that classifies security logs using lightweight AI tagging to surface potential threats and patterns.",
    role: "Cybersecurity Engineer",
    dates: "2024-05-01 to 2024-07-30",
    category: "Cybersecurity",
    tags: ["Log Analysis", "Threat Intelligence", "Automation"],
    tech: ["Python", "Pandas", "LLM", "Regex"],
    githubUrl: "https://github.com/SirishaGanji/sentiment-project",
    downloadUrl: undefined,
    coverImage: "/images/projects/threat-log-analyzer.png",
    detailFile: "threat-log-analyzer.mdx",
    featured: true,
  },
  {
    id: "sentiment-analyzer-app",
    title: "Sentiment Analyzer App",
    summary:
      "Flask app using VADER to analyze CSV text, generate charts, and present insights with simple dashboards.",
    role: "Python Developer",
    dates: "2024-03-10 to 2024-04-20",
    category: "Prompt Eng",
    tags: ["NLP", "Visualization", "CSV"],
    tech: ["Flask", "Python", "VADER", "Matplotlib"],
    githubUrl: "https://github.com/SirishaGanji/sentiment-analyzer",
    downloadUrl: undefined,
    coverImage: "/images/projects/sentiment-analyzer.png",
    detailFile: "sentiment-analyzer.mdx",
    featured: true,
  },
  {
    id: "ai-research-assistant",
    title: "AI Research Assistant",
    summary:
      "Agent-style assistant to help research topics, summarize sources, and suggest next actions.",
    role: "Prompt Engineer",
    dates: "2024-06-01 to 2024-08-15",
    category: "Prompt Eng",
    tags: ["Agents", "Summarization", "Automation"],
    tech: ["Python", "LangChain", "OpenAI"],
    githubUrl: "https://github.com/SirishaGanji/ai-agent-simulator",
    downloadUrl: undefined,
    coverImage: "/images/projects/ai-research-assistant.png",
    detailFile: "ai-research-assistant.mdx",
    featured: true,
  },
]

export default function HomePage() {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false)
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState<boolean>(false)
  const resumeDropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const featured = projectsData.filter((project) => project.featured)
    setFeaturedProjects(featured)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (resumeDropdownRef.current && target && !resumeDropdownRef.current.contains(target)) {
        setIsResumeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBookCall = () => {
    setIsCalendlyModalOpen(true)
  }

  const closeModal = () => {
    setIsCalendlyModalOpen(false)
  }

  const toggleResumeDropdown = () => {
    setIsResumeDropdownOpen(!isResumeDropdownOpen)
  }

  const handleResumeKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setIsResumeDropdownOpen(false)
    }
  }

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "Cybersecurity":
        return "bg-cyan-500"
      case "SysAdmin":
        return "bg-emerald-500"
      case "Prompt Eng":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getBorderColor = (category: Category) => {
    switch (category) {
      case "Cybersecurity":
        return "border-cyan-200 hover:border-cyan-400"
      case "SysAdmin":
        return "border-emerald-200 hover:border-emerald-400"
      case "Prompt Eng":
        return "border-purple-200 hover:border-purple-400"
      default:
        return "border-gray-200 hover:border-gray-400"
    }
  }

  const emailSubject = "15-min Call Request";
  const emailBody =
    "Hi Sirisha, I would like to schedule a 15-minute call to discuss...";
  const mailtoHref = `mailto:sirishaganji@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="font-bold text-xl text-gray-900">
              Sirisha Ganji
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-600 hover:text-cyan-600 transition-colors">
                About
              </a>
              <a href="/projects" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Projects
              </a>
              <a href="/resumes" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Resumes
              </a>
              <a href="/contact" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto max-w-6xl px-4 relative">
            <div className="text-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="font-sans text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">
                    Sirisha Ganji
                  </h1>
                  <div className="mx-auto max-w-3xl">
                    <p className="text-xl text-slate-600 sm:text-2xl">
                      Cybersecurity Analyst · System Administrator · Prompt Engineer
                    </p>
                  </div>
                </div>

                <div className="mx-auto max-w-2xl">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Securing digital infrastructure through innovative cybersecurity solutions, robust system
                    administration, and cutting-edge AI integration.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm font-medium">
                    Network Security
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium">
                    Cloud Infrastructure
                  </span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
                    AI Automation
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                    Incident Response
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-colors"
                  >
                    View Projects
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <button
                    onClick={handleBookCall}
                    className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l.5 3m5.5-3l-.5 3M12 21l-8-4 8-4 8 4-8 4z"
                      />
                    </svg>
                    Book 15-min Call
                  </button>
                  <div className="relative" ref={resumeDropdownRef}>
                    <button
                      onClick={toggleResumeDropdown}
                      onKeyDown={handleResumeKeyDown}
                      className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-medium bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                      aria-expanded={isResumeDropdownOpen}
                      aria-haspopup="true"
                    >
                      <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Resume
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isResumeDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <a
                            href="/resume/cybersecurity.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors"
                            role="menuitem"
                            onClick={() => setIsResumeDropdownOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-cyan-100 rounded-full mr-3">
                              <svg
                                className="w-4 h-4 text-cyan-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium">Cybersecurity</div>
                              <div className="text-xs text-gray-500">Security analysis & incident response</div>
                            </div>
                          </a>
                          <a
                            href="/resume/sysadmin.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                            role="menuitem"
                            onClick={() => setIsResumeDropdownOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full mr-3">
                              <svg
                                className="w-4 h-4 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2-2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium">SysAdmin</div>
                              <div className="text-xs text-gray-500">Infrastructure & automation</div>
                            </div>
                          </a>
                          <a
                            href="/resume/prompt-engineer.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                            role="menuitem"
                            onClick={() => setIsResumeDropdownOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full mr-3">
                              <svg
                                className="w-4 h-4 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium">Prompt Engineer</div>
                              <div className="text-xs text-gray-500">AI integration & automation</div>
                            </div>
                          </a>
                          <a
                            href="/resume/portfolio.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                            role="menuitem"
                            onClick={() => setIsResumeDropdownOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full mr-3">
                              <svg
                                className="w-4 h-4 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v12m0 0l-4-4m4 4l4-4M6 20h12a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium">All‑in‑One Portfolio</div>
                              <div className="text-xs text-gray-500">One‑page overview (PDF)</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="font-sans text-3xl font-bold text-slate-800 mb-4">Areas of Expertise</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Combining technical expertise with strategic thinking to deliver comprehensive solutions
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-white shadow-sm bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold font-sans text-xl text-slate-800">Cybersecurity</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-gray-600 text-center text-slate-600">
                    Threat detection, incident response, and security architecture
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-white shadow-sm bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l.5 3m5.5-3l-.5 3M12 21l-8-4 8-4 8 4-8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold font-sans text-xl text-slate-800">System Administration</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-gray-600 text-center text-slate-600">
                    Cloud infrastructure, automation, and DevOps practices
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-white shadow-sm bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold font-sans text-xl text-slate-800">Prompt Engineering</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-gray-600 text-center text-slate-600">
                    AI integration, chatbot development, and intelligent automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="font-sans text-3xl font-bold text-slate-800 mb-4">Featured Projects</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Showcasing real-world solutions that demonstrate technical expertise and problem-solving capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-lg border bg-white shadow-sm h-full border-2 ${getBorderColor(project.category)} hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-3 py-1 ${getCategoryColor(project.category)} text-white rounded-full text-sm font-medium`}
                      >
                        {project.category}
                      </span>
                      <svg
                        className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold font-sans text-lg text-slate-800 group-hover:text-cyan-600 transition-colors">
                      <a href={`/projects/${project.id}`} className="block">
                        {project.title}
                      </a>
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-gray-600 text-slate-600">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          <div className="container mx-auto max-w-4xl px-4 text-center relative">
            <div className="space-y-6">
              <h2 className="font-sans text-3xl font-bold text-white">Ready to Collaborate?</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Let's discuss how my expertise in cybersecurity, system administration, and AI can help secure and
                optimize your digital infrastructure.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-medium bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/resumes"
                  className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-medium bg-white text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Download Resumes
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Sirisha Ganji. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isCalendlyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-slate-800">Schedule a Call</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {process.env.NEXT_PUBLIC_CALENDLY_URL ? (
                <iframe
                  src={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a call with Sirisha"
                ></iframe>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Let's Connect</h3>
                  <p className="text-slate-600 mb-6">
                    I'd love to discuss how I can help with your cybersecurity, system administration, or AI integration
                    needs.
                  </p>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Email
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
