import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Skills | Fullstack Developer Portfolio",
  description: "My technical skills and expertise in frontend, backend, databases, and development tools.",
}

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible user interfaces",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Alpine.js", "Livewire", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    description: "Creating robust server-side applications and APIs",
    skills: ["Node.js", "Express", "Laravel", "PHP", "REST APIs", "GraphQL", "Authentication"],
  },
  {
    title: "Databases",
    description: "Managing data with SQL and NoSQL solutions",
    skills: ["Supabase", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    description: "Streamlining development and deployment workflows",
    skills: ["Git", "Docker", "CI/CD", "Testing", "AWS", "Vercel", "Linux"],
  },
]

export default function SkillsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">04. What I Know</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border/40 bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-mono text-sm">0{index + 1}.</span>
                <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
