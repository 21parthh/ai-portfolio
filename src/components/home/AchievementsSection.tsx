import { Trophy, Award, Star, Target } from "lucide-react";

const achievements = [
    {
        title: "Machine Learning Engineer ",
        description: "🏅 Symbiosis Skills & Professional University • 2024",
    },
    {
        title: "AWS Academy Graduate - AWS Academy Cloud Operations ",
        description: "Amazon Web Services Training and Certification • 2023",
    },
    {
        title: "UI Development Workshop",
        description: "Html Hints • 2022",
    },
    {
        title: "100k+ Events Processed",
        description: "Built systems handling massive real-time data streams",
    },
];

export const AchievementsSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                    Achievements & Certifications
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className="border border-border p-6 hover:border-primary/50 transition-all"
                            >
                                <h3 className="text-xl font-bold mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {achievement.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
