import { ReactNode } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

interface Props {
  children: ReactNode;
  fromLeft: boolean;
}

export function ProjectLayout({ children, fromLeft }: Props) {
  return (
    <motion.section
      viewport={{ once: true, amount: "some" }}
      initial={{ x: fromLeft ? -40 : 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className={cx([
        "lg:px-10 lg:gap-0",
        "grid lg:grid-cols-2 relative rounded-md overflow-hidden",
      ])}
    >
      {children}
    </motion.section>
  );
}
