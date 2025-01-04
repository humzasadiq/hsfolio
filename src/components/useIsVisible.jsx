import { useEffect, useState } from "react";

export function useIsVisible(ref, runOnlyOnce = false) {
    const [isIntersecting, setIntersecting] = useState(false);
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if (runOnlyOnce && hasRun) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (runOnlyOnce && entry.isIntersecting) {
                setHasRun(true);
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, runOnlyOnce, hasRun]);

    return isIntersecting;
}