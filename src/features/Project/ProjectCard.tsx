import { ProjectImage } from "./ProjectImage";
import { ProjectProps } from "./types";
import cx from "classnames";
import { BsGithub } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props extends ProjectProps {
  children: ReactNode;
  className?: string;
}

export function ProjectCard(props: Props) {
  const {
    imageSrc,
    title,
    liveSite,
    fromLeft,
    stacks,
    github,
    tags,
    children,
    className,
  } = props;

  const cardVars: Variants = {
    hidden: { x: fromLeft ? -40 : 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const underlineVars: Variants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { delay: 0.2 } },
  };

  return (
    <motion.section
      viewport={{ once: true }}
      variants={cardVars}
      initial="hidden"
      whileInView="visible"
      className={cx([
        "lg:px-10 lg:gap-0",
        "grid lg:grid-cols-[60%,1fr] relative rounded-md overflow-hidden",
        className,
      ])}
    >
      <ProjectImage
        src={imageSrc}
        className={cx([
          "aspect-auto h-[480px] w-full lg:h-full object-cover rounded-lg lg:rounded-md",
          "lg:rounded-tr-none lg:rounded-br-none",
        ])}
      />
      <motion.section
        className={cx([
          "absolute h-full w-full/2 lg:h-auto lg:relative",
          "rounded-none lg:rounded-md",
          "flex flex-col gap-3 p-5",
          "lg:rounded-tl-none lg:rounded-bl-none",
          "bg-gradient-to-b from-slate-800/90 to-slate-800/100 lg:bg-slate-800",
          "shadow-lg shadow-black/30",
        ])}
      >
        <div className="flex justify-between items-center">
          <h2
            className={cx([
              "text-white font-bold text-xl relative w-max isolate",
            ])}
          >
            <motion.span
              variants={underlineVars}
              className="absolute bottom-[2px] left-0 h-2 w-full bg-brand-50/60 -z-10 rounded-sm"
            />
            {title}
          </h2>

          <div className="flex gap-3 items-center">
            {github && (
              <a className="link-icon" href={github} target="_blank">
                <BsGithub title={github} className="" />
              </a>
            )}
            {liveSite && (
              <a className="link-icon" href={liveSite} target="_blank">
                <MdOutlineComputer title={liveSite} className="" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-400">{stacks.join(", ")}</p>

        <div className="flex flex-col gap-1 text-slate-300 overflow-y-scroll h-full">
          {children}
        </div>

        <p className="text-slate-400 text-sm p-3 bg-slate-900 w-max rounded-md">
          {tags.join(" ")}
        </p>
      </motion.section>
    </motion.section>
  );
}
