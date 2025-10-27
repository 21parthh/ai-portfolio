const experiences = [
    {
        role: "Freelancer - Full Stack Developer",
        company: "RGI Agrotech",
        period: "2025",
        highlights: [
            " Developed and maintained client websites using Next.js",

            "✨ Collaborated with designers to implement pixel-perfect UIs",
        ],
    },
    {
        role: "Freelancer - Full Stack Developer",
        company: "CodetechEra",
        period: "2024",
        highlights: [
            "Built responsive web applications using React and Redux",

            "🎨 Implemented design systems and component libraries",

            "⚡️ Reduced application bundle size by 40%",
        ],
    },
    {
        role: "Freelancer - Full-Stack Developer",
        company: "Shree Ganesh Enterprises",
        period: "2023",
        highlights: [
            "🧩 Architected microservices infrastructure using Node.js and TypeScript",

            "🔗 Developed APIs and backend systems for software products",
        ],
    },
];

export const ExperienceSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-primary">
                    Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group border-l border-border pl-8 hover:border-primary transition-colors space-y-4"
                        >
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-lg text-foreground/70">
                                    {exp.company}
                                </p>
                            </div>

                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li
                                        key={i}
                                        className="text-muted-foreground flex gap-3 text-lg"
                                    >
                                        <span className="text-primary ">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
