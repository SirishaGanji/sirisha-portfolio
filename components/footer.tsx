
import React from "react";
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-semibold text-card-foreground">Sirisha Ganji</h3>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Analyst · System Administrator · Prompt Engineer
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/sirishaganji"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/sirishaganji"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/sirishaganji"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sirisha@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-card-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-card-foreground">Expertise</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Cybersecurity</li>
              <li className="text-muted-foreground">System Administration</li>
              <li className="text-muted-foreground">Prompt Engineering</li>
              <li className="text-muted-foreground">Cloud Infrastructure</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-card-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resumes" className="text-muted-foreground hover:text-primary transition-colors">
                  Download Resume
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  View Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sirisha Ganji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
