import { useEffect, useState } from "react";

export function useAutoHide(value: number) {
    const [hide, setHide] = useState<boolean>(true);

    useEffect(() => {
        const listener = () => {
            setHide(() => window.scrollY < value);
        };

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    }, [window.scrollY, value]);

    return hide;
}
