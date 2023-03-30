import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fromLeft?: boolean;
  delay?: number;
}
export function SlideIn({ fromLeft, children, className, delay }: Props) {
  const vars: Variants = {
    hidden: { x: fromLeft ? -40 : 40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay || 0.4,
        duration: 0.4,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      viewport={{ once: true, amount: "some", margin: "100px" }}
      variants={vars}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}