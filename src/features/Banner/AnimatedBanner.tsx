import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
    children: ReactNode;
    className?: string;
}

export function AnimatedBanner({ children, className }: Props) {
    const vars: Variants = {
        hidden: {
            opacity: 0,
            scale: 1.1,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                when: "beforeChildren",
                delay: 0.5,
                duration: 0.5,
            },
        },
    };

    return (
        <motion.section
            variants={vars}
            initial="hidden"
            animate="show"
            className={className}
            id="banner"
        >
            {children}
        </motion.section>
    );
}
