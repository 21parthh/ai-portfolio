import { useRef, useState } from "react";
import { site } from "@/site";

/* The site's one owned micro-interaction: click copies the address,
   label swaps to "Copied" for 1.5s. Announced politely to screen readers. */
export const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable — fall back to the mail client.
            window.location.href = `mailto:${site.email}`;
        }
    };

    return (
        <>
            <button type="button" onClick={copy} className="flair">
                {copied ? "copied!" : "say hello"}
            </button>
            {/* Announced separately — label swaps inside a focused button
                are unreliable in VoiceOver. */}
            <span role="status" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
            </span>
        </>
    );
};
