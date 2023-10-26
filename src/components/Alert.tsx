import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import { MdOutlineErrorOutline, MdCheck } from "react-icons/md";

interface Props extends HTMLAttributes<HTMLDivElement> {
    isMounted: boolean;
    error?: boolean;
}

export function Alert({ children, isMounted, error, className }: Props) {
    const styles = error ? "bg-red-300" : "bg-green-300";

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ type: "just" }}
                    className={cx([
                        "text-gray-900 rounded-md",
                        "flex items-center gap-3",
                        "px-5 py-2 z-50",
                        styles,
                        className,
                    ])}
                >
                    {error ? (
                        <span className="text-red-600">
                            <MdOutlineErrorOutline />
                        </span>
                    ) : (
                        <span className="text-green-600">
                            <MdCheck />
                        </span>
                    )}

                    <p>{children}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
