import { useEffect, useRef, useState } from "react";

/* The autograph. Mr Dafoe at display size, revealed with an ink-wipe as it
   scrolls into view — click to sign again. Reduced-motion users get the
   finished signature immediately (see index.css). */
export const Signature = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [drawn, setDrawn] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setDrawn(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDrawn(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const resign = () => {
        setDrawn(false);
        requestAnimationFrame(() =>
            requestAnimationFrame(() => setDrawn(true))
        );
    };

    return (
        <button
            ref={ref}
            type="button"
            onClick={resign}
            aria-label="Parth — signature. Activate to replay the signing."
            className="sig-wrap mx-auto block cursor-pointer"
        >
            <span className={`sig-ink ${drawn ? "sig-drawn" : ""}`}>
                Parth
            </span>
        </button>
    );
};
