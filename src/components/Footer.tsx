import { PuneClock } from "@/components/PuneClock";
import { site } from "@/site";

/* The darker strip with the live clock — rendered on every route. */
export const Footer = () => (
    <footer className="bg-page2 py-6">
        <div className="wrap flex items-center justify-between">
            <PuneClock />
            <p className="font-mono text-micro text-ink-2">
                &copy; {site.name}
            </p>
        </div>
    </footer>
);
