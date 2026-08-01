import type { ReactNode } from "react";

interface RowProps {
    title: string;
    /** Description after the " / " separator (reference style). */
    description?: string;
    /** Right-aligned mono value: a date ("15.MAR.2024") or a year. */
    meta?: string;
    href?: string;
}

const RowInner = ({ title, description, meta }: Omit<RowProps, "href">) => (
    <div className="flex items-baseline justify-between gap-6">
        <div className="min-w-0 text-body">
            <span className="text-ink">{title}</span>
            {description && (
                <span className="text-ink-2">
                    {" "}
                    /{" "}
                    <span className="text-ink opacity-80">{description}</span>
                </span>
            )}
        </div>
        {meta && (
            <span className="row-meta shrink-0 whitespace-nowrap font-mono text-meta tabular-nums text-ink-2">
                {meta}
            </span>
        )}
    </div>
);

export const Row = ({ href, ...rest }: RowProps) => {
    /* No real URL yet → honest static row: same anatomy, no hover
       affordance, not focusable. Fill hrefs in the page data to activate. */
    if (!href || href === "#") {
        return (
            <div className="row-static">
                <RowInner {...rest} />
            </div>
        );
    }

    const external = href.startsWith("http");
    return (
        <a
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="row"
        >
            <RowInner {...rest} />
        </a>
    );
};

export const SectionLabel = ({ children }: { children: ReactNode }) => (
    <h2 className="mb-4 font-mono text-meta uppercase tracking-widest text-ink-2">
        {children}
    </h2>
);
