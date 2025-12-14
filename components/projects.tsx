import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team workspaces, and advanced filtering.",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "Content Management System",
    description:
      "Flexible CMS built with Laravel and Vue.js, featuring custom content types and role-based permissions.",
    tags: ["Laravel", "Vue.js", "MySQL", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with data visualization, custom reports, and export functionality.",
    tags: ["Next.js", "Supabase", "Chart.js", "TypeScript"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Projects</h2>
          </div>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="border-border/40 bg-card hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
