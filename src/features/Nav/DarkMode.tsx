import { useTheme } from "hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FaRegMoon } from "react-icons/fa";
import classNames from "classnames";
import { FiSun } from "react-icons/fi";
import { HTMLAttributes } from "react";

export function DarkMode({ className }: HTMLAttributes<HTMLButtonElement>) {
  const { dark, toggleDarkMode } = useTheme();

  const sunVar: Variants = {
    hidden: { y: 30 },
    show: { y: 0 },
  };
  const moonVar: Variants = {
    hidden: { y: -30 },
    show: { y: 0 },
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={classNames(
        "p-[13px] rounded-md relative overflow-hidden",
        "bg-white hover:bg-gray-100",
        "dark:bg-brand-100",
        "text-brand-50 dark:text-slate-900",
        "transition-colors duration-300 delay-600",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div
            key="sun"
            variants={sunVar}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative"
          >
            <FiSun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={moonVar}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <FaRegMoon />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
