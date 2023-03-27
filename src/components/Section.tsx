import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  _title: string;
  _count: string;
}

export function Section(props: Props) {
  const { _title, _count, children, className } = props;
  return (
    <section {...props} className="my-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: "all" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-mono text-brand-50 mb-4"
      >
        <span className="text-2xl text-brand-300">{_count}</span>.&nbsp;{_title}
      </motion.h2>
      <div className={className}>{children}</div>
    </section>
  );
}
