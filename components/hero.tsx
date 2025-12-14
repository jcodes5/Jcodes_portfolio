export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">Fullstack Developer</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            {
              "Building seamless web experiences from frontend to backend. Specializing in modern JavaScript frameworks and robust server-side solutions."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
