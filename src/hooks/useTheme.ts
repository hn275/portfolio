import { useEffect, useState } from "react";

const THEME = "darkMode";

export function useTheme() {
    const ls = window.localStorage.getItem(THEME);
    const init = ls ? JSON.parse(ls) : true;
    const [dark, setDark] = useState<boolean>(init);
    const html = document.querySelector("html");

    useEffect(() => {
        const ls = window.localStorage.getItem(THEME);
        const init = ls ? JSON.parse(ls) : true;
        setDark(() => init);
    }, []);

    useEffect(() => {
        if (dark) html?.classList.add("dark");
        else html?.classList.remove("dark");
        window.localStorage.setItem(THEME, JSON.stringify(dark));
    }, [dark]);

    return { dark, toggleDarkMode: () => setDark((d) => !d) };
}
