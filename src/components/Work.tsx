import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

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
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "AI Drug Discovery System",
        description:
            "An intelligent app that helps parents track and manage their baby’s vaccinations with ease. Built using React Native and Supabase, it offers regional language support, timely reminders, and organized health records — ensuring every child stays protected on time.",
        tech: [
            "React.js",
            "Supabase",
            "Gemini-flash-2.0",
            "Opentargets",
            "Chembl",
        ],
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "Infant Health Tracker",
        description:
            "App that lets parents track and manage their baby’s vaccinations with ease. Built using React Native and Supabase, it supports regional languages, sends timely reminders, and keeps all vaccination records in one safe place..",
        tech: ["React-Native", "Supabase"],
        link: "#",
        github: "#",
        category: "Mobile App",
    },
    {
        title: "Women Safety Companion",
        description:
            "Reliable app that helps women stay safe and connected anytime. Built using React Native and Supabase, it supports regional languages, includes an emergency alert system and chatbot assistance, and lets users share live location with trusted contacts instantly.",
        tech: ["React-Native", "Supabase"],
        link: "#",
        github: "#",
        category: "Mobile App",
    },
    {
        title: "Cotton Disease Prediction System",
        description:
            "A deep learning system that predicts cotton plant diseases from images using transfer learning. Trained on the Kaggle Cotton Disease Dataset, it classifies images into four categories: diseased cotton leaf, diseased cotton plant, fresh cotton leaf, and fresh cotton plant, achieving 98.1% accuracy with ResNet152V2.",
        tech: ["TensorFlow", "Python", "RESNET50"],
        link: "#",
        github: "#",
        category: "Machine Learning",
    },
    {
        title: "Revenue Department E-Certificate Portal",
        description:
            "A web-based system for the Revenue Department to manage online applications for income, domicile, residence, and caste certificates. It enables users to apply digitally, supports multi-level staff verification, SDO approval, automatic PDF certificate generation, and real-time verification with complete audit logs.",
        tech: ["React.js", "Supabase"],
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "Gamified Coding platform Using AI",
        description:
            "An AI-powered gamified coding platform that makes learning to code engaging and personalized. It features coding challenges that boost XP when solved, an interactive chatbot, AI-generated flashcards and quizzes, and structured learning modules with roadmaps to guide learners from basics to mastery.",
        tech: ["React.js", "Supabase", "Gemini-flash-2.0"],
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "AI Forex Predictor",
        description:
            "A forex prediction app that uses Financial Modeling Prep API to deliver real-time currency insights, pair comparisons, and AI-based forecasts. It helps traders analyze market trends and make smarter, data-driven trading decisions.",
        tech: ["React.js", "Supabase", "Gemini-flash-2.0"],
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "Alumni Connect Platform",
        description:
            "A collaborative platform that connects alumni, students, mentors, HODs, and group leaders in one place. It features role-based access, user management, real-time chat, and meeting integration to strengthen networking, mentorship, and community engagement.",
        tech: ["React.js", "Supabase"],
        link: "#",
        github: "#",
        category: "Web App",
    },
    {
        title: "Autogenics: Car Service Management Platform",
        description:
            "A full-stack car detailing platform built with React.js, Supabase, and Gemini AI for seamless booking, progress tracking, and feedback collection. It features an AI-powered chatbot for live customer support and an admin dashboard with Recharts to visualize bookings, service trends, and customer ratings.",
        tech: ["React.js", "Supabase", "Recharts"],
        link: "#",
        github: "#",
        category: "Web App",
    },
];

export const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // filter logic
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const categories = ["All", "Web App", "Mobile App", "Machine Learning"];

    return (
        <section id="work" className="min-h-screen py-32 px-6">
            <div className="mx-auto">
                {/* Heading */}
                <div className="mb-10 opacity-0 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                        Selected Work
                    </h2>
                    <div className="w-20 h-1 bg-primary" />
                </div>

                {/* 🔹 Filter Bar */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm md:text-base border transition-colors
                                ${
                                    selectedCategory === cat
                                        ? "bg-primary text-background border-primary"
                                        : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project List */}
                <div className="space-y-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group border-t border-border py-10 opacity-0 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="grid md:grid-cols-[2fr,3fr,auto] gap-8 items-start">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Category Badge */}
                                    <p className="inline-block mt-2 px-3 py-1 text-sm md:text-base text-primary border border-primary/40 rounded-full bg-primary/5">
                                        {project.category}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-muted-foreground text-xl text-justify leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-lg text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="p-2 hover:text-primary transition-colors"
                                        aria-label="View on GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        className="p-2 hover:text-primary transition-colors"
                                        aria-label="View project"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
