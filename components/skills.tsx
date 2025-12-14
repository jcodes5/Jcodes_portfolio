import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Alpine.js", "Livewire", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Laravel", "PHP", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["Supabase", "MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & More",
    skills: ["Git", "Docker", "CI/CD", "Testing", "AWS", "Vercel"],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Skills</h2>
          </div>
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
