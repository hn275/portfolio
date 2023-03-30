import { ProjectImage } from "./ProjectImage";
import { ProjectProps } from "./types";
import cx from "classnames";
import { BsGithub } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SlideIn } from "layout";
import { AnimatedUnderline } from "components";

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
    children,
    className,
  } = props;
  return (
    <SlideIn
      fromLeft={fromLeft}
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
          "overflow-y-hidden",
        ])}
      >
        <motion.h2
          className={cx([
            "text-white font-bold text-lg md:text-xl relative w-max isolate",
          ])}
        >
          <AnimatedUnderline h={9}>{title}</AnimatedUnderline>
        </motion.h2>

        <p className="text-sm text-slate-400">{stacks.join(", ")}</p>

        <div className="flex flex-col gap-1 text-slate-300 overflow-y-hidden overflow-x-hidden h-full">
          {children}
        </div>

        <div className="flex gap-3 items-center justify-end">
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
      </motion.section>
    </SlideIn>
  );
}
