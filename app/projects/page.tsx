import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects | Jatto Overcomer - Fullstack Developer",
  description: "Featured projects showcasing my fullstack development skills and experience.",
}

const featuredProjects = [
  {
    title: "NigeriaGovHub",
    description:
      "NigeriaGovHub is an independent civic-tech platform dedicated to connecting Nigerians with reliable, up-to-date information about government institutions, services, and initiatives.",
    tags: ["Next.js", "Drizzle", "MySql", "Typescript"],
    link: "https://www.nigeriagovhub.com/",
    github: "#",
    image: "/niggovhub.png",
  },
  {
    title: "Levic-bootcamp",
    description:
      "A comprehensive online bootcamp-publicity platform offering courses in web development, data science, and more, designed to equip learners with practical skills for the tech industry.",
    tags: ["React", "Next.js", "MySQL", "resend"],
    link: "https://levicdigitalagency-bootcamp.netlify.app/",
    github: "https://github.com/jcodes5/levic-bootcamp.git",
    image: "/levic-boot.png",
  },
  {
    title: "The weather and everything",
    description:
      "The Weather and Everything is a climate-focused platform dedicated to raising awareness, educating communities, and inspiring action on climate change and environmental sustainability, with a strong emphasis on youth engagement and community impact.",
    tags: ["React", "Next.js", "MySQL", "resend"],
    link: "https://theweatherandeverything.org/",
    github: "https://github.com/jcodes5/TWE.git",
    image: "/twe.png",
  },
  {
    title: "Levic Digital Agency",
    description:
      "Levic Digital Agency is a full-service digital marketing and creative agency that helps businesses grow, build their brand, and stand out online. The site offers services like digital marketing, social media management & ads, web design and development, branding & graphics, and related tech-driven solutions to support business growth and visibility in the digital space.",
    tags: ["React", "Next.js", "MySQL", "resend"],
    link: "https://www.levicdigitalagency.com/",
    github: "https://github.com/jcodes5/Levic-digital2.git",
    image: "/levic.png",
  },
  {
    title: "VortiDiv",
    description:
      "VortiDiv is a project focused on analyzing atmospheric circulation patterns over Nigeria using ERA5 Reanalysis data with a particular emphasis on Vorticity, Divergence and wind vector dynamics at 800hPa(a key level for low-level monsoon inflow and storm development.",
    tags: ["Python", "Streamlit", "ERA5(ECMWF Copernicus Data Store", "Jupyter"],
    link: "https://vortidiv-mxjcgmk3b295jfzzcdlzar.streamlit.app/",
    github: "https://github.com/jcodes5/vortidiv.git",
    image: "/vorti.png",
  },
  {
    title: "Pollutant Dispersion Simulator",
    description:
      "PDS-Reimagined is a web-based pollutant dispersion simulation tool designed to model and visualize how air pollutants spread under different environmental conditions. It utilizes the Gaussian Plume Model and Open-Meteo API to provide accurate simulations based on real-time weather data, helping users understand the impact of various factors on pollutant dispersion.",
    tags: ["React", "Express", "Open-meteo Api", "Gaussian Plume Model"],
    link: "pds-reimagined.onrender.com",
    github: "https://github.com/jcodes5/pollution-dispersion-model.git",
    image: "/pds.png",
  },

  
]

const otherProjects = [
  {
    title: "Elevate360",
    description: "A Nigeria-based alternative for GoHighLevel for Nigerian business and organizations.",
    tags: ["Nextjs", "MySQL", "Typescript", "Prisma", "TailwindCSS"],
    github: "https://github.com/jcodes5/Elevate360-crm.git",
  },
  {
    title: "DFlamez Shot",
    description: "A Photography portfolio website with a dashbaord for managing bookings and client interactions. and also posting Blogs and work showcase.",
    tags: ["Next.js", "Supabase", "Next.js"],
    link: "Still in progress",
    github: "https://github.com/jcodes5/Dflamez_shotz.git",
  },
  {
    title: "Note Me",
    description: "A LAravel Application for scheduling and sending Notes to frens.",
    tags: ["Laravel", "Sqlite", "Laravel Breeze", "TailwindCSS", "Alpine.js", "Livewire", "PHP"],
    github: "https://github.com/jcodes5/Noteme.git",
  },
  {
    title: "Todo App",
    description: "A Todo App for managing tasks and projects.",
    tags: ["Laravel", "Livewire", "TailwindCSS", "Alpine.js", "PHP", "MySQL", "Laravel Breeze"],
    github: "https://github.com/jcodes5/Todo.git",
  },
]

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">05. What I Built</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h1>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center ${index % 2 === 1 ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg border border-border/40 mb-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 font-mono text-sm text-muted-foreground">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                    <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
              <div className={`relative group ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full rounded-lg" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Other Noteworthy Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="border-border/40 bg-card hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="h-10 w-10 text-primary" />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                          <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
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
