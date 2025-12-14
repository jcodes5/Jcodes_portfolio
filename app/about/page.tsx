import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Jatto Overcomer - Fullstack Developer",
  description: "Learn more about my background, experience, and passion for web development.",
}

const experiences = [
  {
    year: "Jun.2025 - Present",
    role: "Lead Software Developer",
    company: "Levic Digital Agency",
    description:
      "Leading development of scalable web applications using Next.js, React, and Node.js. Architecting database solutions with Supabase and MongoDB.",
  },
  {
    year: "Dec.2024 - Present",
    role: "Local Government Coordinator",
    company: "United Nigerian Youth Congress(UNYC)",
  },
  {
    year: "Nov.2023 - Apr.2025",
    role: "Public Relations Officer(PRO)",
    company: "Federal University of Technology, Akure - Nigeria society of meteorological students Electoral Committee(NISOMSEC).",
    description:
      "I ensured prompt distribution of informations regarding the departmental elections during the two tenure I served as the PRO.",
  },
  {
    year: "Feb.2023 - Aug.2023",
    role: "Intern Web Developer",
    company: "Opus inc. Kabba, Nigeria",
    description:
      "Learnt More on web development and programming since I already have a knowledge of basic programming Languages and I also learnt Marketing in the web development space.",
  },
  {
    year: "Aug.2022 - Oct.2022",
    role: "Personal Assistant",
    company: "Joint Professional Training Institute, Kabba, Nigeria",
    description: "Provided administrative support and managed schedules, enhancing organizational efficiency.",
  },
]

const education = [
  {
    year: "2023 - present",
    degree: "Bachelor of Technology in Meteorology and Climate Science.",
    institution: "Federal University of Technology, Akure, Nigeria.",
    description:
      "Currently pursuing a degree that combines technology with environmental science, enhancing my analytical and problem-solving skills.",
  },
  {
    year: "2018-2021",
    degree: "West African Senior School certificate(WASSCE) and National Examination Council(NECO).",
    institution: "Christ Anglican Secondary School(CASS), Kabba, Nigeria.",
    description: "Continued SS2 at CASS where I obtained both certifates/degre stated above, with 4 upper credits, 4 credits and a pass in WASSCE, and 1 distinction, 1 upper credit, 6 credits and 1 pass in NECO",
  },
  {
    year: "2016-2018",
    degree: "Basic Education certificate(BECE)",
    institution: "Wise virgin college, Kabba, Nigeria.",
    description: "After leaving CIC, I continued my high school journey at WVC and I obtained my BECE in JSS3 and moved to the senior class 1 before leaving the school.",
  },
  {
    year: "2015 - 2016",
    degree: "Junior Secondary school 1",
    institution: "Citadel International College, Arigidi-Akoko, Nigeria.",
    description:
      "Started my High schhol journey here at CIC campus.",
  }, 
]

export default function AboutPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
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
                "Currently focused on building modern web applications with Next.js, TypeScript, and exploring innovative database solutions with Supabase,MongoDB, postgreSql and MySql."
              }
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {"Here are a few technologies I've been working with recently:"}
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {[
                "React / Next.js",
                "Node.js / Express",
                "Laravel / PHP",
                "TypeScript",
                "Supabase / MongoDB / MySql",
                "Tailwind CSS",
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative">
              <img
                src="/jcode.png"
                alt="Profile"
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-12">
            <p className="text-primary font-mono text-sm mb-2">02. Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-[0_0_10px_var(--primary)]" />

                  {/* Content card */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                      <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                        {exp.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-mono text-sm mt-1">{exp.company}</p>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-12">
            <p className="text-primary font-mono text-sm mb-2">03. Education</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Background</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-[0_0_10px_var(--primary)]" />

                  {/* Content card */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                      <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-mono text-sm mt-1">{edu.institution}</p>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
