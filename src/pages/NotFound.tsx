import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useTitle } from "@/hooks/useTitle";

const NotFound = () => {
    useTitle("404 — Parth Deore");
    return (
    <>
    <main className="wrap min-h-[60vh] pt-16 sm:pt-24">
        <p className="font-mono text-meta uppercase tracking-widest text-ink-2">
            404
        </p>
        <h1 className="mt-2 text-name text-ink">
            This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 text-body">
            <Link to="/" className="flair">
                Back home
            </Link>
        </p>
    </main>
    <Footer />
    </>
    );
};

export default NotFound;
