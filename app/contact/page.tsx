import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Jatto Overcomer - Fullstack Developer",
  description: "Get in touch with me for opportunities, collaborations, or just to say hello.",
}

export default function ContactPage() {
  const phoneNumber = "+2348030567095" 
  const preWrittenMessage = encodeURIComponent(
    "Hello Jatto! I came across your portfolio and would love to discuss a potential project or opportunity with you.",
  )
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${preWrittenMessage}`

  return (
    <section className="py-20 px-6 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">06. What&apos;s Next?</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {
            "I'm currently open to new opportunities and always happy to connect. Whether you have a project in mind, a question, or just want to say hello, my inbox is always open."
          }
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="jattodare002@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Me
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
