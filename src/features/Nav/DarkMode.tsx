import { useTheme } from "hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FaRegMoon } from "react-icons/fa";
import classNames from "classnames";
import { FiSun } from "react-icons/fi";
import { HTMLAttributes } from "react";

export function DarkMode({ className }: HTMLAttributes<HTMLButtonElement>) {
    const { dark, toggleDarkMode } = useTheme();

    const vars: Variants = {
        hidden: { y: -30 },
        show: { y: 0 },
        exit: { y: 30 },
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={classNames(
                "p-[13px] rounded-md relative overflow-hidden",
                "bg-white hover:bg-slate-100",
                "dark:bg-brand-100 dark:hover:bg-brand-50",
                "text-brand-50 dark:text-slate-900",
                "transition-colors duration-300 delay-600",
                "shadow-main",
                className,
            )}
        >
            <AnimatePresence mode="wait">
                {dark ? (
                    <motion.div
                        key="sun"
                        variants={vars}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <FiSun />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        variants={vars}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <FaRegMoon className="text-brand-200" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
