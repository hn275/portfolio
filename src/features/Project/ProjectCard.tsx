import { BsGithub } from "react-icons/bs";
import cx from "classnames";
import { motion } from "framer-motion";
import { MdOutlineComputer } from "react-icons/md";
import { Link } from "./Link";

export interface ProjectProps {
  title: string;
  stacks: string[];
  github: string | null;
  liveSite?: string | null;
  imageSrc: string;
  fromLeft: boolean;
  tags: string[];
}

export function ProjectCard({
  title,
  stacks,
  github,
  liveSite,
  imageSrc,
  fromLeft,
  tags,
}: ProjectProps) {
  return <motion.section></motion.section>;
}
