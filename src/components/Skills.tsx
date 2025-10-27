const skills = [
    {
        category: "AI & Machine Learning",
        icon: "01",
        items: [
            "Deep Learning (PyTorch, TensorFlow)",
            "Computer Vision & Object Detection",
            "NLP & Transformer Models",
            "MLOps & Model Deployment",
            "Reinforcement Learning",
            "Data Science & Analytics",
        ],
    },
    {
        category: "Backend Development",
        icon: "02",
        items: [
            "Node.js, Express, FastAPI",
            "PostgreSQL, MongoDB, Redis",
            "REST & GraphQL APIs",
            "Microservices Architecture",
            "System Design & Optimization",
            "Real-time Data Processing",
        ],
    },
    {
        category: "Frontend Development",
        icon: "03",
        items: [
            "React, Next.js, TypeScript",
            "Modern UI/UX Design",
            "State Management (Redux, Zustand)",
            "Tailwind CSS, Responsive Design",
            "Performance Optimization",
            "Component Architecture",
        ],
    },
    {
        category: "Cloud & DevOps",
        icon: "04",
        items: [
            "AWS (EC2, S3, Lambda, SageMaker)",
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "Infrastructure as Code",
            "Monitoring & Logging",
            "Serverless Architecture",
        ],
    },
];

export const Skills = () => {
    return (
        <section className="py-32 px-6 relative">
            {/* Background accent */}
            <div className="absolute right-0 top-1/4 w-1/3 h-px bg-primary/10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 opacity-0 animate-fade-in">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="text-xs tracking-[0.3em] text-primary uppercase">
                            Expertise
                        </div>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold">
                        Technical
                        <br />
                        <span className="text-primary">Capabilities</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fade-in group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-start gap-8">
                                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                                    {skill.icon}
                                </div>

                                <div className="flex-1 space-y-6">
                                    <h3 className="text-2xl font-bold">
                                        {skill.category}
                                    </h3>

                                    <ul className="space-y-3">
                                        {skill.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-muted-foreground group/item"
                                            >
                                                <span className="text-primary mt-1.5">
                                                    —
                                                </span>
                                                <span className="text-base group-hover/item:text-foreground transition-colors">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom accent */}
                <div
                    className="mt-32 pt-16 border-t border-border opacity-0 animate-fade-in"
                    style={{ animationDelay: "600ms" }}
                >
                    <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                        <div>
                            <div className="text-sm text-muted-foreground mb-2">
                                Frameworks
                            </div>
                            <div className="text-lg">
                                PyTorch • TensorFlow • Transformers • Keras
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-2">
                                Languages
                            </div>
                            <div className="text-lg">
                                Python • TypeScript • JavaScript • SQL
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-2">
                                Tools
                            </div>
                            <div className="text-lg">
                                Git • Docker • Jupyter • VS Code
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
