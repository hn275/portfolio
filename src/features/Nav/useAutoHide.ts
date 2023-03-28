import { useEffect, useRef } from "react";

export function useAutoHide(value: number) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const listener = () => {
      const className = "-translate-y-[100%]";
      window.scrollY < value
        ? ref.current?.classList.add(className)
        : ref.current?.classList.remove(className);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [window.scrollY, value]);

  return ref;
}
