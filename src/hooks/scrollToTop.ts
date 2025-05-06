import { useEffect } from "react";

export const useScrollToTop = (topValue: number = 0) => {
    useEffect(() => {
        window.scrollTo({ top: topValue, behavior: 'smooth' });
    }, []);
};