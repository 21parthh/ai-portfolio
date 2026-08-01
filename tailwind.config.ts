import type { Config } from "tailwindcss";

/* designerdada.com model: Schibsted Grotesk prose at 14px, Sono mono for
   labels and dates, IM Fell italic serif as the inline flair (see .flair). */
export default {
    
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Bricolage Grotesque Variable",
                    "Bricolage Grotesque",
                    "system-ui",
                    "sans-serif",
                ],
                display: ["Fraunces Variable", "Fraunces", "Georgia", "serif"],
                mono: ["Sono Variable", "Sono", "ui-monospace", "monospace"],
            },
            fontSize: {
                /* prose and rows — 15px/26px, ~75 chars at 576px */
                body: ["0.9375rem", { lineHeight: "1.625rem" }],
                /* name line — font-display (Fraunces, soft/wonk axes) */
                name: [
                    "clamp(2rem, 6vw, 2.75rem)",
                    { lineHeight: "1.15", fontWeight: "560" },
                ],
                /* mono section labels + dates */
                meta: ["0.8125rem", { lineHeight: "1.25rem" }],
                micro: ["0.75rem", { lineHeight: "1rem" }],
            },
            colors: {
                page: "var(--bg)",
                page2: "var(--bg-2)",
                ink: { DEFAULT: "var(--ink)", 2: "var(--ink-2)" },
                wash: "var(--wash)",
                hairline: "var(--hairline)",
            },
        },
    },
    plugins: [],
} satisfies Config;
