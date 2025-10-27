import {
    FaPython,
    FaNodeJs,
    FaReact,
    FaDocker,
    FaAws,
    FaGitAlt,
    FaLinux,
} from "react-icons/fa";
import {
    SiPytorch,
    SiTensorflow,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiNextdotjs,
    SiTailwindcss,
    SiKubernetes,
    SiIced,
    SiVite,
    SiTypescript,
} from "react-icons/si";

const iconMap = {
    PyTorch: <SiPytorch />,
    TensorFlow: <SiTensorflow />,
    Transformers: <FaPython />,
    "Computer Vision": <FaPython />,
    NLP: <FaPython />,
    "Deep Learning": <SiPytorch />,

    Python: <FaPython />,
    "Node.js": <FaNodeJs />,
    FastAPI: <FaPython />,
    PostgreSQL: <SiPostgresql />,
    MongoDB: <SiMongodb />,
    Redis: <SiRedis />,

    React: <FaReact />,
    TypeScript: <SiTypescript />,
    "Next.js": <SiNextdotjs />,
    "Tailwind CSS": <SiTailwindcss />,
    Vite: <SiVite />,

    Docker: <FaDocker />,
    Kubernetes: <SiKubernetes />,
    Git: <FaGitAlt />,
    "CI/CD": <SiIced />,
    AWS: <FaAws />,
    Linux: <FaLinux />,
};

const skillCategories = [
    {
        title: "AI & Machine Learning",
        skills: [
            "PyTorch",
            "TensorFlow",
            "Transformers",
            "Computer Vision",
            "NLP",
            "Deep Learning",
        ],
    },
    {
        title: "Backend & APIs",
        skills: [
            "Python",
            "Node.js",
            "FastAPI",
            "PostgreSQL",
            "MongoDB",
            "Redis",
        ],
    },
    {
        title: "Frontend & UI",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
    },
    {
        title: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS", "Linux"],
    },
];

export const SkillsSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                    Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold text-primary">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="flex items-center gap-2 px-3 py-1 border border-border rounded-md text-lg hover:border-primary hover:bg-muted/20 transition-all"
                                    >
                                        <span className="text-primary text-base">
                                            {iconMap[skill] || <FaPython />}{" "}
                                            {/* fallback */}
                                        </span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
