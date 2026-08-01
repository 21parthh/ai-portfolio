import { useEffect } from "react";

/* Per-route document titles. */
export const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};
