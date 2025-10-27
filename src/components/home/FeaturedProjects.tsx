import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "AI Finance Manager",
        description:
            "An intelligent system that automates budgeting, expense tracking, and financial forecasting using real-time data and machine learning insights. It helps you make smarter financial decisions with precision, transparency, and control.",
        tech: [
            "Next.js",
            "Inngest",
            "Clerk-Auth",
            "Supabase",
            "Gemini-flash-2.0",
        ],
        metric: "500+ Active Users",
    },
    {
        title: "AI Drug Discovery System",
        description:
            "A platform that accelerates drug discovery using AI and biomedical data. It identifies targets, analyzes molecules, and generates research-ready reports for faster insights.",
        tech: [
            "React.js",
            "Supabase",
            "Gemini-flash-2.0",
            "Opentargets",
            "Chembl",
        ],
        metric: "1k+ events/month",
    },
    {
        title: "Cotton Disease Prediction System",
        description:
            "A deep learning system that predicts cotton plant diseases from images using transfer learning. Trained on the Kaggle dataset, it classifies leaves and plants with 98.1% accuracy using ResNet152V2.",
        tech: ["TensorFlow", "Python", "RESNET50"],
        metric: "Real-time inference",
    },
];

export const FeaturedProjects = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                    Featured Projects
                </h2>
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group border border-border p-6 rounded-lg hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                            </div>

                            <p className="text-muted-foreground mb-4 text-base md:text-lg">
                                {project.description}
                            </p>

                            {/* ✅ Responsive flex wrapping */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-secondary rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm text-primary whitespace-nowrap">
                                    {project.metric}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
