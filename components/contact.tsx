import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Contact</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl">
              {
                "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out."
              }
            </p>
            <div>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="mailto:hello@example.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
