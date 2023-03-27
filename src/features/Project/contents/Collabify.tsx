import { ProjectImage } from "../ProjectImage";
import { ProjectLayout } from "../ProjectLayout";
import { ProjectProps } from "../types";
import cx from "classnames";
import { BsGithub } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { ProjectCard } from "../ProjectCard";

export function Collabify(props: ProjectProps) {
  return (
    <ProjectCard {...props}>
      Collabify is an app for scheduling and event planning. It lets users share
      their availability and receive text notifications. Private groups are
      available with password protection, and authentication is done with JSON
      Web Token.
    </ProjectCard>
  );
}
