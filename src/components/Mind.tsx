const principles = [
  "Continuous learning in a rapidly evolving field",
  "Impact over complexity—simple solutions win",
  "Fast iteration with solid engineering fundamentals",
  "Human-centered AI that augments, not replaces"
];

export const Mind = () => {
  return (
    <section id="mind" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 opacity-0 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Philosophy</h2>
          <div className="w-20 h-1 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-20 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building intelligent systems requires more than technical skills. It demands thoughtful problem-solving, 
              ethical considerations, and understanding that the best technology serves humanity.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every line of code is a decision. Every model is a responsibility. I approach AI development 
              with this understanding.
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-primary text-2xl font-bold min-w-[2rem]">0{index + 1}</span>
                <p className="text-lg text-muted-foreground pt-1">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 border-l-2 border-primary pl-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-2xl md:text-3xl font-bold mb-6">
            "The goal is not to build smarter machines,
            <br />
            but to build machines that make us smarter."
          </p>
          <p className="text-muted-foreground text-lg">
            Beyond code, I contribute to open-source, mentor developers, and explore the intersection of technology and philosophy.
          </p>
        </div>
      </div>
    </section>
  );
};
