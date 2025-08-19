import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Search } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <Card className="border-border text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="font-sans text-2xl">Project Not Found</CardTitle>
              <CardDescription>The project you're looking for doesn't exist or may have been moved.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This could happen if the project URL is incorrect or the project has been removed from the portfolio.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Go Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
