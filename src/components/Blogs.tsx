import { ArrowUpRight } from "lucide-react";

const blogPosts = [
    {
        title: "Understanding Transformer Architecture",
        date: "Mar 15, 2024",
        tags: ["Deep Learning", "NLP"],
        description: "Deep dive into the architecture that revolutionized NLP",
        readTime: "8 min read",
        url: "https://medium.com/@yourprofile",
    },
    {
        title: "Building Scalable ML Pipelines",
        date: "Mar 8, 2024",
        tags: ["MLOps", "Kubernetes"],
        description:
            "Production-ready machine learning infrastructure at scale",
        readTime: "12 min read",
        url: "https://medium.com/@yourprofile",
    },
    {
        title: "Model Optimization Techniques",
        date: "Feb 28, 2024",
        tags: ["Optimization", "Edge Computing"],
        description:
            "Making AI models faster and more efficient for edge deployment",
        readTime: "10 min read",
        url: "https://medium.com/@yourprofile",
    },
    {
        title: "Monolith to Microservices",
        date: "Feb 20, 2024",
        tags: ["Architecture", "Backend"],
        description: "Lessons learned from migrating large-scale applications",
        readTime: "15 min read",
        url: "https://medium.com/@yourprofile",
    },
];

export const Blogs = () => {
    return (
        <section id="blogs" className="py-32">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-20 opacity-0 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl text-primary font-bold mb-4">
                        Writing
                    </h2>
                    <div className="w-20 h-1 bg-primary" />
                </div>

                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <a
                            key={index}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border border-border/50 rounded-lg p-8 opacity-0 animate-fade-in hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(34,197,94,0.1)] transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors flex-1">
                                        {post.title}
                                    </h3>
                                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {post.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <div className="flex gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground ml-auto">
                                        <span>{post.readTime}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
