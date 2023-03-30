import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  h?: number;
}

export function AnimatedUnderline({ children, className, h }: Props) {
  const vars: Variants = {
    hidden: { width: 0 },
    show: { width: "100%", transition: { delay: 0.3 } },
  };

  return (
    <motion.span className={cx([className, "relative isolate"])}>
      {children}
      <motion.span
        variants={vars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={cx([
          "absolute bottom-[2px] left-0 w-full -z-10",
          "bg-brand-50/30 rounded-sm",
          className,
        ])}
        style={{ height: h || 7 }}
      />
    </motion.span>
  );
}
