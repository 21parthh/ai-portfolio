import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
];

export const ConnectSection = () => {
    return (
        <section className="py-20 mb-10">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                    Let's Connect
                </h2>
                <div className="border border-border p-8 space-y-6">
                    <p className="text-lg text-muted-foreground">
                        Interested in collaborating on AI projects or discussing
                        technology? I'm always open to interesting conversations
                        and new opportunities.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="flex items-center gap-2 px-4 py-2 border border-border hover:border-primary transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{social.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            📍 Based in Pune, India • Available for remote work
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
