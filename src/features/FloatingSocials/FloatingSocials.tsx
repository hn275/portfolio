import { FiLinkedin, FiGithub } from "react-icons/fi";
import { HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import { LINKS } from "lib/links";
import shortid from "shortid";
import { scrollToID } from "lib/scrollToID";
import { MdAlternateEmail } from "react-icons/md";
import { motion, Variants } from "framer-motion";

export function FloatingSocials(props: HTMLAttributes<HTMLUListElement>) {
  const links: LIProps[] = [
    { text: "LinkedIn", href: LINKS.linkedin, node: <FiLinkedin /> },
    { text: "GitHub", href: LINKS.github, node: <FiGithub /> },
    {
      text: "Send me an email",
      onClick: () => scrollToID("#contact"),
      node: <MdAlternateEmail />,
    },
  ];

  return (
    <ul {...props}>
      {links.map((link, i) => (
        <Li key={shortid.generate()} order={i} {...link} />
      ))}
    </ul>
  );
}

interface LIProps {
  text: string;
  href?: string;
  node: ReactNode;
  onClick?: () => void;
  order?: number;
}

function Li({ text, node, href, onClick, order }: LIProps) {
  const vars: Variants = {
    hidden: { x: "100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: order! * 0.1 + 0.5 } },
    hover: { scale: 1.25 },
  };

  return (
    <motion.li
      variants={vars}
      initial="hidden"
      animate="show"
      whileHover="hover"
      className="group relative"
    >
      <a
        href={href}
        target="_blank"
        className={cx("text-brand-300 relative text-2xl cursor-pointer")}
        onClick={onClick}
        role={onClick ? "button" : "link"}
      >
        {node}
      </a>
      <p
        className={cx(
          "absolute right-8 bottom-1/2 translate-y-1/2",
          "transition-smooth break-keep w-max",
          "text-[0.65em] text-slate-900 font-mono font-semibold pointer-events-none",
          "opacity-0 group-hover:opacity-100",
          "scale-0 group-hover:scale-100 origin-right",
          "bg-brand-50/50 backdrop-blur-sm p-2 rounded-md"
        )}
      >
        {text}
      </p>
    </motion.li>
  );
}
