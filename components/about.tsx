export function About() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">About</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {
                "I'm a developer passionate about building robust, scalable web applications that deliver exceptional user experiences. My approach combines thoughtful architecture with clean, maintainable code."
              }
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {
                "With expertise spanning both frontend and backend technologies, I create full-stack solutions that are not only functional but performant and elegant. From React interfaces to Node.js APIs and Laravel backends, I leverage the right tools for each project."
              }
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {
                "Currently focused on building modern web applications with Next.js, TypeScript, and exploring innovative database solutions with Supabase and MongoDB."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
