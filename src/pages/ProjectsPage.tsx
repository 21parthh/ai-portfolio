import { Header } from "@/components/Header";
import { Dots } from "@/components/Dots";
import { Footer } from "@/components/Footer";
import { Row, SectionLabel } from "@/components/Row";
import { useTitle } from "@/hooks/useTitle";

/* The complete list — flagships first. */
const projects = [
    {
        title: "AI Finance Manager",
        description: "Personal finance on autopilot · 500+ users",
        href: "#",
    },
    {
        title: "Cotton Disease Prediction",
        description: "Diagnoses cotton leaf disease at 98.1% accuracy",
        href: "#",
    },
    {
        title: "AI Drug Discovery",
        description: "Target and molecule analysis for researchers",
        href: "#",
    },
    {
        title: "AI Forex Predictor",
        description: "Currency forecasts from live market data",
        href: "#",
    },
    {
        title: "Infant Health Tracker",
        description: "Vaccination tracking for parents, in regional languages",
        href: "#",
    },
    {
        title: "Women Safety Companion",
        description: "Emergency alerts and live location sharing",
        href: "#",
    },
    {
        title: "E-Certificate Portal",
        description: "Digital certificate workflow for the Revenue Department",
        href: "#",
    },
    {
        title: "Gamified Coding Platform",
        description: "Learning to code with XP, quizzes, and AI roadmaps",
        href: "#",
    },
    {
        title: "Alumni Connect",
        description: "Networking and mentorship for students and alumni",
        href: "#",
    },
    {
        title: "Autogenics",
        description: "Car service booking with an AI support chatbot",
        href: "#",
    },
];

const ProjectsPage = () => {
    useTitle("Projects — Parth Deore");
    return (
        <>
            <main className="wrap pb-16 pt-12 sm:pt-16">
                <Header />

                <div className="cascade cascade-3">
                    <Dots />

                    <section aria-label="All projects">
                        <SectionLabel>All projects</SectionLabel>
                        <div>
                            {projects.map((project) => (
                                <Row key={project.title} {...project} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
