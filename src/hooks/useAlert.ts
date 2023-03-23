import { useEffect, useState } from "react";

export function useAlert() {
  const [alert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!alert) return;

    const id = setTimeout(() => {
      setAlert(() => false);
    }, 5000);

    return () => clearTimeout(id);
  }, [alert, setAlert]);

  return {
    onAlert: () => setAlert(() => true),
    alert,
  };
}
