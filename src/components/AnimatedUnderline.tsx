import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  h?: number;
  duration?: number;
  delay?: number;
}

export function AnimatedUnderline({
  children,
  className,
  h,
  duration,
  delay,
}: Props) {
  const baseDelay = 0.2;
  const vars: Variants = {
    hidden: {
      width: 0,
    },
    show: {
      width: "100%",
      transition: {
        delay: delay ? baseDelay + delay : baseDelay,
        duration,
      },
    },
  };

  return (
    <motion.span className={cx([className, "relative isolate font-semibold"])}>
      {children}
      <motion.span
        variants={vars}
        className={cx([
          "absolute bottom-[1px] left-0 w-full -z-10",
          "bg-brand-100/50 rounded-sm",
          className,
        ])}
        style={{ height: h || 7 }}
      />
    </motion.span>
  );
}