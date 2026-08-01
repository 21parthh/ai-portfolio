import { useEffect, useRef, useState, type ReactNode } from "react";

/* Fade-up once on scroll entry. Falls back to visible without
   IntersectionObserver; reduced-motion handled in index.css. */
export const Reveal = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setShown(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-reveal={shown ? "in" : "out"}
            className={className}
        >
            {children}
        </div>
    );
};
