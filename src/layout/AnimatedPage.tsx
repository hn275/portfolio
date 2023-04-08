import { motion, Variants } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export function AnimatedPage() {
  const { pathname } = useLocation();

  const vars: Variants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      key={pathname}
      variants={vars}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ type: "just", when: "beforeChildren" }}
    >
      <Outlet />
    </motion.div>
  );
}
