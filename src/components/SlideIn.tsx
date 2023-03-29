import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fromLeft?: boolean;
}
export function SlideIn({ fromLeft, children, className }: Props) {
  const vars: Variants = {
    hidden: { x: fromLeft ? -40 : 40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.4, delayChildren: 1 },
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
