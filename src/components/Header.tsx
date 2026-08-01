import { Link, useLocation } from "react-router-dom";
import { usePuneTime } from "@/components/PuneClock";

const tabs = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/mind", label: "Mind" },
];

/* Big soft-serif name, live Pune stamp, inline tab nav. */
export const Header = () => {
    const { pathname } = useLocation();
    const time = usePuneTime();

    return (
        <header>
            <h1
                aria-label="parth.deore"
                className="name-display flex items-center gap-3 font-display text-name text-ink"
            >
                {/* Letters rise in one by one. */}
                <span aria-hidden="true">
                    {"parth.deore".split("").map((letter, index) => (
                        <span
                            key={index}
                            className="name-letter"
                            style={{ animationDelay: `${index * 40}ms` }}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
                {/* Availability LED. */}
                <span
                    className="led mt-1 block h-2 w-2 rounded-full"
                    style={{ background: "var(--dot-green)" }}
                />
                <span className="sr-only">Available for opportunities</span>
            </h1>

            {/* The Pune heartbeat — header echo of the footer clock. */}
            <p className="cascade cascade-1 mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">
                Pune, India &mdash;{" "}
                <span className="tabular-nums">{time}</span> IST
            </p>

            <nav
                aria-label="Primary"
                className="cascade cascade-2 mt-4 flex items-center gap-5"
            >
                {tabs.map((tab) => {
                    const active = pathname === tab.to;
                    return (
                        <Link
                            key={tab.to}
                            to={tab.to}
                            aria-current={active ? "page" : undefined}
                            className={`-my-2 py-2 ${
                                active
                                    ? "tab text-body font-semibold text-ink"
                                    : "tab text-body text-ink-2 hover:text-ink"
                            }`}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};
