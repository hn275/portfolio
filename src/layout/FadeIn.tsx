import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}
export function FadeIn({ children, className, delay }: Props) {
  const vars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.4,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      viewport={{ once: true, amount: "all", margin: "100px" }}
      variants={vars}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
