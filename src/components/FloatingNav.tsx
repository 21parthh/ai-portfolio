import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const FloatingNav = () => {
    const location = useLocation();

    // 👇 Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <nav
            className="fixed bottom-8 left-0 right-0 z-50 opacity-0 animate-fade-in flex justify-center"
            style={{ animationDelay: "1000ms" }}
        >
            <div className="bg-black/80 backdrop-sm border border-primary/30 rounded-full px-8 py-3.5 flex gap-10 ">
                <Link
                    to="/"
                    className={`text-xl transition-colors ${
                        location.pathname === "/"
                            ? "text-primary"
                            : "hover:text-primary"
                    }`}
                >
                    Home
                </Link>
                <Link
                    to="/work"
                    className={`text-xl transition-colors ${
                        location.pathname === "/work"
                            ? "text-primary"
                            : "hover:text-primary"
                    }`}
                >
                    Work
                </Link>
                <Link
                    to="/blogs"
                    className={`text-xl transition-colors ${
                        location.pathname === "/blogs"
                            ? "text-primary"
                            : "hover:text-primary"
                    }`}
                >
                    Blog
                </Link>
                <Link
                    to="/mind"
                    className={`text-xl transition-colors ${
                        location.pathname === "/mind"
                            ? "text-primary"
                            : "hover:text-primary"
                    }`}
                >
                    Mind
                </Link>
            </div>
        </nav>
    );
};
