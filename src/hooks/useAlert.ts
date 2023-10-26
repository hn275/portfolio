import { useEffect, useState } from "react";

export function useAlert(delay = 5000) {
    const [alert, setAlert] = useState<boolean>(false);

    useEffect(() => {
        if (!alert) return;

        const id = setTimeout(() => {
            setAlert(() => false);
        }, delay);

        return () => clearTimeout(id);
    }, [alert, setAlert, delay]);

    return {
        onAlert: () => setAlert(() => true),
        alert,
    };
}
