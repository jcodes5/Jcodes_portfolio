import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

const typingTexts = [
  "Hello, I'm Jatto Overcomer",
  "I'm a Fullstack Developer",
  "React & Next.js Expert",
  "Laravel & PHP Specialist",
  "Node.js & Express Dev",
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary">Available for work</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground min-h-[1.2em]">
                <TypingAnimation texts={typingTexts} />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Building exceptional digital experiences with modern web technologies. Specialized in creating
                performant, accessible, and scalable applications.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Code block visual */}
              <div className="w-[400px] rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">developer.tsx</span>
                </div>
                {/* Code content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <p>
                    <span className="text-primary">const</span> <span className="text-foreground">developer</span> ={" "}
                    {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-primary">{'"Jatto Overcomer"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-primary">{'"Fullstack Developer"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">skills:</span> [
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"React"'}</span>,{" "}
                    <span className="text-primary">{'"Next.js"'}</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"Node.js"'}</span>,{" "}
                    <span className="text-primary">{'"Laravel"'}</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"TypeScript"'}</span>,{" "}
                    <span className="text-primary">{'"PHP"'}</span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">passion:</span>{" "}
                    <span className="text-primary">{'"Building amazing apps"'}</span>
                  </p>
                  <p>{"};"}</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-xl rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
