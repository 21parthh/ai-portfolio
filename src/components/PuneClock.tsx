import { useEffect, useState } from "react";

const format = () =>
    new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
    }).format(new Date());

/* Live IST time, ticking on minute boundaries. */
export const usePuneTime = () => {
    const [time, setTime] = useState(format);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        const timeout = setTimeout(() => {
            setTime(format());
            interval = setInterval(() => setTime(format()), 60_000);
        }, (60 - new Date().getSeconds()) * 1000);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, []);

    return time;
};

/* Footer place-anchor: "20:32 in Pune, India" with a ticking colon. */
export const PuneClock = () => {
    const time = usePuneTime();
    const [hh, mm] = time.split(":");

    return (
        <p className="font-mono text-micro tabular-nums text-ink-2">
            {hh}
            <span className="colon">:</span>
            {mm} in Pune, India
        </p>
    );
};
