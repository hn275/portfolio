import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  _title: string;
  _count: string;
  paddingX?: string;
}

export function AnimatedSection(props: Props) {
  const { _title, _count, children, className, paddingX } = props;
  return (
    <section {...props} className={cx(["my-20", paddingX])}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: "all" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-mono text-accent mb-4"
      >
        <span className="text-2xl text-secondary">{_count}</span>.&nbsp;{_title}
      </motion.h2>
      <div className={className}>{children}</div>
    </section>
  );
}
