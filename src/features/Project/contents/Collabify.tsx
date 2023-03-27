import { ProjectImage } from "../ProjectImage";
import { ProjectLayout } from "../ProjectLayout";
import { ProjectProps } from "../types";
import cx from "classnames";
import { BsGithub } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";

export function Collabify(props: ProjectProps) {
  const { imageSrc, title, liveSite, fromLeft, stacks, github, tags } = props;
  return (
    <ProjectLayout>
      <ProjectImage
        src={imageSrc}
        className={cx([
          "aspect-auto h-[400px] w-full lg:h-full object-cover rounded-sm lg:rounded-md",
          {
            "lg:rounded-tr-none lg:rounded-br-none": fromLeft,
            "lg:rounded-tl-none lg:rounded-bl-none": !fromLeft,
          },
        ])}
      />
      <section
        className={cx([
          "absolute lg:relative",
          "project-card rounded-none lg:rounded-md lg:h-auto",
          "flex flex-col gap-3",
          { "lg:rounded-tl-none lg:rounded-bl-none": fromLeft },
          { "lg:rounded-tr-none lg:rounded-br-none": !fromLeft },
        ])}
      >
        <div className="flex justify-between items-center">
          <h2
            className={cx([
              "text-white font-bold text-xl relative w-max isolate",
            ])}
          >
            <span className="absolute bottom-[2px] left-0 h-2 w-full bg-brand-50/60 -z-10" />
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

        <p className="flex flex-col gap-1 text-slate-300">
          Collabify is an app for scheduling and event planning. It lets users
          share their availability and receive text notifications. Private
          groups are available with password protection, and authentication is
          done with JSON Web Token
        </p>

        <p className="text-slate-400 text-sm p-3 bg-slate-900 w-max rounded-md">
          {tags.join(" ")}
        </p>
      </section>
    </ProjectLayout>
  );
}
