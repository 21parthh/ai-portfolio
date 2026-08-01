import { Header } from "@/components/Header";
import { Dots } from "@/components/Dots";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/Row";
import { PhotoStrip } from "@/components/PhotoStrip";
import { useTitle } from "@/hooks/useTitle";

const quotes = [
    {
        quote: "We ain't picture perfect, but we worth the picture still.",
        source: "J. Cole",
    },
    {
        quote: "You can't always get what you want. But if you try sometime, you find you get what you need.",
        source: "The Rolling Stones",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        source: "Steve Jobs",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        source: "Winston Churchill",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        source: "Albert Einstein",
    },
];


const MindPage = () => {
    useTitle("Mind — Parth Deore");
    return (
    <>
    <main className="wrap pb-16 pt-12 sm:pt-16">
        <Header />

        <p className="cascade cascade-3 prose-just mt-8 text-body text-ink">
            Quotes I keep coming back to, a few favourites, and photographs
            from everyday life. There&rsquo;s a lot going on in my mind.
        </p>

        <div className="cascade cascade-4">
            <Dots />

            <section aria-label="Quotes">
                <SectionLabel>Quotes</SectionLabel>
                <ul className="space-y-6">
                    {quotes.map((item) => (
                        <li key={item.quote.slice(0, 16)}>
                            <blockquote>
                                <p className="prose-just text-body text-ink">
                                    &ldquo;{item.quote}&rdquo;
                                </p>
                                <footer className="mt-1 font-mono text-micro uppercase tracking-widest text-ink-2">
                                    {item.source}
                                </footer>
                            </blockquote>
                        </li>
                    ))}
                </ul>
            </section>

            <Dots />

            <section aria-label="Photography">
                <SectionLabel>Photography</SectionLabel>
                <PhotoStrip />
            </section>
        </div>
    </main>
    <Footer />
    </>
    );
};

export default MindPage;
