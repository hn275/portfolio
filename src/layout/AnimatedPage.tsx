import { motion, Variants } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export function AnimatedPage() {
  const { pathname } = useLocation();

  const vars: Variants = {
    hidden: { x: "-100%" },
    show: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <motion.div
      key={pathname}
      variants={vars}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ type: "just" }}
    >
      <Outlet />
    </motion.div>
  );
}
