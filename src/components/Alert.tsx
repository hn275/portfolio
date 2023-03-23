import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
  isMounted: boolean;
}

export function Alert({ children, isMounted }: Props) {
  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: "just" }}
          className={cx([
            "fixed bottom-8 left-8",
            "z-50 font-[500]",
            "bg-green-300 text-gray-900 rounded-md",
            "px-5 py-2",
          ])}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
