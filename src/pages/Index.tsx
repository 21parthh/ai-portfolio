import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Dots } from "@/components/Dots";
import { Row, SectionLabel } from "@/components/Row";
import { CopyEmail } from "@/components/CopyEmail";
import { Signature } from "@/components/Signature";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { PhotoStrip } from "@/components/PhotoStrip";
import { useTitle } from "@/hooks/useTitle";
import { site } from "@/site";

const experience = [
    {
        title: "careerpassport.ai",
        description: "Member of Technical Staff",
        meta: "NOW",
    },
    {
        title: "templeads infotech",
        description: "founder — my own development agency",
        meta: "2024–2025",
        href: "https://templeadsinfotech.com/",
    },
    {
        title: "betatest solutions",
        description: "engineering intern",
        meta: "2023",
    },
];

const writing = [
    {
        title: "Understanding Transformer Architecture",
        meta: "15.MAR.2024",
        href: "https://medium.com/@parth.deore",
    },
    {
        title: "Building Scalable ML Pipelines",
        meta: "08.MAR.2024",
        href: "https://medium.com/@parth.deore",
    },
    {
        title: "Model Optimization Techniques",
        meta: "28.FEB.2024",
        href: "https://medium.com/@parth.deore",
    },
    {
        title: "Monolith to Microservices",
        meta: "20.FEB.2024",
        href: "https://medium.com/@parth.deore",
    },
];

/* Honest flair: a real link when the URL exists in site.ts, otherwise the
   same voice with no affordance. */
const SocialFlair = ({ label }: { label: string }) => {
    const href = site.socials.find((s) => s.label === label)?.href;
    if (!href || href === "#") {
        return <span className="flair-em">{label}</span>;
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="flair"
        >
            {label}
        </a>
    );
};

const Index = () => {
    useTitle("Parth Deore");
    return (
    <>
        <main className="wrap pb-16 pt-12 sm:pt-16">
            <Header />

            <section
                className="cascade cascade-3 mt-8 space-y-6"
                aria-label="Introduction"
            >
                <p className="prose-just text-body text-ink">
                    I&rsquo;m a Member of Technical Staff at{" "}
                    <a
                        href="https://careerpassport.ai"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flair"
                    >
                        careerpassport.ai
                    </a>
                    , working on AI. Before that I ran a small development
                    agency called{" "}
                    <a
                        href="https://templeadsinfotech.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flair"
                    >
                        templeads infotech
                    </a>
                    .
                </p>
                <p className="prose-just text-body text-ink">
                    Most of my work is machine learning, but I end up caring
                    a lot about how things look and feel.{" "}
                    <em className="flair-em">
                        The interface matters as much as the model.
                    </em>
                </p>
                <p className="prose-just text-body text-ink">
                    I{" "}
                    <a href="#writing" className="flair">
                        write
                    </a>{" "}
                    sometimes &mdash; mostly about ML and shipping things. I
                    also take{" "}
                    <Link to="/mind" className="flair">
                        photos
                    </Link>{" "}
                    and save quotes I like.
                </p>
                <p className="prose-just text-body text-ink">
                    If you want to talk, <CopyEmail /> &mdash; or find me on{" "}
                    <SocialFlair label="GitHub" /> and{" "}
                    <SocialFlair label="LinkedIn" />.
                </p>
            </section>

            <div className="cascade cascade-4">
                <Reveal>
                    <Dots pop />
                    <section aria-label="Experience">
                        <SectionLabel>Experience</SectionLabel>
                        <div className="stagger">
                            {experience.map((job) => (
                                <Row key={job.title} {...job} />
                            ))}
                        </div>
                    </section>
                </Reveal>

                <Reveal>
                    <Dots />
                    <section
                        id="writing"
                        className="scroll-mt-8"
                        aria-label="Writing"
                    >
                        <SectionLabel>Writing</SectionLabel>
                        <div className="stagger">
                            {writing.map((post) => (
                                <Row key={post.title} {...post} />
                            ))}
                        </div>
                    </section>
                </Reveal>

                <Reveal>
                    <Dots />
                    <section aria-label="Mind">
                        <SectionLabel>Mind</SectionLabel>
                        <PhotoStrip />
                        <p className="mt-4">
                            <Link
                                to="/mind"
                                className="arrow-link u-link text-body text-ink-2"
                            >
                                Quotes and more{" "}
                                <span className="arrow" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                        </p>
                    </section>
                </Reveal>

                <Reveal>
                    <Dots />
                    <Signature />
                </Reveal>
            </div>
        </main>

        <Footer />
    </>
    );
};

export default Index;
