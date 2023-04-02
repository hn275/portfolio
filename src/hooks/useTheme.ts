import { useEffect, useState } from "react";

const THEME = "darkMode";

export function useTheme() {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const ls = window.localStorage.getItem(THEME);
    if (!ls) setDark(() => false);
    else {
      const darkMode: boolean = JSON.parse(ls);
      setDark(() => darkMode);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");

    if (dark) html?.classList.add("dark");
    else html?.classList.remove("dark");

    window.localStorage.setItem(THEME, JSON.stringify(dark));
  }, [dark]);

  return { dark, toggleDarkMode: () => setDark((d) => !d) };
}
