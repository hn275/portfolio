import { useState } from "react";

export function useToggle(init: boolean = false) {
    const [open, setOpen] = useState<boolean>(init);

    return {
        open,
        onOpen: () => setOpen(() => true),
        onClose: () => setOpen(() => false),
        onToggle: () => setOpen((o) => !o),
    };
}
